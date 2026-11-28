/** Vietnamese versions of the intent landing pages (see intent-pages.ts for the English originals). */
import type { IntentPage, IntentSlug } from './intent-pages';
import { p, ul, steps, callout } from './intent-shared';

export const LABELS_VI: Record<IntentSlug, string> = {
  'tiktok-video-downloader-hd': 'Tải TikTok HD',
  'tiktok-no-watermark': 'Tải TikTok không logo',
  'tiktok-sound-downloader': 'Tải âm thanh TikTok',
  'tiktok-slideshow-downloader': 'Tải slideshow TikTok',
  'download-tiktok-iphone': 'Tải TikTok trên iPhone',
  'download-tiktok-android': 'Tải TikTok trên Android',
  'musically-down': 'Hướng dẫn MusicallyDown',
  'musicallydown-app': "Ứng dụng & APK MusicallyDown",
  'supported-platforms': "Nền tảng được hỗ trợ",
};

const resp = callout(
  '**Hãy tải xuống có trách nhiệm.** Chỉ lưu những video do bạn tạo ra hoặc bạn có quyền giữ, tôn trọng quyền của người sáng tạo và điều khoản của TikTok, và ghi nguồn người sáng tạo gốc nếu bạn chia sẻ tác phẩm của họ khi được đồng ý. MusicallyDown là công cụ độc lập và không liên kết với TikTok.'
);

