// Change this one value to rename every downloaded file.
// Result: musicaldown.se_<author>.mp4, musicaldown.se_<author>_audio.mp3, ...
export const SITE_NAME = "musicaldown.se";

// Where the download buttons fetch files from.
//  - "/api/download"  -> proxy inside this Astro project (runs on Vercel)
//  - Cloudflare Worker -> full address of the worker (below)
// To go back to the Vercel proxy, set this to "/api/download".
//
// IMPORTANT: this worker must be one YOU own and control. If it goes down or is taken down, every
// download button stops working. Verify ownership before launch (or move it to your own account).
export const DOWNLOAD_PROXY = "https://dl.tiktokiocdn.workers.dev/api/download";

