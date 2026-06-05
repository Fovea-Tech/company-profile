/**
 * JSON-LD Structured Data — Organization + WebSite + FAQPage + BreadcrumbList schemas.
 * Bilingual (ID + EN) descriptions for Google to surface the brand in both searches.
 * Multiple schema types = more chances for rich results & SERP features.
 */
export default function JsonLd() {
  const BASE = 'https://www.fovea.digital';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService', 'LocalBusiness'],
    '@id': `${BASE}/#organization`,
    name: 'Fovea Teknologi',
    alternateName: [
      'Fovea Teknologi',
      'Fovea Tech',
      'Fovea Teknologi',
      'Fovea Digital',
      'Fovea',
    ],
    url: BASE,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE}/icon-512.png`,
      width: 512,
      height: 512,
    },
    image: `${BASE}/og-image.png`,
    description:
      'Fovea Teknologi adalah software house Indonesia spesialis jasa pembuatan website custom, sistem booking, dashboard internal, katalog produk, dan aplikasi SaaS untuk skala UMKM hingga Perusahaan.',
    foundingDate: '2026',
    priceRange: '$$',
    areaServed: [
      { '@type': 'Country', name: 'Indonesia' },
      { '@type': 'Country', name: 'Worldwide' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
      addressRegion: 'Indonesia',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@fovea.digital',
      telephone: '+62-881-8204-100',
      areaServed: 'ID',
      availableLanguage: ['Indonesian', 'English'],
    },
    knowsAbout: [
      'Jasa Pembuatan Website B2B',
      'Jasa Website UMKM',
      'Jasa Sistem Booking Online',
      'Pembuatan Dashboard Internal',
      'Katalog Produk Online',
      'Jasa Pembuatan SaaS MVP',
      'Software House Indonesia',
      'Jasa Landing Page Profesional',
      'Jasa Website Company Profile',
      'Custom Web Development',
      'B2B Website Development',
      'Booking System Development',
      'Internal Dashboard Development',
      'SaaS Development',
      'MVP Development',
      'IT Consulting Indonesia',
      'IT Maintenance Indonesia',
      'Jasa IT Maintenance',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Fovea Teknologi / Fovea Technology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          url: `${BASE}/services/saas`,
          itemOffered: {
            '@type': 'Service',
            name: 'Produk SaaS Fovea',
            description:
              'Aplikasi SaaS (Software as a Service) milik Fovea Teknologi yang siap pakai, dirancang khusus untuk mempermudah pekerjaan sehari-hari pengguna.',
            url: `${BASE}/services/saas`,
          },
        },
        {
          '@type': 'Offer',
          url: `${BASE}/services/website-custom`,
          itemOffered: {
            '@type': 'Service',
            name: 'Jasa Website Custom',
            description:
              'Pembuatan website custom, sistem booking, dan dashboard internal untuk B2B dan UMKM dengan desain modern dan SEO optimal.',
            url: `${BASE}/services/website-custom`,
          },
        },
        {
          '@type': 'Offer',
          url: `${BASE}/services/maintenance`,
          itemOffered: {
            '@type': 'Service',
            name: 'Jasa IT Maintenance & Support',
            description:
              'Layanan pemeliharaan sistem bulanan untuk memastikan performa cepat, aman, dan uptime 99.9%.',
            url: `${BASE}/services/maintenance`,
          },
        },
      ],
    },
    sameAs: [
      BASE,
      'https://www.instagram.com/buildwithfovea/',
      'https://www.tiktok.com/@buildwithfovea',
      'https://www.linkedin.com/company/fovea-technology/',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE}/#website`,
    url: BASE,
    name: 'Fovea Teknologi',
    alternateName: 'Fovea Teknologi',
    description:
      'Jasa Website Custom, Dashboard & Aplikasi SaaS Indonesia | Software House Terpercaya',
    publisher: {
      '@id': `${BASE}/#organization`,
    },
    inLanguage: ['id-ID', 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${BASE}/#webpage`,
    url: BASE,
    name: 'Fovea Teknologi | Jasa Website, Dashboard & Aplikasi SaaS Indonesia',
    description:
      'Software house Indonesia spesialis jasa pembuatan website custom, sistem booking, dashboard internal, katalog produk, dan aplikasi SaaS untuk bisnis B2B & UMKM.',
    isPartOf: { '@id': `${BASE}/#website` },
    about: { '@id': `${BASE}/#organization` },
    inLanguage: ['id-ID', 'en-US'],
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Beranda',
          item: BASE,
        },
      ],
    },
  };

  const serviceListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Layanan Fovea Teknologi',
    description: 'Daftar layanan yang tersedia di Fovea Teknologi',
    numberOfItems: 3,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        url: `${BASE}/services/saas`,
        name: 'Produk SaaS Fovea',
      },
      {
        '@type': 'ListItem',
        position: 2,
        url: `${BASE}/services/website-custom`,
        name: 'Jasa Website Custom',
      },
      {
        '@type': 'ListItem',
        position: 3,
        url: `${BASE}/services/maintenance`,
        name: 'Jasa IT Maintenance & Support',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Apakah Fovea Teknologi menyediakan layanan maintenance setelah website selesai dibuat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya, Fovea Teknologi menyediakan layanan maintenance dan dukungan teknis (SLA) pasca peluncuran untuk memastikan aplikasi atau website Anda tetap berjalan optimal dan aman.',
        },
      },
      {
        '@type': 'Question',
        name: 'Berapa biaya jasa pembuatan website custom di Fovea Teknologi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Biaya bervariasi tergantung kompleksitas dan fitur yang dibutuhkan. Hubungi kami melalui form kontak atau WhatsApp +62 881 8204 100 untuk konsultasi gratis dan penawaran harga terbaik.',
        },
      },
      {
        '@type': 'Question',
        name: 'Apakah saya bisa meminta custom integrasi dengan sistem yang sudah ada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tentu. Tim kami memiliki pengalaman luas dalam mengintegrasikan sistem baru dengan infrastruktur legacy, CRM, ERP, maupun payment gateway pihak ketiga.',
        },
      },
      {
        '@type': 'Question',
        name: 'Teknologi apa saja yang biasanya digunakan oleh Fovea Teknologi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kami menggunakan modern tech stack yang scalable dan reliable, seperti React/Next.js untuk frontend, serta Node.js dan Go untuk backend, dipadukan dengan cloud infrastructure (AWS/GCP).',
        },
      },
      {
        '@type': 'Question',
        name: 'Apa perbedaan website custom dengan WordPress atau Wix?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Website custom dikoding secara khusus menggunakan teknologi terkini. Hasilnya 10x lebih cepat, jauh lebih aman dari peretasan, dan desainnya tidak terbatas oleh template.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
