import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { execFileSync } from 'node:child_process';
import { MIN_POSTS_FOR_BLOG_INDEX } from '../lib/site';

/**
 * Custom sitemap so the output is always uniform:
 *  - <url> entries grouped by language: en, es, id, vi
 *  - same page order inside each language group ("/" first, then A-Z)
 *  - every URL has the same hreflang block: en, es, id, vi (language-only codes, only where the page exists) + x-default
 *  - trailing slash on every URL (matches canonical + <link rel="alternate" hreflang> in BaseLayout)
 *  - <lastmod> on every URL:
 *      blog posts   -> updatedDate ?? pubDate
 *      static pages -> last git commit date of the page file / src/i18n/ui.ts (where the copy lives),
 *                      falling back to the build date when git history isn't available (e.g. on Vercel)
 *  - blog index pages are left out while they are `noindex` (fewer than MIN_POSTS_FOR_BLOG_INDEX posts)
 */
const LANGS = ['en', 'es', 'id', 'vi'] as const;
type L = (typeof LANGS)[number];

const HREFLANG: Record<L, string> = { en: 'en', es: 'es', id: 'id', vi: 'vi' };

// Every static page file (dynamic [...slug] and 404 pages are skipped; blog posts come from the collection)
const pageFiles = Object.keys(import.meta.glob('/src/pages/**/*.astro'));

const day = (d: Date) => d.toISOString().slice(0, 10);
const BUILD_DATE = day(new Date());

/** Date (YYYY-MM-DD) of the last git commit touching `file`, or null if git isn't usable here. */
function gitDate(file: string): string | null {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', file.replace(/^\//, '')], {
      cwd: process.cwd(),
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return out ? out.slice(0, 10) : null;
  } catch {
    return null;
  }
}

/** Latest of the page file's and the shared copy file's last-modified dates. */
function staticLastmod(pageFile: string): string {
  const dates = [gitDate(pageFile), gitDate('/src/i18n/ui.ts')].filter((d): d is string => !!d);
  return dates.length ? dates.sort().at(-1)! : BUILD_DATE;
}

export const GET: APIRoute = async ({ site }) => {
  const base = (site ?? new URL('https://musicaldown.se')).toString().replace(/\/$/, '');

  // language-neutral path (e.g. '/blog/') -> language -> lastmod
  const pages = new Map<string, Map<L, string>>();
  const add = (lang: L, neutralPath: string, lastmod: string) => {
    if (!pages.has(neutralPath)) pages.set(neutralPath, new Map());
    pages.get(neutralPath)!.set(lang, lastmod);
  };
  const withSlash = (p: string) => (p.endsWith('/') ? p : `${p}/`);

  // Blog posts (src/content/blog/<lang>/<slug>)
  const allPosts = await getCollection('blog', ({ data }) => !data.draft);
  const postsPerLang = new Map<string, number>();
  for (const post of allPosts) {
    const lang = post.id.split('/')[0];
    postsPerLang.set(lang, (postsPerLang.get(lang) ?? 0) + 1);
  }
  const blogIndexIndexable = (lang: L) => (postsPerLang.get(lang) ?? 0) >= MIN_POSTS_FOR_BLOG_INDEX;

  // 1) static pages
  for (const file of pageFiles) {
    let route = file.replace('/src/pages', '').replace(/\.astro$/, '');
    if (route.includes('[') || /(^|\/)404$/.test(route)) continue;
    route = route.replace(/\/index$/, '') || '/';

    const [, first, ...rest] = route.split('/');
    const lang: L = (LANGS as readonly string[]).includes(first) && first !== 'en' ? (first as L) : 'en';
    const neutral = withSlash(lang === 'en' ? route : '/' + rest.join('/'));
    if (neutral === '/blog/' && !blogIndexIndexable(lang)) continue; // noindex while the blog is thin
    add(lang, neutral, staticLastmod(file));
  }

  // 2) blog posts: lastmod = updatedDate ?? pubDate
  for (const post of allPosts.filter((p) => !p.data.noindex)) {
    const [lang, ...slug] = post.id.split('/');
    if (!(LANGS as readonly string[]).includes(lang)) continue;
    add(lang as L, `/blog/${slug.join('/')}/`, day(post.data.updatedDate ?? post.data.pubDate));
  }

  const urlFor = (lang: L, neutral: string) =>
    base + (lang === 'en' ? neutral : `/${lang}${neutral}`);

  // "/" first, then alphabetical
  const neutralPaths = [...pages.keys()].sort((a, b) =>
    a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)
  );

  const entries: string[] = [];
  for (const lang of LANGS) {
    for (const neutral of neutralPaths) {
      const langs = pages.get(neutral)!;
      if (!langs.has(lang)) continue;

      const links = LANGS.filter((l) => langs.has(l)).map(
        (l) =>
          `    <xhtml:link rel="alternate" hreflang="${HREFLANG[l]}" href="${urlFor(l, neutral)}"/>`
      );
      const defaultLang: L = langs.has('en') ? 'en' : LANGS.find((l) => langs.has(l))!;
      links.push(
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(defaultLang, neutral)}"/>`
      );

      entries.push(
        `  <url>\n    <loc>${urlFor(lang, neutral)}</loc>\n    <lastmod>${langs.get(lang)}</lastmod>\n${links.join('\n')}\n  </url>`
      );
    }
  }

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n` +
    entries.join('\n') +
    `\n</urlset>\n`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
