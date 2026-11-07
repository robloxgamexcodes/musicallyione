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
  if (SITE.foundingDate) node.foundingDate = SITE.foundingDate;
  if (SITE.telephone) node.telephone = SITE.telephone;
  if (SITE.address) node.address = { '@type': 'PostalAddress', ...SITE.address };
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
  /**
   * Page URL this tool node lives on. Defaults to the language home page (home graph).
   * On inner pages pass the page URL so the @id is `<page>#webapp` and does not clash with the home node.
   */
  url?: string;
  /**
   * Emit the free Offer. Keep true on the home pages only. Ahrefs (and some other crawlers)
   * classify any page carrying an Offer as a "Product" page, which is wrong for a free tool
   * page / article; use `isAccessibleForFree` instead (always emitted).
   */
  offer?: boolean;
}): Node {
  const { siteUrl, lang, description, offer = true } = opts;
  const url = opts.url ?? homeUrl(siteUrl, lang);
  const node: Node = {
    '@type': 'WebApplication',
    '@id': `${url}#webapp`,
    name: `${SITE.name} TikTok Downloader`,
    url,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    isAccessibleForFree: true,
    publisher: { '@id': orgId(siteUrl) },
    inLanguage: lang,
  };
  if (offer) node.offers = { '@type': 'Offer', price: '0', priceCurrency: 'USD' };
  if (description) node.description = description;
  return node;
}

/**
 * WebPage node for inner tool/landing pages. Ties the page to the site (isPartOf the language
 * WebSite node emitted on the home page), the brand (publisher) and its tool (about).
 */
export function webPageNode(opts: {
  siteUrl: string;
  url: string;
  lang: string;
  name: string;
  description: string;
  /** @id of the main entity on the page, e.g. the WebApplication node. */
  aboutId?: string;
}): Node {
  const { siteUrl, url, lang, name, description, aboutId } = opts;
  const node: Node = {
    '@type': 'WebPage',
    // Bare page URL on purpose: articleNode().mainEntityOfPage uses the same @id, so both merge into one WebPage.
    '@id': url,
    url,
    name,
    description,
    inLanguage: lang,
    isPartOf: { '@id': `${homeUrl(siteUrl, lang)}#website` },
    publisher: { '@id': orgId(siteUrl) },
    isAccessibleForFree: true,
    primaryImageOfPage: { '@type': 'ImageObject', url: `${siteUrl}${SITE.ogImage.path}` },
  };
  if (aboutId) {
    node.about = { '@id': aboutId };
    node.mainEntity = { '@id': aboutId };
  }
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
