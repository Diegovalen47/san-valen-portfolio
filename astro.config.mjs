// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://sanvalenjs.netlify.app/',
	integrations: [
		tailwind(),
		sitemap({
			filter: (page) => !page.includes('/cv/'),
			i18n: {
				defaultLocale: 'es',
				locales: {
					es: 'es-ES',
					en: 'en-US'
				}
			}
		})
	],
	i18n: {
		defaultLocale: 'es',
		locales: ['es', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
