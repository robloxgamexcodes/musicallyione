/**
 * i18n utility functions for MusicallyDown.
 *
 * Usage in .astro components:
 *   import { getLangFromUrl, useTranslations, getLocalizedPath } from '../i18n/utils';
 *   const lang = getLangFromUrl(Astro.url);
 *   const t = useTranslations(lang);
 *   const localPath = getLocalizedPath(lang, '/about');
 */

import { ui, languages, defaultLang, type Lang } from './ui';

/**
 * Which pages exist for each language.
 *  - 'all'      -> the language mirrors the whole site (en)
 *  - string[]   -> only these paths exist in that language (es)
 * Links to other pages in a limited language fall back to the English page, and
 * hreflang / language-picker entries are only generated where a page really exists.
 * When you add /es/about, add '/about' to the es list.
 */
export const LOCALE_PAGES: Record<Lang, 'all' | string[]> = {
  en: 'all',
  // es has no localized About / Privacy / Terms yet: those links fall back to English.
  es: ['/', '/download-tiktok-stories', '/tiktok-mp3', '/contact', '/blog', '/blog/using-musicallydown'],
  // id / vi: only the pages that exist. The English-only intent pages (src/i18n/intent-pages.ts) are
  // deliberately NOT listed so hreflang never points at a missing URL. Add each path when you translate it.
  id: ['/', '/about', '/blog', '/blog/using-musicallydown', '/contact', '/download-tiktok-stories', '/privacy', '/terms', '/tiktok-mp3'],
  vi: ['/', '/about', '/blog', '/blog/using-musicallydown', '/contact', '/download-tiktok-stories', '/privacy', '/terms', '/tiktok-mp3'],
};

/**
 * hreflang + Open Graph codes per language.
 * hreflang is language-only on purpose (es also serves Mexico, Argentina, Colombia, ...);
 * Open Graph keeps full locale codes.
 */
export const localeMeta: Record<Lang, { hreflang: string; og: string }> = {
  en: { hreflang: 'en', og: 'en_US' },
  es: { hreflang: 'es', og: 'es_ES' },
  id: { hreflang: 'id', og: 'id_ID' },
  vi: { hreflang: 'vi', og: 'vi_VN' },
};

const nonDefaultLangs = (Object.keys(languages) as Lang[]).filter((l) => l !== defaultLang);
const localePrefix = new RegExp(`^/(${nonDefaultLangs.join('|')})(?=/|$)`);

/** '/about/' -> '/about', '/' stays '/' */
function normalizePath(path: string): string {
  const base = path.split(/[?#]/)[0] || '/';
  return base.length > 1 ? base.replace(/\/+$/, '') : base;
}

function hasPage(lang: Lang, path: string): boolean {
  const pages = LOCALE_PAGES[lang];
  return pages === 'all' || pages.includes(normalizePath(path));
}

/**
 * Extract the current language from the URL pathname.
 * Returns 'es' for /es/..., 'id' for /id/..., otherwise returns 'en'.
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/**
 * Returns a translation function for the given language.
 * Falls back to defaultLang if a key is missing.
 */
export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (ui[lang] as Record<string, string>)?.[key] ?? ui[defaultLang][key];
  };
}

/** Force the trailing-slash form used by canonicals, hreflang and the sitemap. Keeps any #fragment. */
const slash = (p: string): string => {
  const [base, frag] = p.split('#');
  const b = base.endsWith('/') ? base : base + '/';
  return frag !== undefined ? `${b}#${frag}` : b;
};

/**
 * Generate a localized path (always with a trailing slash).
 * - For 'en' (default): returns the path as-is (e.g. '/about/')
 * - For other languages: prepends /<lang> (e.g. '/es/about/')
 * - If that language has no such page yet, the English path is returned instead.
 */
export function getLocalizedPath(lang: Lang, path: string): string {
  if (lang === defaultLang || !hasPage(lang, path)) return slash(path);
  return slash(`/${lang}${path}`);
}

/**
 * Get the alternate language paths for hreflang tags and the language picker.
 * Only languages that actually have this page are returned (English always first).
 */
export function getAlternateLocales(currentPath: string): { lang: Lang; href: string }[] {
  // Strip any existing locale prefix
  let cleanPath = currentPath.replace(localePrefix, '') || '/';
  // The 404 page is rendered for any missing URL, so offer each language's home page instead.
  if (/^\/404\/?$/.test(cleanPath)) cleanPath = '/';

  // Always use the trailing-slash form so hreflang matches the canonical and the sitemap
  // (otherwise '/es' and '/es/' are both seen as "pages for the same language").
  const withSlash = (p: string) => (p.endsWith('/') ? p : `${p}/`);

  return (Object.keys(languages) as Lang[])
    .filter((lang) => hasPage(lang, cleanPath))
    .map((lang) => ({
      lang,
      href: withSlash(
        lang === defaultLang ? cleanPath : `/${lang}${cleanPath === '/' ? '' : cleanPath}`
      ),
    }));
}