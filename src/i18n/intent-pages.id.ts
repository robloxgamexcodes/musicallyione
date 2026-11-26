/** Indonesian versions of the intent landing pages (see intent-pages.ts for the English originals). */
import type { IntentPage, IntentSlug } from './intent-pages';
import { p, ul, steps, callout } from './intent-shared';

export const LABELS_ID: Record<IntentSlug, string> = {
  'tiktok-video-downloader-hd': 'Pengunduh TikTok HD',
  'tiktok-no-watermark': 'TikTok Tanpa Watermark',
  'tiktok-sound-downloader': 'Pengunduh Suara TikTok',
  'tiktok-slideshow-downloader': 'Pengunduh Slideshow TikTok',
  'download-tiktok-iphone': 'Unduh TikTok di iPhone',
  'download-tiktok-android': 'Unduh TikTok di Android',
  'musically-down': 'Panduan MusicallyDown',
  'musicallydown-app': "Aplikasi & APK MusicallyDown",
  'supported-platforms': "Platform yang Didukung",
};

const resp = callout(
  '**Unduh dengan bertanggung jawab.** Simpan hanya video yang Anda buat atau yang Anda punya izin untuk menyimpannya, hormati hak kreator dan ketentuan TikTok, dan cantumkan kreator aslinya jika Anda membagikan karyanya dengan persetujuan. MusicallyDown adalah alat independen dan tidak berafiliasi dengan TikTok.'
);

