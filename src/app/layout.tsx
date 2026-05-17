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
    default: 'Fovea Technology — Jasa Website, Dashboard & Aplikasi SaaS',
    template: '%s | Fovea Technology',
  },
  description:
    'Fovea Teknologi membantu bisnis B2B, UMKM, dan brand lokal di Indonesia membangun website custom, sistem booking, dashboard internal, katalog produk, dan aplikasi SaaS berkualitas.',
  keywords: [
    // ── Brand (ID + EN) ──────────────────────────────────────────
    'Fovea',
    'Fovea Technology',
    'Fovea Teknologi',
    'Fovea Tech',
    'Fovea Digital',
    'fovea.digital',

    // ── Jasa Website — Indonesia ─────────────────────────────────
    'jasa pembuatan website',
    'jasa website profesional',
    'jasa website UMKM',
    'jasa website B2B',
    'bikin website custom',
    'jasa sistem booking',
    'jasa katalog produk',
    'jasa pembuatan dashboard',
    'jasa web app',
    'pembuatan website custom',

    // ── Website Services — English ───────────────────────────────
    'custom web development',
    'B2B website development',
    'booking system development',
    'internal dashboard development',
    'web application development',

    // ── SaaS — Indonesia ─────────────────────────────────────────
    'jasa pembuatan saas',
    'pengembangan saas Indonesia',
    'bikin aplikasi saas',
    'MVP saas Indonesia',

    // ── SaaS — English ───────────────────────────────────────────
    'saas development Indonesia',
    'saas MVP development',
    'saas product development',

    // ── Software House — Indonesia ───────────────────────────────
    'software house Indonesia',
    'software house terpercaya',
    'vendor IT B2B Indonesia',

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
    title: 'Fovea Technology — Jasa Website, Dashboard & Aplikasi SaaS',
    description:
      'Fovea Teknologi membantu bisnis B2B, UMKM, dan brand lokal di Indonesia membangun website custom, sistem booking, dashboard internal, katalog produk, dan aplikasi SaaS berkualitas.',
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
    title: 'Fovea Technology — Jasa Website, Dashboard & Aplikasi SaaS',
    description:
      'Fovea Teknologi membantu bisnis B2B, UMKM, dan brand lokal membangun website custom, sistem booking, dan SaaS.',
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
