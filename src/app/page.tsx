import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const dynamic = 'force-dynamic';

import Hero from '@/components/Hero';
import { prisma } from '@/lib/prisma';

// Below-fold sections: dynamically imported so their JS doesn't block
// the critical rendering path. Still server-rendered for SEO (ssr: true default).
const WhoAreWe = dynamic(() => import('@/components/WhoAreWe'), {
  loading: () => <div className="section-shell" aria-hidden="true" />,
});
const Process = dynamic(() => import('@/components/Process'), {
  loading: () => <div className="section-shell" aria-hidden="true" />,
});
const Services = dynamic(() => import('@/components/Services'), {
  loading: () => <div className="section-shell" aria-hidden="true" />,
});
const FeaturedPortfolio = dynamic(() => import('@/components/FeaturedPortfolio'), {
  loading: () => <div className="section-shell" aria-hidden="true" />,
});
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="section-shell" aria-hidden="true" />,
});
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="section-shell" aria-hidden="true" />,
});

export const metadata: Metadata = {
  title: 'Fovea Teknologi | Jasa Website Custom, Dashboard & SaaS Product',
  description:
    'Fovea Teknologi, software house Indonesia terpercaya. Jasa pembuatan website custom, sistem booking online, dashboard internal, katalog produk, dan saas product (prodak saas) untuk bisnis B2B & UMKM. Konsultasi gratis!',
  alternates: {
    canonical: 'https://www.fovea.digital',
  },
  openGraph: {
    title: 'Fovea Teknologi | Jasa Website Custom, Dashboard & SaaS Product',
    description:
      'Software house Indonesia terpercaya. Jasa website custom, sistem booking, dashboard, SaaS product untuk B2B & UMKM. Konsultasi gratis!',
    url: 'https://www.fovea.digital',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Fovea Teknologi' }],
  },
};

export default async function Home() {
  const [portfolios, faqs] = await Promise.all([
    prisma.portfolio.findMany({ orderBy: { createdAt: 'desc' }, take: 3 }),
    prisma.faq.findMany({ orderBy: { order: 'asc' } })
  ]);

  return (
    <>
      <Hero />
      <WhoAreWe />
      <Process />
      <Services />
      <FeaturedPortfolio projects={portfolios} />
      <FAQ faqs={faqs} />
      <Contact />
    </>
  );
}
