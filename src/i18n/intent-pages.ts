/**
 * Intent landing pages (English). One entry per page; each page file in src/pages/ just renders
 * <IntentPage slug="..."/>. Every page targets ONE search intent with its own title, angle and FAQ.
 * Translations live in intent-pages.{es,id,vi}.ts; each language has its own src/pages/<lang>/<slug>.astro
 * and every slug is listed in LOCALE_PAGES (src/i18n/utils.ts) so hreflang and the sitemap pick them up.
 */
import type { ArticleContent, StoriesBlock } from './ui';

const p = (text: string): StoriesBlock => ({ t: 'p', text });
const h3 = (text: string): StoriesBlock => ({ t: 'h3', text });
const ul = (...items: string[]): StoriesBlock => ({ t: 'ul', items });
const steps = (...items: [string, string][]): StoriesBlock => ({
  t: 'steps',
  items: items.map(([title, text]) => ({ title, text })),
});
const callout = (text: string): StoriesBlock => ({ t: 'callout', text });

export interface IntentPage {
  /** Breadcrumb label */
  crumb: string;
  content: ArticleContent;
}

export const INTENT_SLUGS = [
  'tiktok-video-downloader-hd',
  'tiktok-no-watermark',
  'tiktok-sound-downloader',
  'tiktok-slideshow-downloader',
  'download-tiktok-iphone',
  'download-tiktok-android',
  'musically-down',
  'musicallydown-app',
  'supported-platforms',
] as const;
export type IntentSlug = (typeof INTENT_SLUGS)[number];

/** Short link labels used by the "more tools" section and the footer. */
export const INTENT_LABELS: Record<IntentSlug, string> = {
  'tiktok-video-downloader-hd': 'HD TikTok Downloader',
  'tiktok-no-watermark': 'TikTok Without Watermark',
  'tiktok-sound-downloader': 'TikTok Sound Downloader',
  'tiktok-slideshow-downloader': 'TikTok Slideshow Downloader',
  'download-tiktok-iphone': 'Download TikTok on iPhone',
  'download-tiktok-android': 'Download TikTok on Android',
  'musically-down': 'MusicallyDown Guide',
  'musicallydown-app': "MusicallyDown App / APK",
  'supported-platforms': "Supported Platforms",
};

const responsible = callout(
  '**Download responsibly.** Only save videos you created or have permission to keep, respect the creator’s rights and TikTok’s terms, and credit the original creator if you share their work with consent. MusicallyDown is an independent tool and is not affiliated with TikTok.'
);

