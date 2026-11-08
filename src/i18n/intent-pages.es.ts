/** Spanish versions of the intent landing pages (see intent-pages.ts for the English originals). */
import type { IntentPage, IntentSlug } from './intent-pages';
import { p, ul, steps, callout } from './intent-shared';

export const LABELS_ES: Record<IntentSlug, string> = {
  'tiktok-video-downloader-hd': 'Descargador de TikTok en HD',
  'tiktok-no-watermark': 'TikTok sin marca de agua',
  'tiktok-sound-downloader': 'Descargar sonidos de TikTok',
  'tiktok-slideshow-downloader': 'Descargar presentaciones de TikTok',
  'download-tiktok-iphone': 'Descargar TikTok en iPhone',
  'download-tiktok-android': 'Descargar TikTok en Android',
  'musically-down': 'Guía de MusicallyDown',
};

const resp = callout(
  '**Descarga con responsabilidad.** Guarda solo vídeos que hayas creado o para los que tengas permiso, respeta los derechos del creador y las condiciones de TikTok, y da crédito al creador original si compartes su trabajo con su consentimiento. MusicallyDown es una herramienta independiente y no está afiliada a TikTok.'
);

export const PAGES_ES: Record<IntentSlug, IntentPage> = {
  'tiktok-video-downloader-hd': {
    crumb: LABELS_ES['tiktok-video-downloader-hd'],
    content: {
      metaTitle: 'Descargar Vídeos de TikTok en HD – Gratis | MusicallyDown',
      metaDescription:
        'Guarda vídeos públicos de TikTok con la mejor calidad que ofrezca el original. Gratis, sin app y sin registro.',
      heroTitleStart: 'Descargador de TikTok en HD:',
      heroTitleHighlight: 'la mejor calidad disponible',
      heroDescription:
        'Pega el enlace de un vídeo público de TikTok y elige el MP4 de mayor resolución que ofrezca. Gratis y sin registro.',
      intro: [
        'Un TikTok que se ve nítido en la app puede quedar borroso y pixelado al guardarlo, sobre todo si el archivo se comprimió dos veces por el camino. Si quieres conservar un clip para editarlo, para una presentación o simplemente para tener una copia limpia en el móvil, la calidad de la descarga importa.',
        'Este descargador de TikTok en HD lee el enlace de un vídeo público y muestra las opciones de MP4 que existen para esa publicación. Si hay una versión de mayor resolución, aparece primero. Si no la hay, verás lo que admite el original, en lugar de una promesa que nadie puede cumplir.',
      ],
      tocTitle: 'En esta guía',
      sections: [
        {
          id: 'que-es-hd',
          title: 'Qué significa realmente «HD» en una descarga de TikTok',
          blocks: [
            p('Los vídeos de TikTok suelen ser verticales, así que «HD» indica cuántos píxeles tiene el lado largo: 1280 en 720p, 1920 en 1080p, y más en 2K y 4K. Una descarga solo puede igualar lo que publicó el creador. Un vídeo grabado y subido en 1080p puede guardarse en 1080p. Una subida en 480p nunca llegará a 1080p, diga lo que diga una herramienta.'),
            p('La resolución tampoco lo es todo. La tasa de bits, es decir, cuántos datos se dedican a cada segundo de vídeo, decide si un clip de 1080p se ve nítido o borroso. Por eso dos vídeos con la misma resolución pueden verse muy distintos una vez guardados.'),
          ],
        },
        {
          id: 'como',
          title: 'Cómo descargar vídeos de TikTok en HD',
          blocks: [
            steps(
              ['Copia el enlace del vídeo.', 'En TikTok, abre el vídeo, toca Compartir y luego Copiar enlace. La cuenta debe ser pública y el enlace debe apuntar al vídeo concreto.'],
              ['Pégalo arriba y envíalo.', 'La página comprueba la publicación y muestra los formatos disponibles.'],
              ['Elige la opción MP4 más alta.', 'Selecciona la mejor calidad de la lista y guarda el archivo. Si solo aparece una opción MP4, es la mejor versión que esta herramienta puede alcanzar para esa publicación.']
            ),
          ],
        },
        {
          id: 'consejos',
          title: 'Consejos para conseguir la copia más limpia',
          blocks: [
            ul(
              'Descarga una sola vez desde la publicación original, en lugar de volver a guardar una copia que ya se compartió por una app de mensajería, que la recomprime.',
              'Usa una buena conexión mientras se guarda el archivo para que la transferencia no se interrumpa.',
              'Si necesitas una versión limpia para editar, pídele el archivo original al creador: una descarga nunca puede ser mejor que lo que se subió.',
              'Revisa los detalles del archivo guardado en tu dispositivo para confirmar su resolución antes de montar un proyecto con él.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'Preguntas frecuentes sobre el descargador en HD',
      faq: [
        { question: '¿Puedo descargar TikTok en 4K?', answer: 'Solo cuando la subida original es 4K y la publicación ofrece esa versión. Muchos vídeos se publican en 720p o 1080p y no se pueden mejorar.' },
        { question: '¿Por qué el vídeo guardado se ve peor que en la app?', answer: 'La app puede transmitir una versión optimizada, y apps como WhatsApp o Instagram vuelven a comprimir los archivos al compartirlos. Descarga directamente desde la publicación y revisa el archivo antes de reenviarlo.' },
        { question: '¿La descarga en HD es gratis?', answer: 'Sí. No hay registro, ni suscripción, ni app que instalar.' },
        { question: '¿Funciona con vídeos privados?', answer: 'No. Solo se pueden leer los vídeos públicos. Las publicaciones privadas, eliminadas o con restricción regional pueden no cargarse.' },
        { question: '¿Dónde se guarda el archivo?', answer: 'En la ubicación de descargas de tu navegador. En el móvil, consulta las guías para [iPhone](/download-tiktok-iphone) y [Android](/download-tiktok-android).' },
      ],
      finalTitle: 'Guarda vídeos de TikTok con la mejor calidad disponible',
      finalText: 'Pega un enlace público, elige la opción MP4 más alta y conserva una copia limpia. Si solo quieres el audio, usa el [convertidor de TikTok a MP3](/tiktok-mp3).',
      ctaLabel: 'Pega un enlace de TikTok',
      moreText: '¿Prefieres una copia limpia? Mira [TikTok sin marca de agua](/tiktok-no-watermark).',
    },
  },

  'tiktok-no-watermark': {
    crumb: LABELS_ES['tiktok-no-watermark'],
    content: {
      metaTitle: 'Descargar TikTok Sin Marca de Agua – Gratis | MusicallyDown',
      metaDescription:
        'Guarda vídeos públicos de TikTok sin el logo en movimiento cuando haya una versión limpia disponible. Gratis, sin app y sin registro.',
      heroTitleStart: 'Descargar TikTok',
      heroTitleHighlight: 'sin marca de agua',
      heroDescription:
        'Pega el enlace de un vídeo público de TikTok y guarda la versión limpia cuando la publicación la ofrezca. Gratis y sin registro.',
      intro: [
        'El logo animado de TikTok y el nombre de usuario que aparecen en los vídeos guardados sirven para compartir rápido, pero estorban cuando reutilizas un clip en tu propia edición, en una presentación o en un vídeo de reacción. Lo que casi todo el mundo busca es una copia limpia.',
        'Esta página comprueba el enlace de un vídeo público de TikTok y muestra un MP4 sin marca de agua cuando existe para esa publicación. Pegas el enlace, eliges la opción y el archivo se guarda en tu dispositivo.',
      ],
      tocTitle: 'En esta guía',
      sections: [
        {
          id: 'por-que',
          title: 'Por qué los vídeos de TikTok llevan marca de agua',
          blocks: [
            p('Cuando usas el botón Guardar de la app, TikTok añade un logo animado y el nombre del creador. Funciona como crédito para el autor original y como marca de la plataforma. Quitarla no es lo mismo que elegir otro origen de descarga: una herramienta solo puede ofrecer un archivo limpio si existe uno para esa publicación.'),
            p('Por eso la disponibilidad varía. Algunas publicaciones ofrecen versión limpia y otras no. Cuando falta, lo honesto es decir que falta, no prometer un truco oculto que siempre funcione.'),
          ],
        },
        {
          id: 'como',
          title: 'Cómo guardar un TikTok sin marca de agua',
          blocks: [
            steps(
              ['Copia el enlace.', 'Abre el TikTok, toca Compartir y luego Copiar enlace. El vídeo debe ser público.'],
              ['Pega y envía.', 'Pon el enlace en el cuadro de la parte superior de esta página y espera unos segundos.'],
              ['Elige el MP4 limpio.', 'Si aparece una opción sin marca de agua, selecciónala y guarda. Si no se ofrece, la versión original es la que hay.']
            ),
          ],
        },
        {
          id: 'credito',
          title: 'Cómo dar crédito correctamente al creador',
          blocks: [
            p('Un vídeo limpio no significa que puedas usar el clip como quieras. Si reutilizas el trabajo de otra persona, pide permiso y nombra al creador en tu publicación, descripción o créditos. Muchos creadores aceptan una petición amable, y dar crédito te protege de retiradas de contenido.'),
            ul('Pregunta al creador antes de usar su clip con fines comerciales.', 'Menciona su usuario allí donde lo publiques.', 'No presentes el vídeo de otra persona como si fuera tuyo.'),
            resp,
          ],
        },
      ],
      faqTitle: 'Preguntas frecuentes sobre TikTok sin marca de agua',
      faq: [
        { question: '¿Todos los TikTok están disponibles sin marca de agua?', answer: 'No. Existe una versión limpia para muchas publicaciones públicas, pero no para todas, y la disponibilidad puede cambiar. Si no aparece, puede que solo exista la versión con marca de agua.' },
        { question: '¿Es legal quitar la marca de agua?', answer: 'Las normas dependen de tu país y del uso que hagas del vídeo. El uso personal y permitido es distinto de republicar el trabajo de otra persona. Ante la duda, pregunta al creador y lee las condiciones de TikTok.' },
        { question: '¿Un archivo sin marca de agua pierde calidad?', answer: 'No por sí mismo. La calidad depende de la versión que ofrezca la publicación. Consulta la [guía en HD](/tiktok-video-downloader-hd).' },
        { question: '¿Necesito una cuenta?', answer: 'No. Nunca tienes que introducir tu contraseña de TikTok aquí.' },
        { question: '¿Puedo obtener solo el sonido?', answer: 'Sí, usa el [convertidor de TikTok a MP3](/tiktok-mp3).' },
      ],
      finalTitle: 'Una copia limpia, dando el crédito a quien corresponde',
      finalText: 'Pega un enlace público, elige el MP4 limpio cuando aparezca y da crédito al creador si lo compartes.',
      ctaLabel: 'Pega un enlace de TikTok',
      moreText: '¿Lo necesitas en el móvil? Mira [iPhone](/download-tiktok-iphone) o [Android](/download-tiktok-android).',
    },
  },

  'tiktok-sound-downloader': {
    crumb: LABELS_ES['tiktok-sound-downloader'],
    content: {
      metaTitle: 'Descargar Sonidos de TikTok – Gratis | MusicallyDown',
      metaDescription:
        'Guarda el sonido de un vídeo público de TikTok como archivo de audio. Gratis, sin app y sin registro. Funciona en iPhone, Android y ordenador.',
      heroTitleStart: 'Descargar sonidos de TikTok:',
      heroTitleHighlight: 'guarda solo el audio',
      heroDescription:
        'Pega el enlace de un vídeo público de TikTok y guarda su sonido como archivo de audio independiente cuando la publicación lo ofrezca. Gratis y sin registro.',
      intro: [
        'Los sonidos de TikTok viajan rápido: una locución, un remix o un clip de moda aparece en todas partes durante una semana. Guardar el sonido es un trabajo distinto de guardar el vídeo, y necesita una herramienta que te dé un archivo de audio limpio y no un clip con imagen.',
        'Este descargador de sonidos de TikTok lee el enlace de un vídeo público y, cuando hay audio disponible, te deja guardar solo el sonido. Úsalo para conservar un fragmento de referencia, identificar una canción o crear tu propia biblioteca de sonidos.',
      ],
      tocTitle: 'En esta guía',
      sections: [
        {
          id: 'sonido-cancion',
          title: 'Un sonido de TikTok no siempre es la canción completa',
          blocks: [
            p('La mayoría de los sonidos de TikTok son fragmentos breves, ediciones o remixes. El archivo que guardas es ese fragmento, así que no esperes una pista completa. Si te gusta lo que oyes, usa el clip guardado para encontrar la canción original y consigue la versión completa en un servicio de música con licencia.'),
            p('Los sonidos originales, como las locuciones o el audio grabado, son distintos: son exactamente el audio del vídeo y el archivo guardado lo contiene entero.'),
          ],
        },
        {
          id: 'como',
          title: 'Cómo descargar un sonido de TikTok',
          blocks: [
            steps(
              ['Copia el enlace del vídeo.', 'Abre el vídeo que usa el sonido, toca Compartir y luego Copiar enlace.'],
              ['Pégalo en el cuadro de arriba.', 'Envía el enlace y espera a que carguen las opciones.'],
              ['Elige la opción de audio.', 'Si aparece un botón de audio o MP3, tócalo para guardar el archivo. Si no aparece, es posible que esa publicación no ofrezca el audio por separado.']
            ),
            p('Para ver con más detalle el propio formato de audio, lee la [guía de TikTok a MP3](/tiktok-mp3).'),
          ],
        },
        {
          id: 'ideas',
          title: 'Qué hace la gente con los sonidos guardados',
          blocks: [
            ul(
              'Escucharlos sin conexión en un trayecto o en un vuelo.',
              'Tomar un sonido como referencia al planear tu propio vídeo.',
              'Usar un clip corto como tono de llamada o de notificación.',
              'Guardar una locución separada de su vídeo.',
              'Reproducir un fragmento una y otra vez para averiguar el título de una canción.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'Preguntas frecuentes sobre descargar sonidos de TikTok',
      faq: [
        { question: '¿Puedo descargar cualquier sonido de TikTok?', answer: 'Solo los sonidos de vídeos públicos y solo cuando la publicación ofrece audio. Los vídeos privados o eliminados no se pueden leer.' },
        { question: '¿Qué calidad de audio obtendré?', answer: 'La que tuviera la publicación original. Un convertidor no puede añadir detalle que nunca existió.' },
        { question: '¿Puedo usar un sonido guardado en mis propios vídeos?', answer: 'No automáticamente. La música y las grabaciones pueden estar protegidas por derechos de autor. Revisa la licencia o usa los sonidos de la propia TikTok dentro de la app.' },
        { question: '¿También guarda el vídeo?', answer: 'No. Elige la opción de audio y obtendrás solo el sonido.' },
        { question: '¿Es gratis?', answer: 'Sí, sin registro y sin nada que instalar.' },
      ],
      finalTitle: 'Quédate con el sonido y olvídate del vídeo',
      finalText: 'Pega un enlace público, elige el audio cuando se ofrezca y guarda el clip. Después busca la canción completa en un servicio con licencia si quieres la pista entera.',
      ctaLabel: 'Pega un enlace de TikTok',
      moreText: '¿Prefieres el vídeo completo? Mira el [descargador en HD](/tiktok-video-downloader-hd).',
    },
  },

  'tiktok-slideshow-downloader': {
    crumb: LABELS_ES['tiktok-slideshow-downloader'],
    content: {
      metaTitle: 'Descargar Presentaciones de TikTok – Gratis | MusicallyDown',
      metaDescription:
        'Guarda presentaciones de fotos y carruseles públicos de TikTok. Pega el enlace y descarga las imágenes o el archivo cuando esté disponible. Gratis.',
      heroTitleStart: 'Descargar presentaciones de TikTok:',
      heroTitleHighlight: 'guarda publicaciones de fotos',
      heroDescription:
        'Pega el enlace de una publicación de fotos o presentación pública de TikTok y guarda las imágenes o la presentación cuando estén disponibles. Gratis y sin registro.',
      intro: [
        'No todos los TikTok son vídeos. Las publicaciones de fotos y las presentaciones pasan imágenes fijas con música, y la gente las guarda para recetas, ideas de looks, listas de viaje y tableros de referencia. Se guardan de forma distinta a un vídeo normal, y por eso un descargador de vídeo común a veces no encuentra nada.',
        'Esta página lee el enlace de una publicación de fotos pública y muestra las opciones de descarga que existen para ella. Según la publicación, pueden ser las imágenes sueltas, un vídeo de presentación o ambas cosas.',
      ],
      tocTitle: 'En esta guía',
      sections: [
        {
          id: 'que-es',
          title: '¿Qué es una presentación o publicación de fotos de TikTok?',
          blocks: [
            p('Una publicación de fotos es un conjunto de imágenes fijas en un carrusel deslizable, normalmente con un sonido de fondo. TikTok la trata como un tipo de publicación propio, distinto del vídeo. Una presentación en vídeo es parecida, pero las imágenes ya vienen renderizadas como un clip.'),
            p('Lo que puedes guardar depende, por tanto, de la publicación. Algunas ofrecen las imágenes originales, otras una presentación renderizada y otras quizá solo el audio.'),
          ],
        },
        {
          id: 'como',
          title: 'Cómo descargar una presentación de TikTok',
          blocks: [
            steps(
              ['Copia el enlace de la publicación.', 'Abre la publicación de fotos, toca Compartir y luego Copiar enlace.'],
              ['Pégalo arriba y envíalo.', 'Espera unos segundos mientras la página lee la publicación.'],
              ['Elige qué guardar.', 'Selecciona las imágenes o el archivo de la presentación si aparecen. Si la publicación no ofrece ninguna opción de descarga, no se puede guardar desde esta página.']
            ),
          ],
        },
        {
          id: 'consejos',
          title: 'Consejos para guardar publicaciones de fotos',
          blocks: [
            ul(
              'Guarda las imágenes cuando quieras reutilizar fotos sueltas para un tablero de inspiración.',
              'Guarda el archivo de la presentación cuando quieras conservar juntos el ritmo y el sonido.',
              'Usa la opción de audio si solo quieres la música; mira el [descargador de sonidos](/tiktok-sound-downloader).',
              'Comprueba que las imágenes pertenecen al creador al que piensas dar crédito.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'Preguntas frecuentes sobre presentaciones de TikTok',
      faq: [
        { question: '¿Por qué un enlace de vídeo normal no funciona con las publicaciones de fotos?', answer: 'Las publicaciones de fotos se almacenan de otra forma que los vídeos, así que el descargador tiene que leerlas como imágenes y audio y no como un único archivo de vídeo.' },
        { question: '¿Puedo conseguir las imágenes en su tamaño original?', answer: 'Solo con el tamaño que proporcione la publicación. Una imagen guardada no puede ser mayor que la subida.' },
        { question: '¿Puedo guardar la música de una presentación?', answer: 'A menudo sí, cuando se ofrece audio para esa publicación. Mira el [convertidor de TikTok a MP3](/tiktok-mp3).' },
        { question: '¿Funciona en el móvil?', answer: 'Sí, consulta las guías para [iPhone](/download-tiktok-iphone) y [Android](/download-tiktok-android).' },
        { question: '¿Es gratis?', answer: 'Sí, sin cuenta y sin app.' },
      ],
      finalTitle: 'Conserva las fotos y el sonido',
      finalText: 'Pega el enlace de una publicación de fotos pública y elige imágenes, presentación o audio según lo que ofrezca la publicación.',
      ctaLabel: 'Pega un enlace de TikTok',
      moreText: '¿Buscas publicaciones efímeras? Mira el [descargador de historias de TikTok](/download-tiktok-stories).',
    },
  },

  'download-tiktok-iphone': {
    crumb: LABELS_ES['download-tiktok-iphone'],
    content: {
      metaTitle: 'Descargar Vídeos de TikTok en iPhone | MusicallyDown',
      metaDescription:
        'Cómo guardar vídeos públicos de TikTok en iPhone con Safari, sin app. Encuentra el archivo en Descargas y pásalo a Fotos. Gratis, paso a paso.',
      heroTitleStart: 'Descargar vídeos de TikTok',
      heroTitleHighlight: 'en iPhone',
      heroDescription:
        'Pega el enlace de un vídeo público de TikTok en Safari, guarda el MP4 y pásalo a Fotos. Sin app y sin registro.',
      intro: [
        'En un iPhone, guardar un TikTok es menos evidente que en un ordenador. El archivo no llega al carrete por defecto y mucha gente se rinde cuando la descarga parece desaparecer. En realidad sí se guarda, pero en otro sitio.',
        'Esta guía muestra todo el recorrido con Safari: copiar el enlace, pegarlo aquí, guardar el vídeo y, si quieres, pasarlo a Fotos para tenerlo en tu galería.',
      ],
      tocTitle: 'En esta guía',
      sections: [
        {
          id: 'pasos',
          title: 'Guarda un TikTok en iPhone en cinco pasos',
          blocks: [
            steps(
              ['Copia el enlace en TikTok.', 'Abre el vídeo, toca Compartir y luego Copiar enlace.'],
              ['Abre esta página en Safari.', 'Safari gestiona las descargas con más fiabilidad en iPhone. Otros navegadores pueden comportarse de otra manera.'],
              ['Pega el enlace y envíalo.', 'Toca el cuadro de arriba, pega y espera a que aparezcan las opciones.'],
              ['Toca la opción MP4.', 'Cuando Safari lo pregunte, confirma la descarga.'],
              ['Abre el archivo y guárdalo en Fotos.', 'Toca el icono de descarga en la barra de direcciones de Safari, abre el archivo, toca Compartir y elige Guardar vídeo.']
            ),
          ],
        },
        {
          id: 'donde',
          title: '¿Dónde ha ido mi descarga?',
          blocks: [
            p('Safari guarda las descargas en la app Archivos, en una carpeta llamada Descargas (dentro de iCloud Drive o En mi iPhone, según tus ajustes). Desde Archivos puedes abrir el vídeo, reproducirlo o compartirlo a Fotos. Si no lo encuentras, mira la flecha de descarga en la barra de herramientas de Safari, que lista los archivos recientes.'),
          ],
        },
        {
          id: 'soluciones',
          title: 'Si la descarga no funciona en iPhone',
          blocks: [
            ul(
              'Comprueba que el vídeo es público y que el enlace está completo.',
              'Actualiza iOS: las versiones modernas de Safari incluyen gestor de descargas; las muy antiguas no.',
              'Desactiva cualquier bloqueador de contenido en esta página si el botón no hace nada.',
              'Libera almacenamiento si el guardado falla a medias.',
              'Vuelve a intentarlo en unos minutos por si el vídeo no estuvo accesible un momento.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'Preguntas frecuentes sobre descargar TikTok en iPhone',
      faq: [
        { question: '¿Necesito una app para descargar TikTok en iPhone?', answer: 'No. Con Safari basta. Solo pegas el enlace en esta página.' },
        { question: '¿Por qué el vídeo no está en la app Fotos?', answer: 'Safari guarda primero los archivos en la app Archivos. Ábrela y usa Compartir → Guardar vídeo para añadirlo a Fotos.' },
        { question: '¿Funciona en iPad?', answer: 'Sí, los pasos son los mismos en Safari de iPadOS.' },
        { question: '¿Puedo guardar solo el audio?', answer: 'Sí, elige la opción de audio o usa el [convertidor de TikTok a MP3](/tiktok-mp3).' },
        { question: '¿Es seguro?', answer: 'Nunca introduces tu contraseña de TikTok. Descarga solo vídeos para los que tengas permiso.' },
      ],
      finalTitle: 'TikTok en iPhone, sin app',
      finalText: 'Copia el enlace, pégalo en Safari, guarda el archivo y pásalo a Fotos si quieres tenerlo en la galería.',
      ctaLabel: 'Pega un enlace de TikTok',
      moreText: '¿Usas Android? Mira [cómo descargar TikTok en Android](/download-tiktok-android).',
    },
  },

  'download-tiktok-android': {
    crumb: LABELS_ES['download-tiktok-android'],
    content: {
      metaTitle: 'Descargar Vídeos de TikTok en Android | MusicallyDown',
      metaDescription:
        'Cómo guardar vídeos públicos de TikTok en Android con Chrome, sin app. Encuentra el archivo en Descargas y en la galería. Gratis, paso a paso.',
      heroTitleStart: 'Descargar vídeos de TikTok',
      heroTitleHighlight: 'en Android',
      heroDescription:
        'Pega el enlace de un vídeo público de TikTok en Chrome y guarda el MP4 en tu móvil. Sin app y sin registro.',
      intro: [
        'Android facilita guardar un archivo, pero los pasos exactos dependen de tu navegador y de la marca del móvil. El vídeo suele acabar primero en una carpeta de Descargas y puede aparecer en la galería solo después de actualizarla.',
        'Esta guía cubre el camino estándar con Chrome: copiar el enlace, pegarlo aquí, guardar el MP4 y encontrarlo después.',
      ],
      tocTitle: 'En esta guía',
      sections: [
        {
          id: 'pasos',
          title: 'Guarda un TikTok en Android en cuatro pasos',
          blocks: [
            steps(
              ['Copia el enlace en TikTok.', 'Abre el vídeo, toca Compartir y luego Copiar enlace.'],
              ['Abre esta página en Chrome.', 'Samsung Internet y Firefox también funcionan. Usa el navegador en el que ya confías.'],
              ['Pega el enlace y envíalo.', 'Toca el cuadro de arriba, pega y espera a que carguen los formatos.'],
              ['Toca la opción MP4.', 'Confirma la descarga si el móvil te lo pide y el archivo empezará a guardarse.']
            ),
          ],
        },
        {
          id: 'donde',
          title: 'Dónde encontrar el vídeo descargado',
          blocks: [
            p('Abre la app Archivos o Mis archivos y ve a Descargas. Muchos móviles también añaden los vídeos nuevos a la Galería o a Google Fotos automáticamente, aunque algunos necesitan un momento o una actualización manual. La lista de descargas de Chrome, disponible en el menú del navegador, muestra los archivos recientes y los abre con un toque.'),
          ],
        },
        {
          id: 'soluciones',
          title: 'Si no se descarga en Android',
          blocks: [
            ul(
              'Confirma que el vídeo es público y que el enlace está completo.',
              'Permite las descargas en el navegador si el sistema las bloquea.',
              'Libera almacenamiento si no se puede escribir el archivo.',
              'Desactiva el ahorro de datos o un bloqueador de anuncios que interfiera con la página.',
              'Vuelve a intentarlo pasados unos minutos.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'Preguntas frecuentes sobre descargar TikTok en Android',
      faq: [
        { question: '¿Tengo que instalar un APK?', answer: 'No. No instales nunca un descargador de origen desconocido. Esto funciona en tu navegador.' },
        { question: '¿Dónde van las descargas en Android?', answer: 'A la carpeta Descargas, accesible desde la app Archivos. Algunos móviles también las muestran en la Galería.' },
        { question: '¿Funciona en móviles Samsung?', answer: 'Sí, en Samsung Internet o Chrome. Busca en Mis archivos → Descargas.' },
        { question: '¿Puedo guardar solo el sonido?', answer: 'Sí, mira el [descargador de sonidos de TikTok](/tiktok-sound-downloader).' },
        { question: '¿Es gratis?', answer: 'Sí, sin registro.' },
      ],
      finalTitle: 'TikTok en Android, desde tu navegador',
      finalText: 'Copia el enlace, pégalo en Chrome, guarda el MP4 y ábrelo desde Descargas.',
      ctaLabel: 'Pega un enlace de TikTok',
      moreText: '¿Usas iPhone? Mira [cómo descargar TikTok en iPhone](/download-tiktok-iphone).',
    },
  },

  'musically-down': {
    crumb: LABELS_ES['musically-down'],
    content: {
      metaTitle: 'Musically Down y Musical Down: qué es MusicallyDown',
      metaDescription:
        '¿Buscas Musically Down, Musical Down o musicaldown? Descubre qué es MusicallyDown, cómo funciona este descargador de TikTok y qué no hace.',
      heroTitleStart: '¿Musically Down o MusicallyDown?',
      heroTitleHighlight: ' La misma herramienta gratis',
      heroDescription:
        'Guarda vídeos públicos de TikTok como MP4 o MP3 en tu navegador. Sin app y sin registro. Así funciona.',
      intro: [
        'La gente busca esta herramienta con muchas grafías: MusicallyDown, Musical Down, musicaldown, Musically Down. Todas significan lo mismo: una forma de guardar desde el navegador un vídeo público de TikTok o su sonido sin instalar nada.',
        'Esta página explica de dónde viene el nombre, qué hace la herramienta y qué no hace, para que sepas qué esperar antes de pegar un enlace.',
      ],
      tocTitle: 'En esta guía',
      sections: [
        {
          id: 'nombre',
          title: 'De dónde viene el nombre',
          blocks: [
            p('Musical.ly fue una app de vídeos cortos que se integró en TikTok en 2018. Los descargadores creados en torno a ella conservaron el nombre «Musically» y la costumbre de buscarlo se mantuvo. MusicallyDown es una herramienta independiente. No está afiliada, respaldada ni operada por TikTok ni por su empresa matriz.'),
          ],
        },
        {
          id: 'que-hace',
          title: 'Qué hace MusicallyDown',
          blocks: [
            ul(
              'Lee el enlace de un vídeo público de TikTok y muestra las opciones de descarga disponibles.',
              'Guarda vídeos como MP4 con la mejor calidad que ofrezca la publicación. Mira las [descargas en HD](/tiktok-video-downloader-hd).',
              'Ofrece una copia sin el logo en movimiento cuando existe. Mira [sin marca de agua](/tiktok-no-watermark).',
              'Guarda el sonido como audio. Mira el [convertidor de TikTok a MP3](/tiktok-mp3).',
              'Admite [historias de TikTok](/download-tiktok-stories) y publicaciones de fotos cuando están disponibles.',
              'Funciona en el navegador en iPhone, Android, Windows y Mac.'
            ),
          ],
        },
        {
          id: 'que-no-hace',
          title: 'Qué no hace',
          blocks: [
            ul(
              'No descarga vídeos privados, eliminados o restringidos.',
              'Nunca te pide la contraseña ni el inicio de sesión de TikTok.',
              'No puede hacer un vídeo más nítido que la subida original.',
              'No te da derechos para reutilizar contenido de otras personas.'
            ),
            resp,
          ],
        },
      ],
      faqTitle: 'Preguntas frecuentes sobre MusicallyDown',
      faq: [
        { question: '¿MusicallyDown es lo mismo que Musical Down?', answer: 'Sí. Son distintas grafías de la misma herramienta.' },
        { question: '¿MusicallyDown es gratis?', answer: 'Sí, sin registro y sin app.' },
        { question: '¿Está afiliado a TikTok?', answer: 'No. Es una herramienta independiente.' },
        { question: '¿Funciona en mi móvil?', answer: 'Sí, consulta las guías para [iPhone](/download-tiktok-iphone) y [Android](/download-tiktok-android).' },
        { question: '¿Es seguro?', answer: 'Nunca compartes tu inicio de sesión de TikTok. Descarga solo contenido que hayas creado o para el que tengas permiso.' },
      ],
      finalTitle: 'Empieza con un enlace público de TikTok',
      finalText: 'Pega un enlace en la parte superior de la página y elige entre las opciones que aparezcan.',
      ctaLabel: 'Pega un enlace de TikTok',
      moreText: '¿Eres nuevo? Empieza con el [descargador de vídeos de TikTok](/).',
    },
  },
};
