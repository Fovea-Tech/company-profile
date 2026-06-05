import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import GoogleAdsTag from '@/components/GoogleAdsTag';
import { ConditionalNavbar, ConditionalFooter } from '@/components/ConditionalLayout';
import JsonLd from '@/components/JsonLd';

// Only load weights actually used in the UI:
// Space Grotesk — headings only, always bold (700)
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
  preload: true,
});

// Plus Jakarta Sans — body text (400 regular, 500 medium, 600 semibold, 700 bold, 800 extrabold)
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.fovea.digital'),
  title: {
    default: 'Fovea Teknologi | Jasa Website, Dashboard & Aplikasi SaaS Indonesia',
    template: '%s | Fovea Teknologi',
  },
  description:
    'Fovea Teknologi: software house Indonesia spesialis jasa pembuatan website custom, sistem booking, dashboard internal, katalog produk, dan saas product untuk bisnis B2B & UMKM. Konsultasi gratis!',
  keywords: [
    // ── Brand (ID + EN) ──────────────────────────────────────────
    'Fovea',
    'Fovea Teknologi',
    'Fovea Technology',
    'Fovea Tech',
    'Fovea Digital',
    'www.fovea.digital',

    // ── Jasa Website — Indonesia ─────────────────────────────────
    'jasa pembuatan website',
    'jasa website profesional',
    'jasa website UMKM',
    'jasa website B2B',
    'bikin website custom',
    'jasa website custom',
    'custom website',
    'jasa sistem booking online',
    'jasa katalog produk online',
    'jasa pembuatan dashboard admin',
    'jasa web app Indonesia',
    'pembuatan website custom Indonesia',
    'jasa landing page profesional',
    'website bisnis profesional',
    'jasa website company profile',

    // ── Website Services — Top ───────────────────────────────
    'jasa pembuatan aplikasi web',
    'bikin web perusahaan',
    'jasa seo website',
    'jasa optimasi website',
    'pembuatan sistem informasi',
    'jasa web app murah',

    // ── SaaS — Indonesia ─────────────────────────────────────────
    'jasa pembuatan saas',
    'pengembangan saas Indonesia',
    'bikin aplikasi saas',
    'MVP saas Indonesia',
    'aplikasi berbasis web Indonesia',
    'prodak saas',

    // ── Local & Specific ───────────────────────────────────────────
    'jasa pembuatan website e-commerce',
    'jasa pemeliharaan website',
    'jasa maintenance website',
    'jasa kelola website',

    // ── Software House — Indonesia ───────────────────────────────
    'software house Indonesia',
    'software house terpercaya',
    'vendor IT B2B Indonesia',
    'digital agency Indonesia',
    'konsultan IT Indonesia',

    // ── Software House — Lokal ─────────────────────────────────
    'software house jakarta',
    'software house bogor',
    'software house depok',
    'jasa website jakarta',
  ],
  authors: [{ name: 'Fovea Teknologi', url: 'https://www.fovea.digital' }],
  creator: 'Fovea Teknologi',
  publisher: 'Fovea Teknologi',
  alternates: {
    canonical: 'https://www.fovea.digital',
    languages: {
      'id-ID': 'https://www.fovea.digital',
      'en-US': 'https://www.fovea.digital',
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
    title: 'Fovea Teknologi | Jasa Website, Dashboard & Aplikasi SaaS Indonesia',
    description:
      'Software house Indonesia spesialis website custom, sistem booking, dashboard, katalog produk & SaaS untuk bisnis B2B & UMKM. Konsultasi gratis sekarang!',
    url: 'https://www.fovea.digital',
    siteName: 'Fovea Teknologi',
    locale: 'id_ID',
    alternateLocale: ['en_US'],
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fovea Teknologi | Jasa Website, Dashboard & Aplikasi SaaS Indonesia',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fovea Teknologi | Jasa Website, Dashboard & Aplikasi SaaS',
    description:
      'Software house Indonesia spesialis website custom, sistem booking, dashboard, dan SaaS untuk bisnis B2B & UMKM.',
    images: ['/og-image.png'],
    creator: '@buildwithfovea',
    site: '@buildwithfovea',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  applicationName: 'Fovea Teknologi',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable}`}>
      <head>
        {/* Theme color matches brand yellow for PWA chrome */}
        <meta name="theme-color" content="#FFD84D" />
        {/* Geo targeting — help Google surface in Indonesian searches */}
        <meta name="geo.region" content="ID" />
        <meta name="geo.country" content="Indonesia" />
        <meta name="language" content="Indonesian, English" />
        <meta httpEquiv="content-language" content="id, en" />
        {/* Mobile & rendering */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Fovea Teknologi" />
        {/* Prevent AI scraping but allow indexing */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        {/* next/font self-hosts fonts — no external preconnect needed */}
        {/* next/image with priority prop handles LCP preload automatically with correct srcset */}
        {/* DNS prefetch for interaction-gated GTM (only fires after user gesture) */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="bg-bg text-fg site-shell antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-500 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950"
        >
          Skip to content
        </a>
        <JsonLd />
        <GoogleAdsTag />
        <LanguageProvider>
          <ConditionalNavbar />
          <main id="main-content">{children}</main>
          <ConditionalFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
