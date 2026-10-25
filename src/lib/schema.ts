/**
 * JSON-LD node builders shared by BaseLayout (Organization) and the home pages
 * (Organization + WebSite + WebApplication in one linked @graph).
 * Nodes reference each other through stable @id values.
 */
import { SITE } from './site';

type Node = Record<string, unknown>;

export const orgId = (siteUrl: string = SITE.url) => `${siteUrl}/#org`;

/** Home URL of a language version, with trailing slash: https://x/ , https://x/es/ */
export const homeUrl = (siteUrl: string, lang: string) =>
  lang === 'en' ? `${siteUrl}/` : `${siteUrl}/${lang}/`;

export function organizationNode(opts: { siteUrl: string; description?: string }): Node {
  const { siteUrl, description } = opts;
  const node: Node = {
    '@type': 'Organization',
    '@id': orgId(siteUrl),
    name: SITE.name,
    url: `${siteUrl}/`,
    logo: { '@type': 'ImageObject', url: `${siteUrl}${SITE.logoPath}`, width: 180, height: 180 },
    image: `${siteUrl}${SITE.ogImage.path}`,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: SITE.supportEmail,
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
