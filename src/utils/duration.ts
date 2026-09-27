export type DurationLang = 'en' | 'es';

/** First month of professional experience, used for the "+N years" copy. */
export const CAREER_START = '2022-10';

/**
 * Parses a "YYYY-MM" string into a year and a 1-based month.
 */
function parseYearMonth(value: string) {
  const [year, month] = value.split('-').map(Number);
  return { year, month };
}

/**
 * Counts months between a "YYYY-MM" start and a date, including both the
 * start and the end month (same behavior as LinkedIn: Jun 2025 - Sep 2026 = 16 months).
 */
export function monthsSince(start: string, now: Date = new Date()) {
  const { year, month } = parseYearMonth(start);
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month) + 1;
  return Math.max(months, 1);
}

/**
 * Counts months between two "YYYY-MM" values the same way as monthsSince.
 * When no end is given, the range is considered ongoing until today.
 */
export function monthsBetween(start: string, end?: string) {
  if (!end) return monthsSince(start);
  const { year, month } = parseYearMonth(end);
  return monthsSince(start, new Date(year, month - 1, 1));
}

/**
 * Rounds the elapsed time since a "YYYY-MM" start to the nearest whole year.
 */
export function yearsSince(start: string, now: Date = new Date()) {
  return Math.round(monthsSince(start, now) / 12);
}

const units = {
  en: { year: ['yr', 'yrs'], month: ['mo', 'mos'] },
  es: { year: ['año', 'años'], month: ['mes', 'meses'] },
};

/**
 * Formats a month count LinkedIn-style, e.g. "1 yr 4 mos" / "1 año 4 meses".
 */
export function formatDuration(totalMonths: number, lang: DurationLang) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const { year, month } = units[lang];
  const parts = [];
  if (years > 0) parts.push(`${years} ${year[years === 1 ? 0 : 1]}`);
  if (months > 0) parts.push(`${months} ${month[months === 1 ? 0 : 1]}`);
  return parts.join(' ');
}

/**
 * Re-computes every dynamic date rendered at build time, so the values stay
 * current between deployments of this static site.
 */
export function refreshDynamicDates(root: ParentNode = document) {
  root.querySelectorAll<HTMLElement>('[data-duration-start]').forEach((element) => {
    const { durationStart, durationLang } = element.dataset;
    if (!durationStart || (durationLang !== 'en' && durationLang !== 'es')) return;
    element.textContent = formatDuration(monthsSince(durationStart), durationLang);
  });
  root.querySelectorAll<HTMLElement>('[data-years-since]').forEach((element) => {
    const { yearsSince: start } = element.dataset;
    if (!start) return;
    element.textContent = String(yearsSince(start));
  });
}
