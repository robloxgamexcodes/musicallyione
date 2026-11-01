/**
 * DMCA / copyright-removal and Disclaimer pages (en, es, id, vi) + the footer labels for them.
 * Rendered by components/legal/LegalPage.astro. Have a lawyer review before relying on this text,
 * and have a native speaker check es / id / vi.
 */
import type { Lang } from './ui';

export const LEGAL_UPDATED = '2026-11-01';
export const LEGAL_EMAIL = 'support@musicaldown.se';

export interface LegalSection {
  h: string;
  p?: string[];
  ul?: string[];
}
export interface LegalDoc {
  metaTitle: string;
  metaDescription: string;
  title: string;
  updatedLabel: string;
  crumb: string;
  intro: string;
  sections: LegalSection[];
}

export const legalLabels: Record<Lang, { dmca: string; disclaimer: string }> = {
  en: { dmca: 'DMCA / Copyright', disclaimer: 'Disclaimer' },
  es: { dmca: 'DMCA / Derechos de autor', disclaimer: 'Aviso legal' },
  id: { dmca: 'DMCA / Hak Cipta', disclaimer: 'Disclaimer' },
  vi: { dmca: 'DMCA / Bản quyền', disclaimer: 'Tuyên bố miễn trừ' },
};

const E = LEGAL_EMAIL;

