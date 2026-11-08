#!/usr/bin/env python3
"""
Generate one 1200x630 social (Open Graph / Twitter) image per indexable page.

Usage (from the project root, Python 3 + Pillow, Inter font installed):
    npm run build                       # produces .vercel/output/static (or pass another dir)
    python3 scripts/generate-og.py      # writes public/og/<slug>.png
    npm run build                       # picks the images up (src/lib/og.ts)

Titles come from each page's <title> in the built HTML, so every language gets its own localized card.
Re-run it after you add pages or change page titles. Legal pages, 404 and the English home page
(which keeps public/og-default.png) are skipped.
"""
import glob, html, os, re, sys
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BUILD = sys.argv[1] if len(sys.argv) > 1 else os.path.join(ROOT, '.vercel', 'output', 'static')
OUT = os.path.join(ROOT, 'public', 'og')
FONT_DIR = '/usr/share/fonts/opentype/inter'
F_BOLD, F_SEMI = f'{FONT_DIR}/Inter-Bold.otf', f'{FONT_DIR}/Inter-SemiBold.otf'
W, H, PAD = 1200, 630, 72
PINK = (240, 19, 77)
SKIP = re.compile(r'^/(?:es/|id/|vi/)?(?:privacy|terms|disclaimer|dmca|contact|404)/$')
LABELS = {  # pill text per language: (guide, tool, about, blog index)
    'en': ('GUIDE', 'FREE TOOL', 'ABOUT', 'BLOG'),
    'es': ('GUÍA', 'HERRAMIENTA GRATIS', 'ACERCA DE', 'BLOG'),
    'id': ('PANDUAN', 'ALAT GRATIS', 'TENTANG', 'BLOG'),
    'vi': ('HƯỚNG DẪN', 'CÔNG CỤ MIỄN PHÍ', 'GIỚI THIỆU', 'BLOG'),
}

def font(path, size): return ImageFont.truetype(path, size)

def gradient():
    img = Image.new('RGB', (W, H))
    px = img.load()
    top, bot = (19, 19, 23), (46, 25, 45)
    for y in range(H):
        t = y / (H - 1)
        c = tuple(round(top[i] + (bot[i] - top[i]) * t) for i in range(3))
        for x in range(W): px[x, y] = c
    return img

def wrap(draw, text, fnt, max_w):
    words, lines, cur = text.split(), [], ''
    for w in words:
        trial = f'{cur} {w}'.strip()
        if draw.textlength(trial, font=fnt) <= max_w: cur = trial
        else:
            if cur: lines.append(cur)
            cur = w
    if cur: lines.append(cur)
    return lines

def fit_title(draw, text, max_w, max_h):
    for size in range(76, 39, -2):
        fnt = font(F_BOLD, size)
        lines = wrap(draw, text, fnt, max_w)
        lh = int(size * 1.22)
        if len(lines) <= 4 and len(lines) * lh <= max_h and all(draw.textlength(l, font=fnt) <= max_w for l in lines):
            return fnt, lines, lh
    fnt = font(F_BOLD, 40); return fnt, wrap(draw, text, fnt, max_w)[:4], 49

def render(title, lang, kind, out_path):
    img = gradient(); d = ImageDraw.Draw(img)
    # wordmark
    f_mark = font(F_BOLD, 38)
    d.text((PAD, 58), 'Musically', font=f_mark, fill=(255, 255, 255))
    x2 = PAD + d.textlength('Musically', font=f_mark)
    d.text((x2, 58), 'Down', font=f_mark, fill=PINK)
    # pill
    label = LABELS[lang][kind]
    f_pill = font(F_SEMI, 22)
    tw = d.textlength(label, font=f_pill); pw, ph = tw + 40, 44
    px0 = W - PAD - pw
    d.rounded_rectangle((px0, 58, px0 + pw, 58 + ph), radius=22, outline=PINK, width=2)
    d.text((px0 + 20, 58 + 8), label, font=f_pill, fill=(255, 255, 255))
    # title (vertically centred in the free area)
    max_w, area_top, area_bot = W - 2 * PAD, 150, 500
    fnt, lines, lh = fit_title(d, title, max_w, area_bot - area_top)
    block = len(lines) * lh
    y = area_top + (area_bot - area_top - block) // 2
    for l in lines:
        d.text((PAD, y), l, font=fnt, fill=(255, 255, 255)); y += lh
    # footer: accent bar + domain
    d.rectangle((PAD, 548, PAD + 120, 556), fill=PINK)
    f_url = font(F_SEMI, 26)
    url = 'musicaldown.se'
    d.text((W - PAD - d.textlength(url, font=f_url), 538), url, font=f_url, fill=(200, 192, 214))
    img.save(out_path, optimize=True)

def clean_title(t):
    t = html.unescape(t).strip()
    t = re.sub(r'\s*[|\u2013\u2014-]\s*MusicallyDown\s*$', '', t, flags=re.I)
    return t

def main():
    os.makedirs(OUT, exist_ok=True)
    made = skipped = 0
    keep = set()
    for f in sorted(glob.glob(BUILD + '/**/index.html', recursive=True)):
        page = f[len(BUILD):].replace('/index.html', '/') or '/'
        h = open(f, encoding='utf-8', errors='ignore').read()
        if SKIP.match(page) or 'content="noindex' in h or page == '/': skipped += 1; continue
        m = re.search(r'<title>(.*?)</title>', h, re.S)
        if not m: skipped += 1; continue
        lang = (re.search(r'<html[^>]*lang="([^"]+)"', h) or [None, 'en'])[1]
        lang = lang if lang in LABELS else 'en'
        parts = page.strip('/').split('/')
        rest = parts[1:] if parts[0] in ('es', 'id', 'vi') else parts
        if rest == ['blog']: kind = 3
        elif len(rest) == 2 and rest[0] == 'blog': kind = 0
        elif rest == ['about']: kind = 2
        else: kind = 1
        slug = '-'.join(parts) if parts != [''] else 'home'
        title = clean_title(m.group(1))
        if rest == []: title = clean_title(re.sub(r'^MusicallyDown\s*[:\u2013-]\s*', '', title))  # localized home pages
        render(title, lang, kind, os.path.join(OUT, f'{slug}.png')); keep.add(f'{slug}.png'); made += 1
    for old in glob.glob(OUT + '/*.png'):  # drop images of pages that no longer exist
        if os.path.basename(old) not in keep: os.remove(old)
    print(f'generated {made} images in {OUT} (skipped {skipped} pages)')

if __name__ == '__main__':
    main()
