import type { Metadata } from 'next';
import dynamicImport from 'next/dynamic';

export const dynamic = 'force-dynamic';

import Hero from '@/components/Hero';
import { supabase } from '@/lib/supabase';

// Below-fold sections: dynamically imported so their JS doesn't block
// the critical rendering path. Still server-rendered for SEO (ssr: true default).
const WhoAreWe = dynamicImport(() => import('@/components/WhoAreWe'), {
  loading: () => <div className="section-shell" aria-hidden="true" />,
});
const Process = dynamicImport(() => import('@/components/Process'), {
  loading: () => <div className="section-shell" aria-hidden="true" />,
});
const Services = dynamicImport(() => import('@/components/Services'), {
  loading: () => <div className="section-shell" aria-hidden="true" />,
});
const FeaturedPortfolio = dynamicImport(() => import('@/components/FeaturedPortfolio'), {
  loading: () => <div className="section-shell" aria-hidden="true" />,
});
const FAQ = dynamicImport(() => import('@/components/FAQ'), {
  loading: () => <div className="section-shell" aria-hidden="true" />,
});
const Contact = dynamicImport(() => import('@/components/Contact'), {
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
  const [portfolioReq, faqReq] = await Promise.all([
    supabase.from('Portfolio').select('*').order('createdAt', { ascending: false }).limit(3),
    supabase.from('FAQ').select('*').order('order', { ascending: true })
  ]);
  const portfolios = portfolioReq.data || [];
  const faqs = faqReq.data || [];

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
