import type { Translations } from '@/i18n/types';

const id: Translations = {
  nav: {
    brand: 'Fovea Teknologi',
    home: 'Beranda',
    whoWeAre: 'Siapa Kami',
    process: 'Proses Kerja',
    services: 'Layanan',
    faq: 'FAQ',
    contact: 'Kontak',
  },
  hero: {
    tagline: 'SOFTWARE HOUSE INDONESIA SPESIALIS WEBSITE',
    title: 'Website Tajam, Cepat, dan Siap Bertumbuh',
    subtitle:
      'Fovea Teknologi membantu brand, bisnis, dan startup membangun website custom, sistem booking, dashboard internal, dan aplikasi SaaS yang rapi, cepat, dan siap pakai.',
    cta: 'Konsultasi Gratis',
    ctaSecondary: 'Lihat Layanan',
    trustMicrocopy: ['Produk SaaS Fovea', 'Website Custom', 'Pemeliharaan Berkala'],
  },
  whoAreWe: {
    heading: 'Siapa Kami?',
    title: 'Kami membangun website yang bukan cuma terlihat bagus, tapi juga bekerja dengan jelas.',
    subtitle: 'Fovea Teknologi hadir sebagai mitra penyedia solusi untuk merancang, membangun, dan mengelola website bisnis Anda agar selalu relevan, aman, dan siap diandalkan untuk jangka panjang.',
    titleCards: ['Fokus pada Website', 'Struktur yang jelas', 'Membangun untuk Pertumbuhan'],
    descCards: [
      'Kami pada website, sehingga strategi, desain, development, dan maintenance dibuat lebih tajam dan tidak melebar ke hal yang tidak perlu.',
      'Setiap halaman disusun dengan alur konten yang jelas, mulai dari peran utama, informasi pendukung, sampai tindakan yang ingin dilakukan user.',
      'Website tidak berhenti saat launch. Kami bantu menjaga performa, keamanan, dan pengembangan agar tetap siap bertumbuh.',
    ],
  },
  process: {
    heading: 'Proses Kerja Kami',
    title: 'Dari ide sampai website live, prosesnya dibuat jelas.',
    subtitle: 'Kami menjaga setiap tahap tetap transparan, terstruktur, dan mudah diikuti oleh client.',
    cards: [
      { title: 'Cari Tahu', description: 'Kami memahami kebutuhan bisnis Anda dengan riset mendalam agar solusi tepat dan relevan.' },
      { title: 'Rancangan & Desain', description: 'Kami merancang solusi digital dengan desain intuitif dan pengalaman pengguna yang optimal.' },
      { title: 'Pengembangan', description: 'Solusi dibangun dengan teknologi modern, kode yang bersih, dan performa yang andal serta aman.' },
      { title: 'Luncurkan & Rawat', description: 'Website/solusi siap diluncurkan dan kami pastikan tetap optimal dengan maintenance berkelanjutan.' },
    ],
  },
  services: {
    heading: 'Layanan',
    title: 'Pilih layanan website sesuai kebutuhan bisnis Anda.',
    subtitle: 'Mulai dari berlangganan produk SaaS Fovea yang siap pakai, pembuatan website custom, hingga pemeliharaan sistem.',
    cards: [
      {
        title: 'Produk SaaS',
        desc: 'Aplikasi SaaS (Hak Kekayaan Intelektual Fovea) yang siap pakai, dirancang khusus untuk mempermudah pekerjaan sehari-hari pengguna.',
        bullets: [
          'Langsung Siap Pakai',
          'Berlangganan (Murah)',
          'Selalu Diperbarui',
          'Komunitas & Dukungan',
        ],
        cta: 'Eksplor Produk',
      },
      {
        title: 'Website Custom',
        desc: 'Untuk branding yang lebih unik sesuai kebutuhan Anda.',
        bullets: [
          'Halaman Tak Terbatas',
          'Desain Eksklusif',
          'SEO Lanjutan',
          'Akses Panel',
          'Integrasi Alat',
        ],
        cta: 'Daftar Website Custom',
      },
      {
        title: 'Pemeliharaan',
        desc: 'Untuk pelanggan setia yang membutuhkan dukungan rutin.',
        bullets: [
          'Pembaruan Konten',
          'Cadangan Rutin',
          'Monitoring Kesalahan',
          'Laporan Bulanan',
        ],
        cta: 'Daftar Pemeliharaan',
      },
    ]
  },
  faq: {
    heading: 'FAQ',
    title: 'Pertanyaan yang sering muncul sebelum mulai proyek.',
    subtitle: 'Beberapa hal yang biasanya ditanyakan sebelum bekerja sama dengan Fovea Teknologi.',
    items: [
      {
        q: 'Apakah Fovea Teknologi menyediakan layanan maintenance setelah website selesai dibuat?',
        a: 'Ya, kami menyediakan layanan maintenance dan dukungan teknis (SLA) pasca peluncuran untuk memastikan aplikasi atau website Anda tetap berjalan optimal dan aman.',
      },
      {
        q: 'Berapa lama waktu yang dibutuhkan untuk mengembangkan sebuah produk SaaS?',
        a: 'Waktu pengembangan bervariasi tergantung kompleksitas fitur. Untuk MVP (Minimum Viable Product) biasanya memakan waktu 2 hingga 4 bulan, sedangkan produk berskala besar bisa lebih dari 6 bulan.',
      },
      {
        q: 'Apakah saya bisa meminta custom integrasi dengan sistem yang sudah ada?',
        a: 'Tentu. Tim kami memiliki pengalaman luas dalam mengintegrasikan sistem baru dengan infrastruktur legacy, CRM, ERP, maupun payment gateway pihak ketiga.',
      },
      {
        q: 'Teknologi apa saja yang biasanya digunakan oleh Fovea Teknologi?',
        a: 'Kami menggunakan modern tech stack yang scalable dan reliable, seperti React/Next.js untuk frontend, serta Node.js, dan Go untuk backend, dipadukan dengan cloud infrastructure (AWS/GCP).',
      },
    ],
  },
  contact: {
    heading: 'MARI BICARA',
    title: 'Siap membangun website yang lebih rapi dan siap berkembang?',
    subtitle: 'Ceritakan kebutuhan websitemu, dan kami akan bantu arahkan layanan yang paling sesuai.',
    cta: 'Kirim Ringkasan Proyek',
    form: {
      name: 'Nama Lengkap',
      email: 'Email',
      service: 'Jenis Layanan',
      message: 'Pesan',
      send: 'Kirim Pesan',
      optSaas: 'Produk SaaS',
      optWeb: 'Website Custom',
      optOther: 'Lainnya',
      placeholderEmail: 'contoh@email.com',
      placeholderName: 'Nama Lengkap',
      placeholderMessage: 'Ceritakan tentang project, tujuan, dan fitur yang diinginkan..',
      placeholderService: 'Pilih layanan',
    },
    success: 'Pesan Anda berhasil terkirim! Kami akan segera menghubungi Anda dalam 24 jam.',
    directContact: 'Direct Contact',
    socialMedia: 'Social Media',
  },
  footer: {
    brand: 'Fovea Teknologi',
    title: [
      'Navigasi',
      'Layanan',
      'Kontak',
    ],
    tagline: 'Membangun Masa Depan, Satu Produk dalam Satu Waktu.',
    copyright: 'Semua hak dilindungi.',
    navigation: ['Beranda', 'Siapa Kami', 'Proses Kerja', 'Layanan', 'FAQ', 'Kontak'],
    services: ['Produk SaaS', 'Website Custom', 'Pemeliharaan'],
  },
};

export default id;