export const INTENT_PAGES: Record<IntentSlug, IntentPage> = {
  /* ------------------------------------------------------------ HD */
  'tiktok-video-downloader-hd': {
    crumb: 'HD TikTok Downloader',
    content: {
      metaTitle: 'HD TikTok Video Downloader – Free | MusicallyDown',
      metaDescription:
        'Save public TikTok videos in the highest quality the source offers. Free HD TikTok downloader, no app and no sign-up.',
      heroTitleStart: 'HD TikTok Video Downloader:',
      heroTitleHighlight: 'Best Quality Available',
      heroDescription:
        'Paste a public TikTok link and choose the highest-resolution MP4 the video offers. Free, no sign-up.',
      intro: [
        'A TikTok that looks sharp in the app can turn soft and blocky once it is saved, especially when the file was compressed twice on the way. If you want to keep a clip for editing, a presentation or just a clean copy on your phone, the quality of the download matters.',
        'This HD TikTok downloader reads a public video link and lists the MP4 options that exist for that post. If a higher-resolution version is available, it is offered first. If it is not, you will see what the original supports instead of a promise nobody can keep.',
      ],
      tocTitle: 'In this guide',
      sections: [
        {
          id: 'what-hd-means',
          title: 'What “HD” Really Means for a TikTok Download',
          blocks: [
            p(
              'TikTok videos are usually vertical, so “HD” describes how many pixels run along the long side: 1280 for 720p, 1920 for 1080p, and more for 2K and 4K. A download can only match what the uploader published. A video recorded in 1080p and posted that way can be saved in 1080p. A 480p upload will never become 1080p, whatever a tool claims.'
            ),
            p(
              'Resolution is also not the whole picture. Bitrate, which is how much data is spent per second of video, decides whether a 1080p clip looks crisp or smeared. That is why two videos with the same resolution can look very different once saved.'
            ),
          ],
        },
        {
          id: 'how-to',
          title: 'How to Download TikTok Videos in HD',
          blocks: [
            steps(
              [
                'Copy the video link.',
                'In TikTok, open the video, tap Share, then Copy link. The account must be public, and the link must point to the individual video.',
              ],
              [
                'Paste it above and submit.',
                'The page checks the post and lists the formats available for it.',
              ],
              [
                'Pick the highest MP4 option.',
                'Choose the top quality listed, then save the file. If only one MP4 option is shown, that is the best version this tool can reach for that post.',
              ]
            ),
          ],
        },
        {
          id: 'tips',
          title: 'Tips for Getting the Cleanest Copy',
          blocks: [
            ul(
              'Download once from the original post instead of re-saving a copy that was already shared through a messaging app, which recompresses it.',
              'Prefer a good connection while the file saves, so the transfer is not interrupted.',
              'If you need a clean version for editing, ask the creator for the original file; a download can never be better than the upload.',
              'Check the saved file’s details on your device to confirm its resolution before you build a project around it.'
            ),
            responsible,
          ],
        },
      ],
      faqTitle: 'HD TikTok Downloader FAQ',
      faq: [
        { question: 'Can I download TikTok in 4K?', answer: 'Only when the original upload is 4K and the post offers that version. Many videos are published at 720p or 1080p, and those cannot be upgraded.' },
        { question: 'Why does my saved video look worse than in the app?', answer: 'The app may stream an optimised version, and apps like WhatsApp or Instagram recompress files again when you share them. Download straight from the post and avoid re-sharing the file before you check it.' },
        { question: 'Is the HD download free?', answer: 'Yes. There is no sign-up, no subscription and no app to install.' },
        { question: 'Does it work for private videos?', answer: 'No. Only public videos can be read. Private, deleted or region-restricted posts may not load.' },
        { question: 'Where is the file saved?', answer: 'In your browser’s download location. On a phone, see the guides for [iPhone](/download-tiktok-iphone) and [Android](/download-tiktok-android).' },
      ],
      finalTitle: 'Save TikTok Videos in the Best Quality Available',
      finalText: 'Paste a public link, pick the highest MP4 option shown and keep a clean copy. For audio only, use the [TikTok to MP3 converter](/tiktok-mp3).',
      ctaLabel: 'Paste a TikTok link',
      moreText: 'Prefer a clean copy? See [TikTok without watermark](/tiktok-no-watermark).',
    },
  },

  /* ------------------------------------------------------------ NO WATERMARK */
  'tiktok-no-watermark': {
    crumb: 'TikTok Without Watermark',
    content: {
      metaTitle: 'TikTok Downloader No Watermark – Free | MusicallyDown',
      metaDescription:
        'Save public TikTok videos without the moving logo when a clean version is available. Free no-watermark TikTok downloader, no app, no sign-up.',
      heroTitleStart: 'TikTok Downloader',
      heroTitleHighlight: 'Without Watermark',
      heroDescription:
        'Paste a public TikTok link and save the clean version of the video when the post offers one. Free, no sign-up.',
      intro: [
        'The bouncing TikTok logo and username that appear on saved videos are fine for a quick share, but they get in the way when you reuse a clip in your own edit, a presentation or a reaction video. A clean copy is what most people are looking for.',
        'This page checks a public TikTok link and shows a watermark-free MP4 when one is available for that post. You paste the link, pick the option, and the file saves to your device.',
      ],
      tocTitle: 'In this guide',
      sections: [
        {
          id: 'why',
          title: 'Why TikTok Videos Carry a Watermark',
          blocks: [
            p(
              'When you use the in-app Save button, TikTok adds an animated logo and the creator’s handle. It works as credit for the original creator and as branding for the platform. Removing it is a different matter from simply choosing a different download source: a tool can only offer a clean file if one exists for that post.'
            ),
            p(
              'That is why availability varies. Some posts offer a clean version, and some do not. Where it is missing, the honest answer is that it is missing, not that a hidden trick will always work.'
            ),
          ],
        },
        {
          id: 'how-to',
          title: 'How to Save a TikTok Without the Watermark',
          blocks: [
            steps(
              ['Copy the link.', 'Open the TikTok, tap Share, then Copy link. The video must be public.'],
              ['Paste and submit.', 'Drop the link into the box at the top of this page and wait a few seconds.'],
              ['Choose the clean MP4.', 'If a no-watermark option is listed, pick it and save. If it is not offered, the original version is the one to use.']
            ),
          ],
        },
        {
          id: 'credit',
          title: 'Crediting the Creator Properly',
          blocks: [
            p(
              'A clean video does not mean the clip is yours to use however you like. If you reuse someone’s work, ask for permission and name the creator in your post, description or credits. Many creators say yes to a polite request, and giving credit protects you from takedowns.'
            ),
            ul(
              'Ask the creator before using their clip commercially.',
              'Mention their handle wherever you publish it.',
              'Do not present someone else’s video as your own.'
            ),
            responsible,
          ],
        },
      ],
      faqTitle: 'No-Watermark TikTok FAQ',
      faq: [
        { question: 'Is every TikTok available without a watermark?', answer: 'No. A clean version exists for many public posts but not all, and availability can change. If it is not listed, the watermarked version may be the only one.' },
        { question: 'Is it legal to remove the watermark?', answer: 'Rules depend on your country and on how you use the video. Personal, permitted use is different from republishing someone else’s work. When in doubt, ask the creator and read TikTok’s terms.' },
        { question: 'Does a no-watermark file lose quality?', answer: 'Not by itself. Quality depends on the version the post offers. See the [HD guide](/tiktok-video-downloader-hd).' },
        { question: 'Do I need an account?', answer: 'No. You never enter your TikTok password here.' },
        { question: 'Can I get just the sound?', answer: 'Yes, use the [TikTok to MP3 converter](/tiktok-mp3).' },
      ],
      finalTitle: 'A Clean Copy, With Credit Where It Is Due',
      finalText: 'Paste a public link, choose the clean MP4 when it is shown, and give the creator credit if you share it.',
      ctaLabel: 'Paste a TikTok link',
      moreText: 'Need it on a phone? See [iPhone](/download-tiktok-iphone) or [Android](/download-tiktok-android).',
    },
  },

  /* ------------------------------------------------------------ SOUND */
  'tiktok-sound-downloader': {
    crumb: 'TikTok Sound Downloader',
    content: {
      metaTitle: 'TikTok Sound Downloader – Free | MusicallyDown',
      metaDescription:
        'Save the sound from a public TikTok video as an audio file. Free TikTok sound downloader, no app, no sign-up. Works on iPhone, Android and desktop.',
      heroTitleStart: 'TikTok Sound Downloader:',
      heroTitleHighlight: 'Save the Audio Only',
      heroDescription:
        'Paste a public TikTok link and save its sound as a standalone audio file when the post offers one. Free, no sign-up.',
      intro: [
        'TikTok sounds travel fast: a voiceover, a remix or a trending clip appears everywhere for a week. Saving the sound itself is a different job from saving the video, and it needs a tool that hands you a clean audio file rather than a clip with picture attached.',
        'This TikTok sound downloader reads a public video link and, when audio is available, lets you save just the sound. Use it to keep a snippet for reference, identify a song, or build your own sound library.',
        "This page is about the sound itself: the original sound or music track used in a video. To convert a whole video into an MP3 file, use [TikTok to MP3](/tiktok-mp3). To identify a song, see [how to find a song in a TikTok video](/blog/find-song-in-tiktok-video).",
      ],
      tocTitle: 'In this guide',
      sections: [
        {
          id: 'sound-vs-song',
          title: 'A TikTok Sound Is Not Always the Full Song',
          blocks: [
            p(
              'Most TikTok sounds are short excerpts, edits or remixes. The file you save is that excerpt, so do not expect a complete track. If you like what you hear, use the saved clip to find the original song and then get the full version from a licensed music service.'
            ),
            p(
              'Original sounds, such as voiceovers or recorded audio, are different: they are exactly the audio from the video, and the saved file contains all of it.'
            ),
          ],
        },
        {
          id: 'how-to',
          title: 'How to Download a TikTok Sound',
          blocks: [
            steps(
              ['Copy the video link.', 'Open the video that uses the sound, tap Share, then Copy link.'],
              ['Paste it into the box above.', 'Submit the link and wait for the options to load.'],
              ['Pick the audio option.', 'If an audio or MP3 button appears, tap it to save the file. If none is shown, that post may not offer audio separately.']
            ),
            p('For a longer walk-through of the audio format itself, read the [TikTok to MP3 guide](/tiktok-mp3).'),
          ],
        },
        {
          id: 'ideas',
          title: 'What People Do With Saved Sounds',
          blocks: [
            ul(
              'Listen offline on a commute or flight.',
              'Reference a sound while planning your own video.',
              'Use a short clip as a ringtone or notification tone.',
              'Keep a voiceover separate from its video.',
              'Play a snippet repeatedly to work out a song title.'
            ),
            responsible,
          ],
        },
      ],
      faqTitle: 'TikTok Sound Downloader FAQ',
      faq: [
        { question: 'Can I download any TikTok sound?', answer: 'Only sounds attached to public videos, and only when audio is offered for that post. Private or removed videos cannot be read.' },
        { question: 'What audio quality will I get?', answer: 'The quality the original post carried. A converter cannot add detail that was never there.' },
        { question: 'Can I use a saved sound in my own videos?', answer: 'Not automatically. Music and recordings can be protected by copyright. Check the licence, or use TikTok’s own sounds inside the app.' },
        { question: 'Does it save the video too?', answer: 'No. Choose the audio option and you get the sound only.' },
        { question: 'Is it free?', answer: 'Yes, with no sign-up and nothing to install.' },
      ],
      finalTitle: 'Keep the Sound, Skip the Video',
      finalText: 'Paste a public link, choose audio when it is offered, and save the clip. Then find the full song through a licensed service if you want the whole track.',
      ctaLabel: 'Paste a TikTok link',
      moreText: 'Prefer the full video? See the [HD downloader](/tiktok-video-downloader-hd).',
    },
  },

  /* ------------------------------------------------------------ SLIDESHOW */
  'tiktok-slideshow-downloader': {
    crumb: 'TikTok Slideshow Downloader',
    content: {
      metaTitle: 'TikTok Slideshow Downloader – Free | MusicallyDown',
      metaDescription:
        'Save public TikTok photo slideshows and carousels. Paste the link and download the images or the slideshow file when available. Free, no sign-up.',
      heroTitleStart: 'TikTok Slideshow Downloader:',
      heroTitleHighlight: 'Save Photo Posts',
      heroDescription:
        'Paste a public TikTok photo post or slideshow link and save the images or the slideshow when available. Free, no sign-up.',
      intro: [
        'Not every TikTok is a video. Photo posts and slideshows swipe through still images with music, and people save them for recipes, outfit ideas, travel lists and reference boards. They are saved differently from normal videos, which is why a plain video downloader sometimes comes up empty.',
        'This page reads the link of a public photo post and shows the download options that exist for it. Depending on the post, that may be the individual images, a slideshow video, or both.',
      ],
      tocTitle: 'In this guide',
      sections: [
        {
          id: 'what-is',
          title: 'What Is a TikTok Slideshow or Photo Post?',
          blocks: [
            p(
              'A photo post is a set of still images in a swipeable carousel, usually with a sound playing in the background. TikTok treats it as its own kind of post, separate from a video. A slideshow video is similar, but the images are already rendered as a clip.'
            ),
            p(
              'What you can save therefore depends on the post. Some offer the original images, some offer a rendered slideshow, and some may offer only the audio.'
            ),
          ],
        },
        {
          id: 'how-to',
          title: 'How to Download a TikTok Slideshow',
          blocks: [
            steps(
              ['Copy the post link.', 'Open the photo post, tap Share, then Copy link.'],
              ['Paste it above and submit.', 'Wait a few seconds while the page reads the post.'],
              ['Choose what to save.', 'Pick the images or the slideshow file if they are listed. If the post offers no download option, it cannot be saved from this page.']
            ),
          ],
        },
        {
          id: 'tips',
          title: 'Tips for Saving Photo Posts',
          blocks: [
            ul(
              'Save the images when you want to reuse single pictures for a mood board.',
              'Save the slideshow file when you want the timing and sound kept together.',
              'Use the audio option if you only want the music, see the [sound downloader](/tiktok-sound-downloader).',
              'Check that the images belong to the creator you plan to credit.'
            ),
            responsible,
          ],
        },
      ],
      faqTitle: 'TikTok Slideshow FAQ',
      faq: [
        { question: 'Why does a normal video link not work for photo posts?', answer: 'Photo posts are stored differently from videos, so the downloader has to read them as images and audio rather than as one video file.' },
        { question: 'Can I get the original-size images?', answer: 'Only at the size the post provides. A saved image cannot be larger than the uploaded one.' },
        { question: 'Can I save the music from a slideshow?', answer: 'Often, when audio is offered for that post. See the [TikTok to MP3 converter](/tiktok-mp3).' },
        { question: 'Does it work on a phone?', answer: 'Yes, see the guides for [iPhone](/download-tiktok-iphone) and [Android](/download-tiktok-android).' },
        { question: 'Is it free?', answer: 'Yes, with no account and no app.' },
      ],
      finalTitle: 'Keep the Photos and the Sound',
      finalText: 'Paste a public photo post link, then choose images, slideshow or audio from whatever the post offers.',
      ctaLabel: 'Paste a TikTok link',
      moreText: 'Looking for short-lived posts? See the [TikTok Story downloader](/download-tiktok-stories).',
    },
  },

  /* ------------------------------------------------------------ IPHONE */
  'download-tiktok-iphone': {
    crumb: 'Download TikTok on iPhone',
    content: {
      metaTitle: 'Download TikTok Videos on iPhone | MusicallyDown',
      metaDescription:
        'How to save public TikTok videos on iPhone with Safari, no app needed. Find the file in Downloads and move it to Photos. Free, step by step.',
      heroTitleStart: 'Download TikTok Videos',
      heroTitleHighlight: 'on iPhone',
      heroDescription:
        'Paste a public TikTok link in Safari, save the MP4 and move it to Photos. No app, no sign-up.',
      intro: [
        'On an iPhone, saving a TikTok is less obvious than on a computer. The file does not land in your camera roll by default, and many people give up after the download seems to vanish. In fact it is saved, just somewhere else.',
        'This guide shows the whole route with Safari: copy the link, paste it here, save the video, and then move it into Photos if you want it in your gallery.',
      ],
      tocTitle: 'In this guide',
      sections: [
        {
          id: 'steps',
          title: 'Save a TikTok on iPhone in Five Steps',
          blocks: [
            steps(
              ['Copy the link in TikTok.', 'Open the video, tap Share, then Copy link.'],
              ['Open this page in Safari.', 'Safari handles downloads most reliably on iPhone. Other browsers can behave differently.'],
              ['Paste the link and submit.', 'Tap the box above, paste, and wait for the options to appear.'],
              ['Tap the MP4 option.', 'When Safari asks, confirm the download.'],
              ['Open the file and save to Photos.', 'Tap the download icon in Safari’s address bar, open the file, then tap Share and choose Save Video.']
            ),
          ],
        },
        {
          id: 'where',
          title: 'Where Did My Download Go?',
          blocks: [
            p(
              'Safari stores downloads in the Files app, in a folder named Downloads (inside iCloud Drive or On My iPhone, depending on your settings). From Files you can open the video, play it, or share it to Photos. If you cannot find it, check the download arrow in Safari’s toolbar, which lists recent files.'
            ),
          ],
        },
        {
          id: 'fixes',
          title: 'If the Download Does Not Work on iPhone',
          blocks: [
            ul(
              'Make sure the video is public and the link is complete.',
              'Update iOS: modern versions of Safari include a download manager; very old ones do not.',
              'Disable any content blocker for this page if the button does nothing.',
              'Free up storage if the save fails halfway.',
              'Try again in a few minutes in case the video was briefly unreachable.'
            ),
            responsible,
          ],
        },
      ],
      faqTitle: 'iPhone TikTok Download FAQ',
      faq: [
        { question: 'Do I need an app to download TikTok on iPhone?', answer: 'No. Safari is enough. You paste the link on this page.' },
        { question: 'Why is the video not in my Photos app?', answer: 'Safari saves files to the Files app first. Open it and use Share → Save Video to add it to Photos.' },
        { question: 'Does this work on iPad?', answer: 'Yes, the steps are the same in Safari on iPadOS.' },
        { question: 'Can I save only the audio?', answer: 'Yes, choose the audio option, or use the [TikTok to MP3 converter](/tiktok-mp3).' },
        { question: 'Is it safe to use?', answer: 'You never enter your TikTok password. Only download videos you have permission to keep.' },
      ],
      finalTitle: 'TikTok on iPhone, Without an App',
      finalText: 'Copy the link, paste it in Safari, save the file and move it to Photos if you want it in your gallery.',
      ctaLabel: 'Paste a TikTok link',
      moreText: 'On Android? See [how to download TikTok on Android](/download-tiktok-android).',
    },
  },

  /* ------------------------------------------------------------ ANDROID */
  'download-tiktok-android': {
    crumb: 'Download TikTok on Android',
    content: {
      metaTitle: 'Download TikTok Videos on Android | MusicallyDown',
      metaDescription:
        'How to save public TikTok videos on Android with Chrome, no app needed. Find the file in Downloads and your gallery. Free, step by step.',
      heroTitleStart: 'Download TikTok Videos',
      heroTitleHighlight: 'on Android',
      heroDescription:
        'Paste a public TikTok link in Chrome and save the MP4 to your phone. No app, no sign-up.',
      intro: [
        'Android makes it easy to save a file, but the exact steps depend on your browser and your phone’s brand. The video usually ends up in a Downloads folder first, and may show in your gallery only after a refresh.',
        'This guide covers the standard route with Chrome: copy the link, paste it here, save the MP4 and find it afterwards.',
      ],
      tocTitle: 'In this guide',
      sections: [
        {
          id: 'steps',
          title: 'Save a TikTok on Android in Four Steps',
          blocks: [
            steps(
              ['Copy the link in TikTok.', 'Open the video, tap Share, then Copy link.'],
              ['Open this page in Chrome.', 'Samsung Internet and Firefox also work. Use the browser you already trust.'],
              ['Paste the link and submit.', 'Tap the box above, paste, then wait for the formats to load.'],
              ['Tap the MP4 option.', 'Confirm the download if your phone asks, and the file starts saving.']
            ),
          ],
        },
        {
          id: 'where',
          title: 'Where to Find Your Downloaded Video',
          blocks: [
            p(
              'Open the Files or My Files app and go to Downloads. Many phones also add new videos to the Gallery or Google Photos automatically, though some need a moment or a manual refresh. Chrome’s download list, available in the browser menu, shows recent files and opens them with one tap.'
            ),
          ],
        },
        {
          id: 'fixes',
          title: 'If It Does Not Download on Android',
          blocks: [
            ul(
              'Confirm the video is public and the link is complete.',
              'Allow downloads for the browser if the system blocks them.',
              'Clear some storage if the file cannot be written.',
              'Turn off a data saver or ad blocker that interferes with the page.',
              'Retry after a few minutes.'
            ),
            responsible,
          ],
        },
      ],
      faqTitle: 'Android TikTok Download FAQ',
      faq: [
        { question: 'Do I need to install an APK?', answer: 'No. Never install a downloader from an unknown source. This works in your browser.' },
        { question: 'Where do Android downloads go?', answer: 'The Downloads folder, reachable from the Files app. Some phones also show them in the Gallery.' },
        { question: 'Does it work on Samsung phones?', answer: 'Yes, in Samsung Internet or Chrome. Look in My Files → Downloads.' },
        { question: 'Can I save the sound only?', answer: 'Yes, see the [TikTok sound downloader](/tiktok-sound-downloader).' },
        { question: 'Is it free?', answer: 'Yes, with no sign-up.' },
      ],
      finalTitle: 'TikTok on Android, From Your Browser',
      finalText: 'Copy the link, paste it in Chrome, save the MP4 and open it from Downloads.',
      ctaLabel: 'Paste a TikTok link',
      moreText: 'On iPhone? See [how to download TikTok on iPhone](/download-tiktok-iphone).',
    },
  },

  /* ------------------------------------------------------------ BRAND */
  'musically-down': {
    crumb: 'MusicallyDown Guide',
    content: {
      metaTitle: 'Musically Down & Musical Down: What MusicallyDown Is',
      metaDescription:
        'Searching for Musically Down, Musical Down or musicaldown? Learn what MusicallyDown is, how this TikTok downloader works and what it cannot do.',
      heroTitleStart: 'Musically Down or MusicallyDown?',
      heroTitleHighlight: ' Same Free TikTok Downloader',
      heroDescription:
        'Save public TikTok videos as MP4 or MP3 in your browser. No app, no sign-up. Here is how it works.',
      intro: [
        'People search for this tool under many spellings: MusicallyDown, Musical Down, musicaldown, Musically Down. They all mean the same thing, a browser-based way to save a public TikTok video or its sound without installing anything.',
        'This page explains where the name comes from, what the tool does, and what it does not do, so you know what to expect before you paste a link.',
      ],
      tocTitle: 'In this guide',
      sections: [
        {
          id: 'name',
          title: 'Where the Name Comes From',
          blocks: [
            p(
              'Musical.ly was a short-video app that was folded into TikTok in 2018. Downloaders built around it kept the “Musically” name, and the habit of searching for it stuck. MusicallyDown is an independent tool. It is not affiliated with, endorsed by or operated by TikTok or its parent company.'
            ),
          ],
        },
        {
          id: 'what',
          title: 'What MusicallyDown Does',
          blocks: [
            ul(
              'Reads a public TikTok video link and lists the download options available for it.',
              'Saves videos as MP4, in the highest quality the post offers. See [HD downloads](/tiktok-video-downloader-hd).',
              'Offers a clean copy without the moving logo when one exists. See [no watermark](/tiktok-no-watermark).',
              'Saves the sound as audio. See the [TikTok to MP3 converter](/tiktok-mp3).',
              'Supports [TikTok Stories](/download-tiktok-stories) and photo posts where available.',
              'Works in the browser on iPhone, Android, Windows and Mac.'
            ),
          ],
        },
        {
          id: 'not',
          title: 'What It Does Not Do',
          blocks: [
            ul(
              'It does not download private, deleted or restricted videos.',
              'It never asks for your TikTok password or login.',
              'It cannot make a video sharper than the original upload.',
              'It does not grant rights to reuse someone else’s content.'
            ),
            responsible,
          ],
        },
      ],
      faqTitle: 'MusicallyDown FAQ',
      faq: [
        { question: 'Is MusicallyDown the same as Musical Down?', answer: 'Yes. They are different spellings of the same tool.' },
        { question: 'Is MusicallyDown free?', answer: 'Yes, with no sign-up and no app.' },
        { question: 'Is it affiliated with TikTok?', answer: 'No. It is an independent tool.' },
        { question: 'Does it work on my phone?', answer: 'Yes, see the guides for [iPhone](/download-tiktok-iphone) and [Android](/download-tiktok-android).' },
        { question: 'Is it safe?', answer: 'You never share your TikTok login. Download only content you created or have permission to keep.' },
      ],
      finalTitle: 'Start With a Public TikTok Link',
      finalText: 'Paste a link at the top of the page and choose from the options shown.',
      ctaLabel: 'Paste a TikTok link',
      moreText: 'New here? Start with the [TikTok video downloader](/).',
    },
  },
  "musicallydown-app": {
    crumb: INTENT_LABELS["musicallydown-app"],
    content: {
      metaTitle: "MusicallyDown App or APK? Use the Website",
      metaDescription: "There is no MusicallyDown APK or app to install. Use the free website in any browser and stay clear of fake APK files. Safe steps for iPhone and Android.",
      heroTitleStart: "MusicallyDown App or APK?",
      heroTitleHighlight: "Use the Website Instead",
      heroDescription: "MusicallyDown works in your browser, so there is nothing to install. Paste a public TikTok link below to try it.",
      intro: ["Many people search for a MusicallyDown app, APK or Lite version. On this site MusicallyDown is a website: you open it in Safari, Chrome or any other browser, paste a public TikTok link and save the file. We do not publish an Android APK or an iOS app.", "That matters because pages that offer a file called \"MusicallyDown APK\" are not from us. This page explains why an install is unnecessary, what the risks of unknown APK files are and how to get an app-like shortcut safely."],
      tocTitle: "On this page",
      sections: [
        { id: "no-app", title: "Is there a MusicallyDown app?", blocks: [p("No. There is no official MusicallyDown APK, Lite or \"One\" app from this site. The downloader runs entirely in the browser on iPhone, Android, Windows and Mac, and it needs no account or login."), ul("Nothing to install, so nothing to update.", "No special permissions on your phone.", "The same page works on every device.")] },
        { id: "risks", title: "Why unknown APK files are risky", blocks: [p("An APK is an installer. If it comes from a random website instead of an app store, you cannot easily check what it does."), ul("It can contain malware, adware or hidden subscriptions.", "Modified (\"mod\") apps often ask for permissions they do not need.", "Installing outside the official store skips the store's safety checks.", "Some fake download pages exist only to show ads or collect data."), callout("**Already installed a file called MusicallyDown APK?** Uninstall it from your phone settings, run a scan with Google Play Protect or a trusted security app, and change any passwords you typed while it was installed.")] },
        { id: "shortcut", title: "Get an app-like shortcut without an APK", blocks: [p("Your browser can pin the website to the home screen. It opens like an app, but it is just the website."), steps(["On iPhone", "Open the site in Safari, tap Share and choose Add to Home Screen."], ["On Android", "Open the site in Chrome, tap the three-dot menu and choose Add to Home screen."], ["Then use it", "Copy a public TikTok link, open the shortcut, paste the link and download."])] },
      ],
      faqTitle: "MusicallyDown app FAQ",
      faq: [
        { question: "Is there an official MusicallyDown APK?", answer: "No. This site only exists as a website." },
        { question: "Is there a MusicallyDown Lite or One app?", answer: "Not from this site. Treat files with those names as unverified." },
        { question: "Does it work on iPhone without an app?", answer: "Yes. Use Safari. See the [iPhone guide](/download-tiktok-iphone)." },
        { question: "Does it work on Android without an APK?", answer: "Yes. Use Chrome. See the [Android guide](/download-tiktok-android)." },
        { question: "Can I save audio without an app?", answer: "Yes. Use [TikTok to MP3](/tiktok-mp3) in the browser." },
      ],
      finalTitle: "No Install Needed",
      finalText: "Paste a public TikTok link at the top of this page and choose the file you want.",
      ctaLabel: "Paste a TikTok link",
      moreText: "New here? Start with the [TikTok video downloader](/) or the [brand guide](/musically-down).",
    },
  },
  "supported-platforms": {
    crumb: INTENT_LABELS["supported-platforms"],
    content: {
      metaTitle: "MusicallyDown Supported Sites: TikTok Only",
      metaDescription: "MusicallyDown works with public TikTok links only. It does not download from YouTube, Facebook, Instagram, Threads, Pinterest or X. See what to use instead.",
      heroTitleStart: "Which Sites Does MusicallyDown Support?",
      heroTitleHighlight: "TikTok Only",
      heroDescription: "Paste a public TikTok link to save the video, audio or photos. Links from other sites are not supported.",
      intro: ["People often search for MusicallyDown together with YouTube, Facebook, Instagram, Threads, Pinterest, X or Canva. To save you a wasted click: MusicallyDown handles public TikTok links only.", "This page lists what is supported, what is not and what to do if the video you want lives on another platform."],
      tocTitle: "On this page",
      sections: [
        { id: "supported", title: "What MusicallyDown supports", blocks: [ul("Public TikTok videos (MP4) and the video's sound ([MP3](/tiktok-mp3)).", "Public TikTok photo posts and [slideshows](/tiktok-slideshow-downloader).", "Public [TikTok Stories](/download-tiktok-stories)."), p("Private, deleted or restricted TikToks cannot be loaded.")] },
        { id: "not-supported", title: "What it does not support", blocks: [ul("YouTube, Facebook, Instagram, Threads, Pinterest, X (Twitter) and Canva links.", "Any site that is not TikTok."), p("Pasting such a link will not return a file. Searches that put those names next to MusicallyDown do not describe features of this site.")] },
        { id: "alternatives", title: "If the video is on another platform", blocks: [ul("Use that platform's own save, share or download option when it has one.", "If you made the video, export it from your own account or editing app.", "If the same clip was posted on TikTok, copy the TikTok link and paste it here.", "Ask the creator for the file when you need to reuse it."), callout("**Download responsibly.** Save only videos you created or have permission to keep, and respect the rights of the creator and each platform's terms.")] },
      ],
      faqTitle: "Supported platforms FAQ",
      faq: [
        { question: "Does MusicallyDown download YouTube videos?", answer: "No. It only works with public TikTok links." },
        { question: "Can I use it for Instagram, Facebook or Threads?", answer: "No. Those links are not supported." },
        { question: "Does it support Pinterest, X or Canva?", answer: "No." },
        { question: "Which TikTok content can I save?", answer: "Public videos, the video sound as MP3, photo posts and public Stories." },
        { question: "Where do I start?", answer: "Paste a public TikTok link into the [video downloader](/)." },
      ],
      finalTitle: "TikTok Links Only",
      finalText: "Paste a public TikTok link at the top of the page to start.",
      ctaLabel: "Paste a TikTok link",
      moreText: "Need audio only? Try [TikTok to MP3](/tiktok-mp3).",
    },
  },
};

import { PAGES_ES, LABELS_ES } from './intent-pages.es';
import { PAGES_ID, LABELS_ID } from './intent-pages.id';
import { PAGES_VI, LABELS_VI } from './intent-pages.vi';

const ALL: Record<string, Record<IntentSlug, IntentPage>> = { en: INTENT_PAGES, es: PAGES_ES, id: PAGES_ID, vi: PAGES_VI };
const ALL_LABELS: Record<string, Record<IntentSlug, string>> = { en: INTENT_LABELS, es: LABELS_ES, id: LABELS_ID, vi: LABELS_VI };

/** Intent page content for a language (falls back to English). */
export const getIntentPage = (lang: string, slug: IntentSlug): IntentPage => (ALL[lang] ?? ALL.en)[slug];
/** Short link labels for a language (footer, related-tools lists). */
export const getIntentLabels = (lang: string): Record<IntentSlug, string> => ALL_LABELS[lang] ?? INTENT_LABELS;
