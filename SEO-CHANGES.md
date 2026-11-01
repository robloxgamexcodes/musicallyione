# SEO launch fixes: what changed

Brand is "MusicallyDown" everywhere visible; the domain stays `musicaldown.se`. Other spellings exist only as schema `alternateName` (`src/lib/site.ts`).

## Fix before launch
- **Trailing slashes**: `getLocalizedPath()` always returns the slash form (fragments kept). Hard-coded links in `ui.ts`, 404 pages, BentoGrid, blog list, breadcrumbs and `llms.txt` now end in `/`.
- **Titles**: `BaseLayout` only appends the brand when the title has none (`/musical(ly)?\s?down/i`). `og:title` and `twitter:title` now equal `<title>`. Privacy/Terms titles translated for es/id/vi.
- **Structured data**: home pages emit one linked `@graph` (Organization -> WebSite + WebApplication) via `HomeSchema.astro`; `SearchAction` removed; `WebApplication` added; BreadcrumbList on mp3, stories, about, contact (`PageCrumbs.astro`).
- **Brand**: all copy, titles, header/footer logo text, blog, RSS, llms.txt, README and the OG image.

## High priority
- hreflang is language-only (`en/es/id/vi`) in `localeMeta` and the sitemap; `og:locale` unchanged. No hreflang on noindex pages.
- Inner `<main>` changed to `<div>` (about, contact, privacy, terms, 404, BlogList; all languages).
- Twitter tags use `name=`; `og:image:width/height/alt` and `twitter:image:alt` added.
- Country redirect replaced by a dismissible "Switch to Español?" banner (English home only, never redirects).
- Footer has plain `<a>` language links.
- Blog: posts are credited to the Organization (no invented person), publisher logo enabled, `inLanguage` added, breadcrumbs translated, blog index is `noindex, follow` until a language has `MIN_POSTS_FOR_BLOG_INDEX` (5) posts, and is left out of the sitemap meanwhile.
- Sitemap has `<lastmod>` (posts: `updatedDate ?? pubDate`; pages: git date, else build date). `@astrojs/sitemap` removed from `package.json` and the lockfile.

## Content and polish
- Removed the keyword line and the "fastest" claim; 4K headline now says "when available" (all languages).
- Contrast: `#ef124e` -> `#d90f45`.
- Icons: `apple-touch-icon`, `favicon-32x32.png`, `favicon.ico` added.
- Header logo SVG: `<?xml?>` removed, `role="img" aria-label="MusicallyDown"`.
- Language picker label uses `t('lang.select')`.
- Table of contents now renders on mp3 and stories pages.

## Left for you
- Confirm you own `dl.tiktokiocdn.workers.dev` (comment added in `siteConfig.ts`) and that the page copy is original.
- Tighten the CSP in `vercel.json` later.
- Add real social profile URLs to `SITE.sameAs` in `src/lib/site.ts` when they exist.
- Synthetic ad clicks / pop-ups: untouched, as requested.

# Round 2 (2026-11-01)
- `og:type` is now `website` on tiktok-mp3, download-tiktok-stories and all intent pages (all languages).
- Removed `<meta name="generator">`.
- Directory badges in the footer: `rel="nofollow noopener"`.
- Header nav now includes Blog.
- New pages in en/es/id/vi: `/dmca/` and `/disclaimer/` (text in `src/i18n/legal-extra.ts`, template `components/legal/LegalPage.astro`), linked from the footer, added to `LOCALE_PAGES`, hreflang and the sitemap. Have a lawyer review the text and a native speaker check es/id/vi.
- MP3, Stories and Sound-downloader pages have their own hero badges (`src/i18n/page-badges.ts`) so they no longer duplicate the homepage "No Watermark / HD Quality" row.
- About: es/id/vi "Independent service" text was still English; translated. All four languages now mention the "MusicalDown / Musical Down" spelling once.
- `vercel.json`: `X-Robots-Tag: noindex, nofollow` on `/api/*`.
- Ads: removed the script-generated click on the banner ad (`triggerBannerAdClick` in ResultSection.tsx, `onRef` in AdBanner.tsx). The visitor-initiated direct-link tab in InputScreen.tsx is still there; review it against your ad network's rules.
- `SITE_LASTMOD` bumped to 2026-11-01.

## Still open
- Add the real X profile URL to `SITE.sameAs` and replace the `t.co` footer link.
- Distinct OG images for mp3 / stories pages.
- Decide on third-party scripts (Ahrefs, gtag, clicks.page, kaithiunmoldy ad script in HeroSection) and consent banner for EU traffic.
- Confirm ownership of `dl.tiktokiocdn.workers.dev`; tighten the CSP.
- `instrumentation-client.ts` (Betterlytics) is not loaded by Astro: import it or delete it.
- Measure Core Web Vitals after deploy.
