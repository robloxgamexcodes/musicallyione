/**
 * Single source of truth for site-wide identity values used by SEO markup
 * (JSON-LD, meta tags, sitemap). Keep the brand spelled "MusicallyDown" everywhere.
 */
export const SITE = {
  /** Visible brand name, used for <title>, og:site_name, schema `name`. */
  name: 'MusicallyDown',
  /** Other spellings people use. Declared in schema as `alternateName` only, never in visible copy. */
  alternateNames: ['MusicalDown', 'Musical Down'],
  url: 'https://musicaldown.se',
  /** 180×180 PNG in /public. */
  logoPath: '/logo.png',
  /** 1200×630 default social image in /public. */
  ogImage: { path: '/og-default.png', width: 1200, height: 630 },
  supportEmail: 'support@musicaldown.se',
  /** Languages the site is available in (used for Organization knowsLanguage / ContactPoint.availableLanguage). */
  languages: ['en', 'es', 'id', 'vi'],
  /**
   * Official profiles of the brand (X, YouTube, GitHub, ...). Add real URLs here and they are
   * emitted as Organization.sameAs. Leave empty until the profiles exist; never invent them.
   */
  sameAs: [] as string[], // add a profile URL here only after confirming you own it
  /**
   * OPTIONAL Organization details. Fill in ONLY real values; each one is emitted in the Organization
   * JSON-LD when set and left out when empty (never invent them).
   *   foundingDate: '2026'  or '2026-10-24'
   *   telephone:    '+1-555-000-0000'
   *   address:      { streetAddress: '...', addressLocality: '...', addressRegion: '...', postalCode: '...', addressCountry: 'US' }
   */
  foundingDate: '2026-10-24' as string, // first publish date (matches SITE_PUBLISHED). Confirm it is the real launch date.
  telephone: '' as string,
  address: null as null | {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry: string;
  },
} as const;

/** Language versions of the blog index stay `noindex` until a language has at least this many posts. */
export const MIN_POSTS_FOR_BLOG_INDEX = 5;

/** Fallback <lastmod> (YYYY-MM-DD) for static pages when git history is unavailable (Vercel). Bump when page copy changes. */
export const SITE_LASTMOD = '2026-11-09';

/** First-publish date (YYYY-MM-DD) of the guide / landing pages, used as Article.datePublished. Set it to the real launch date. */
export const SITE_PUBLISHED = '2026-10-24';