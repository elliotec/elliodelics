// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://elliodelics.com',
  compressHTML: true,
  integrations: [sitemap()],
  vite: {
    build: {
      // never inline assets as data: URIs — the CSP pins font-src/img-src
      // to 'self', so every asset must ship as a real same-origin file
      assetsInlineLimit: 0,
    },
  },
});
