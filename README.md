# MusicallyDown

A free, browser-based TikTok video and MP3 downloader built with [Astro](https://astro.build), Tailwind CSS and Solid.

Live site: https://musicaldown.se

## Languages

English (default), Spanish (`/es/`), Indonesian (`/id/`) and Vietnamese (`/vi/`). All UI text lives in `src/i18n/ui.ts`.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
```

Requires Node.js 22.12 or newer.

## Project layout

- `src/components/downloader/` the downloader UI and `siteConfig.ts` (site name, download proxy)
- `src/pages/api/` server routes for downloading and geo detection
- `src/pages/{es,id,vi}/` localized pages
- `src/content/blog/<lang>/` blog posts (MDX); the author profile is in `src/content/authors/`

## License

MIT, see [LICENSE](LICENSE). Built on the open-source Astro SEO Theme.

## Social (Open Graph) images

Every indexable page gets its own 1200x630 card in `public/og/`, generated from the page titles in the built HTML:

```bash
npm run build                    # builds .vercel/output/static
python3 scripts/generate-og.py   # needs Python 3 + Pillow and the Inter font
npm run build                    # `src/lib/og.ts` picks the images up
```

Re-run it after adding pages or changing titles. Pages without a card (legal pages, 404, the English home page) use `public/og-default.png`.

## Crediting a real author on blog posts

Posts are credited to the site (`src/content/authors/musicallydown.json`, `type: "organization"`). To credit a person, add
`src/content/authors/<slug>.json` with `"type": "person"`, a real `name`, `role`, `bio`, optional `avatar` and `social` links,
then set `author: '<slug>'` in the post frontmatter. The byline, author box and Person/BlogPosting JSON-LD update automatically.
