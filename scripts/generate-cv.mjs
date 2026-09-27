// Prints the built /cv/[lang] pages to PDF with Playwright/Chromium.
// Runs after `astro build`, serving the static dist/ output over a local
// HTTP server so Chromium can request its assets (fonts, CSS) like a browser.
import { createServer } from 'node:http';
import { readFile, mkdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const cvOutDir = path.join(distDir, 'cv');

const CONTENT_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.json': 'application/json; charset=utf-8',
};

function contentTypeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return CONTENT_TYPES[ext] || 'application/octet-stream';
}

async function resolveFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  let filePath = path.join(distDir, decoded);

  // Directory-style paths (e.g. /cv/en/) resolve to their index.html.
  try {
    const stats = await stat(filePath);
    if (stats.isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }
  } catch {
    // Not a file/directory as-is; try appending index.html (trailing slash omitted).
    if (!path.extname(filePath)) {
      filePath = path.join(filePath, 'index.html');
    }
  }

  return filePath;
}

function startServer() {
  const server = createServer(async (req, res) => {
    try {
      const filePath = await resolveFile(req.url ?? '/');
      const body = await readFile(filePath);
      res.writeHead(200, { 'Content-Type': contentTypeFor(filePath) });
      res.end(body);
    } catch (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
    }
  });

  return new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

const LANGS = [
  { lang: 'en', outFile: 'Valentin_Osorio_CV_EN.pdf' },
  { lang: 'es', outFile: 'Valentin_Osorio_CV_ES.pdf' },
];

async function main() {
  const server = await startServer();
  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;

  await mkdir(cvOutDir, { recursive: true });

  const browser = await chromium.launch();
  try {
    for (const { lang, outFile } of LANGS) {
      const page = await browser.newPage();
      const response = await page.goto(`${baseUrl}/cv/${lang}/`, { waitUntil: 'networkidle' });
      if (!response || !response.ok()) {
        throw new Error(`Failed to load /cv/${lang}/: ${response ? response.status() : 'no response'}`);
      }
      await page.evaluate(() => document.fonts.ready);

      const outPath = path.join(cvOutDir, outFile);
      const pdfBuffer = await page.pdf({ preferCSSPageSize: true, printBackground: true });
      await writeFile(outPath, pdfBuffer);
      await page.close();

      const pageCount = countPdfPages(pdfBuffer);
      if (pageCount > 1) {
        console.warn(`WARNING: ${outFile} has ${pageCount} pages; expected a single page.`);
      }

      const sizeKb = (pdfBuffer.length / 1024).toFixed(1);
      console.log(`Generated ${path.relative(rootDir, outPath)} (${sizeKb} KB, ${pageCount} page${pageCount === 1 ? '' : 's'})`);
    }
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
}

/** Counts pages in a PDF buffer by counting `/Type /Page` object occurrences. */
function countPdfPages(buffer) {
  const text = buffer.toString('latin1');
  const matches = text.match(/\/Type\s*\/Page[^s]/g);
  return matches ? matches.length : 0;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