export const PAGES_VI: Record<IntentSlug, IntentPage> = {
  'tiktok-video-downloader-hd': {
    crumb: LABELS_VI['tiktok-video-downloader-hd'],
    content: {
      metaTitle: 'Tải Video TikTok HD – Miễn phí | MusicallyDown',
      metaDescription:
        'Lưu video TikTok công khai với chất lượng cao nhất mà nguồn cung cấp. Miễn phí, không cần ứng dụng, không cần đăng ký.',
      heroTitleStart: 'Tải Video TikTok HD:',
      heroTitleHighlight: 'chất lượng tốt nhất hiện có',
      heroDescription:
        'Dán liên kết video TikTok công khai và chọn bản MP4 có độ phân giải cao nhất. Miễn phí, không cần đăng ký.',
      intro: [
        'Một video TikTok trông sắc nét trong ứng dụng có thể bị mờ và vỡ hạt sau khi lưu, nhất là khi tệp bị nén hai lần trên đường đi. Nếu bạn muốn giữ lại một đoạn để chỉnh sửa, thuyết trình hoặc đơn giản là có một bản sạch trên điện thoại, chất lượng bản tải xuống rất quan trọng.',
        'Công cụ tải TikTok HD này đọc liên kết video công khai và hiển thị các tùy chọn MP4 có cho bài đăng đó. Nếu có phiên bản độ phân giải cao hơn, nó sẽ được hiển thị trước. Nếu không, bạn sẽ thấy những gì bản gốc hỗ trợ, thay vì một lời hứa không ai giữ được.',
      ],
      tocTitle: 'Trong hướng dẫn này',
      sections: [
        {
          id: 'hd-la-gi',
          title: '“HD” thực sự nghĩa là gì với bản tải TikTok',
          blocks: [
            p('Video TikTok thường theo chiều dọc, nên “HD” cho biết số điểm ảnh ở cạnh dài: 1280 với 720p, 1920 với 1080p và nhiều hơn với 2K và 4K. Bản tải chỉ có thể bằng với những gì người đăng đã xuất bản. Video quay và đăng ở 1080p có thể lưu ở 1080p. Video đăng ở 480p sẽ không bao giờ thành 1080p, dù công cụ nào tuyên bố gì.'),
            p('Độ phân giải cũng không phải là tất cả. Bitrate, tức lượng dữ liệu dùng cho mỗi giây video, quyết định đoạn 1080p trông sắc nét hay nhòe. Vì vậy hai video cùng độ phân giải có thể trông rất khác nhau sau khi lưu.'),
          ],
        },
        {
          id: 'cach-tai',
          title: 'Cách tải video TikTok chất lượng HD',
          blocks: [
            steps(
              ['Sao chép liên kết video.', 'Trong TikTok, mở video, nhấn Chia sẻ rồi Sao chép liên kết. Tài khoản phải công khai và liên kết phải trỏ đến đúng video.'],
              ['Dán vào phía trên và gửi.', 'Trang sẽ kiểm tra bài đăng và liệt kê các định dạng có sẵn.'],
              ['Chọn tùy chọn MP4 cao nhất.', 'Chọn chất lượng cao nhất trong danh sách rồi lưu tệp. Nếu chỉ có một tùy chọn MP4, đó là phiên bản tốt nhất công cụ này lấy được cho bài đăng đó.']
            ),
          ],
        },
        {
          id: 'meo',
          title: 'Mẹo để có bản sạch nhất',
          blocks: [
            ul(
              'Tải một lần trực tiếp từ bài đăng gốc, đừng lưu lại bản đã được chia sẻ qua ứng dụng nhắn tin vì chúng bị nén lại.',
              'Dùng kết nối tốt trong lúc lưu để quá trình truyền không bị gián đoạn.',
              'Nếu cần bản sạch để chỉnh sửa, hãy xin tệp gốc từ người sáng tạo; bản tải không thể tốt hơn bản đã đăng.',
              'Kiểm tra thông tin của tệp đã lưu trên thiết bị để xác nhận độ phân giải trước khi dựng dự án.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'Câu hỏi thường gặp về tải TikTok HD',
      faq: [
        { question: 'Tôi có thể tải TikTok 4K không?', answer: 'Chỉ khi bản gốc là 4K và bài đăng cung cấp phiên bản đó. Nhiều video được đăng ở 720p hoặc 1080p và không thể nâng cấp.' },
        { question: 'Vì sao video đã lưu trông kém hơn trong ứng dụng?', answer: 'Ứng dụng có thể phát bản đã tối ưu, còn các ứng dụng như WhatsApp hoặc Instagram nén lại tệp khi chia sẻ. Hãy tải trực tiếp từ bài đăng và kiểm tra tệp trước khi gửi lại.' },
        { question: 'Tải HD có miễn phí không?', answer: 'Có. Không cần đăng ký, không có gói thuê bao và không phải cài ứng dụng.' },
        { question: 'Có dùng được cho video riêng tư không?', answer: 'Không. Chỉ đọc được video công khai. Bài đăng riêng tư, đã xóa hoặc bị hạn chế theo khu vực có thể không tải được.' },
        { question: 'Tệp được lưu ở đâu?', answer: 'Ở thư mục tải xuống của trình duyệt. Trên điện thoại, xem hướng dẫn cho [iPhone](/download-tiktok-iphone) và [Android](/download-tiktok-android).' },
      ],
      finalTitle: 'Lưu video TikTok với chất lượng tốt nhất hiện có',
      finalText: 'Dán liên kết công khai, chọn tùy chọn MP4 cao nhất và giữ một bản sạch. Nếu chỉ cần âm thanh, hãy dùng [công cụ chuyển TikTok sang MP3](/tiktok-mp3).',
      ctaLabel: 'Dán liên kết TikTok',
      moreText: 'Muốn một bản sạch? Xem [tải TikTok không logo](/tiktok-no-watermark).',
    },
  },

  'tiktok-no-watermark': {
    crumb: LABELS_VI['tiktok-no-watermark'],
    content: {
      metaTitle: 'Tải TikTok Không Logo – Miễn phí | MusicallyDown',
      metaDescription:
        'Lưu video TikTok công khai không có logo chuyển động khi có bản sạch. Miễn phí, không cần ứng dụng, không cần đăng ký.',
      heroTitleStart: 'Tải TikTok',
      heroTitleHighlight: 'không logo',
      heroDescription:
        'Dán liên kết video TikTok công khai và lưu bản sạch khi bài đăng có cung cấp. Miễn phí, không cần đăng ký.',
      intro: [
        'Logo TikTok chạy quanh khung hình và tên người dùng trên video đã lưu thì ổn khi chia sẻ nhanh, nhưng gây vướng khi bạn dùng lại đoạn video trong bản dựng riêng, bài thuyết trình hoặc video phản ứng. Phần lớn mọi người cần một bản sạch.',
        'Trang này kiểm tra liên kết video TikTok công khai và hiển thị bản MP4 không logo khi có cho bài đăng đó. Bạn dán liên kết, chọn tùy chọn và tệp được lưu vào thiết bị.',
      ],
      tocTitle: 'Trong hướng dẫn này',
      sections: [
        {
          id: 'tai-sao',
          title: 'Vì sao video TikTok có logo',
          blocks: [
            p('Khi bạn dùng nút Lưu trong ứng dụng, TikTok thêm logo động và tên người sáng tạo. Nó vừa là ghi nhận cho tác giả gốc vừa là thương hiệu của nền tảng. Loại bỏ nó khác với việc chỉ chọn một nguồn tải khác: công cụ chỉ có thể đưa ra tệp sạch nếu tệp đó tồn tại cho bài đăng.'),
            p('Vì thế mức độ sẵn có khác nhau. Có bài đăng cung cấp bản sạch, có bài thì không. Khi không có, câu trả lời trung thực là không có, chứ không phải một mẹo ẩn lúc nào cũng được.'),
          ],
        },
        {
          id: 'cach-luu',
          title: 'Cách lưu TikTok không logo',
          blocks: [
            steps(
              ['Sao chép liên kết.', 'Mở video TikTok, nhấn Chia sẻ rồi Sao chép liên kết. Video phải công khai.'],
              ['Dán và gửi.', 'Dán liên kết vào ô ở đầu trang này và chờ vài giây.'],
              ['Chọn bản MP4 sạch.', 'Nếu có tùy chọn không logo, hãy chọn và lưu. Nếu không có, bản gốc là bản hiện có.']
            ),
          ],
        },
        {
          id: 'ghi-nguon',
          title: 'Ghi nguồn người sáng tạo đúng cách',
          blocks: [
            p('Video sạch không có nghĩa là bạn muốn dùng thế nào cũng được. Nếu dùng lại tác phẩm của người khác, hãy xin phép và nêu tên người sáng tạo trong bài đăng, phần mô tả hoặc phần ghi công. Nhiều người sáng tạo đồng ý khi được hỏi lịch sự, và việc ghi nguồn giúp bạn tránh bị gỡ nội dung.'),
            ul('Hỏi người sáng tạo trước khi dùng đoạn video cho mục đích thương mại.', 'Nhắc đến tài khoản của họ ở bất cứ nơi nào bạn đăng.', 'Không giới thiệu video của người khác như của mình.'),
            resp,
          ],
        },
      ],
      faqTitle: 'Câu hỏi thường gặp về TikTok không logo',
      faq: [
        { question: 'Video TikTok nào cũng có bản không logo không?', answer: 'Không. Nhiều bài đăng công khai có bản sạch nhưng không phải tất cả, và mức độ sẵn có có thể thay đổi. Nếu không được liệt kê, có thể chỉ tồn tại bản có logo.' },
        { question: 'Xóa logo có hợp pháp không?', answer: 'Quy định phụ thuộc vào quốc gia của bạn và cách bạn dùng video. Dùng cá nhân được phép khác với đăng lại tác phẩm của người khác. Khi còn nghi ngờ, hãy hỏi người sáng tạo và đọc điều khoản của TikTok.' },
        { question: 'Tệp không logo có bị giảm chất lượng không?', answer: 'Không tự nó làm giảm. Chất lượng phụ thuộc vào phiên bản mà bài đăng cung cấp. Xem [hướng dẫn HD](/tiktok-video-downloader-hd).' },
        { question: 'Tôi có cần tài khoản không?', answer: 'Không. Bạn không bao giờ phải nhập mật khẩu TikTok ở đây.' },
        { question: 'Tôi có thể chỉ lấy âm thanh không?', answer: 'Có, hãy dùng [công cụ chuyển TikTok sang MP3](/tiktok-mp3).' },
      ],
      finalTitle: 'Bản sạch, kèm ghi nguồn đúng người',
      finalText: 'Dán liên kết công khai, chọn MP4 sạch khi có và ghi nguồn người sáng tạo nếu bạn chia sẻ.',
      ctaLabel: 'Dán liên kết TikTok',
      moreText: 'Cần dùng trên điện thoại? Xem [iPhone](/download-tiktok-iphone) hoặc [Android](/download-tiktok-android).',
    },
  },

  'tiktok-sound-downloader': {
    crumb: LABELS_VI['tiktok-sound-downloader'],
    content: {
      metaTitle: 'Tải Âm Thanh TikTok – Miễn phí | MusicallyDown',
      metaDescription:
        'Lưu âm thanh từ video TikTok công khai thành tệp audio. Miễn phí, không cần ứng dụng hay đăng ký. Dùng được trên iPhone, Android và máy tính.',
      heroTitleStart: 'Tải âm thanh TikTok:',
      heroTitleHighlight: 'chỉ lưu phần audio',
      heroDescription:
        'Dán liên kết video TikTok công khai và lưu âm thanh thành tệp audio riêng khi bài đăng có cung cấp. Miễn phí, không cần đăng ký.',
      intro: [
        'Âm thanh TikTok lan nhanh: một đoạn lồng tiếng, một bản remix hay một clip thịnh hành xuất hiện khắp nơi trong một tuần. Lưu âm thanh là việc khác với lưu video, và cần một công cụ trả về tệp audio sạch chứ không phải đoạn clip kèm hình.',
        'Công cụ tải âm thanh TikTok này đọc liên kết video công khai và, khi có audio, cho phép bạn chỉ lưu phần âm thanh. Dùng để giữ một đoạn tham khảo, nhận diện bài hát hoặc xây thư viện âm thanh của riêng bạn.',
        "Trang này nói về chính âm thanh: âm thanh gốc hoặc bản nhạc được dùng trong video. Để chuyển cả video thành tệp MP3, hãy dùng [TikTok sang MP3](/tiktok-mp3). Để nhận biết bài hát, xem [cách tìm bài hát trong video TikTok](/blog/find-song-in-tiktok-video).",
      ],
      tocTitle: 'Trong hướng dẫn này',
      sections: [
        {
          id: 'am-thanh-bai-hat',
          title: 'Âm thanh TikTok không phải lúc nào cũng là bài hát đầy đủ',
          blocks: [
            p('Phần lớn âm thanh TikTok là đoạn trích ngắn, bản chỉnh sửa hoặc remix. Tệp bạn lưu chính là đoạn đó, nên đừng kỳ vọng một bản nhạc trọn vẹn. Nếu bạn thích, hãy dùng đoạn đã lưu để tìm bài gốc rồi lấy bản đầy đủ từ dịch vụ âm nhạc có bản quyền.'),
            p('Âm thanh gốc, như lồng tiếng hoặc audio thu trực tiếp, thì khác: đó chính là audio của video và tệp đã lưu chứa toàn bộ.'),
          ],
        },
        {
          id: 'cach-tai',
          title: 'Cách tải âm thanh TikTok',
          blocks: [
            steps(
              ['Sao chép liên kết video.', 'Mở video dùng âm thanh đó, nhấn Chia sẻ rồi Sao chép liên kết.'],
              ['Dán vào ô phía trên.', 'Gửi liên kết và chờ các tùy chọn tải.'],
              ['Chọn tùy chọn audio.', 'Nếu xuất hiện nút audio hoặc MP3, hãy nhấn để lưu tệp. Nếu không có, bài đăng đó có thể không cung cấp audio riêng.']
            ),
            p('Để tìm hiểu kỹ hơn về chính định dạng audio, hãy đọc [hướng dẫn TikTok sang MP3](/tiktok-mp3).'),
          ],
        },
        {
          id: 'y-tuong',
          title: 'Mọi người dùng âm thanh đã lưu để làm gì',
          blocks: [
            ul(
              'Nghe ngoại tuyến khi di chuyển hoặc đi máy bay.',
              'Làm tham khảo khi lên kế hoạch cho video của riêng bạn.',
              'Dùng đoạn ngắn làm nhạc chuông hoặc âm báo.',
              'Lưu đoạn lồng tiếng tách khỏi video.',
              'Nghe đi nghe lại một đoạn để tìm ra tên bài hát.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'Câu hỏi thường gặp về tải âm thanh TikTok',
      faq: [
        { question: 'Tôi có thể tải mọi âm thanh TikTok không?', answer: 'Chỉ âm thanh của video công khai, và chỉ khi bài đăng cung cấp audio. Video riêng tư hoặc đã xóa không đọc được.' },
        { question: 'Tôi sẽ nhận được chất lượng audio nào?', answer: 'Chất lượng của bài đăng gốc. Công cụ chuyển đổi không thể thêm chi tiết chưa từng tồn tại.' },
        { question: 'Tôi có thể dùng âm thanh đã lưu trong video của mình không?', answer: 'Không tự động. Nhạc và bản ghi âm có thể được bảo vệ bản quyền. Hãy kiểm tra giấy phép hoặc dùng âm thanh của chính TikTok ngay trong ứng dụng.' },
        { question: 'Có lưu luôn video không?', answer: 'Không. Chọn tùy chọn audio và bạn chỉ nhận được âm thanh.' },
        { question: 'Có miễn phí không?', answer: 'Có, không cần đăng ký và không cài đặt gì.' },
      ],
      finalTitle: 'Giữ âm thanh, bỏ qua video',
      finalText: 'Dán liên kết công khai, chọn audio khi có và lưu đoạn clip. Sau đó tìm bài hát đầy đủ qua dịch vụ có bản quyền nếu bạn muốn cả bản nhạc.',
      ctaLabel: 'Dán liên kết TikTok',
      moreText: 'Thích cả video hơn? Xem [công cụ tải HD](/tiktok-video-downloader-hd).',
    },
  },

  'tiktok-slideshow-downloader': {
    crumb: LABELS_VI['tiktok-slideshow-downloader'],
    content: {
      metaTitle: 'Tải Slideshow TikTok – Miễn phí | MusicallyDown',
      metaDescription:
        'Lưu bài đăng ảnh và slideshow TikTok công khai. Dán liên kết và tải ảnh hoặc tệp slideshow khi có. Miễn phí, không cần đăng ký.',
      heroTitleStart: 'Tải slideshow TikTok:',
      heroTitleHighlight: 'lưu bài đăng ảnh',
      heroDescription:
        'Dán liên kết bài đăng ảnh hoặc slideshow TikTok công khai và lưu ảnh hoặc slideshow khi có. Miễn phí, không cần đăng ký.',
      intro: [
        'Không phải TikTok nào cũng là video. Bài đăng ảnh và slideshow lướt qua các ảnh tĩnh kèm nhạc, và mọi người lưu chúng để làm công thức nấu ăn, ý tưởng phối đồ, danh sách du lịch và bảng tham khảo. Chúng được lưu khác với video thông thường, nên đôi khi công cụ tải video thường không tìm thấy gì.',
        'Trang này đọc liên kết bài đăng ảnh công khai và hiển thị các tùy chọn tải có cho bài đó. Tùy bài đăng, đó có thể là từng ảnh, video slideshow hoặc cả hai.',
      ],
      tocTitle: 'Trong hướng dẫn này',
      sections: [
        {
          id: 'la-gi',
          title: 'Slideshow hay bài đăng ảnh TikTok là gì?',
          blocks: [
            p('Bài đăng ảnh là một bộ ảnh tĩnh trong băng chuyền có thể vuốt, thường kèm âm thanh nền. TikTok coi đây là một loại bài đăng riêng, tách biệt với video. Video slideshow thì tương tự, nhưng các ảnh đã được dựng sẵn thành một clip.'),
            p('Vì vậy những gì bạn lưu được phụ thuộc vào bài đăng. Có bài cung cấp ảnh gốc, có bài cung cấp slideshow đã dựng và có bài có thể chỉ có audio.'),
          ],
        },
        {
          id: 'cach-tai',
          title: 'Cách tải slideshow TikTok',
          blocks: [
            steps(
              ['Sao chép liên kết bài đăng.', 'Mở bài đăng ảnh, nhấn Chia sẻ rồi Sao chép liên kết.'],
              ['Dán vào phía trên và gửi.', 'Chờ vài giây trong lúc trang đọc bài đăng.'],
              ['Chọn thứ cần lưu.', 'Chọn ảnh hoặc tệp slideshow nếu được liệt kê. Nếu bài đăng không có tùy chọn tải, không thể lưu từ trang này.']
            ),
          ],
        },
        {
          id: 'meo',
          title: 'Mẹo khi lưu bài đăng ảnh',
          blocks: [
            ul(
              'Lưu ảnh khi bạn muốn dùng lại từng bức cho bảng cảm hứng.',
              'Lưu tệp slideshow khi bạn muốn giữ nguyên nhịp và âm thanh.',
              'Dùng tùy chọn audio nếu chỉ muốn nhạc; xem [công cụ tải âm thanh](/tiktok-sound-downloader).',
              'Kiểm tra ảnh có thuộc về người sáng tạo mà bạn định ghi nguồn hay không.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'Câu hỏi thường gặp về slideshow TikTok',
      faq: [
        { question: 'Vì sao liên kết video thường không dùng được cho bài đăng ảnh?', answer: 'Bài đăng ảnh được lưu trữ khác với video, nên công cụ phải đọc chúng như ảnh và audio chứ không phải một tệp video.' },
        { question: 'Tôi có thể lấy ảnh ở kích thước gốc không?', answer: 'Chỉ ở kích thước mà bài đăng cung cấp. Ảnh đã lưu không thể lớn hơn ảnh đã đăng.' },
        { question: 'Tôi có thể lưu nhạc của slideshow không?', answer: 'Thường là được, khi bài đăng đó có cung cấp audio. Xem [công cụ chuyển TikTok sang MP3](/tiktok-mp3).' },
        { question: 'Có dùng được trên điện thoại không?', answer: 'Có, xem hướng dẫn cho [iPhone](/download-tiktok-iphone) và [Android](/download-tiktok-android).' },
        { question: 'Có miễn phí không?', answer: 'Có, không cần tài khoản và không cần ứng dụng.' },
      ],
      finalTitle: 'Giữ cả ảnh lẫn âm thanh',
      finalText: 'Dán liên kết bài đăng ảnh công khai, rồi chọn ảnh, slideshow hoặc audio tùy theo những gì bài đăng cung cấp.',
      ctaLabel: 'Dán liên kết TikTok',
      moreText: 'Tìm bài đăng tồn tại ngắn? Xem [công cụ tải TikTok Stories](/download-tiktok-stories).',
    },
  },

  'download-tiktok-iphone': {
    crumb: LABELS_VI['download-tiktok-iphone'],
    content: {
      metaTitle: 'Cách Tải Video TikTok trên iPhone | MusicallyDown',
      metaDescription:
        'Cách lưu video TikTok công khai trên iPhone bằng Safari, không cần ứng dụng. Tìm tệp trong Tải xuống và chuyển sang Ảnh. Miễn phí, từng bước.',
      heroTitleStart: 'Tải video TikTok',
      heroTitleHighlight: 'trên iPhone',
      heroDescription:
        'Dán liên kết video TikTok công khai trong Safari, lưu MP4 rồi chuyển sang Ảnh. Không cần ứng dụng, không cần đăng ký.',
      intro: [
        'Trên iPhone, lưu một video TikTok kém rõ ràng hơn so với máy tính. Tệp không vào thư viện ảnh theo mặc định, và nhiều người bỏ cuộc khi bản tải dường như biến mất. Thực ra nó đã được lưu, chỉ là ở chỗ khác.',
        'Hướng dẫn này chỉ toàn bộ quy trình bằng Safari: sao chép liên kết, dán vào đây, lưu video, rồi chuyển sang Ảnh nếu bạn muốn có nó trong thư viện.',
      ],
      tocTitle: 'Trong hướng dẫn này',
      sections: [
        {
          id: 'cac-buoc',
          title: 'Lưu TikTok trên iPhone trong năm bước',
          blocks: [
            steps(
              ['Sao chép liên kết trong TikTok.', 'Mở video, nhấn Chia sẻ rồi Sao chép liên kết.'],
              ['Mở trang này trong Safari.', 'Safari xử lý tải xuống đáng tin cậy nhất trên iPhone. Các trình duyệt khác có thể hoạt động khác.'],
              ['Dán liên kết và gửi.', 'Nhấn vào ô phía trên, dán và chờ các tùy chọn xuất hiện.'],
              ['Nhấn tùy chọn MP4.', 'Khi Safari hỏi, hãy xác nhận tải xuống.'],
              ['Mở tệp và lưu vào Ảnh.', 'Nhấn biểu tượng tải xuống trên thanh địa chỉ Safari, mở tệp, nhấn Chia sẻ rồi chọn Lưu video.']
            ),
          ],
        },
        {
          id: 'o-dau',
          title: 'Bản tải của tôi đã đi đâu?',
          blocks: [
            p('Safari lưu các bản tải trong ứng dụng Tệp, ở thư mục có tên Tải xuống (trong iCloud Drive hoặc Trên iPhone, tùy cài đặt của bạn). Từ Tệp, bạn có thể mở video, phát hoặc chia sẻ sang Ảnh. Nếu không thấy, hãy xem mũi tên tải xuống trên thanh công cụ Safari, nơi liệt kê các tệp gần đây.'),
          ],
        },
        {
          id: 'khac-phuc',
          title: 'Nếu tải xuống không hoạt động trên iPhone',
          blocks: [
            ul(
              'Đảm bảo video công khai và liên kết đầy đủ.',
              'Cập nhật iOS: Safari phiên bản mới có trình quản lý tải xuống; bản rất cũ thì không.',
              'Tắt trình chặn nội dung cho trang này nếu nút không phản hồi.',
              'Giải phóng dung lượng nếu quá trình lưu thất bại giữa chừng.',
              'Thử lại sau vài phút phòng khi video tạm thời không truy cập được.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'Câu hỏi thường gặp về tải TikTok trên iPhone',
      faq: [
        { question: 'Tôi có cần ứng dụng để tải TikTok trên iPhone không?', answer: 'Không. Safari là đủ. Bạn chỉ cần dán liên kết vào trang này.' },
        { question: 'Vì sao video không có trong ứng dụng Ảnh?', answer: 'Safari lưu tệp vào ứng dụng Tệp trước. Hãy mở ứng dụng đó và dùng Chia sẻ → Lưu video để thêm vào Ảnh.' },
        { question: 'Có dùng được trên iPad không?', answer: 'Có, các bước giống nhau trong Safari trên iPadOS.' },
        { question: 'Tôi có thể chỉ lưu audio không?', answer: 'Có, chọn tùy chọn audio hoặc dùng [công cụ chuyển TikTok sang MP3](/tiktok-mp3).' },
        { question: 'Có an toàn không?', answer: 'Bạn không bao giờ nhập mật khẩu TikTok. Chỉ tải những video bạn có quyền giữ.' },
      ],
      finalTitle: 'TikTok trên iPhone, không cần ứng dụng',
      finalText: 'Sao chép liên kết, dán vào Safari, lưu tệp và chuyển sang Ảnh nếu bạn muốn có nó trong thư viện.',
      ctaLabel: 'Dán liên kết TikTok',
      moreText: 'Dùng Android? Xem [cách tải TikTok trên Android](/download-tiktok-android).',
    },
  },

  'download-tiktok-android': {
    crumb: LABELS_VI['download-tiktok-android'],
    content: {
      metaTitle: 'Cách Tải Video TikTok trên Android | MusicallyDown',
      metaDescription:
        'Cách lưu video TikTok công khai trên Android bằng Chrome, không cần ứng dụng. Tìm tệp trong Tải xuống và thư viện. Miễn phí, từng bước.',
      heroTitleStart: 'Tải video TikTok',
      heroTitleHighlight: 'trên Android',
      heroDescription:
        'Dán liên kết video TikTok công khai trong Chrome và lưu MP4 vào điện thoại. Không cần ứng dụng, không cần đăng ký.',
      intro: [
        'Android giúp việc lưu tệp dễ dàng, nhưng các bước cụ thể phụ thuộc vào trình duyệt và hãng điện thoại. Video thường nằm trước trong thư mục Tải xuống và có thể chỉ hiện trong thư viện sau khi làm mới.',
        'Hướng dẫn này nói về quy trình chuẩn với Chrome: sao chép liên kết, dán vào đây, lưu MP4 rồi tìm tệp.',
      ],
      tocTitle: 'Trong hướng dẫn này',
      sections: [
        {
          id: 'cac-buoc',
          title: 'Lưu TikTok trên Android trong bốn bước',
          blocks: [
            steps(
              ['Sao chép liên kết trong TikTok.', 'Mở video, nhấn Chia sẻ rồi Sao chép liên kết.'],
              ['Mở trang này trong Chrome.', 'Samsung Internet và Firefox cũng dùng được. Hãy dùng trình duyệt bạn tin tưởng.'],
              ['Dán liên kết và gửi.', 'Nhấn vào ô phía trên, dán rồi chờ các định dạng tải.'],
              ['Nhấn tùy chọn MP4.', 'Xác nhận tải xuống nếu điện thoại hỏi, và tệp sẽ bắt đầu được lưu.']
            ),
          ],
        },
        {
          id: 'o-dau',
          title: 'Tìm video đã tải ở đâu',
          blocks: [
            p('Mở ứng dụng Tệp hoặc Tệp của tôi và vào Tải xuống. Nhiều điện thoại cũng tự thêm video mới vào Thư viện hoặc Google Photos, dù một số cần chờ một lúc hoặc làm mới thủ công. Danh sách tải xuống của Chrome, có trong menu trình duyệt, hiển thị các tệp gần đây và mở chúng chỉ với một lần chạm.'),
          ],
        },
        {
          id: 'khac-phuc',
          title: 'Nếu không tải được trên Android',
          blocks: [
            ul(
              'Xác nhận video công khai và liên kết đầy đủ.',
              'Cho phép trình duyệt tải xuống nếu hệ thống chặn.',
              'Giải phóng bớt dung lượng nếu không ghi được tệp.',
              'Tắt chế độ tiết kiệm dữ liệu hoặc trình chặn quảng cáo gây cản trở trang.',
              'Thử lại sau vài phút.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'Câu hỏi thường gặp về tải TikTok trên Android',
      faq: [
        { question: 'Tôi có cần cài APK không?', answer: 'Không. Đừng bao giờ cài công cụ tải từ nguồn không rõ. Cách này chạy ngay trong trình duyệt.' },
        { question: 'Bản tải trên Android nằm ở đâu?', answer: 'Trong thư mục Tải xuống, truy cập từ ứng dụng Tệp. Một số điện thoại còn hiển thị chúng trong Thư viện.' },
        { question: 'Có dùng được trên điện thoại Samsung không?', answer: 'Có, trong Samsung Internet hoặc Chrome. Hãy tìm trong Tệp của tôi → Tải xuống.' },
        { question: 'Tôi có thể chỉ lưu âm thanh không?', answer: 'Có, xem [công cụ tải âm thanh TikTok](/tiktok-sound-downloader).' },
        { question: 'Có miễn phí không?', answer: 'Có, không cần đăng ký.' },
      ],
      finalTitle: 'TikTok trên Android, ngay từ trình duyệt',
      finalText: 'Sao chép liên kết, dán vào Chrome, lưu MP4 và mở từ thư mục Tải xuống.',
      ctaLabel: 'Dán liên kết TikTok',
      moreText: 'Dùng iPhone? Xem [cách tải TikTok trên iPhone](/download-tiktok-iphone).',
    },
  },

  'musically-down': {
    crumb: LABELS_VI['musically-down'],
    content: {
      metaTitle: 'Musically Down, Musical Down: MusicallyDown là gì?',
      metaDescription:
        'Bạn tìm Musically Down, Musical Down hay musicaldown? Tìm hiểu MusicallyDown là gì, công cụ tải TikTok này hoạt động ra sao và giới hạn của nó.',
      heroTitleStart: 'Musically Down hay MusicallyDown?',
      heroTitleHighlight: ' Cùng một công cụ miễn phí',
      heroDescription:
        'Lưu video TikTok công khai thành MP4 hoặc MP3 ngay trong trình duyệt. Không cần ứng dụng, không cần đăng ký. Đây là cách hoạt động.',
      intro: [
        'Mọi người tìm công cụ này bằng nhiều cách viết: MusicallyDown, Musical Down, musicaldown, Musically Down. Tất cả đều chỉ cùng một thứ: cách lưu video TikTok công khai hoặc âm thanh của nó ngay trong trình duyệt mà không cài đặt gì.',
        'Trang này giải thích nguồn gốc tên gọi, công cụ làm được gì và không làm được gì, để bạn biết nên mong đợi điều gì trước khi dán liên kết.',
      ],
      tocTitle: 'Trong hướng dẫn này',
      sections: [
        {
          id: 'ten-goi',
          title: 'Tên gọi này từ đâu mà ra',
          blocks: [
            p('Musical.ly là ứng dụng video ngắn được sáp nhập vào TikTok năm 2018. Các công cụ tải xây dựng quanh nó giữ lại cái tên “Musically”, và thói quen tìm kiếm tên đó vẫn còn. MusicallyDown là công cụ độc lập. Nó không liên kết với, không được bảo trợ hay vận hành bởi TikTok hoặc công ty mẹ của TikTok.'),
          ],
        },
        {
          id: 'lam-gi',
          title: 'MusicallyDown làm được gì',
          blocks: [
            ul(
              'Đọc liên kết video TikTok công khai và hiển thị các tùy chọn tải có sẵn.',
              'Lưu video thành MP4 với chất lượng cao nhất mà bài đăng cung cấp. Xem [tải HD](/tiktok-video-downloader-hd).',
              'Cung cấp bản không có logo chuyển động khi có. Xem [không logo](/tiktok-no-watermark).',
              'Lưu âm thanh thành audio. Xem [công cụ chuyển TikTok sang MP3](/tiktok-mp3).',
              'Hỗ trợ [TikTok Stories](/download-tiktok-stories) và bài đăng ảnh khi có.',
              'Hoạt động trong trình duyệt trên iPhone, Android, Windows và Mac.'
            ),
          ],
        },
        {
          id: 'khong-lam',
          title: 'Những gì công cụ không làm',
          blocks: [
            ul(
              'Không tải video riêng tư, đã xóa hoặc bị hạn chế.',
              'Không bao giờ hỏi mật khẩu hay đăng nhập TikTok của bạn.',
              'Không thể làm video sắc nét hơn bản gốc đã đăng.',
              'Không cấp quyền dùng lại nội dung của người khác.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'Câu hỏi thường gặp về MusicallyDown',
      faq: [
        { question: 'MusicallyDown có giống Musical Down không?', answer: 'Có. Đó chỉ là các cách viết khác nhau của cùng một công cụ.' },
        { question: 'MusicallyDown có miễn phí không?', answer: 'Có, không cần đăng ký và không cần ứng dụng.' },
        { question: 'Có liên kết với TikTok không?', answer: 'Không. Đây là công cụ độc lập.' },
        { question: 'Có dùng được trên điện thoại của tôi không?', answer: 'Có, xem hướng dẫn cho [iPhone](/download-tiktok-iphone) và [Android](/download-tiktok-android).' },
        { question: 'Có an toàn không?', answer: 'Bạn không bao giờ chia sẻ đăng nhập TikTok. Chỉ tải nội dung do bạn tạo hoặc bạn có quyền giữ.' },
      ],
      finalTitle: 'Bắt đầu với một liên kết TikTok công khai',
      finalText: 'Dán liên kết ở đầu trang và chọn trong các tùy chọn hiển thị.',
      ctaLabel: 'Dán liên kết TikTok',
      moreText: 'Mới đến đây? Hãy bắt đầu với [công cụ tải video TikTok](/).',
    },
  },
  "musicallydown-app": {
    crumb: LABELS_VI["musicallydown-app"],
    content: {
      metaTitle: "Ứng dụng MusicallyDown & APK: Dùng Bản Web",
      metaDescription: "Không có APK hay ứng dụng MusicallyDown để cài. Dùng web miễn phí trên mọi trình duyệt và tránh APK giả. Các bước an toàn cho iPhone và Android.",
      heroTitleStart: "Ứng dụng MusicallyDown hay APK?",
      heroTitleHighlight: "Dùng bản web, không cần cài",
      heroDescription: "MusicallyDown chạy ngay trên trình duyệt nên không cần cài gì. Dán liên kết TikTok công khai để thử.",
      intro: ["Nhiều người tìm ứng dụng, APK hoặc bản Lite của MusicallyDown. Với chúng tôi, MusicallyDown là một trang web: bạn mở bằng Safari, Chrome hoặc trình duyệt khác, dán liên kết TikTok công khai rồi lưu tệp. Chúng tôi không phát hành APK Android hay ứng dụng iOS.", "Điều này quan trọng vì các trang cung cấp tệp tên \"MusicallyDown APK\" không phải của chúng tôi. Trang này giải thích vì sao không cần cài đặt, rủi ro của APK không rõ nguồn gốc và cách tạo lối tắt an toàn."],
      tocTitle: "Trong trang này",
      sections: [
        { id: "khong-co-app", title: "MusicallyDown có ứng dụng không?", blocks: [p("Không. MusicallyDown không có APK chính thức, bản Lite hay ứng dụng \"One\". Công cụ tải chạy hoàn toàn trên trình duyệt, trên iPhone, Android, Windows và Mac, không cần tài khoản hay đăng nhập."), ul("Không có gì để cài hay cập nhật.", "Không yêu cầu quyền đặc biệt trên điện thoại.", "Cùng một trang dùng được trên mọi thiết bị.")] },
        { id: "rui-ro", title: "Vì sao APK không rõ nguồn gốc lại rủi ro", blocks: [p("APK là tệp cài đặt. Nếu đến từ một trang web bất kỳ thay vì kho ứng dụng chính thức, rất khó biết nó thực sự làm gì."), ul("Có thể chứa mã độc, quảng cáo gây phiền hoặc gói đăng ký ẩn.", "Ứng dụng chỉnh sửa (\"mod\") thường xin quyền không cần thiết.", "Cài ngoài kho ứng dụng chính thức sẽ bỏ qua các bước kiểm tra an toàn của kho.", "Một số trang tải giả chỉ để hiển thị quảng cáo hoặc thu thập dữ liệu."), callout("**Đã cài tệp tên MusicallyDown APK?** Hãy gỡ trong phần cài đặt điện thoại, quét bằng Google Play Protect hoặc ứng dụng bảo mật đáng tin, và đổi mật khẩu bạn đã nhập trong thời gian đó.")] },
        { id: "loi-tat", title: "Lối tắt như ứng dụng mà không cần APK", blocks: [p("Trình duyệt có thể ghim trang web lên màn hình chính. Nó mở như một ứng dụng nhưng vẫn chỉ là trang web."), steps(["Trên iPhone", "Mở trang bằng Safari, chạm Chia sẻ rồi chọn Thêm vào Màn hình chính."], ["Trên Android", "Mở trang bằng Chrome, chạm menu ba chấm rồi chọn Thêm vào màn hình chính."], ["Sau đó dùng", "Sao chép liên kết TikTok công khai, mở lối tắt, dán liên kết và tải."])] },
      ],
      faqTitle: "Câu hỏi về ứng dụng MusicallyDown",
      faq: [
        { question: "Có APK MusicallyDown chính thức không?", answer: "Không. MusicallyDown chỉ tồn tại dưới dạng trang web." },
        { question: "Có ứng dụng MusicallyDown Lite hay One không?", answer: "Không phải từ trang này. Hãy coi tệp có tên đó là chưa được xác minh." },
        { question: "Dùng trên iPhone không cần ứng dụng được không?", answer: "Được. Dùng Safari. Xem [hướng dẫn iPhone](/download-tiktok-iphone)." },
        { question: "Dùng trên Android không cần APK được không?", answer: "Được. Dùng Chrome. Xem [hướng dẫn Android](/download-tiktok-android)." },
        { question: "Có lưu riêng âm thanh mà không cần ứng dụng được không?", answer: "Được. Dùng [TikTok sang MP3](/tiktok-mp3) ngay trên trình duyệt." },
      ],
      finalTitle: "Không cần cài đặt",
      finalText: "Dán liên kết TikTok công khai ở đầu trang rồi chọn tệp bạn muốn.",
      ctaLabel: "Dán liên kết TikTok",
      moreText: "Lần đầu đến đây? Hãy bắt đầu với [công cụ tải video TikTok](/) hoặc [hướng dẫn về MusicallyDown](/musically-down).",
    },
  },
  "supported-platforms": {
    crumb: LABELS_VI["supported-platforms"],
    content: {
      metaTitle: "MusicallyDown: Hỗ Trợ Nền Tảng Nào (Chỉ TikTok)",
      metaDescription: "MusicallyDown chỉ hoạt động với liên kết TikTok công khai. Không tải từ YouTube, Facebook, Instagram, Threads, Pinterest hay X. Xem cách thay thế.",
      heroTitleStart: "MusicallyDown hỗ trợ nền tảng nào?",
      heroTitleHighlight: "Chỉ TikTok",
      heroDescription: "Dán liên kết TikTok công khai để lưu video, âm thanh hoặc ảnh. Liên kết từ trang khác không được hỗ trợ.",
      intro: ["Nhiều người tìm MusicallyDown cùng với YouTube, Facebook, Instagram, Threads, Pinterest, X hoặc Canva. Để bạn khỏi mất công: MusicallyDown chỉ xử lý liên kết TikTok công khai.", "Trang này nêu rõ cái gì được hỗ trợ, cái gì không và nên làm gì nếu video bạn cần nằm ở nền tảng khác."],
      tocTitle: "Trong trang này",
      sections: [
        { id: "ho-tro", title: "MusicallyDown hỗ trợ gì", blocks: [ul("Video TikTok công khai (MP4) và âm thanh của video ([MP3](/tiktok-mp3)).", "Bài đăng ảnh và [slideshow](/tiktok-slideshow-downloader) TikTok công khai.", "[Story TikTok](/download-tiktok-stories) công khai."), p("Video TikTok riêng tư, đã xóa hoặc bị hạn chế không thể tải.")] },
        { id: "khong-ho-tro", title: "Không hỗ trợ gì", blocks: [ul("Liên kết YouTube, Facebook, Instagram, Threads, Pinterest, X (Twitter) và Canva.", "Mọi trang không phải TikTok."), p("Dán liên kết như vậy sẽ không trả về tệp nào. Những lượt tìm kiếm ghép các tên đó với MusicallyDown không phản ánh tính năng của trang này.")] },
        { id: "thay-the", title: "Nếu video nằm ở nền tảng khác", blocks: [ul("Dùng tùy chọn lưu, chia sẻ hoặc tải của chính nền tảng đó nếu có.", "Nếu là video của bạn, hãy xuất từ tài khoản hoặc ứng dụng chỉnh sửa của bạn.", "Nếu cùng clip đó cũng được đăng lên TikTok, hãy sao chép liên kết TikTok và dán vào đây.", "Xin tệp từ người sáng tạo khi bạn cần dùng lại."), callout("**Tải xuống có trách nhiệm.** Chỉ lưu video do bạn tạo hoặc được phép giữ, và tôn trọng quyền của người sáng tạo cũng như điều khoản của từng nền tảng.")] },
      ],
      faqTitle: "Câu hỏi về nền tảng được hỗ trợ",
      faq: [
        { question: "MusicallyDown có tải video YouTube không?", answer: "Không. Chỉ hoạt động với liên kết TikTok công khai." },
        { question: "Dùng cho Instagram, Facebook hay Threads được không?", answer: "Không. Những liên kết đó không được hỗ trợ." },
        { question: "Có hỗ trợ Pinterest, X hay Canva không?", answer: "Không." },
        { question: "Tôi lưu được nội dung TikTok nào?", answer: "Video công khai, âm thanh video dạng MP3, bài đăng ảnh và story công khai." },
        { question: "Bắt đầu từ đâu?", answer: "Dán liên kết TikTok công khai vào [công cụ tải video](/)." },
      ],
      finalTitle: "Chỉ liên kết TikTok",
      finalText: "Dán liên kết TikTok công khai ở đầu trang để bắt đầu.",
      ctaLabel: "Dán liên kết TikTok",
      moreText: "Chỉ cần âm thanh? Thử [TikTok sang MP3](/tiktok-mp3).",
    },
  },
};
