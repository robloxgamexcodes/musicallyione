/**
 * Per-page social images.
 *
 * `scripts/generate-og.py` writes one 1200x630 PNG per indexable page into /public/og/ (file name = the
 * page path with "/" turned into "-", e.g. /es/blog/some-post/ -> es-blog-some-post.png).
 * Pages without a generated image (legal pages, 404, the English home page) fall back to the default card.
 */
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { SITE } from './site';

export interface OgImage {
  path: string;
  width: number;
  height: number;
  /** true when a page-specific image was found in /public/og/ */
  generated: boolean;
}

export const ogSlug = (pathname: string): string => {
  const clean = pathname.replace(/^\/+|\/+$/g, '');
  return clean === '' ? 'home' : clean.replace(/\//g, '-');
};

export function pageOgImage(pathname: string): OgImage {
  const slug = ogSlug(pathname);
  try {
    if (existsSync(join(process.cwd(), 'public', 'og', `${slug}.png`))) {
      return { path: `/og/${slug}.png`, width: 1200, height: 630, generated: true };
    }
  } catch {
    /* fall through to the default card */
  }
  return { path: SITE.ogImage.path, width: SITE.ogImage.width, height: SITE.ogImage.height, generated: false };
}
