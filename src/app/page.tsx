import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

const Problems = dynamic(() => import('@/components/Problems'));
const Services = dynamic(() => import('@/components/Services'));
const Portfolio = dynamic(() => import('@/components/Portfolio'));
const About = dynamic(() => import('@/components/About'));
const FAQ = dynamic(() => import('@/components/FAQ'));
const Contact = dynamic(() => import('@/components/Contact'));

export const metadata: Metadata = {
  title: 'Fovea Technology — Jasa Website, Dashboard & Aplikasi SaaS Indonesia',
  description:
    'Fovea Technology, software house Indonesia terpercaya. Jasa pembuatan website custom, sistem booking online, dashboard internal, katalog produk, dan SaaS MVP untuk bisnis B2B & UMKM. Konsultasi gratis!',
  alternates: {
    canonical: 'https://www.fovea.digital',
  },
  openGraph: {
    title: 'Fovea Technology — Jasa Website, Dashboard & Aplikasi SaaS Indonesia',
    description:
      'Software house Indonesia terpercaya. Website custom, sistem booking, dashboard, SaaS untuk B2B & UMKM. Konsultasi gratis!',
    url: 'https://www.fovea.digital',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Fovea Technology' }],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <Portfolio />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
