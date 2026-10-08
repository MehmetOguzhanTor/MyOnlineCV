import en from './en';
import tr from './tr';

export type Lang = 'en' | 'tr';

export const dict = { en, tr };

// Shape of a project card. Only title, when, text and tags are required;
// the rest show up on the card as soon as they are filled in.
export interface Project {
  when: string; // short label: a year or a category such as 'FPGA'
  title: string;
  text: string;
  tags: string[];
  result?: string; // concrete outcome, e.g. 'Completed all mission tasks autonomously'
  image?: string; // e.g. '/projects/uav.jpg' (put the file in public/projects/)
  imageAlt?: string;
  links?: { label: string; href: string }[]; // first link makes the title clickable
}

// Languages shown in the switcher. Add `{ code: 'de', label: 'DE', href: '/de/' }`
// here (plus a de.ts file and src/pages/de/index.astro) when German is ready.
export const languages = [
  { code: 'en', label: 'EN', href: '/' },
  { code: 'tr', label: 'TR', href: '/tr/' },
] as const;
