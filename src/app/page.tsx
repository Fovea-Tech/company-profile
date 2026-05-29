import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

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
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="section-shell" aria-hidden="true" />,
});
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="section-shell" aria-hidden="true" />,
});

export const metadata: Metadata = {
  title: 'Fovea Technology | Jasa Website Custom, Dashboard & SaaS Product',
  description:
    'Fovea Technology, software house Indonesia terpercaya. Jasa pembuatan website custom, sistem booking online, dashboard internal, katalog produk, dan saas product (prodak saas) untuk bisnis B2B & UMKM. Konsultasi gratis!',
  alternates: {
    canonical: 'https://www.fovea.digital',
  },
  openGraph: {
    title: 'Fovea Technology | Jasa Website Custom, Dashboard & SaaS Product',
    description:
      'Software house Indonesia terpercaya. Jasa website custom, sistem booking, dashboard, SaaS product untuk B2B & UMKM. Konsultasi gratis!',
    url: 'https://www.fovea.digital',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Fovea Technology' }],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <WhoAreWe />
      <Process />
      <Services />
      <FAQ />
      <Contact />
    </>
  );
}
