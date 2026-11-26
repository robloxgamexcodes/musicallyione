/**
 * Internal-link map. One place that says which page links to which, so the whole
 * site forms hubs (homepage, brand guide) and clusters (MP3, quality, devices, ...).
 *
 * Labels and descriptions are NOT stored here: they come from the pages themselves
 * (intent labels, hero descriptions, blog post titles), so every language stays in sync.
 * Only the section headings below need translating.
 *
 * To link a new page: add its key to PATHS (or POSTS), then list it in RELATED / HUB.
 */
import type { Lang } from './ui';

export type ToolKey =
  | 'home' | 'mp3' | 'stories' | 'hd' | 'nowm' | 'sound' | 'slideshow' | 'iphone' | 'android' | 'brand' | 'app' | 'platforms';
export type PostKey =
  | 'using' | 'fixes' | 'backup' | 'song' | 'quality' | 'private' | 'capcut'
  | 'doj' | 'upscrolled' | 'ads' | 'seal';
export type HubKey = ToolKey | PostKey | 'blog';

export const TOOL_PATHS: Record<ToolKey, string> = {
  home: '/',
  mp3: '/tiktok-mp3',
  stories: '/download-tiktok-stories',
  hd: '/tiktok-video-downloader-hd',
  nowm: '/tiktok-no-watermark',
  sound: '/tiktok-sound-downloader',
  slideshow: '/tiktok-slideshow-downloader',
  iphone: '/download-tiktok-iphone',
  android: '/download-tiktok-android',
  brand: '/musically-down',
  app: '/musicallydown-app',
  platforms: '/supported-platforms',
};

export const POST_SLUGS: Record<PostKey, string> = {
  using: 'using-musicallydown',
  fixes: 'tiktok-video-not-downloading-fixes',
  backup: 'back-up-your-tiktok-videos',
  song: 'find-song-in-tiktok-video',
  quality: 'tiktok-video-quality-explained',
  private: 'private-tiktok-video-download',
  capcut: 'tiktok-video-to-capcut',
  doj: 'doj-tiktok-federal-devices-ban-no-longer-applies',
  upscrolled: 'upscrolled-downloads-surge-tiktok-us-takeover',
  ads: 'using-tiktoks-2027-ad-strategy',
  seal: 'seal-vs-ytdlnis-newpipe',
};

/** Intent slug (src/i18n/intent-pages.ts) for the tool keys that are intent pages. */
export const TOOL_INTENT_SLUG = {
  hd: 'tiktok-video-downloader-hd',
  nowm: 'tiktok-no-watermark',
  sound: 'tiktok-sound-downloader',
  slideshow: 'tiktok-slideshow-downloader',
  iphone: 'download-tiktok-iphone',
  android: 'download-tiktok-android',
  brand: 'musically-down',
  app: 'musicallydown-app',
  platforms: 'supported-platforms',
} as const;

/** Path (without language prefix, without trailing slash) -> key. */
export function keyFromPath(path: string): HubKey | undefined {
  const clean = path.replace(/^\/(es|id|vi)(?=\/|$)/, '').replace(/\/+$/, '') || '/';
  for (const [k, v] of Object.entries(TOOL_PATHS)) if (v === clean) return k as ToolKey;
  if (clean === '/blog') return 'blog';
  const m = clean.match(/^\/blog\/(.+)$/);
  if (m) for (const [k, v] of Object.entries(POST_SLUGS)) if (v === m[1]) return k as PostKey;
  return undefined;
}

export const pathForKey = (k: HubKey): string =>
  k === 'blog' ? '/blog' : k in TOOL_PATHS ? TOOL_PATHS[k as ToolKey] : `/blog/${POST_SLUGS[k as PostKey]}`;

