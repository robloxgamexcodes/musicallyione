/**
 * JSON-LD node builders shared by BaseLayout (Organization) and the home pages
 * (Organization + WebSite + WebApplication in one linked @graph).
 * Nodes reference each other through stable @id values.
 */
import { SITE, SITE_LASTMOD, SITE_PUBLISHED } from './site';

type Node = Record<string, unknown>;

export const orgId = (siteUrl: string = SITE.url) => `${siteUrl}/#org`;

/** Home URL of a language version, with trailing slash: https://x/ , https://x/es/ */
export const homeUrl = (siteUrl: string, lang: string) =>
  lang === 'en' ? `${siteUrl}/` : `${siteUrl}/${lang}/`;

export function organizationNode(opts: { siteUrl: string; description?: string; lang?: string }): Node {
  const { siteUrl, description, lang = 'en' } = opts;
  const node: Node = {
    '@type': 'Organization',
    '@id': orgId(siteUrl),
    name: SITE.name,
    legalName: SITE.name,
    alternateName: [...SITE.alternateNames],
    url: `${siteUrl}/`,
    logo: { '@type': 'ImageObject', url: `${siteUrl}${SITE.logoPath}`, width: 180, height: 180 },
    image: `${siteUrl}${SITE.ogImage.path}`,
    email: SITE.supportEmail,
    knowsLanguage: [...SITE.languages],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: SITE.supportEmail,
      url: lang === 'en' ? `${siteUrl}/contact/` : `${siteUrl}/${lang}/contact/`,
      availableLanguage: [...SITE.languages],
    },
  };
  if (description) node.description = description;
  if (SITE.sameAs.length) node.sameAs = [...SITE.sameAs];
  return node;
}

export function webSiteNode(opts: { siteUrl: string; lang: string; description?: string }): Node {
  const { siteUrl, lang, description } = opts;
  const url = homeUrl(siteUrl, lang);
  const node: Node = {
    '@type': 'WebSite',
    '@id': `${url}#website`,
    url,
    name: SITE.name,
    alternateName: [...SITE.alternateNames],
    publisher: { '@id': orgId(siteUrl) },
    inLanguage: lang,
  };
  if (description) node.description = description;
  return node;
}

export function webApplicationNode(opts: {
  siteUrl: string;
  lang: string;
  description?: string;
}): Node {
  const { siteUrl, lang, description } = opts;
  const url = homeUrl(siteUrl, lang);
  const node: Node = {
    '@type': 'WebApplication',
    '@id': `${url}#webapp`,
    name: `${SITE.name} TikTok Downloader`,
    url,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    publisher: { '@id': orgId(siteUrl) },
    inLanguage: lang,
  };
  if (description) node.description = description;
  return node;
}

export const graph = (nodes: Node[]): Node => ({ '@context': 'https://schema.org', '@graph': nodes });

/**
 * Article node for the guide / landing pages (tiktok-mp3, stories, intent pages).
 * Credited to the Organization (no invented author); dates come from SITE_PUBLISHED / SITE_LASTMOD.
 */
export function articleNode(opts: {
  siteUrl: string;
  url: string;
  lang: string;
  headline: string;
  description: string;
}): Node {
  const { siteUrl, url, lang, headline, description } = opts;
  const org = { '@type': 'Organization', '@id': orgId(siteUrl), name: SITE.name, url: `${siteUrl}/` };
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
    headline: headline.length > 110 ? `${headline.slice(0, 107).trimEnd()}...` : headline,
    description,
    inLanguage: lang,
    image: [`${siteUrl}${SITE.ogImage.path}`],
    datePublished: SITE_PUBLISHED,
    dateModified: SITE_LASTMOD,
    author: org,
    publisher: { ...org, logo: { '@type': 'ImageObject', url: `${siteUrl}${SITE.logoPath}`, width: 180, height: 180 } },
  };
}
