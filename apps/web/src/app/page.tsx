import type { Metadata } from 'next';
import dynamicImport from 'next/dynamic';

export const revalidate = 3600;

import Hero from '@/components/Hero';
import { supabase } from '@/lib/supabase';
import { Portfolio, Faq } from '@/types';

// Below-fold sections: dynamically imported so their JS doesn't block
// the critical rendering path. Still server-rendered for SEO (ssr: true default).
const WhoAreWe = dynamicImport(() => import('@/components/MainFocus'), {
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
  title: 'Fovea Teknologi | Digitalisasi Sekolah & Partner Web Agensi',
  description:
    'Fovea Teknologi adalah perusahaan teknologi spesialis penyedia solusi digitalisasi sekolah swasta (sistem PPDB online) dan technical partner andalan untuk pembuatan website white-label bagi digital agency.',
  alternates: {
    canonical: 'https://www.fovea.digital',
  },
  openGraph: {
    title: 'Fovea Teknologi | Digitalisasi Sekolah & Partner Web Agensi',
    description:
      'Spesialis solusi digitalisasi sekolah swasta (PPDB online, portal akademik) dan technical partner white-label website untuk digital agency. Konsultasi gratis!',
    url: 'https://www.fovea.digital',
    images: [],
  },
};

export default async function Home() {
  const [portfolioReq, faqReq] = await Promise.all([
    supabase.from('Portfolio').select('*').order('createdAt', { ascending: false }).limit(3),
    supabase.from('FAQ').select('*').order('order', { ascending: true })
  ]);
  const portfolios = (portfolioReq.data as Portfolio[]) || [];
  const faqs = (faqReq.data as Faq[]) || [];

  return (
    <main>
      <Hero />
      <WhoAreWe />
      <Process />
      <Services />
      <FeaturedPortfolio projects={portfolios} />
      <FAQ faqs={faqs} />
      <Contact />
    </main>
  );
}