export const PAGES_ID: Record<IntentSlug, IntentPage> = {
  'tiktok-video-downloader-hd': {
    crumb: LABELS_ID['tiktok-video-downloader-hd'],
    content: {
      metaTitle: 'Unduh Video TikTok HD – Gratis | MusicallyDown',
      metaDescription:
        'Simpan video TikTok publik dengan kualitas tertinggi yang ditawarkan sumbernya. Gratis, tanpa aplikasi dan tanpa daftar.',
      heroTitleStart: 'Pengunduh Video TikTok HD:',
      heroTitleHighlight: 'Kualitas Terbaik yang Tersedia',
      heroDescription:
        'Tempel tautan video TikTok publik dan pilih MP4 beresolusi tertinggi yang tersedia. Gratis, tanpa pendaftaran.',
      intro: [
        'TikTok yang tampak tajam di aplikasi bisa jadi buram dan pecah setelah disimpan, terutama jika filenya terkompresi dua kali di tengah jalan. Jika Anda ingin menyimpan klip untuk diedit, presentasi, atau sekadar salinan yang bersih di ponsel, kualitas unduhan sangat berpengaruh.',
        'Pengunduh TikTok HD ini membaca tautan video publik dan menampilkan opsi MP4 yang ada untuk postingan tersebut. Jika ada versi beresolusi lebih tinggi, versi itu ditampilkan lebih dulu. Jika tidak ada, Anda akan melihat apa yang didukung sumber aslinya, bukan janji yang tidak bisa ditepati.',
      ],
      tocTitle: 'Dalam panduan ini',
      sections: [
        {
          id: 'arti-hd',
          title: 'Arti “HD” yang Sebenarnya pada Unduhan TikTok',
          blocks: [
            p('Video TikTok biasanya vertikal, jadi “HD” menunjukkan jumlah piksel di sisi panjang: 1280 untuk 720p, 1920 untuk 1080p, dan lebih banyak lagi untuk 2K dan 4K. Unduhan hanya bisa setara dengan apa yang diunggah kreator. Video yang direkam dan diunggah dalam 1080p bisa disimpan dalam 1080p. Unggahan 480p tidak akan pernah menjadi 1080p, apa pun klaim sebuah alat.'),
            p('Resolusi juga bukan satu-satunya faktor. Bitrate, yaitu jumlah data yang dipakai per detik video, menentukan apakah klip 1080p terlihat tajam atau buram. Itulah sebabnya dua video dengan resolusi sama bisa tampak sangat berbeda setelah disimpan.'),
          ],
        },
        {
          id: 'cara',
          title: 'Cara Mengunduh Video TikTok dalam HD',
          blocks: [
            steps(
              ['Salin tautan video.', 'Di TikTok, buka video, ketuk Bagikan, lalu Salin tautan. Akun harus publik, dan tautan harus mengarah ke video tertentu.'],
              ['Tempel di atas dan kirim.', 'Halaman ini memeriksa postingan dan menampilkan format yang tersedia.'],
              ['Pilih opsi MP4 tertinggi.', 'Pilih kualitas teratas dalam daftar, lalu simpan filenya. Jika hanya ada satu opsi MP4, itulah versi terbaik yang bisa dijangkau alat ini untuk postingan tersebut.']
            ),
          ],
        },
        {
          id: 'tips',
          title: 'Tips Mendapatkan Salinan Terbersih',
          blocks: [
            ul(
              'Unduh sekali langsung dari postingan asli, jangan menyimpan ulang salinan yang sudah dibagikan lewat aplikasi pesan, karena akan dikompresi ulang.',
              'Gunakan koneksi yang baik saat file disimpan agar transfer tidak terputus.',
              'Jika Anda butuh versi bersih untuk diedit, minta file aslinya kepada kreator; unduhan tidak akan pernah lebih baik daripada unggahannya.',
              'Periksa detail file yang tersimpan di perangkat Anda untuk memastikan resolusinya sebelum membangun proyek dengannya.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'FAQ Pengunduh TikTok HD',
      faq: [
        { question: 'Bisakah saya mengunduh TikTok dalam 4K?', answer: 'Hanya jika unggahan aslinya 4K dan postingan menyediakan versi itu. Banyak video dipublikasikan dalam 720p atau 1080p, dan itu tidak bisa ditingkatkan.' },
        { question: 'Mengapa video yang tersimpan terlihat lebih buruk daripada di aplikasi?', answer: 'Aplikasi mungkin menayangkan versi yang sudah dioptimalkan, dan aplikasi seperti WhatsApp atau Instagram mengompresi ulang file saat dibagikan. Unduh langsung dari postingan dan periksa file sebelum membagikannya kembali.' },
        { question: 'Apakah unduhan HD gratis?', answer: 'Ya. Tanpa pendaftaran, tanpa langganan, dan tanpa aplikasi yang perlu dipasang.' },
        { question: 'Apakah bisa untuk video privat?', answer: 'Tidak. Hanya video publik yang bisa dibaca. Postingan privat, yang dihapus, atau dibatasi wilayah mungkin tidak termuat.' },
        { question: 'Di mana file disimpan?', answer: 'Di lokasi unduhan browser Anda. Di ponsel, lihat panduan untuk [iPhone](/download-tiktok-iphone) dan [Android](/download-tiktok-android).' },
      ],
      finalTitle: 'Simpan Video TikTok dengan Kualitas Terbaik yang Tersedia',
      finalText: 'Tempel tautan publik, pilih opsi MP4 tertinggi, dan simpan salinan yang bersih. Untuk audio saja, gunakan [konverter TikTok ke MP3](/tiktok-mp3).',
      ctaLabel: 'Tempel tautan TikTok',
      moreText: 'Ingin salinan yang bersih? Lihat [TikTok tanpa watermark](/tiktok-no-watermark).',
    },
  },

  'tiktok-no-watermark': {
    crumb: LABELS_ID['tiktok-no-watermark'],
    content: {
      metaTitle: 'Download TikTok Tanpa Watermark – Gratis | MusicallyDown',
      metaDescription:
        'Download video TikTok tanpa watermark (logo bergerak) jika versi bersihnya tersedia. Gratis, tanpa aplikasi, tanpa daftar, bisa di HP dan PC.',
      heroTitleStart: 'Unduh TikTok',
      heroTitleHighlight: 'Tanpa Watermark',
      heroDescription:
        'Tempel tautan video TikTok publik dan simpan versi bersihnya jika postingan menyediakannya. Gratis, tanpa pendaftaran.',
      intro: [
        'Logo TikTok yang memantul dan nama pengguna pada video yang disimpan tidak masalah untuk dibagikan sekilas, tetapi mengganggu saat Anda memakai klip itu dalam editan sendiri, presentasi, atau video reaksi. Salinan yang bersih adalah yang paling banyak dicari.',
        'Halaman ini memeriksa tautan video TikTok publik dan menampilkan MP4 tanpa watermark jika tersedia untuk postingan tersebut. Anda menempel tautan, memilih opsinya, lalu file tersimpan di perangkat Anda.',
      ],
      tocTitle: 'Dalam panduan ini',
      sections: [
        {
          id: 'mengapa',
          title: 'Mengapa Video TikTok Memiliki Watermark',
          blocks: [
            p('Saat Anda memakai tombol Simpan di aplikasi, TikTok menambahkan logo animasi dan nama kreator. Ini berfungsi sebagai pengakuan bagi kreator asli sekaligus branding platform. Menghilangkannya berbeda dengan sekadar memilih sumber unduhan lain: sebuah alat hanya bisa menawarkan file bersih jika memang ada untuk postingan itu.'),
            p('Karena itu ketersediaannya bervariasi. Sebagian postingan menyediakan versi bersih, sebagian tidak. Jika tidak ada, jawaban yang jujur adalah memang tidak ada, bukan janji trik tersembunyi yang selalu berhasil.'),
          ],
        },
        {
          id: 'cara',
          title: 'Cara Menyimpan TikTok Tanpa Watermark',
          blocks: [
            steps(
              ['Salin tautannya.', 'Buka TikTok, ketuk Bagikan, lalu Salin tautan. Videonya harus publik.'],
              ['Tempel dan kirim.', 'Masukkan tautan ke kotak di bagian atas halaman ini dan tunggu beberapa detik.'],
              ['Pilih MP4 yang bersih.', 'Jika ada opsi tanpa watermark, pilih dan simpan. Jika tidak ditawarkan, versi aslilah yang tersedia.']
            ),
          ],
        },
        {
          id: 'kredit',
          title: 'Mencantumkan Kreator dengan Benar',
          blocks: [
            p('Video yang bersih bukan berarti klipnya boleh Anda pakai sesuka hati. Jika Anda memakai ulang karya orang lain, minta izin dan sebutkan kreatornya di postingan, deskripsi, atau kredit Anda. Banyak kreator mengizinkan jika diminta dengan sopan, dan mencantumkan kredit melindungi Anda dari penghapusan konten.'),
            ul('Tanyakan kepada kreator sebelum memakai klipnya untuk tujuan komersial.', 'Sebutkan akun mereka di mana pun Anda mempublikasikannya.', 'Jangan mengaku video orang lain sebagai milik Anda.'),
            resp,
          ],
        },
      ],
      faqTitle: 'FAQ TikTok Tanpa Watermark',
      faq: [
        { question: 'Apakah semua TikTok tersedia tanpa watermark?', answer: 'Tidak. Versi bersih ada untuk banyak postingan publik, tetapi tidak semua, dan ketersediaannya bisa berubah. Jika tidak tercantum, mungkin hanya versi ber-watermark yang ada.' },
        { question: 'Apakah legal menghilangkan watermark?', answer: 'Aturannya bergantung pada negara Anda dan cara Anda memakai videonya. Penggunaan pribadi yang diizinkan berbeda dengan memublikasikan ulang karya orang lain. Jika ragu, tanyakan kepada kreator dan baca ketentuan TikTok.' },
        { question: 'Apakah file tanpa watermark kehilangan kualitas?', answer: 'Tidak dengan sendirinya. Kualitas bergantung pada versi yang disediakan postingan. Lihat [panduan HD](/tiktok-video-downloader-hd).' },
        { question: 'Apakah saya perlu akun?', answer: 'Tidak. Anda tidak pernah memasukkan kata sandi TikTok di sini.' },
        { question: 'Bisakah saya mendapatkan suaranya saja?', answer: 'Bisa, gunakan [konverter TikTok ke MP3](/tiktok-mp3).' },
      ],
      finalTitle: 'Salinan Bersih, dengan Kredit untuk Kreatornya',
      finalText: 'Tempel tautan publik, pilih MP4 yang bersih saat ditampilkan, dan beri kredit kepada kreator jika Anda membagikannya.',
      ctaLabel: 'Tempel tautan TikTok',
      moreText: 'Butuh di ponsel? Lihat [iPhone](/download-tiktok-iphone) atau [Android](/download-tiktok-android).',
    },
  },

  'tiktok-sound-downloader': {
    crumb: LABELS_ID['tiktok-sound-downloader'],
    content: {
      metaTitle: 'Unduh Suara TikTok – Gratis | MusicallyDown',
      metaDescription:
        'Simpan suara dari video TikTok publik sebagai file audio. Gratis, tanpa aplikasi, tanpa daftar. Berfungsi di iPhone, Android, dan desktop.',
      heroTitleStart: 'Pengunduh Suara TikTok:',
      heroTitleHighlight: 'Simpan Audionya Saja',
      heroDescription:
        'Tempel tautan video TikTok publik dan simpan suaranya sebagai file audio tersendiri jika postingan menyediakannya. Gratis, tanpa pendaftaran.',
      intro: [
        'Suara TikTok menyebar cepat: sulih suara, remix, atau klip yang sedang tren muncul di mana-mana selama seminggu. Menyimpan suaranya adalah pekerjaan yang berbeda dari menyimpan videonya, dan butuh alat yang memberi file audio bersih, bukan klip lengkap dengan gambar.',
        'Pengunduh suara TikTok ini membaca tautan video publik dan, jika audio tersedia, memungkinkan Anda menyimpan suaranya saja. Gunakan untuk menyimpan cuplikan sebagai referensi, mengenali sebuah lagu, atau membuat pustaka suara sendiri.',
        "Halaman ini membahas suaranya saja: suara asli atau lagu yang dipakai dalam video. Untuk mengubah seluruh video menjadi file MP3, gunakan [TikTok ke MP3](/tiktok-mp3). Untuk mengenali lagu, lihat [cara menemukan lagu di video TikTok](/blog/find-song-in-tiktok-video).",
      ],
      tocTitle: 'Dalam panduan ini',
      sections: [
        {
          id: 'suara-vs-lagu',
          title: 'Suara TikTok Tidak Selalu Lagu Lengkap',
          blocks: [
            p('Sebagian besar suara TikTok adalah potongan pendek, hasil editan, atau remix. File yang Anda simpan adalah potongan itu, jadi jangan berharap mendapat lagu utuh. Jika Anda menyukainya, gunakan klip yang tersimpan untuk menemukan lagu aslinya, lalu dapatkan versi lengkapnya lewat layanan musik berlisensi.'),
            p('Suara orisinal, seperti sulih suara atau audio rekaman, berbeda: itu persis audio dari videonya, dan file yang tersimpan memuat seluruhnya.'),
          ],
        },
        {
          id: 'cara',
          title: 'Cara Mengunduh Suara TikTok',
          blocks: [
            steps(
              ['Salin tautan video.', 'Buka video yang memakai suara itu, ketuk Bagikan, lalu Salin tautan.'],
              ['Tempel ke kotak di atas.', 'Kirim tautannya dan tunggu opsi termuat.'],
              ['Pilih opsi audio.', 'Jika tombol audio atau MP3 muncul, ketuk untuk menyimpan file. Jika tidak ada, postingan itu mungkin tidak menyediakan audio terpisah.']
            ),
            p('Untuk penjelasan lebih panjang tentang format audionya, baca [panduan TikTok ke MP3](/tiktok-mp3).'),
          ],
        },
        {
          id: 'ide',
          title: 'Yang Biasa Dilakukan Orang dengan Suara Tersimpan',
          blocks: [
            ul(
              'Mendengarkan secara offline saat perjalanan atau di pesawat.',
              'Menjadikan suara sebagai referensi saat merencanakan video sendiri.',
              'Memakai klip pendek sebagai nada dering atau nada notifikasi.',
              'Menyimpan sulih suara terpisah dari videonya.',
              'Memutar cuplikan berulang kali untuk mencari tahu judul lagu.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'FAQ Pengunduh Suara TikTok',
      faq: [
        { question: 'Bisakah saya mengunduh semua suara TikTok?', answer: 'Hanya suara dari video publik, dan hanya jika postingan menyediakan audio. Video privat atau yang sudah dihapus tidak bisa dibaca.' },
        { question: 'Berapa kualitas audio yang akan saya dapat?', answer: 'Kualitas yang dimiliki postingan aslinya. Konverter tidak bisa menambah detail yang tidak pernah ada.' },
        { question: 'Bolehkah saya memakai suara yang tersimpan di video saya sendiri?', answer: 'Tidak otomatis. Musik dan rekaman bisa dilindungi hak cipta. Periksa lisensinya, atau gunakan suara bawaan TikTok di dalam aplikasi.' },
        { question: 'Apakah videonya ikut tersimpan?', answer: 'Tidak. Pilih opsi audio dan Anda hanya mendapat suaranya.' },
        { question: 'Apakah gratis?', answer: 'Ya, tanpa pendaftaran dan tanpa yang perlu dipasang.' },
      ],
      finalTitle: 'Simpan Suaranya, Lewati Videonya',
      finalText: 'Tempel tautan publik, pilih audio jika ditawarkan, dan simpan kliknya. Lalu cari lagu lengkapnya lewat layanan berlisensi jika Anda ingin trek utuh.',
      ctaLabel: 'Tempel tautan TikTok',
      moreText: 'Lebih suka videonya? Lihat [pengunduh HD](/tiktok-video-downloader-hd).',
    },
  },

  'tiktok-slideshow-downloader': {
    crumb: LABELS_ID['tiktok-slideshow-downloader'],
    content: {
      metaTitle: 'Download Foto & Slideshow TikTok | MusicallyDown',
      metaDescription:
        'Download foto dan slideshow TikTok publik. Tempel tautan lalu simpan gambar atau file slideshow jika tersedia. Gratis, tanpa aplikasi, tanpa daftar.',
      heroTitleStart: 'Download Foto & Slideshow TikTok:',
      heroTitleHighlight: 'Simpan Postingan Foto',
      heroDescription:
        'Tempel tautan postingan foto atau slideshow TikTok publik dan simpan gambarnya atau slideshow-nya jika tersedia. Gratis, tanpa pendaftaran.',
      intro: [
        'Tidak semua TikTok berupa video. Postingan foto dan slideshow menampilkan gambar diam yang disertai musik, dan orang menyimpannya untuk resep, ide gaya, daftar perjalanan, dan papan referensi. Cara menyimpannya berbeda dari video biasa, itulah sebabnya pengunduh video biasa kadang tidak menemukan apa pun.',
        'Halaman ini membaca tautan postingan foto publik dan menampilkan opsi unduhan yang ada untuknya. Bergantung pada postingannya, itu bisa berupa gambar satuan, video slideshow, atau keduanya.',
      ],
      tocTitle: 'Dalam panduan ini',
      sections: [
        {
          id: 'apa-itu',
          title: 'Apa Itu Slideshow atau Postingan Foto TikTok?',
          blocks: [
            p('Postingan foto adalah kumpulan gambar diam dalam carousel yang bisa digeser, biasanya dengan suara latar. TikTok memperlakukannya sebagai jenis postingan tersendiri, terpisah dari video. Video slideshow serupa, tetapi gambarnya sudah dirender menjadi satu klip.'),
            p('Apa yang bisa Anda simpan karenanya bergantung pada postingannya. Sebagian menyediakan gambar aslinya, sebagian slideshow yang sudah dirender, dan sebagian mungkin hanya audionya.'),
          ],
        },
        {
          id: 'cara',
          title: 'Cara Mengunduh Slideshow TikTok',
          blocks: [
            steps(
              ['Salin tautan postingan.', 'Buka postingan foto, ketuk Bagikan, lalu Salin tautan.'],
              ['Tempel di atas dan kirim.', 'Tunggu beberapa detik selagi halaman membaca postingannya.'],
              ['Pilih yang ingin disimpan.', 'Pilih gambar atau file slideshow jika tercantum. Jika postingan tidak menyediakan opsi unduhan, postingan itu tidak bisa disimpan dari halaman ini.']
            ),
          ],
        },
        {
          id: 'tips',
          title: 'Tips Menyimpan Postingan Foto',
          blocks: [
            ul(
              'Simpan gambarnya jika Anda ingin memakai foto satuan untuk papan inspirasi.',
              'Simpan file slideshow jika Anda ingin durasi dan suaranya tetap menyatu.',
              'Gunakan opsi audio jika hanya ingin musiknya; lihat [pengunduh suara](/tiktok-sound-downloader).',
              'Pastikan gambar tersebut memang milik kreator yang akan Anda cantumkan.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'FAQ Slideshow TikTok',
      faq: [
        { question: 'Mengapa tautan video biasa tidak berfungsi untuk postingan foto?', answer: 'Postingan foto disimpan dengan cara berbeda dari video, sehingga pengunduh harus membacanya sebagai gambar dan audio, bukan satu file video.' },
        { question: 'Bisakah saya mendapatkan gambar dalam ukuran aslinya?', answer: 'Hanya pada ukuran yang disediakan postingan. Gambar yang tersimpan tidak bisa lebih besar daripada yang diunggah.' },
        { question: 'Bisakah saya menyimpan musik dari slideshow?', answer: 'Sering kali bisa, jika audio tersedia untuk postingan itu. Lihat [konverter TikTok ke MP3](/tiktok-mp3).' },
        { question: 'Apakah berfungsi di ponsel?', answer: 'Ya, lihat panduan untuk [iPhone](/download-tiktok-iphone) dan [Android](/download-tiktok-android).' },
        { question: 'Apakah gratis?', answer: 'Ya, tanpa akun dan tanpa aplikasi.' },
      ],
      finalTitle: 'Simpan Foto dan Suaranya',
      finalText: 'Tempel tautan postingan foto publik, lalu pilih gambar, slideshow, atau audio sesuai yang disediakan postingan.',
      ctaLabel: 'Tempel tautan TikTok',
      moreText: 'Mencari postingan yang cepat hilang? Lihat [pengunduh TikTok Stories](/download-tiktok-stories).',
    },
  },

  'download-tiktok-iphone': {
    crumb: LABELS_ID['download-tiktok-iphone'],
    content: {
      metaTitle: 'Cara Unduh Video TikTok di iPhone | MusicallyDown',
      metaDescription:
        'Cara menyimpan video TikTok publik di iPhone lewat Safari, tanpa aplikasi. Temukan file di Unduhan dan pindahkan ke Foto. Gratis, langkah demi langkah.',
      heroTitleStart: 'Unduh Video TikTok',
      heroTitleHighlight: 'di iPhone',
      heroDescription:
        'Tempel tautan video TikTok publik di Safari, simpan MP4-nya, lalu pindahkan ke Foto. Tanpa aplikasi, tanpa pendaftaran.',
      intro: [
        'Di iPhone, menyimpan TikTok tidak sejelas di komputer. File tidak langsung masuk ke rol kamera, dan banyak orang menyerah ketika unduhan seolah hilang. Padahal file itu tersimpan, hanya di tempat lain.',
        'Panduan ini menunjukkan seluruh alurnya dengan Safari: salin tautan, tempel di sini, simpan video, lalu pindahkan ke Foto jika Anda ingin videonya ada di galeri.',
      ],
      tocTitle: 'Dalam panduan ini',
      sections: [
        {
          id: 'langkah',
          title: 'Simpan TikTok di iPhone dalam Lima Langkah',
          blocks: [
            steps(
              ['Salin tautan di TikTok.', 'Buka video, ketuk Bagikan, lalu Salin tautan.'],
              ['Buka halaman ini di Safari.', 'Safari menangani unduhan paling andal di iPhone. Browser lain bisa berperilaku berbeda.'],
              ['Tempel tautan dan kirim.', 'Ketuk kotak di atas, tempel, dan tunggu opsinya muncul.'],
              ['Ketuk opsi MP4.', 'Saat Safari bertanya, konfirmasi unduhan.'],
              ['Buka file dan simpan ke Foto.', 'Ketuk ikon unduhan di bilah alamat Safari, buka filenya, ketuk Bagikan, lalu pilih Simpan Video.']
            ),
          ],
        },
        {
          id: 'lokasi',
          title: 'Ke Mana Unduhan Saya Pergi?',
          blocks: [
            p('Safari menyimpan unduhan di aplikasi File, dalam folder bernama Unduhan (di dalam iCloud Drive atau Di iPhone Saya, tergantung pengaturan Anda). Dari File, Anda bisa membuka video, memutarnya, atau membagikannya ke Foto. Jika tidak ketemu, lihat panah unduhan di bilah alat Safari yang mencantumkan file terbaru.'),
          ],
        },
        {
          id: 'solusi',
          title: 'Jika Unduhan Tidak Berfungsi di iPhone',
          blocks: [
            ul(
              'Pastikan videonya publik dan tautannya lengkap.',
              'Perbarui iOS: Safari versi modern memiliki pengelola unduhan; versi yang sangat lama tidak.',
              'Nonaktifkan pemblokir konten untuk halaman ini jika tombolnya tidak bereaksi.',
              'Kosongkan penyimpanan jika proses simpan gagal di tengah jalan.',
              'Coba lagi beberapa menit kemudian, siapa tahu videonya sempat tidak terjangkau.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'FAQ Unduh TikTok di iPhone',
      faq: [
        { question: 'Apakah saya perlu aplikasi untuk mengunduh TikTok di iPhone?', answer: 'Tidak. Safari sudah cukup. Anda tinggal menempel tautan di halaman ini.' },
        { question: 'Mengapa videonya tidak ada di aplikasi Foto?', answer: 'Safari menyimpan file ke aplikasi File lebih dulu. Buka aplikasi itu lalu gunakan Bagikan → Simpan Video untuk menambahkannya ke Foto.' },
        { question: 'Apakah berfungsi di iPad?', answer: 'Ya, langkahnya sama di Safari pada iPadOS.' },
        { question: 'Bisakah saya menyimpan audionya saja?', answer: 'Bisa, pilih opsi audio atau gunakan [konverter TikTok ke MP3](/tiktok-mp3).' },
        { question: 'Apakah aman?', answer: 'Anda tidak pernah memasukkan kata sandi TikTok. Unduh hanya video yang Anda punya izin untuk menyimpannya.' },
      ],
      finalTitle: 'TikTok di iPhone, Tanpa Aplikasi',
      finalText: 'Salin tautan, tempel di Safari, simpan file, dan pindahkan ke Foto jika Anda ingin videonya ada di galeri.',
      ctaLabel: 'Tempel tautan TikTok',
      moreText: 'Pakai Android? Lihat [cara mengunduh TikTok di Android](/download-tiktok-android).',
    },
  },

  'download-tiktok-android': {
    crumb: LABELS_ID['download-tiktok-android'],
    content: {
      metaTitle: 'Cara Unduh Video TikTok di Android | MusicallyDown',
      metaDescription:
        'Cara menyimpan video TikTok publik di Android lewat Chrome, tanpa aplikasi. Temukan file di Unduhan dan galeri. Gratis, langkah demi langkah.',
      heroTitleStart: 'Unduh Video TikTok',
      heroTitleHighlight: 'di Android',
      heroDescription:
        'Tempel tautan video TikTok publik di Chrome dan simpan MP4-nya ke ponsel Anda. Tanpa aplikasi, tanpa pendaftaran.',
      intro: [
        'Android memudahkan penyimpanan file, tetapi langkah persisnya bergantung pada browser dan merek ponsel Anda. Video biasanya masuk dulu ke folder Unduhan, dan baru tampil di galeri setelah dimuat ulang.',
        'Panduan ini membahas alur standar dengan Chrome: salin tautan, tempel di sini, simpan MP4, lalu temukan filenya.',
      ],
      tocTitle: 'Dalam panduan ini',
      sections: [
        {
          id: 'langkah',
          title: 'Simpan TikTok di Android dalam Empat Langkah',
          blocks: [
            steps(
              ['Salin tautan di TikTok.', 'Buka video, ketuk Bagikan, lalu Salin tautan.'],
              ['Buka halaman ini di Chrome.', 'Samsung Internet dan Firefox juga bisa. Pakai browser yang sudah Anda percaya.'],
              ['Tempel tautan dan kirim.', 'Ketuk kotak di atas, tempel, lalu tunggu format termuat.'],
              ['Ketuk opsi MP4.', 'Konfirmasi unduhan jika ponsel Anda bertanya, lalu file mulai tersimpan.']
            ),
          ],
        },
        {
          id: 'lokasi',
          title: 'Di Mana Menemukan Video yang Diunduh',
          blocks: [
            p('Buka aplikasi File atau File Saya dan masuk ke Unduhan. Banyak ponsel juga menambahkan video baru ke Galeri atau Google Foto secara otomatis, meski sebagian perlu waktu sebentar atau muat ulang manual. Daftar unduhan Chrome, yang ada di menu browser, menampilkan file terbaru dan membukanya dengan satu ketukan.'),
          ],
        },
        {
          id: 'solusi',
          title: 'Jika Tidak Terunduh di Android',
          blocks: [
            ul(
              'Pastikan videonya publik dan tautannya lengkap.',
              'Izinkan unduhan untuk browser jika diblokir oleh sistem.',
              'Kosongkan sebagian penyimpanan jika file tidak bisa ditulis.',
              'Matikan penghemat data atau pemblokir iklan yang mengganggu halaman.',
              'Coba lagi setelah beberapa menit.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'FAQ Unduh TikTok di Android',
      faq: [
        { question: 'Apakah saya perlu memasang APK?', answer: 'Tidak. Jangan pernah memasang pengunduh dari sumber yang tidak dikenal. Ini berfungsi di browser Anda.' },
        { question: 'Ke mana unduhan di Android disimpan?', answer: 'Ke folder Unduhan, yang bisa dibuka dari aplikasi File. Sebagian ponsel juga menampilkannya di Galeri.' },
        { question: 'Apakah berfungsi di ponsel Samsung?', answer: 'Ya, di Samsung Internet atau Chrome. Cari di File Saya → Unduhan.' },
        { question: 'Bisakah saya menyimpan suaranya saja?', answer: 'Bisa, lihat [pengunduh suara TikTok](/tiktok-sound-downloader).' },
        { question: 'Apakah gratis?', answer: 'Ya, tanpa pendaftaran.' },
      ],
      finalTitle: 'TikTok di Android, Langsung dari Browser',
      finalText: 'Salin tautan, tempel di Chrome, simpan MP4, dan buka dari folder Unduhan.',
      ctaLabel: 'Tempel tautan TikTok',
      moreText: 'Pakai iPhone? Lihat [cara mengunduh TikTok di iPhone](/download-tiktok-iphone).',
    },
  },

  'musically-down': {
    crumb: LABELS_ID['musically-down'],
    content: {
      metaTitle: 'Musically Down & Musical Down: Apa Itu MusicallyDown?',
      metaDescription:
        'Cari Musically Down, Musical Down atau musicaldown? Pelajari apa itu MusicallyDown, cara kerja pengunduh TikTok ini, dan batasannya.',
      heroTitleStart: 'Musically Down atau MusicallyDown?',
      heroTitleHighlight: ' Satu Alat TikTok Gratis',
      heroDescription:
        'Simpan video TikTok publik sebagai MP4 atau MP3 di browser Anda. Tanpa aplikasi, tanpa pendaftaran. Begini cara kerjanya.',
      intro: [
        'Orang mencari alat ini dengan banyak ejaan: MusicallyDown, Musical Down, musicaldown, Musically Down. Semuanya berarti sama, yaitu cara menyimpan video TikTok publik atau suaranya lewat browser tanpa memasang apa pun.',
        'Halaman ini menjelaskan asal nama tersebut, apa yang dilakukan alat ini, dan apa yang tidak, supaya Anda tahu apa yang bisa diharapkan sebelum menempel tautan.',
      ],
      tocTitle: 'Dalam panduan ini',
      sections: [
        {
          id: 'nama',
          title: 'Asal Nama Ini',
          blocks: [
            p('Musical.ly adalah aplikasi video pendek yang digabungkan ke TikTok pada 2018. Pengunduh yang dibuat di sekitarnya mempertahankan nama “Musically”, dan kebiasaan mencarinya pun bertahan. MusicallyDown adalah alat independen. Alat ini tidak berafiliasi dengan, didukung oleh, atau dijalankan oleh TikTok maupun perusahaan induknya.'),
          ],
        },
        {
          id: 'fungsi',
          title: 'Fungsi MusicallyDown',
          blocks: [
            ul(
              'Membaca tautan video TikTok publik dan menampilkan opsi unduhan yang tersedia.',
              'Menyimpan video sebagai MP4 dengan kualitas tertinggi yang disediakan postingan. Lihat [unduhan HD](/tiktok-video-downloader-hd).',
              'Menawarkan salinan tanpa logo bergerak jika ada. Lihat [tanpa watermark](/tiktok-no-watermark).',
              'Menyimpan suara sebagai audio. Lihat [konverter TikTok ke MP3](/tiktok-mp3).',
              'Mendukung [TikTok Stories](/download-tiktok-stories) dan postingan foto jika tersedia.',
              'Berfungsi di browser pada iPhone, Android, Windows, dan Mac.'
            ),
          ],
        },
        {
          id: 'bukan',
          title: 'Yang Tidak Dilakukannya',
          blocks: [
            ul(
              'Tidak mengunduh video privat, yang dihapus, atau yang dibatasi.',
              'Tidak pernah meminta kata sandi atau login TikTok Anda.',
              'Tidak bisa membuat video lebih tajam daripada unggahan aslinya.',
              'Tidak memberi hak untuk memakai ulang konten milik orang lain.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'FAQ MusicallyDown',
      faq: [
        { question: 'Apakah MusicallyDown sama dengan Musical Down?', answer: 'Ya. Itu hanya ejaan berbeda dari alat yang sama.' },
        { question: 'Apakah MusicallyDown gratis?', answer: 'Ya, tanpa pendaftaran dan tanpa aplikasi.' },
        { question: 'Apakah berafiliasi dengan TikTok?', answer: 'Tidak. Ini adalah alat independen.' },
        { question: 'Apakah berfungsi di ponsel saya?', answer: 'Ya, lihat panduan untuk [iPhone](/download-tiktok-iphone) dan [Android](/download-tiktok-android).' },
        { question: 'Apakah aman?', answer: 'Anda tidak pernah membagikan login TikTok. Unduh hanya konten yang Anda buat atau yang Anda punya izin untuk menyimpannya.' },
      ],
      finalTitle: 'Mulai dengan Tautan TikTok Publik',
      finalText: 'Tempel tautan di bagian atas halaman dan pilih dari opsi yang ditampilkan.',
      ctaLabel: 'Tempel tautan TikTok',
      moreText: 'Baru di sini? Mulai dengan [pengunduh video TikTok](/).',
    },
  },
  "musicallydown-app": {
    crumb: LABELS_ID["musicallydown-app"],
    content: {
      metaTitle: "Aplikasi MusicallyDown & APK: Pakai Versi Web",
      metaDescription: "Tidak ada APK atau aplikasi MusicallyDown yang perlu dipasang. Pakai situs gratis di browser mana pun dan hindari APK palsu. Aman untuk iPhone dan Android.",
      heroTitleStart: "Aplikasi MusicallyDown atau APK?",
      heroTitleHighlight: "Pakai Versi Web, Tanpa Instal",
      heroDescription: "MusicallyDown berjalan di browser, jadi tidak ada yang perlu dipasang. Tempel tautan TikTok publik untuk mencobanya.",
      intro: ["Banyak orang mencari aplikasi MusicallyDown, APK, atau versi Lite. Di situs ini MusicallyDown adalah situs web: buka di Safari, Chrome, atau browser lain, tempel tautan TikTok publik, lalu simpan filenya. Kami tidak menerbitkan APK Android maupun aplikasi iOS.", "Ini penting karena halaman yang menawarkan file bernama \"MusicallyDown APK\" bukan dari kami. Halaman ini menjelaskan mengapa tidak perlu instal, apa risiko APK dari sumber tidak dikenal, dan cara membuat pintasan yang aman."],
      tocTitle: "Di halaman ini",
      sections: [
        { id: "tanpa-aplikasi", title: "Apakah ada aplikasi MusicallyDown?", blocks: [p("Tidak. Situs ini tidak punya APK resmi, versi Lite, atau aplikasi \"One\". Pengunduhnya berjalan sepenuhnya di browser, di iPhone, Android, Windows, dan Mac, tanpa akun dan tanpa login."), ul("Tidak ada yang perlu dipasang atau diperbarui.", "Tidak meminta izin khusus di HP.", "Halaman yang sama berfungsi di semua perangkat.")] },
        { id: "risiko", title: "Mengapa APK dari sumber tidak dikenal berisiko", blocks: [p("APK adalah file pemasang aplikasi. Jika berasal dari situs acak dan bukan toko aplikasi resmi, sulit memastikan apa yang sebenarnya dilakukannya."), ul("Bisa berisi malware, adware, atau langganan tersembunyi.", "Aplikasi modifikasi (\"mod\") sering meminta izin yang tidak diperlukan.", "Memasang di luar toko resmi melewati pemeriksaan keamanan toko.", "Sebagian halaman unduhan palsu hanya ada untuk menampilkan iklan atau mengumpulkan data."), callout("**Sudah terlanjur memasang file bernama MusicallyDown APK?** Hapus lewat pengaturan HP, pindai dengan Google Play Protect atau aplikasi keamanan tepercaya, dan ganti kata sandi yang Anda ketik selama aplikasi itu terpasang.")] },
        { id: "pintasan", title: "Pintasan seperti aplikasi tanpa APK", blocks: [p("Browser bisa menyematkan situs ke layar utama. Ikonnya terbuka seperti aplikasi, tetapi tetap hanya situs web."), steps(["Di iPhone", "Buka situs di Safari, ketuk Bagikan, lalu pilih Tambah ke Layar Utama."], ["Di Android", "Buka situs di Chrome, ketuk menu tiga titik, lalu pilih Tambahkan ke layar utama."], ["Lalu gunakan", "Salin tautan TikTok publik, buka pintasan, tempel tautan, dan download."])] },
      ],
      faqTitle: "FAQ aplikasi MusicallyDown",
      faq: [
        { question: "Apakah ada APK MusicallyDown resmi?", answer: "Tidak. Situs ini hanya ada sebagai situs web." },
        { question: "Apakah ada aplikasi MusicallyDown Lite atau One?", answer: "Tidak dari situs ini. Anggap file dengan nama itu belum terverifikasi." },
        { question: "Apakah bisa di iPhone tanpa aplikasi?", answer: "Bisa. Pakai Safari. Lihat [panduan iPhone](/download-tiktok-iphone)." },
        { question: "Apakah bisa di Android tanpa APK?", answer: "Bisa. Pakai Chrome. Lihat [panduan Android](/download-tiktok-android)." },
        { question: "Bisakah menyimpan audio saja tanpa aplikasi?", answer: "Bisa. Pakai [TikTok ke MP3](/tiktok-mp3) di browser." },
      ],
      finalTitle: "Tidak Perlu Instal",
      finalText: "Tempel tautan TikTok publik di bagian atas halaman lalu pilih file yang Anda mau.",
      ctaLabel: "Tempel tautan TikTok",
      moreText: "Baru di sini? Mulai dengan [pengunduh video TikTok](/) atau [panduan merek](/musically-down).",
    },
  },
  "supported-platforms": {
    crumb: LABELS_ID["supported-platforms"],
    content: {
      metaTitle: "MusicallyDown: Platform yang Didukung (Hanya TikTok)",
      metaDescription: "MusicallyDown hanya berfungsi untuk tautan TikTok publik. Tidak mengunduh dari YouTube, Facebook, Instagram, Threads, Pinterest, atau X. Lihat alternatifnya.",
      heroTitleStart: "Platform Apa yang Didukung MusicallyDown?",
      heroTitleHighlight: "Hanya TikTok",
      heroDescription: "Tempel tautan TikTok publik untuk menyimpan video, audio, atau foto. Tautan dari situs lain tidak didukung.",
      intro: ["Banyak orang mencari MusicallyDown bersama YouTube, Facebook, Instagram, Threads, Pinterest, X, atau Canva. Agar Anda tidak buang waktu: MusicallyDown hanya menangani tautan TikTok publik.", "Halaman ini menjelaskan apa yang didukung, apa yang tidak, dan apa yang bisa dilakukan jika video yang Anda cari ada di platform lain."],
      tocTitle: "Di halaman ini",
      sections: [
        { id: "didukung", title: "Yang didukung MusicallyDown", blocks: [ul("Video TikTok publik (MP4) dan suara video ([MP3](/tiktok-mp3)).", "Postingan foto dan [slideshow](/tiktok-slideshow-downloader) TikTok publik.", "[Story TikTok](/download-tiktok-stories) publik."), p("TikTok privat, yang dihapus, atau yang dibatasi tidak dapat dimuat.")] },
        { id: "tidak-didukung", title: "Yang tidak didukung", blocks: [ul("Tautan YouTube, Facebook, Instagram, Threads, Pinterest, X (Twitter), dan Canva.", "Situs apa pun selain TikTok."), p("Menempel tautan seperti itu tidak akan menghasilkan file. Pencarian yang menaruh nama-nama itu di samping MusicallyDown tidak menggambarkan fitur situs ini.")] },
        { id: "alternatif", title: "Jika videonya ada di platform lain", blocks: [ul("Gunakan opsi simpan, bagikan, atau unduh bawaan platform itu jika ada.", "Jika Anda pembuat videonya, ekspor dari akun atau aplikasi edit Anda sendiri.", "Jika klip yang sama juga diunggah ke TikTok, salin tautan TikTok dan tempel di sini.", "Minta file kepada kreator jika Anda perlu memakainya ulang."), callout("**Unduh dengan bertanggung jawab.** Simpan hanya video yang Anda buat atau yang Anda punya izin untuk menyimpannya, serta hormati hak kreator dan ketentuan tiap platform.")] },
      ],
      faqTitle: "FAQ platform yang didukung",
      faq: [
        { question: "Apakah MusicallyDown bisa download video YouTube?", answer: "Tidak. Hanya berfungsi untuk tautan TikTok publik." },
        { question: "Apakah bisa untuk Instagram, Facebook, atau Threads?", answer: "Tidak. Tautan itu tidak didukung." },
        { question: "Apakah mendukung Pinterest, X, atau Canva?", answer: "Tidak." },
        { question: "Konten TikTok apa yang bisa disimpan?", answer: "Video publik, suara video sebagai MP3, postingan foto, dan story publik." },
        { question: "Mulai dari mana?", answer: "Tempel tautan TikTok publik di [pengunduh video](/)." },
      ],
      finalTitle: "Hanya Tautan TikTok",
      finalText: "Tempel tautan TikTok publik di bagian atas halaman untuk memulai.",
      ctaLabel: "Tempel tautan TikTok",
      moreText: "Butuh audio saja? Coba [TikTok ke MP3](/tiktok-mp3).",
    },
  },
};
