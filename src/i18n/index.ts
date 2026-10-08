import en from './en';
import tr from './tr';

export type Lang = 'en' | 'tr';

export const dict = { en, tr };

// Languages shown in the switcher. Add `{ code: 'de', label: 'DE', href: '/de/' }`
// here (plus a de.ts file and src/pages/de/index.astro) when German is ready.
export const languages = [
  { code: 'en', label: 'EN', href: '/' },
  { code: 'tr', label: 'TR', href: '/tr/' },
] as const;
