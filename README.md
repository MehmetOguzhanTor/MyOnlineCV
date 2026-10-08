# mehmetoguzhantor.com

Personal website of Mehmet Oğuzhan Tor, built with [Astro](https://astro.build) and deployed on Netlify (every push to `main` goes live).

## Commands

| Command           | What it does                         |
| ----------------- | ------------------------------------ |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Local dev server at `localhost:4321` |
| `npm run build`   | Build the site into `dist/`          |
| `npm run preview` | Preview the built site               |

## Where things live

- `src/i18n/en.ts`, `src/i18n/tr.ts`: all text on the site, one file per language.
- `src/components/Home.astro`: page structure.
- `src/styles/global.css`: colours (light and dark), fonts, layout.
- `public/`: photo, favicon and other static files.

To add German: copy `en.ts` to `de.ts`, register it in `src/i18n/index.ts` and `astro.config.mjs`, and add `src/pages/de/index.astro`.
