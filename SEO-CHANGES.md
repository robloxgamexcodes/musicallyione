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

# Round 4 (2026-11-08): GSC-driven copy and internal links
- Search Console (last 3 months, ~12 days of data): ~99% of impressions are brand queries (musicallydown, musically down, musical down, musically download/downloader); Indonesia is ~95% of impressions; mobile is ~99%. Modifiers that appear: mp4, mp3, hd, capcut mp4, private, app.
- Homepage title/description/H1/intro rewritten in en/es/id/vi around the real name variants and the MP4 / MP3 modifiers. Indonesian uses "download" (what Indonesian searchers type). `/musically-down/` has its own title, description and H1 so it no longer competes with the homepage.
- Internal links: `src/i18n/link-hub.ts` is the single link map. `LinkCards.astro` renders a hub on the homepage and a "related tools + guides" block on every tool page, article and blog post (labels come from the target pages, so they are localized automatically). Footer now lists every tool page. Homepage intro, quality card and device cards link to the matching pages.
- Removed the four off-topic posts (16 files) that were still being built and listed in the sitemap; their 301s stay in `vercel.json`.
- `<title>` appends the brand only if the result fits in 60 characters; six long titles shortened; About and blog-index titles/descriptions fixed.

# Round 5 (2026-11-08): remaining audit items
- Kept as is on purpose: ownership of dl.tiktokiocdn.workers.dev, ad scripts / visitor-click tab / consent banner, "Featured on" badge wall, CSP, LICENSE/README notice.
- Decision (owner): KEEP the four news-style posts (DOJ, UpScrolled, ad strategy, Seal; 16 files). They stay in the blog and sitemap, with no redirects in `vercel.json`. They now also show the related tools/guides block.
- `SITE.sameAs` emptied: the three profile URLs could not be confirmed as owned. Add real URLs only after confirming them.
- Added `CollectionPage` (blog indexes, with the post list) and `ContactPage` schema via `components/seo/PageTypeSchema.astro`.
- Older localized `using-musicallydown` posts now link to localized About, Blog, Contact, Stories (and Privacy/Terms in id/vi).
- Two new posts in en/es/id/vi, chosen from Search Console modifiers: `private-tiktok-video-download` ("private") and `tiktok-video-to-capcut` ("capcut mp4"). Added to LOCALE_PAGES, the link map and the OG cards (75 cards now).
- Five shortened titles restored (es/id/vi) so every <title> is at most 60 characters.
