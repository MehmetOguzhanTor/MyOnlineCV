import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mehmetoguzhantor.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
    routing: { prefixDefaultLocale: false },
  },
});