export const dmca: Record<Lang, LegalDoc> = {
  en: {
    metaTitle: 'DMCA & Copyright Policy | MusicallyDown',
    metaDescription:
      'How MusicallyDown handles copyright. Learn how to report infringement and what a valid DMCA takedown notice must include.',
    title: 'DMCA & Copyright Policy',
    updatedLabel: 'Last updated',
    crumb: 'DMCA / Copyright',
    intro:
      'MusicallyDown respects intellectual property rights and expects its visitors to do the same. This page explains how copyright is handled on this site and how rights holders can contact us.',
    sections: [
      {
        h: 'What MusicallyDown does and does not host',
        p: [
          'MusicallyDown is a tool. It does not host, store or publish TikTok videos, sounds or images on its own servers. The tool processes a public link that a visitor submits and returns the file options that the source platform makes available. The original content stays on TikTok and belongs to its creators.',
        ],
      },
      {
        h: 'User responsibility',
        p: [
          'Visitors may only save content that they own or have permission to use. Saving a file does not give you any right to copy, republish, sell or otherwise exploit it. See our Terms of Service and Disclaimer for details.',
        ],
      },
      {
        h: 'Reporting copyright infringement',
        p: [
          `If you are a copyright owner, or authorised to act for one, and believe that something on or through this site infringes your rights, send a written notice to ${E} with the subject line "DMCA Notice". A valid notice should include:`,
        ],
        ul: [
          'Your full name, your role, and your contact details (email address and, if possible, postal address).',
          'A description of the copyrighted work you say has been infringed.',
          'The exact URL(s) on musicaldown.se (or a clear description) of the material you want reviewed.',
          'A statement that you have a good-faith belief that the use is not authorised by the copyright owner, its agent or the law.',
          'A statement, made under penalty of perjury, that the information in your notice is accurate and that you are the owner or authorised to act for the owner.',
          'Your physical or electronic signature.',
        ],
      },
      {
        h: 'What happens next',
        p: [
          'We review complete notices promptly and may remove or disable access to the material where appropriate. Because the original content is hosted by TikTok, you may also need to report it to TikTok directly through its own copyright reporting process; removal there is what actually takes the content offline.',
          'Incomplete notices may not be actionable. Knowingly submitting a false notice can have legal consequences.',
        ],
      },
      {
        h: 'Counter-notice',
        p: [
          `If you believe material was removed by mistake, contact ${E} with the URL concerned, a statement that you believe the removal was an error, and your contact details. We may forward the details to the party who sent the original notice.`,
        ],
      },
      {
        h: 'Repeat infringers',
        p: ['We may restrict access to the service for anyone who is repeatedly reported for infringing the rights of others.'],
      },
      {
        h: 'Contact',
        p: [`Copyright and takedown requests: ${E}.`],
      },
    ],
  },
  es: {
    metaTitle: 'Política de DMCA y derechos de autor | MusicallyDown',
    metaDescription:
      'Cómo gestiona MusicallyDown los derechos de autor. Descubre cómo denunciar una infracción y qué debe incluir un aviso DMCA válido.',
    title: 'Política de DMCA y derechos de autor',
    updatedLabel: 'Última actualización',
    crumb: 'DMCA / Derechos de autor',
    intro:
      'MusicallyDown respeta los derechos de propiedad intelectual y espera lo mismo de sus visitantes. Esta página explica cómo se gestionan los derechos de autor en el sitio y cómo pueden contactarnos los titulares de derechos.',
    sections: [
      {
        h: 'Qué aloja y qué no aloja MusicallyDown',
        p: [
          'MusicallyDown es una herramienta. No aloja, almacena ni publica videos, sonidos o imágenes de TikTok en sus propios servidores. La herramienta procesa un enlace público que envía el visitante y devuelve las opciones de archivo que ofrece la plataforma de origen. El contenido original permanece en TikTok y pertenece a sus creadores.',
        ],
      },
      {
        h: 'Responsabilidad del usuario',
        p: [
          'Los visitantes solo deben guardar contenido propio o para el que tengan permiso. Guardar un archivo no otorga ningún derecho a copiarlo, republicarlo, venderlo ni explotarlo de otro modo. Consulta nuestros Términos del servicio y el Aviso legal.',
        ],
      },
      {
        h: 'Cómo denunciar una infracción de derechos de autor',
        p: [
          `Si eres titular de derechos de autor, o estás autorizado a actuar en su nombre, y crees que algo en este sitio o a través de él infringe tus derechos, envía un aviso por escrito a ${E} con el asunto "DMCA Notice". Un aviso válido debe incluir:`,
        ],
        ul: [
          'Tu nombre completo, tu cargo y tus datos de contacto (correo electrónico y, si es posible, dirección postal).',
          'Una descripción de la obra protegida que consideras infringida.',
          'La URL exacta en musicaldown.se (o una descripción clara) del material que quieres que revisemos.',
          'Una declaración de buena fe de que el uso no está autorizado por el titular, su representante o la ley.',
          'Una declaración, bajo pena de perjurio, de que la información del aviso es exacta y de que eres el titular o estás autorizado a actuar en su nombre.',
          'Tu firma física o electrónica.',
        ],
      },
      {
        h: 'Qué ocurre después',
        p: [
          'Revisamos con prontitud los avisos completos y, cuando proceda, podemos eliminar o desactivar el acceso al material. Como el contenido original está alojado en TikTok, quizá también debas denunciarlo directamente en TikTok mediante su proceso de derechos de autor; allí es donde el contenido se retira realmente.',
          'Los avisos incompletos pueden no ser procesables. Enviar a sabiendas un aviso falso puede tener consecuencias legales.',
        ],
      },
      {
        h: 'Contraaviso',
        p: [
          `Si crees que se eliminó material por error, escribe a ${E} con la URL afectada, una declaración de que la eliminación fue un error y tus datos de contacto. Podemos reenviar los datos a quien envió el aviso original.`,
        ],
      },
      {
        h: 'Infractores reincidentes',
        p: ['Podemos restringir el acceso al servicio a quienes sean denunciados repetidamente por infringir derechos de terceros.'],
      },
      { h: 'Contacto', p: [`Solicitudes de derechos de autor y retirada: ${E}.`] },
    ],
  },
  id: {
    metaTitle: 'Kebijakan DMCA & Hak Cipta | MusicallyDown',
    metaDescription:
      'Cara MusicallyDown menangani hak cipta. Pelajari cara melaporkan pelanggaran dan isi pemberitahuan DMCA yang sah.',
    title: 'Kebijakan DMCA & Hak Cipta',
    updatedLabel: 'Terakhir diperbarui',
    crumb: 'DMCA / Hak Cipta',
    intro:
      'MusicallyDown menghormati hak kekayaan intelektual dan mengharapkan hal yang sama dari pengunjungnya. Halaman ini menjelaskan bagaimana hak cipta ditangani di situs ini dan bagaimana pemegang hak dapat menghubungi kami.',
    sections: [
      {
        h: 'Apa yang dihosting dan tidak dihosting MusicallyDown',
        p: [
          'MusicallyDown adalah sebuah alat. Situs ini tidak menghosting, menyimpan, atau menerbitkan video, suara, maupun gambar TikTok di servernya sendiri. Alat ini memproses tautan publik yang dikirim pengunjung dan menampilkan opsi file yang disediakan platform sumber. Konten asli tetap berada di TikTok dan menjadi milik kreatornya.',
        ],
      },
      {
        h: 'Tanggung jawab pengguna',
        p: [
          'Pengunjung hanya boleh menyimpan konten milik sendiri atau yang sudah mendapat izin. Menyimpan file tidak memberi hak untuk menyalin, menerbitkan ulang, menjual, atau memanfaatkannya dengan cara lain. Lihat Ketentuan Layanan dan Disclaimer kami.',
        ],
      },
      {
        h: 'Melaporkan pelanggaran hak cipta',
        p: [
          `Jika Anda pemegang hak cipta, atau berwenang bertindak atas namanya, dan yakin ada materi di situs ini yang melanggar hak Anda, kirim pemberitahuan tertulis ke ${E} dengan subjek "DMCA Notice". Pemberitahuan yang sah harus memuat:`,
        ],
        ul: [
          'Nama lengkap, jabatan, dan kontak Anda (email dan, jika bisa, alamat surat).',
          'Deskripsi karya berhak cipta yang menurut Anda dilanggar.',
          'URL tepat di musicaldown.se (atau deskripsi yang jelas) dari materi yang ingin ditinjau.',
          'Pernyataan itikad baik bahwa penggunaan tersebut tidak diizinkan oleh pemegang hak cipta, kuasanya, atau hukum.',
          'Pernyataan di bawah sumpah palsu bahwa informasi dalam pemberitahuan benar dan Anda adalah pemegang hak atau berwenang bertindak atas namanya.',
          'Tanda tangan fisik atau elektronik Anda.',
        ],
      },
      {
        h: 'Apa yang terjadi berikutnya',
        p: [
          'Kami segera meninjau pemberitahuan yang lengkap dan, bila sesuai, dapat menghapus atau menonaktifkan akses ke materi tersebut. Karena konten aslinya dihosting oleh TikTok, Anda mungkin juga perlu melapornya langsung ke TikTok melalui proses hak ciptanya; penghapusan di sana yang benar-benar menurunkan konten.',
          'Pemberitahuan yang tidak lengkap mungkin tidak dapat ditindaklanjuti. Mengirim pemberitahuan palsu dengan sengaja dapat berakibat hukum.',
        ],
      },
      {
        h: 'Pemberitahuan tandingan',
        p: [
          `Jika Anda yakin materi dihapus karena kesalahan, hubungi ${E} dengan URL terkait, pernyataan bahwa penghapusan itu keliru, dan kontak Anda. Kami dapat meneruskan detailnya kepada pihak yang mengirim pemberitahuan awal.`,
        ],
      },
      {
        h: 'Pelanggar berulang',
        p: ['Kami dapat membatasi akses ke layanan bagi siapa pun yang berulang kali dilaporkan melanggar hak orang lain.'],
      },
      { h: 'Kontak', p: [`Permintaan hak cipta dan penghapusan: ${E}.`] },
    ],
  },
  vi: {
    metaTitle: 'Chính sách DMCA & Bản quyền | MusicallyDown',
    metaDescription:
      'Cách MusicallyDown xử lý bản quyền. Tìm hiểu cách báo cáo vi phạm và thông báo DMCA hợp lệ cần có những gì.',
    title: 'Chính sách DMCA & Bản quyền',
    updatedLabel: 'Cập nhật lần cuối',
    crumb: 'DMCA / Bản quyền',
    intro:
      'MusicallyDown tôn trọng quyền sở hữu trí tuệ và mong người truy cập cũng làm như vậy. Trang này giải thích cách xử lý bản quyền trên trang web và cách chủ sở hữu quyền liên hệ với chúng tôi.',
    sections: [
      {
        h: 'MusicallyDown lưu trữ và không lưu trữ gì',
        p: [
          'MusicallyDown là một công cụ. Trang không lưu trữ, giữ hay đăng tải video, âm thanh hoặc hình ảnh TikTok trên máy chủ của mình. Công cụ xử lý liên kết công khai mà người dùng gửi và trả về các tùy chọn tệp do nền tảng nguồn cung cấp. Nội dung gốc vẫn nằm trên TikTok và thuộc về người sáng tạo.',
        ],
      },
      {
        h: 'Trách nhiệm của người dùng',
        p: [
          'Người truy cập chỉ nên lưu nội dung do mình sở hữu hoặc đã được cho phép. Việc lưu tệp không mang lại quyền sao chép, đăng lại, bán hay khai thác nội dung. Xem Điều khoản dịch vụ và Tuyên bố miễn trừ của chúng tôi.',
        ],
      },
      {
        h: 'Báo cáo vi phạm bản quyền',
        p: [
          `Nếu bạn là chủ sở hữu bản quyền, hoặc được ủy quyền thay mặt chủ sở hữu, và cho rằng nội dung trên hoặc thông qua trang này vi phạm quyền của bạn, hãy gửi thông báo bằng văn bản tới ${E} với tiêu đề "DMCA Notice". Thông báo hợp lệ cần có:`,
        ],
        ul: [
          'Họ tên đầy đủ, vai trò và thông tin liên hệ (email và, nếu có thể, địa chỉ bưu điện).',
          'Mô tả tác phẩm có bản quyền mà bạn cho là bị xâm phạm.',
          'URL chính xác trên musicaldown.se (hoặc mô tả rõ ràng) của nội dung cần xem xét.',
          'Tuyên bố với thiện chí rằng việc sử dụng không được chủ sở hữu, người đại diện hoặc pháp luật cho phép.',
          'Tuyên bố, chịu trách nhiệm về khai man, rằng thông tin trong thông báo là chính xác và bạn là chủ sở hữu hoặc được ủy quyền.',
          'Chữ ký vật lý hoặc điện tử của bạn.',
        ],
      },
      {
        h: 'Điều gì xảy ra tiếp theo',
        p: [
          'Chúng tôi xem xét kịp thời các thông báo đầy đủ và có thể gỡ hoặc vô hiệu hóa quyền truy cập vào nội dung khi phù hợp. Vì nội dung gốc do TikTok lưu trữ, bạn cũng có thể cần báo cáo trực tiếp cho TikTok qua quy trình bản quyền của họ; việc gỡ bỏ ở đó mới thực sự đưa nội dung xuống.',
          'Thông báo không đầy đủ có thể không được xử lý. Cố ý gửi thông báo sai sự thật có thể dẫn đến hậu quả pháp lý.',
        ],
      },
      {
        h: 'Phản hồi (counter-notice)',
        p: [
          `Nếu bạn cho rằng nội dung bị gỡ nhầm, hãy liên hệ ${E} kèm URL liên quan, tuyên bố rằng việc gỡ là nhầm lẫn và thông tin liên hệ của bạn. Chúng tôi có thể chuyển thông tin cho bên đã gửi thông báo ban đầu.`,
        ],
      },
      {
        h: 'Người vi phạm nhiều lần',
        p: ['Chúng tôi có thể hạn chế quyền truy cập dịch vụ đối với người bị báo cáo nhiều lần vì xâm phạm quyền của người khác.'],
      },
      { h: 'Liên hệ', p: [`Yêu cầu về bản quyền và gỡ nội dung: ${E}.`] },
    ],
  },
};

