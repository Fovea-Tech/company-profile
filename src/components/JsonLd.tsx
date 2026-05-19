/**
 * JSON-LD Structured Data — Organization + WebSite + FAQPage + BreadcrumbList schemas.
 * Bilingual (ID + EN) descriptions for Google to surface the brand in both searches.
 * Multiple schema types = more chances for rich results & SERP features.
 */
export default function JsonLd() {
  const BASE = 'https://www.fovea.digital';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${BASE}/#organization`,
    name: 'Fovea Technology',
    alternateName: [
      'Fovea Teknologi',
      'Fovea Tech',
      'Fovea Technology',
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
      'Fovea Technology adalah software house Indonesia spesialis jasa pembuatan website custom, sistem booking, dashboard internal, katalog produk, dan aplikasi SaaS untuk bisnis B2B & UMKM. Fovea Technology is an Indonesian software house specializing in custom website development, booking systems, internal dashboards, and SaaS applications.',
    foundingDate: '2026',
    areaServed: [
      { '@type': 'Country', name: 'Indonesia' },
      { '@type': 'Country', name: 'Worldwide' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ID',
    },
    knowsAbout: [
      // Indonesian terms
      'Jasa Pembuatan Website B2B',
      'Jasa Website UMKM',
      'Jasa Sistem Booking Online',
      'Pembuatan Dashboard Internal',
      'Katalog Produk Online',
      'Jasa Pembuatan SaaS MVP',
      'Software House Indonesia',
      'Jasa Landing Page Profesional',
      'Jasa Website Company Profile',
      // English terms
      'Custom Web Development',
      'B2B Website Development',
      'Booking System Development',
      'Internal Dashboard Development',
      'SaaS Development',
      'MVP Development',
      'IT Consulting Indonesia',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Fovea Technology / Fovea Technology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Website Development',
            description:
              'Pembuatan website custom, sistem booking, dan dashboard internal untuk B2B dan UMKM dengan desain modern dan SEO optimal. Custom website, booking system, and internal dashboard development.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS Product & MVP Development',
            description:
              'Pengembangan produk SaaS dan MVP siap pakai untuk skala bisnis modern Indonesia. End-to-end SaaS and MVP product development ready for modern business scale.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maintenance & Support',
            description:
              'Layanan pemeliharaan sistem bulanan untuk memastikan performa yang cepat dan aman. Monthly system maintenance to ensure fast and secure performance.',
          },
        },
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'hello@fovea.digital',
      telephone: '+62-881-8204-100',
      areaServed: 'ID',
      availableLanguage: ['Indonesian', 'English'],
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
    name: 'Fovea Technology',
    alternateName: 'Fovea Teknologi',
    description:
      'Jasa Website Custom, Dashboard & Aplikasi SaaS Indonesia — Software House | Custom Website, Dashboard & SaaS Development Services',
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
    name: 'Fovea Technology — Jasa Website, Dashboard & Aplikasi SaaS Indonesia',
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

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Apakah Fovea Technology menyediakan layanan maintenance setelah website selesai dibuat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ya, Fovea Technology menyediakan layanan maintenance dan dukungan teknis (SLA) pasca peluncuran untuk memastikan aplikasi atau website Anda tetap berjalan optimal dan aman.',
        },
      },
      {
        '@type': 'Question',
        name: 'Berapa lama waktu yang dibutuhkan untuk mengembangkan sebuah produk SaaS?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Waktu pengembangan bervariasi tergantung kompleksitas fitur. Untuk MVP (Minimum Viable Product) biasanya memakan waktu 2 hingga 4 bulan, sedangkan produk berskala besar bisa lebih dari 6 bulan.',
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
        name: 'Teknologi apa saja yang biasanya digunakan oleh Fovea Technology?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kami menggunakan modern tech stack yang scalable dan reliable, seperti React/Next.js untuk frontend, serta Node.js dan Go untuk backend, dipadukan dengan cloud infrastructure (AWS/GCP).',
        },
      },
      {
        '@type': 'Question',
        name: 'Berapa biaya jasa pembuatan website custom di Fovea Technology?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Biaya bervariasi tergantung kompleksitas dan fitur yang dibutuhkan. Hubungi kami melalui form kontak atau WhatsApp +62 881 8204 100 untuk konsultasi gratis dan penawaran harga terbaik.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Fovea Technology provide maintenance services after launch?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide ongoing maintenance and technical support (SLA) post-launch to ensure your application or website runs optimally and remains secure.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
