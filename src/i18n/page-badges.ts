/** Hero badge rows for pages whose focus differs from the homepage (video / no watermark). */
import type { Lang } from './ui';

export const pageBadges: Record<Lang, { audio: string[]; stories: string[] }> = {
  en: {
    audio: ['TikTok to MP3', 'Audio only', 'Works on iPhone & Android', 'Free, No Sign-up'],
    stories: ['TikTok Stories', 'Public stories only', 'MP4 when available', 'Free, No Sign-up'],
  },
  es: {
    audio: ['TikTok a MP3', 'Solo audio', 'Funciona en iPhone y Android', 'Gratis, sin registro'],
    stories: ['Historias de TikTok', 'Solo historias públicas', 'MP4 si está disponible', 'Gratis, sin registro'],
  },
  id: {
    audio: ['TikTok ke MP3', 'Audio saja', 'Bisa di iPhone & Android', 'Gratis, Tanpa Daftar'],
    stories: ['Story TikTok', 'Hanya story publik', 'MP4 jika tersedia', 'Gratis, Tanpa Daftar'],
  },
  vi: {
    audio: ['TikTok sang MP3', 'Chỉ âm thanh', 'Dùng được trên iPhone & Android', 'Miễn phí, không cần đăng ký'],
    stories: ['Story TikTok', 'Chỉ story công khai', 'MP4 nếu có', 'Miễn phí, không cần đăng ký'],
  },
};