export const disclaimer: Record<Lang, LegalDoc> = {
  en: {
    metaTitle: 'Disclaimer | MusicallyDown',
    metaDescription:
      'MusicallyDown is an independent tool, not affiliated with TikTok or ByteDance. Read the disclaimer on use, content ownership and availability.',
    title: 'Disclaimer',
    updatedLabel: 'Last updated',
    crumb: 'Disclaimer',
    intro: 'Please read this disclaimer before using MusicallyDown.',
    sections: [
      {
        h: 'Independent service',
        p: ['MusicallyDown is an independent tool. It is not affiliated with, endorsed by or sponsored by TikTok or ByteDance Ltd. TikTok is a trademark of its respective owner and is used only to describe the content the tool works with.'],
      },
      {
        h: 'Content ownership and permission',
        p: ['All videos, sounds and images belong to their creators or rights holders. You are responsible for making sure you have the right to save and use any content. Do not repost content as your own, and do not use it commercially without permission.'],
      },
      {
        h: 'No guarantee of availability or quality',
        p: ['Available formats, resolutions and audio options depend on the original video and on the source platform, and can change or stop working at any time. We do not promise HD, 1080p, 4K, watermark-free or MP3 output for any particular link.'],
      },
      {
        h: 'Use at your own risk',
        p: ['The service is provided “as is” and “as available”, without warranties of any kind. To the extent permitted by law, MusicallyDown is not liable for any loss or damage arising from the use of the site or of files you download with it.'],
      },
      {
        h: 'Advertising and third-party links',
        p: ['The site is supported by advertising and may link to third-party sites. We do not control third-party content and are not responsible for it.'],
      },
      {
        h: 'Not legal advice',
        p: ['Information on this site is general and is not legal advice. Copyright rules differ between countries.'],
      },
      { h: 'Contact', p: [`Questions about this disclaimer: ${E}.`] },
    ],
  },
  es: {
    metaTitle: 'Aviso legal | MusicallyDown',
    metaDescription:
      'MusicallyDown es una herramienta independiente, sin afiliación con TikTok ni ByteDance. Lee el aviso sobre uso, propiedad del contenido y disponibilidad.',
    title: 'Aviso legal',
    updatedLabel: 'Última actualización',
    crumb: 'Aviso legal',
    intro: 'Lee este aviso antes de usar MusicallyDown.',
    sections: [
      {
        h: 'Servicio independiente',
        p: ['MusicallyDown es una herramienta independiente. No está afiliada, respaldada ni patrocinada por TikTok ni por ByteDance Ltd. TikTok es una marca de su respectivo propietario y se usa solo para describir el contenido con el que funciona la herramienta.'],
      },
      {
        h: 'Propiedad del contenido y permiso',
        p: ['Todos los videos, sonidos e imágenes pertenecen a sus creadores o titulares de derechos. Eres responsable de asegurarte de tener derecho a guardar y usar cualquier contenido. No republiques contenido como propio ni lo uses con fines comerciales sin permiso.'],
      },
      {
        h: 'Sin garantía de disponibilidad ni calidad',
        p: ['Los formatos, resoluciones y opciones de audio dependen del video original y de la plataforma de origen, y pueden cambiar o dejar de funcionar en cualquier momento. No prometemos HD, 1080p, 4K, sin marca de agua ni MP3 para ningún enlace en particular.'],
      },
      {
        h: 'Uso bajo tu responsabilidad',
        p: ['El servicio se ofrece “tal cual” y “según disponibilidad”, sin garantías de ningún tipo. En la medida permitida por la ley, MusicallyDown no es responsable de pérdidas o daños derivados del uso del sitio o de los archivos descargados con él.'],
      },
      {
        h: 'Publicidad y enlaces de terceros',
        p: ['El sitio se financia con publicidad y puede enlazar a sitios de terceros. No controlamos el contenido de terceros ni nos hacemos responsables de él.'],
      },
      {
        h: 'No es asesoramiento legal',
        p: ['La información de este sitio es general y no constituye asesoramiento legal. Las normas de derechos de autor varían entre países.'],
      },
      { h: 'Contacto', p: [`Preguntas sobre este aviso: ${E}.`] },
    ],
  },
  id: {
    metaTitle: 'Disclaimer | MusicallyDown',
    metaDescription:
      'MusicallyDown adalah alat independen, tidak berafiliasi dengan TikTok atau ByteDance. Baca disclaimer tentang penggunaan, kepemilikan konten, dan ketersediaan.',
    title: 'Disclaimer',
    updatedLabel: 'Terakhir diperbarui',
    crumb: 'Disclaimer',
    intro: 'Harap baca disclaimer ini sebelum menggunakan MusicallyDown.',
    sections: [
      {
        h: 'Layanan independen',
        p: ['MusicallyDown adalah alat independen. Tidak berafiliasi dengan, didukung oleh, atau disponsori oleh TikTok maupun ByteDance Ltd. TikTok adalah merek dagang pemiliknya dan hanya digunakan untuk menjelaskan konten yang didukung alat ini.'],
      },
      {
        h: 'Kepemilikan konten dan izin',
        p: ['Semua video, suara, dan gambar milik kreator atau pemegang haknya. Anda bertanggung jawab memastikan berhak menyimpan dan menggunakan konten apa pun. Jangan mengunggah ulang konten sebagai milik sendiri dan jangan menggunakannya secara komersial tanpa izin.'],
      },
      {
        h: 'Tanpa jaminan ketersediaan atau kualitas',
        p: ['Format, resolusi, dan opsi audio bergantung pada video asli dan platform sumber, serta dapat berubah atau berhenti berfungsi kapan saja. Kami tidak menjanjikan hasil HD, 1080p, 4K, tanpa watermark, atau MP3 untuk tautan tertentu.'],
      },
      {
        h: 'Gunakan dengan risiko sendiri',
        p: ['Layanan disediakan “apa adanya” dan “sesuai ketersediaan”, tanpa jaminan apa pun. Sejauh diizinkan hukum, MusicallyDown tidak bertanggung jawab atas kerugian atau kerusakan akibat penggunaan situs atau file yang diunduh.'],
      },
      {
        h: 'Iklan dan tautan pihak ketiga',
        p: ['Situs ini didukung iklan dan dapat menautkan ke situs pihak ketiga. Kami tidak mengendalikan konten pihak ketiga dan tidak bertanggung jawab atasnya.'],
      },
      {
        h: 'Bukan nasihat hukum',
        p: ['Informasi di situs ini bersifat umum dan bukan nasihat hukum. Aturan hak cipta berbeda antarnegara.'],
      },
      { h: 'Kontak', p: [`Pertanyaan tentang disclaimer ini: ${E}.`] },
    ],
  },
  vi: {
    metaTitle: 'Tuyên bố miễn trừ | MusicallyDown',
    metaDescription:
      'MusicallyDown là công cụ độc lập, không liên kết với TikTok hay ByteDance. Đọc tuyên bố về việc sử dụng, quyền sở hữu nội dung và tính khả dụng.',
    title: 'Tuyên bố miễn trừ',
    updatedLabel: 'Cập nhật lần cuối',
    crumb: 'Tuyên bố miễn trừ',
    intro: 'Vui lòng đọc tuyên bố này trước khi sử dụng MusicallyDown.',
    sections: [
      {
        h: 'Dịch vụ độc lập',
        p: ['MusicallyDown là công cụ độc lập. Không liên kết, không được TikTok hay ByteDance Ltd. xác nhận hoặc tài trợ. TikTok là nhãn hiệu của chủ sở hữu tương ứng và chỉ được dùng để mô tả nội dung mà công cụ hỗ trợ.'],
      },
      {
        h: 'Quyền sở hữu nội dung và sự cho phép',
        p: ['Mọi video, âm thanh và hình ảnh thuộc về người sáng tạo hoặc chủ sở hữu quyền. Bạn chịu trách nhiệm đảm bảo mình có quyền lưu và sử dụng nội dung. Không đăng lại nội dung như của mình và không dùng cho mục đích thương mại khi chưa được phép.'],
      },
      {
        h: 'Không đảm bảo về tính khả dụng hoặc chất lượng',
        p: ['Định dạng, độ phân giải và tùy chọn âm thanh phụ thuộc vào video gốc và nền tảng nguồn, có thể thay đổi hoặc ngừng hoạt động bất cứ lúc nào. Chúng tôi không cam kết HD, 1080p, 4K, không logo hay MP3 cho bất kỳ liên kết cụ thể nào.'],
      },
      {
        h: 'Sử dụng với rủi ro của bạn',
        p: ['Dịch vụ được cung cấp “nguyên trạng” và “theo khả năng đáp ứng”, không kèm bảo đảm nào. Trong phạm vi pháp luật cho phép, MusicallyDown không chịu trách nhiệm về tổn thất hoặc thiệt hại phát sinh từ việc dùng trang hay các tệp tải về.'],
      },
      {
        h: 'Quảng cáo và liên kết bên thứ ba',
        p: ['Trang được duy trì nhờ quảng cáo và có thể liên kết tới trang của bên thứ ba. Chúng tôi không kiểm soát nội dung bên thứ ba và không chịu trách nhiệm về nội dung đó.'],
      },
      {
        h: 'Không phải tư vấn pháp lý',
        p: ['Thông tin trên trang này mang tính chung và không phải tư vấn pháp lý. Quy định bản quyền khác nhau giữa các quốc gia.'],
      },
      { h: 'Liên hệ', p: [`Câu hỏi về tuyên bố này: ${E}.`] },
    ],
  },
};
