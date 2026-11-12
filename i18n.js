/*!
 * Raia Scrub V2.0.4 - i18n.js
 * Dictionaries and language switcher. Default language: en.
 * Keys are dotted paths. Missing Indonesian keys fall back to English, then to the key itself.
 * Placeholders use {name}. Only trusted dictionary strings are inserted as HTML.
 */
(function (global) {
    'use strict';

    var STORAGE_KEY = 'raia-lang';
    var DEFAULT_LANG = 'en';
    var SUPPORTED = ['en', 'id'];

    var DICT = {
        en: {
            'meta.title': 'Raia Scrub: Remove EXIF & PDF Metadata Locally',
            'meta.description': 'Strip GPS, camera and author metadata from JPG, PNG and PDF files right in your browser. 100% local, no uploads, free and private. Clean your digital trail.',
            'meta.ogTitle': 'Raia Scrub: Remove EXIF & PDF Metadata Locally',
            'meta.ogDescription': 'Strip GPS, camera and author metadata from JPG, PNG and PDF files in your browser. 100% local, no uploads, free and private.',
            'meta.ogImageAlt': 'Raia Scrub, a privacy-first metadata removal tool',
            'meta.twitterTitle': 'Raia Scrub: Remove EXIF & PDF Metadata Locally',
            'meta.twitterDescription': 'Strip GPS, camera and author metadata from JPG, PNG and PDF files in your browser. 100% local, no uploads, free and private.',
            'meta.twitterImageAlt': 'Raia Scrub, a privacy-first metadata removal tool',

            'nav.skip': 'Skip to main content',
            'nav.home': 'Raia Scrub home',
            'nav.main': 'Main navigation',
            'nav.mobile': 'Mobile navigation',
            'nav.toggle': 'Toggle navigation menu',
            'nav.features': 'Features',
            'nav.how': 'How it works',
            'nav.privacy': 'Privacy',
            'nav.faq': 'FAQ',
            'nav.getStarted': 'Get started',
            'nav.language': 'Language',
            'badge.local': '100% local',

            'hero.title': 'Clean Your <span>Digital Trail</span>',
            'hero.sub': 'Remove GPS, camera data, timestamps and hidden metadata from JPG, PNG and PDF files right inside your browser. Nothing is ever uploaded.',
            'hero.statsLabel': 'Key facts',
            'stat.files': 'Files uploaded',
            'stat.formats': 'Formats supported',
            'stat.free': 'Free & private',

            'drop.aria': 'Drag and drop files here, or press Enter to browse',
            'drop.title': 'Drop files here',
            'drop.subtitle': 'or click to browse',
            'drop.limit': 'Max 8 files · 50 MB each',
            'drop.formatsLabel': 'Supported file types',
            'drop.input': 'Choose files to scrub',

            'edu.aria': 'Privacy warning',
            'edu.title': 'Why scrub metadata?',
            'edu.text': 'Photos and documents can quietly reveal <strong>your home GPS location</strong>, phone model, timestamps and even your name. Strip it before you share.',

            'action.aria': 'File actions',
            'action.scrubAll': 'Scrub All',
            'action.downloadZip': 'Download All ZIP',
            'action.downloadZipAria': 'Download all cleaned files as ZIP',
            'action.clear': 'Clear All',
            'action.clearAria': 'Clear all files',

            'report.title': 'Privacy Report',
            'report.itemsFound': 'Privacy Report · {count} items found',
            'report.safeNote': 'This file is safe. No sensitive privacy data was found.',
            'report.noMetadata': 'No metadata to remove.',
            'report.sensitiveTip': 'Sensitive data',
            'report.infoTip': 'Informational',
            'report.cleanSize': 'Metadata removed. Clean size: {size}',

            'features.label': 'Features',
            'features.title': 'Everything you need to stay anonymous',
            'features.sub': 'Raia Scrub is built around one promise: your files never leave your device. Every feature works offline, in the browser, with zero tracking.',
            'feature1.title': '100% Local Processing',
            'feature1.text': 'Files are read with the browser File API and processed in memory. Nothing is sent to any server, ever.',
            'feature2.title': 'GPS & EXIF Removal',
            'feature2.text': 'Detects and removes latitude, longitude, camera make and model, serial numbers, capture timestamps and embedded thumbnails.',
            'feature3.title': 'PDF Metadata Cleaner',
            'feature3.text': 'Clears title, author, subject, keywords, creator, producer and the XMP metadata stream from your PDF documents.',
            'feature4.title': 'Privacy Report',
            'feature4.text': 'Before scrubbing, every file is scanned and each metadata field is listed, with sensitive items clearly highlighted.',
            'feature5.title': 'Before / After Preview',
            'feature5.text': 'Compare the original image with the cleaned version side by side to confirm the result looks exactly the same.',
            'feature6.title': 'Bulk Download as ZIP',
            'feature6.text': 'Clean up to 8 files at once, then download them one by one or bundled into a single ZIP archive.',

            'how.label': 'How It Works',
            'how.title': 'Four steps. Under a minute.',
            'how.sub': 'No account, no installation, no command line. Just drop your files and download them clean.',
            'step1.num': 'STEP 01',
            'step1.title': 'Add your files',
            'step1.text': 'Drag and drop JPG, PNG or PDF files onto the drop zone, or click it to browse your device.',
            'step2.num': 'STEP 02',
            'step2.title': 'Review the report',
            'step2.text': 'Raia Scrub scans each file and lists every metadata field it finds, highlighting the sensitive ones in red.',
            'step3.num': 'STEP 03',
            'step3.title': 'Scrub the metadata',
            'step3.text': 'Click “Scrub Now” on a single file or “Scrub All” to clean the entire queue in one go.',
            'step4.num': 'STEP 04',
            'step4.title': 'Download & share',
            'step4.text': 'Grab each cleaned file individually, or download everything at once as a ZIP archive.',

            'privacy.label': 'Privacy',
            'privacy.title': 'Privacy by design, not by promise',
            'privacy.sub': 'Raia Scrub has no backend. There is no upload endpoint, no database and no analytics pipeline. Once the page has loaded, you can disconnect from the internet and keep working.',
            'trust1.title': 'No File Uploads',
            'trust1.text': 'Your files stay in your browser tab. They are never sent anywhere, not even to us.',
            'trust2.title': 'No Tracking Cookies',
            'trust2.text': 'A single local preference flag remembers your cookie choice. No analytics, no fingerprinting, no ads.',
            'trust3.title': 'Works Offline',
            'trust3.text': 'After the first load, the page and its libraries are cached. Disconnect and keep scrubbing safely.',
            'trust4.title': 'Open & Auditable',
            'trust4.text': 'The app is made of plain HTML, CSS and JavaScript files. View the source and check what runs on your device.',

            'faq.label': 'FAQ',
            'faq.title': 'Frequently asked questions',
            'faq.sub': 'Everything you might want to know before you scrub your first file.',
            'faq1.q': 'Are my files uploaded to a server?',
            'faq1.a': 'No. Raia Scrub runs entirely inside your browser. Files are read locally with the File API and never leave your device. You can even disconnect from the internet after the page loads and keep scrubbing.',
            'faq2.q': 'What metadata does Raia Scrub remove?',
            'faq2.a': 'For images it removes EXIF data such as GPS coordinates, camera make and model, capture timestamps, software, artist, copyright, focal length, camera serial numbers and embedded thumbnails. For PDFs it clears the title, author, subject, keywords, creator, producer and the XMP metadata stream.',
            'faq3.q': 'Which file formats are supported?',
            'faq3.a': 'JPG, JPEG, PNG and PDF. You can queue up to 8 files at a time, with a maximum size of 50 MB per file.',
            'faq4.q': 'Does scrubbing reduce image quality?',
            'faq4.a': 'JPEG files are cleaned losslessly by rewriting the EXIF segment, so the pixels stay untouched. PNG files are re-encoded through a canvas at maximum quality, which removes metadata while keeping the visual quality.',
            'faq5.q': 'Is Raia Scrub free to use?',
            'faq5.a': 'Yes. Raia Scrub is completely free and open source. There is no account, no sign-up, no watermark and no installation.',
            'faq6.q': 'Can I use Raia Scrub offline?',
            'faq6.a': 'Yes. After the first load, the page and its libraries are cached by your browser, so you can keep scrubbing files without an internet connection.',

            'footer.tagline': 'Clean your files, protect your privacy.',
            'footer.privacyNote': 'All processing happens in your browser. No data is sent to any server.',
            'footer.builtWith': 'Built with privacy-first principles.',
            'footer.donate': 'Buy us a coffee',
            'footer.donateAria': 'Support Raia Scrub on Buy Me a Coffee',
            'footer.privacyPolicy': 'Privacy Policy',
            'footer.terms': 'Terms & Conditions',
            'footer.cookiePolicy': 'Cookie Policy',
            'footer.copyright': '© 2026 Haiere. Licensed under the MIT License.',
            'footer.logoAlt': 'Raia Scrub logo',

            'donate.text': 'Donate',
            'cookie.title': 'Cookie consent',
            'cookie.text': 'We use a single local preference cookie. No tracking, no sharing.',
            'cookie.learnMore': 'Learn more',
            'cookie.accept': 'Accept',
            'cookie.acceptAria': 'Accept cookies',
            'cookie.decline': 'Decline',
            'cookie.declineAria': 'Decline cookies',

            'noscript.title': 'JavaScript Required',
            'noscript.text': 'Raia Scrub processes everything locally in your browser, so JavaScript must be enabled to use it. No file ever leaves your device.',

            'toast.prefsSaved': 'Preferences saved.',
            'toast.noCookies': 'No cookies set.',
            'toast.maxFiles': 'Max {max} files at once.',
            'toast.unsupported': 'Unsupported format: {name}',
            'toast.tooLarge': 'File too large (over 50 MB): {name}',
            'toast.allScrubbed': 'All files scrubbed successfully!',
            'toast.scrubbed': '{name} scrubbed successfully!',
            'toast.failed': 'Failed to process {name}: {message}',
            'toast.noScrubbed': 'No scrubbed files yet.',
            'toast.zipCreating': 'Creating ZIP…',
            'toast.zipDone': 'ZIP created successfully ({count} files)',
            'toast.zipFailed': 'Failed to create ZIP: {message}',
            'toast.cleared': 'All files cleared.',

            'card.reading': 'Reading…',
            'card.processing': 'Processing…',
            'card.analyzing': 'Analyzing metadata…',
            'card.analysisComplete': 'Analysis complete',
            'card.removing': 'Removing metadata…',
            'card.done': 'Done!',
            'card.scrubbing': 'Scrubbing…',
            'card.generating': 'Generating…',
            'card.safe': 'Safe',
            'card.clean': 'Clean',
            'card.sensitive': '{count} sensitive',
            'card.infoOnly': 'Info only',
            'card.thumbAlt': 'Thumbnail preview',
            'card.cleanedAlt': 'Cleaned file preview',
            'card.scrubAria': 'Scrub this file',
            'card.scrubNow': 'Scrub Now',
            'card.downloadAria': 'Download cleaned file',
            'card.downloadCleaned': 'Download Cleaned',
            'card.before': 'Before',
            'card.after': 'After (Clean)',
            'card.tryAgain': 'Try again',
            'card.originalAlt': 'Original file preview',

            'meta.device': 'Device',
            'meta.gps': 'GPS Location',
            'meta.captureTime': 'Capture Time',
            'meta.software': 'Software',
            'meta.artist': 'Photographer / Artist',
            'meta.copyright': 'Copyright',
            'meta.focalLength': 'Focal Length',
            'meta.serial': 'Camera Serial Number',
            'meta.hiddenThumb': 'Hidden Thumbnail',
            'meta.hiddenThumbValue': 'EXIF thumbnail inside file',
            'meta.title2': 'Title',
            'meta.author': 'Author',
            'meta.subject': 'Subject',
            'meta.keywords': 'Keywords',
            'meta.creator': 'Creator',
            'meta.producer': 'Producer',
            'meta.creationDate': 'Creation Date',
            'meta.modDate': 'Modification Date',
            'meta.area.jakarta': 'Jakarta area',
            'meta.area.semarang': 'Semarang area',
            'meta.area.surabaya': 'Surabaya area',

            'error.unsupportedType': 'Unsupported file type',
            'error.canvas': 'Canvas conversion failed',
            'error.imageLoad': 'Image failed to load'
        },

        id: {
            'meta.title': 'Raia Scrub: Hapus Metadata EXIF & PDF Secara Lokal',
            'meta.description': 'Hapus data GPS, kamera, dan penulis dari file JPG, PNG, dan PDF langsung di browser. 100% lokal, tanpa unggahan, gratis, dan privat. Bersihkan jejak digitalmu.',
            'meta.ogTitle': 'Raia Scrub: Hapus Metadata EXIF & PDF Secara Lokal',
            'meta.ogDescription': 'Hapus data GPS, kamera, dan penulis dari file JPG, PNG, dan PDF di browser. 100% lokal, tanpa unggahan, gratis, dan privat.',
            'meta.ogImageAlt': 'Raia Scrub, alat penghapus metadata yang mengutamakan privasi',
            'meta.twitterTitle': 'Raia Scrub: Hapus Metadata EXIF & PDF Secara Lokal',
            'meta.twitterDescription': 'Hapus data GPS, kamera, dan penulis dari file JPG, PNG, dan PDF di browser. 100% lokal, tanpa unggahan, gratis, dan privat.',
            'meta.twitterImageAlt': 'Raia Scrub, alat penghapus metadata yang mengutamakan privasi',

            'nav.skip': 'Lewati ke konten utama',
            'nav.home': 'Beranda Raia Scrub',
            'nav.main': 'Navigasi utama',
            'nav.mobile': 'Navigasi seluler',
            'nav.toggle': 'Buka atau tutup menu navigasi',
            'nav.features': 'Fitur',
            'nav.how': 'Cara kerja',
            'nav.privacy': 'Privasi',
            'nav.faq': 'FAQ',
            'nav.getStarted': 'Mulai sekarang',
            'nav.language': 'Bahasa',
            'badge.local': '100% lokal',

            'hero.title': 'Bersihkan <span>Jejak Digitalmu</span>',
            'hero.sub': 'Hapus data GPS, kamera, waktu pengambilan, dan metadata tersembunyi dari file JPG, PNG, dan PDF langsung di browser. Tidak ada file yang diunggah.',
            'hero.statsLabel': 'Fakta utama',
            'stat.files': 'File diunggah',
            'stat.formats': 'Format didukung',
            'stat.free': 'Gratis & privat',

            'drop.aria': 'Seret dan lepas file di sini, atau tekan Enter untuk memilih file',
            'drop.title': 'Letakkan file di sini',
            'drop.subtitle': 'atau klik untuk memilih',
            'drop.limit': 'Maksimal 8 file · 50 MB per file',
            'drop.formatsLabel': 'Jenis file yang didukung',
            'drop.input': 'Pilih file yang akan dibersihkan',

            'edu.aria': 'Peringatan privasi',
            'edu.title': 'Kenapa perlu membersihkan metadata?',
            'edu.text': 'Foto dan dokumen bisa diam-diam mengungkap <strong>lokasi GPS rumahmu</strong>, model ponsel, waktu pengambilan, bahkan namamu. Hapus datanya sebelum kamu membagikannya.',

            'action.aria': 'Tindakan file',
            'action.scrubAll': 'Bersihkan semua',
            'action.downloadZip': 'Unduh semua (ZIP)',
            'action.downloadZipAria': 'Unduh semua file yang sudah bersih sebagai ZIP',
            'action.clear': 'Hapus semua',
            'action.clearAria': 'Hapus semua file',

            'report.title': 'Laporan privasi',
            'report.itemsFound': 'Laporan privasi · {count} item ditemukan',
            'report.safeNote': 'File ini aman. Tidak ditemukan data privasi yang sensitif.',
            'report.noMetadata': 'Tidak ada metadata yang perlu dihapus.',
            'report.sensitiveTip': 'Data sensitif',
            'report.infoTip': 'Informasi',
            'report.cleanSize': 'Metadata dihapus. Ukuran bersih: {size}',

            'features.label': 'Fitur',
            'features.title': 'Semua yang kamu butuhkan untuk tetap anonim',
            'features.sub': 'Raia Scrub dibangun di atas satu janji: file kamu tidak pernah meninggalkan perangkatmu. Semua fitur berjalan di browser, tanpa pelacakan sama sekali.',
            'feature1.title': 'Proses 100% lokal',
            'feature1.text': 'File dibaca lewat File API browser dan diproses di memori. Tidak ada data yang dikirim ke server, kapan pun.',
            'feature2.title': 'Hapus GPS & EXIF',
            'feature2.text': 'Mendeteksi dan menghapus latitude, longitude, merek dan model kamera, nomor seri, waktu pengambilan, serta thumbnail yang tertanam.',
            'feature3.title': 'Pembersih metadata PDF',
            'feature3.text': 'Menghapus judul, penulis, subjek, kata kunci, pembuat, produser, dan aliran metadata XMP dari dokumen PDF-mu.',
            'feature4.title': 'Laporan privasi',
            'feature4.text': 'Sebelum dibersihkan, setiap file dipindai dan setiap kolom metadata ditampilkan. Data sensitif ditandai dengan jelas.',
            'feature5.title': 'Pratinjau sebelum & sesudah',
            'feature5.text': 'Bandingkan gambar asli dengan versi bersihnya secara berdampingan untuk memastikan tampilannya tetap sama.',
            'feature6.title': 'Unduh massal sebagai ZIP',
            'feature6.text': 'Bersihkan hingga 8 file sekaligus, lalu unduh satu per satu atau sekaligus dalam satu arsip ZIP.',

            'how.label': 'Cara kerja',
            'how.title': 'Empat langkah. Kurang dari satu menit.',
            'how.sub': 'Tanpa akun, tanpa instalasi, tanpa command line. Cukup letakkan file dan unduh hasil yang sudah bersih.',
            'step1.num': 'LANGKAH 01',
            'step1.title': 'Tambahkan file',
            'step1.text': 'Seret dan lepas file JPG, PNG, atau PDF ke area unggah, atau klik area itu untuk memilih file dari perangkatmu.',
            'step2.num': 'LANGKAH 02',
            'step2.title': 'Periksa laporannya',
            'step2.text': 'Raia Scrub memindai setiap file dan menampilkan semua metadata yang ditemukan. Data sensitif disorot dengan warna merah.',
            'step3.num': 'LANGKAH 03',
            'step3.title': 'Bersihkan metadata',
            'step3.text': 'Klik “Bersihkan sekarang” pada satu file, atau “Bersihkan semua” untuk membersihkan seluruh antrean sekaligus.',
            'step4.num': 'LANGKAH 04',
            'step4.title': 'Unduh & bagikan',
            'step4.text': 'Unduh setiap file yang sudah bersih satu per satu, atau unduh semuanya sekaligus dalam arsip ZIP.',

            'privacy.label': 'Privasi',
            'privacy.title': 'Privasi sejak awal, bukan sekadar janji',
            'privacy.sub': 'Raia Scrub tidak punya backend. Tidak ada endpoint unggah, database, maupun sistem analitik. Setelah halaman dimuat, kamu bisa memutus internet dan tetap bekerja.',
            'trust1.title': 'Tanpa unggahan file',
            'trust1.text': 'File kamu tetap berada di tab browser. Tidak pernah dikirim ke mana pun, termasuk ke kami.',
            'trust2.title': 'Tanpa cookie pelacak',
            'trust2.text': 'Hanya satu penanda preferensi lokal yang menyimpan pilihan cookie-mu. Tanpa analitik, fingerprinting, atau iklan.',
            'trust3.title': 'Bisa dipakai offline',
            'trust3.text': 'Setelah pemuatan pertama, halaman dan library-nya disimpan di cache. Putus koneksi dan tetap bisa membersihkan file dengan aman.',
            'trust4.title': 'Terbuka & bisa diaudit',
            'trust4.text': 'Aplikasi ini dibuat dari file HTML, CSS, dan JavaScript biasa. Lihat sumbernya dan pastikan sendiri apa yang berjalan di perangkatmu.',

            'faq.label': 'FAQ',
            'faq.title': 'Pertanyaan yang sering diajukan',
            'faq.sub': 'Hal-hal yang mungkin ingin kamu tahu sebelum membersihkan file pertamamu.',
            'faq1.q': 'Apakah file kamu diunggah ke server?',
            'faq1.a': 'Tidak. Raia Scrub berjalan sepenuhnya di dalam browser. File dibaca secara lokal dengan File API dan tidak pernah meninggalkan perangkatmu. Kamu bahkan bisa memutus internet setelah halaman dimuat dan tetap membersihkan file.',
            'faq2.q': 'Metadata apa saja yang dihapus Raia Scrub?',
            'faq2.a': 'Untuk gambar, Raia Scrub menghapus data EXIF seperti koordinat GPS, merek dan model kamera, waktu pengambilan, perangkat lunak, nama fotografer, hak cipta, panjang fokal, nomor seri kamera, dan thumbnail yang tertanam. Untuk PDF, Raia Scrub menghapus judul, penulis, subjek, kata kunci, pembuat, produser, dan aliran metadata XMP.',
            'faq3.q': 'Format file apa saja yang didukung?',
            'faq3.a': 'JPG, JPEG, PNG, dan PDF. Kamu bisa memasukkan hingga 8 file sekaligus dengan ukuran maksimal 50 MB per file.',
            'faq4.q': 'Apakah membersihkan file membuat kualitas gambar turun?',
            'faq4.a': 'File JPEG dibersihkan tanpa kehilangan kualitas dengan menulis ulang segmen EXIF, sehingga pikselnya tetap utuh. File PNG di-encode ulang lewat canvas dengan kualitas maksimum, sehingga metadata terhapus sambil tampilan visualnya tetap terjaga.',
            'faq5.q': 'Apakah Raia Scrub gratis?',
            'faq5.a': 'Ya. Raia Scrub sepenuhnya gratis dan open source. Tidak perlu akun, pendaftaran, watermark, atau instalasi.',
            'faq6.q': 'Bisakah kamu memakai Raia Scrub secara offline?',
            'faq6.a': 'Bisa. Setelah pemuatan pertama, halaman dan library-nya disimpan di cache oleh browser, jadi kamu tetap bisa membersihkan file tanpa koneksi internet.',

            'footer.tagline': 'Bersihkan file, lindungi privasimu.',
            'footer.privacyNote': 'Semua proses berjalan di browser kamu. Tidak ada data yang dikirim ke server.',
            'footer.builtWith': 'Dibuat dengan prinsip privasi sebagai prioritas utama.',
            'footer.donate': 'Traktir kami kopi',
            'footer.donateAria': 'Dukung Raia Scrub lewat Buy Me a Coffee',
            'footer.privacyPolicy': 'Kebijakan privasi',
            'footer.terms': 'Syarat & ketentuan',
            'footer.cookiePolicy': 'Kebijakan cookie',
            'footer.copyright': '© 2026 Haiere. Dilisensikan di bawah MIT License.',

            'footer.logoAlt': 'Logo Raia Scrub',

            'donate.text': 'Donasi',
            'cookie.title': 'Persetujuan cookie',
            'cookie.text': 'Kami hanya memakai satu cookie preferensi lokal. Tanpa pelacakan, tanpa berbagi data.',
            'cookie.learnMore': 'Pelajari lebih lanjut',
            'cookie.accept': 'Setuju',
            'cookie.acceptAria': 'Setujui cookie',
            'cookie.decline': 'Tolak',
            'cookie.declineAria': 'Tolak cookie',

            'noscript.title': 'JavaScript diperlukan',
            'noscript.text': 'Raia Scrub memproses semua file secara lokal di browser, jadi JavaScript harus aktif untuk memakainya. Tidak ada file yang meninggalkan perangkatmu.',

            'toast.prefsSaved': 'Preferensi disimpan.',
            'toast.noCookies': 'Tidak ada cookie yang disimpan.',
            'toast.maxFiles': 'Maksimal {max} file sekaligus.',
            'toast.unsupported': 'Format tidak didukung: {name}',
            'toast.tooLarge': 'File terlalu besar (lebih dari 50 MB): {name}',
            'toast.allScrubbed': 'Semua file berhasil dibersihkan!',
            'toast.scrubbed': '{name} berhasil dibersihkan!',
            'toast.failed': 'Gagal memproses {name}: {message}',
            'toast.noScrubbed': 'Belum ada file yang dibersihkan.',
            'toast.zipCreating': 'Membuat ZIP…',
            'toast.zipDone': 'ZIP berhasil dibuat ({count} file)',
            'toast.zipFailed': 'Gagal membuat ZIP: {message}',
            'toast.cleared': 'Semua file dihapus.',

            'card.reading': 'Membaca…',
            'card.processing': 'Memproses…',
            'card.analyzing': 'Menganalisis metadata…',
            'card.analysisComplete': 'Analisis selesai',
            'card.removing': 'Menghapus metadata…',
            'card.done': 'Selesai!',
            'card.scrubbing': 'Membersihkan…',
            'card.generating': 'Membuat…',
            'card.safe': 'Aman',
            'card.clean': 'Bersih',
            'card.sensitive': '{count} sensitif',
            'card.infoOnly': 'Hanya info',
            'card.thumbAlt': 'Pratinjau thumbnail',
            'card.cleanedAlt': 'Pratinjau file yang sudah bersih',
            'card.scrubAria': 'Bersihkan file ini',
            'card.scrubNow': 'Bersihkan sekarang',
            'card.downloadAria': 'Unduh file yang sudah bersih',
            'card.downloadCleaned': 'Unduh file bersih',
            'card.before': 'Sebelum',
            'card.after': 'Sesudah (bersih)',
            'card.tryAgain': 'Coba lagi',
            'card.originalAlt': 'Pratinjau file asli',

            'meta.device': 'Perangkat',
            'meta.gps': 'Lokasi GPS',
            'meta.captureTime': 'Waktu pengambilan',
            'meta.software': 'Perangkat lunak',
            'meta.artist': 'Fotografer / Pembuat',
            'meta.copyright': 'Hak cipta',
            'meta.focalLength': 'Panjang fokal',
            'meta.serial': 'Nomor seri kamera',
            'meta.hiddenThumb': 'Thumbnail tersembunyi',
            'meta.hiddenThumbValue': 'Thumbnail EXIF di dalam file',
            'meta.title2': 'Judul',
            'meta.author': 'Penulis',
            'meta.subject': 'Subjek',
            'meta.keywords': 'Kata kunci',
            'meta.creator': 'Pembuat',
            'meta.producer': 'Produser',
            'meta.creationDate': 'Tanggal dibuat',
            'meta.modDate': 'Tanggal diubah',
            'meta.area.jakarta': 'Wilayah Jakarta',
            'meta.area.semarang': 'Wilayah Semarang',
            'meta.area.surabaya': 'Wilayah Surabaya',

            'error.unsupportedType': 'Jenis file tidak didukung',
            'error.canvas': 'Konversi canvas gagal',
            'error.imageLoad': 'Gambar gagal dimuat'
        }
    };

    var current = DEFAULT_LANG;
    var listeners = [];

    function readStored() {
        try {
            var v = global.localStorage.getItem(STORAGE_KEY);
            return SUPPORTED.indexOf(v) !== -1 ? v : null;
        } catch (_) {
            return null;
        }
    }

    function writeStored(lang) {
        try { global.localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* storage unavailable */ }
    }

    function interpolate(str, vars) {
        if (!vars) return str;
        return str.replace(/\{(\w+)\}/g, function (m, name) {
            return Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : m;
        });
    }

    function t(key, vars) {
        var str = (DICT[current] && DICT[current][key]);
        if (str === undefined) str = DICT[DEFAULT_LANG][key];
        if (str === undefined) str = key;
        return interpolate(str, vars);
    }

    function applyTranslations(root) {
        var scope = root || document;

        Array.prototype.forEach.call(scope.querySelectorAll('[data-i18n]'), function (el) {
            el.textContent = t(el.getAttribute('data-i18n'));
        });

        // Trusted dictionary strings only; may contain <span> or <strong>.
        Array.prototype.forEach.call(scope.querySelectorAll('[data-i18n-html]'), function (el) {
            el.innerHTML = t(el.getAttribute('data-i18n-html'));
        });

        // Format: "attribute:key" pairs separated by ";" e.g. "aria-label:nav.home;alt:footer.logoAlt"
        Array.prototype.forEach.call(scope.querySelectorAll('[data-i18n-attr]'), function (el) {
            el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
                var idx = pair.indexOf(':');
                if (idx === -1) return;
                var attr = pair.slice(0, idx).trim();
                var key = pair.slice(idx + 1).trim();
                if (attr && key) el.setAttribute(attr, t(key));
            });
        });

        var titleEl = document.querySelector('title[data-i18n]');
        if (titleEl) document.title = t('meta.title');
    }

    function setLang(lang) {
        if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
        current = lang;
        document.documentElement.lang = lang;
        writeStored(lang);
        applyTranslations();
        Array.prototype.forEach.call(document.querySelectorAll('[data-lang-option]'), function (btn) {
            var active = btn.getAttribute('data-lang-option') === lang;
            btn.setAttribute('aria-pressed', active ? 'true' : 'false');
            btn.classList.toggle('is-active', active);
        });
        listeners.forEach(function (fn) { try { fn(lang); } catch (_) {} });
    }

    function onChange(fn) {
        if (typeof fn === 'function') listeners.push(fn);
    }

    function init() {
        var stored = readStored();
        current = stored || DEFAULT_LANG;
        setLang(current);
    }

    global.i18n = {
        t: t,
        setLang: setLang,
        getLang: function () { return current; },
        apply: applyTranslations,
        onChange: onChange,
        init: init,
        supported: SUPPORTED.slice()
    };
    global.t = t;
})(window);