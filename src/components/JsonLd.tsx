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
      'Fovea Technology adalah software house Indonesia yang membangun produk SaaS dan website custom dengan performa tinggi dan desain premium. Fovea Technology is an Indonesian software house building high-performance SaaS products and custom websites.',
    foundingDate: '2026',
    areaServed: [
      { '@type': 'Country', name: 'Indonesia' },
      { '@type': 'Country', name: 'Worldwide' },
    ],
    knowsAbout: [
      // Indonesian terms
      'Jasa Custom Web',
      'Jasa Pembuatan Website',
      'Jasa Landing Page',
      'Jasa Company Profile',
      'Jasa Pembuatan SaaS',
      'Software House Indonesia',
      'Pengembangan Aplikasi Web',
      // English terms
      'Custom Web Development',
      'SaaS Development',
      'Web Application Development',
      'Landing Page Design',
      'Company Profile Website',
      'Software as a Service',
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
            name: 'Jasa Custom Website / Custom Website Development',
            description:
              'Pembuatan website custom sesuai kebutuhan bisnis dengan desain premium dan performa tinggi. Custom website development tailored to your business needs with premium design and high performance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SaaS Product Development / Pengembangan Produk SaaS',
            description:
              'Pengembangan produk Software-as-a-Service dari desain hingga deployment production-ready. End-to-end SaaS product development from design to production-ready deployment.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Page & Company Profile',
            description:
              'Pembuatan landing page dan website company profile profesional untuk meningkatkan kredibilitas bisnis. Professional landing page and company profile websites to boost business credibility.',
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
      'Jasa Custom Web & SaaS Development Indonesia — Software House | Custom Web & SaaS Development Services',
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
