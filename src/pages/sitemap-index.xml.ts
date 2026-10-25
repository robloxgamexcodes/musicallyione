import type { APIRoute } from 'astro';
import { SITE_LASTMOD } from '../lib/site';

export const GET: APIRoute = ({ site }) => {
  const base = (site ?? new URL('https://musicaldown.se')).toString().replace(/\/$/, '');
  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n` +
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `  <sitemap>\n    <loc>${base}/sitemap-0.xml</loc>\n    <lastmod>${SITE_LASTMOD}</lastmod>\n  </sitemap>\n` +
    `</sitemapindex>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
