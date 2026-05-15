import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import GoogleAdsTag from '@/components/GoogleAdsTag';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fovea.digital'),
  title: {
    default: 'Fovea Technology — Jasa Custom Web & SaaS Development Indonesia',
    template: '%s | Fovea Technology',
  },
  description:
    'Fovea Technology — jasa custom web dan SaaS development Indonesia. We build professional websites, landing pages, company profiles, and SaaS products with high performance and premium design. Software house terpercaya.',
  keywords: [
    // ── Brand (ID + EN) ──────────────────────────────────────────
    'Fovea',
    'Fovea Technology',
    'Fovea Teknologi',
    'Fovea Tech',
    'Fovea Digital',
    'fovea.digital',

    // ── Jasa Website — Indonesia ─────────────────────────────────
    'jasa custom web',
    'jasa pembuatan website',
    'jasa website profesional',
    'jasa website murah',
    'jasa web developer',
    'jasa landing page',
    'jasa company profile',
    'jasa web app',
    'pembuatan website custom',
    'website custom Indonesia',
    'bikin website profesional',

    // ── Website Services — English ───────────────────────────────
    'custom web development',
    'custom website Indonesia',
    'web development Indonesia',
    'professional website design',
    'landing page development',
    'company profile website',
    'web application development',

    // ── SaaS — Indonesia ─────────────────────────────────────────
    'jasa pembuatan saas',
    'pengembangan saas Indonesia',
    'saas product Indonesia',
    'software as a service Indonesia',

    // ── SaaS — English ───────────────────────────────────────────
    'saas development Indonesia',
    'saas product development',
    'saas startup Indonesia',
    'MVP development Indonesia',

    // ── Software House — Indonesia ───────────────────────────────
    'software house Indonesia',
    'software house terpercaya',
    'vendor IT Indonesia',
    'IT consultant Indonesia',

    // ── Software House — English ─────────────────────────────────
    'software house',
    'web development agency Indonesia',
    'tech startup Indonesia',
  ],
  alternates: {
    canonical: 'https://fovea.digital',
    languages: {
      'id-ID': 'https://fovea.digital',
      'en-US': 'https://fovea.digital',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico',  sizes: '32x32',   type: 'image/x-icon' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  openGraph: {
    title: 'Fovea Technology — Jasa Custom Web & SaaS Development Indonesia',
    description:
      'Fovea Technology — jasa custom web dan SaaS development Indonesia. Professional websites, landing pages, and SaaS products with high performance.',
    url: 'https://fovea.digital',
    siteName: 'Fovea Technology',
    locale: 'id_ID',
    alternateLocale: ['en_US'],
    type: 'website',
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Fovea Technology Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fovea Technology — Jasa Custom Web & SaaS Development Indonesia',
    description:
      'Fovea Technology — jasa custom web dan SaaS development Indonesia. Professional websites, landing pages, and SaaS products.',
    images: ['/icon-512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={outfit.variable}>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="site-shell antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-500 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950"
        >
          Skip to content
        </a>
        <JsonLd />
        <GoogleAdsTag />
        <LanguageProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