/** Related links shown at the bottom of each page: [tools, guides]. */
export const RELATED: Partial<Record<HubKey, { tools: ToolKey[]; guides: PostKey[] }>> = {
  brand: { tools: ['home', 'mp3', 'hd', 'nowm', 'sound', 'slideshow', 'stories', 'iphone', 'android', 'app', 'platforms'], guides: ['using', 'fixes', 'private'] },
  app: { tools: ['home', 'iphone', 'android', 'mp3', 'platforms', 'brand'], guides: ['using', 'fixes'] },
  platforms: { tools: ['home', 'mp3', 'slideshow', 'stories', 'app', 'brand'], guides: ['using', 'private'] },
  mp3: { tools: ['home', 'sound', 'hd', 'nowm', 'brand'], guides: ['song', 'capcut', 'using'] },
  stories: { tools: ['home', 'nowm', 'hd', 'slideshow', 'mp3'], guides: ['backup', 'fixes', 'private'] },
  hd: { tools: ['home', 'nowm', 'iphone', 'android', 'brand'], guides: ['quality', 'capcut', 'fixes'] },
  nowm: { tools: ['home', 'hd', 'sound', 'slideshow', 'brand'], guides: ['quality', 'capcut', 'using'] },
  sound: { tools: ['home', 'mp3', 'hd', 'slideshow', 'brand'], guides: ['song', 'backup'] },
  slideshow: { tools: ['home', 'stories', 'nowm', 'sound', 'brand'], guides: ['backup', 'using'] },
  iphone: { tools: ['home', 'android', 'hd', 'mp3', 'app', 'brand'], guides: ['fixes', 'capcut', 'private'] },
  android: { tools: ['home', 'iphone', 'hd', 'mp3', 'app', 'brand'], guides: ['fixes', 'capcut', 'private'] },
  using: { tools: ['home', 'brand', 'mp3', 'nowm', 'iphone', 'android', 'app', 'platforms'], guides: ['fixes', 'quality', 'song', 'backup', 'private', 'capcut'] },
  fixes: { tools: ['home', 'iphone', 'android', 'hd', 'brand'], guides: ['using', 'private', 'quality'] },
  backup: { tools: ['home', 'stories', 'hd', 'slideshow', 'mp3'], guides: ['using', 'quality', 'private'] },
  song: { tools: ['home', 'mp3', 'sound', 'brand'], guides: ['using', 'capcut', 'fixes'] },
  quality: { tools: ['home', 'hd', 'nowm', 'iphone', 'android'], guides: ['fixes', 'capcut', 'using'] },
  private: { tools: ['home', 'brand', 'iphone', 'android', 'mp3'], guides: ['fixes', 'backup', 'using'] },
  capcut: { tools: ['home', 'hd', 'iphone', 'android', 'mp3'], guides: ['quality', 'song', 'using'] },
  // News-style posts: link to each other and to the main tools so none of them is an orphan.
  doj: { tools: ['home', 'mp3', 'hd', 'nowm', 'brand'], guides: ['upscrolled', 'ads', 'using'] },
  upscrolled: { tools: ['home', 'mp3', 'hd', 'nowm', 'brand'], guides: ['doj', 'ads', 'using'] },
  ads: { tools: ['home', 'mp3', 'hd', 'nowm', 'brand'], guides: ['doj', 'upscrolled', 'using'] },
  seal: { tools: ['home', 'iphone', 'android', 'hd', 'brand'], guides: ['fixes', 'using', 'quality'] },
  blog: { tools: ['home', 'mp3', 'stories', 'hd', 'nowm', 'brand'], guides: [] },
};

/** Homepage hub: every tool page and every guide. */
export const HUB: { tools: ToolKey[]; guides: PostKey[] } = {
  tools: ['mp3', 'hd', 'nowm', 'sound', 'stories', 'slideshow', 'iphone', 'android', 'app', 'platforms', 'brand'],
  guides: ['fixes', 'private', 'capcut', 'quality', 'song', 'backup', 'using', 'doj', 'upscrolled', 'ads', 'seal'],
};

export const HUB_TEXT: Record<Lang, {
  homeLabel: string;
  relatedTools: string;
  relatedGuides: string;
  hubTitle: string;
  hubIntro: string;
  hubGuides: string;
}> = {
  en: {
    homeLabel: 'TikTok video downloader',
    relatedTools: 'More TikTok tools',
    relatedGuides: 'Guides and troubleshooting',
    hubTitle: 'Pick the right tool for the job',
    hubIntro: 'MusicallyDown has a page for each task, from MP3 and HD to Stories and phone guides.',
    hubGuides: 'Guides and troubleshooting',
  },
  es: {
    homeLabel: 'Descargador de videos de TikTok',
    relatedTools: 'Más herramientas de TikTok',
    relatedGuides: 'Guías y solución de problemas',
    hubTitle: 'Elige la herramienta adecuada',
    hubIntro: 'MusicallyDown tiene una página para cada tarea, desde MP3 y HD hasta historias y guías para móvil.',
    hubGuides: 'Guías y solución de problemas',
  },
  id: {
    homeLabel: 'Pengunduh video TikTok',
    relatedTools: 'Alat TikTok lainnya',
    relatedGuides: 'Panduan dan solusi masalah',
    hubTitle: 'Pilih alat yang sesuai kebutuhan',
    hubIntro: 'MusicallyDown punya halaman untuk setiap kebutuhan, dari MP3 dan HD sampai Story dan panduan HP.',
    hubGuides: 'Panduan dan solusi masalah',
  },
  vi: {
    homeLabel: 'Công cụ tải video TikTok',
    relatedTools: 'Công cụ TikTok khác',
    relatedGuides: 'Hướng dẫn và khắc phục sự cố',
    hubTitle: 'Chọn công cụ phù hợp',
    hubIntro: 'MusicallyDown có một trang cho từng nhu cầu, từ MP3 và HD đến Story và hướng dẫn cho điện thoại.',
    hubGuides: 'Hướng dẫn và khắc phục sự cố',
  },
};
