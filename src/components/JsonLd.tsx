/**
 * JSON-LD Structured Data — Organization + WebSite schema.
 * Bilingual (ID + EN) descriptions for Google to surface
 * the brand in both Indonesian and English searches.
 */
export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://fovea.digital/#organization',
    name: 'Fovea Technology',
    alternateName: [
      'Fovea Teknologi',
      'Fovea Tech',
      'Fovea Technology',
      'Fovea Digital',
      'Fovea',
    ],
    url: 'https://fovea.digital',
    logo: {
      '@type': 'ImageObject',
      url: 'https://fovea.digital/icon-512.png',
      width: 512,
      height: 512,
    },
    image: 'https://fovea.digital/icon-512.png',
    description:
      'Fovea Technology membantu bisnis B2B, UMKM, dan brand lokal di Indonesia membangun website custom, sistem booking, dashboard internal, katalog produk, dan aplikasi SaaS. Fovea Technology helps B2B businesses and local brands build custom websites, booking systems, internal dashboards, and SaaS applications.',
    foundingDate: '2026',
    areaServed: [
      { '@type': 'Country', name: 'Indonesia' },
      { '@type': 'Country', name: 'Worldwide' },
    ],
    knowsAbout: [
      // Indonesian terms
      'Jasa Pembuatan Website B2B',
      'Jasa Website UMKM',
      'Jasa Sistem Booking',
      'Pembuatan Dashboard Internal',
      'Katalog Produk Online',
      'Jasa Pembuatan SaaS MVP',
      'Software House Indonesia',
      // English terms
      'Custom Web Development',
      'B2B Website Development',
      'Booking System Development',
      'Internal Dashboard Development',
      'SaaS Development',
      'MVP Development',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Fovea Technology / Fovea Technology Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website, Booking System & Dashboard',
            description:
              'Pembuatan website custom, sistem booking, dan dashboard internal untuk B2B dan UMKM. Custom website, booking system, and internal dashboard development for B2B and MSMEs.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS Product & MVP Development',
            description:
              'Pengembangan produk SaaS dan MVP siap pakai untuk skala bisnis modern. End-to-end SaaS and MVP product development ready for modern business scale.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Maintenance & Support',
            description:
              'Layanan pemeliharaan sistem bulanan untuk memastikan performa yang cepat dan aman. Monthly system maintenance services to ensure fast and secure performance.',
          },
        },
      ],
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      areaServed: 'ID',
      availableLanguage: ['Indonesian', 'English'],
    },
    sameAs: ['https://fovea.digital'],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://fovea.digital/#website',
    url: 'https://fovea.digital',
    name: 'Fovea Technology',
    alternateName: 'Fovea Teknologi',
    description:
      'Jasa Website, Dashboard & Aplikasi SaaS Indonesia — Software House | Website, Dashboard & SaaS Development Services',
    publisher: {
      '@id': 'https://fovea.digital/#organization',
    },
    inLanguage: ['id-ID', 'en-US'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://fovea.digital/?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
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
    </>
  );
}
