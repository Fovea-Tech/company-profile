import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import GoogleAdsTag from '@/components/GoogleAdsTag';
import { ConditionalNavbar, ConditionalFooter } from '@/components/ConditionalLayout';
import JsonLd from '@/components/JsonLd';
import { GoogleAnalytics } from '@next/third-parties/google';

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
    default: 'Fovea Teknologi | Digitalisasi Pendidikan & Partner Web Agensi',
    template: '%s | Fovea Teknologi',
  },
  description:
    'Fovea Teknologi merupakan spesialis digitalisasi sekolah swasta (sistem PPDB online) serta technical partner andalan digital agency untuk pembuatan website white-label. Hubungi kami untuk konsultasi gratis!',
  keywords: [
    // Brand
    'Fovea',
    'Fovea Teknologi',
    'Fovea Digital',
    
    // Solusi Pendidikan
    'digitalisasi pendidikan',
    'digitalisasi sekolah swasta',
    'website sekolah premium',
    'sistem PPDB online',
    'sistem akademik sekolah',
    
    // Agency Partnership
    'agency technical partner',
    'white label website development',
    'jasa website white label',
    'partner web developer agency',
    
    // Jasa IT
    'software house Indonesia',
    'jasa website custom',
    'jasa pembuatan dashboard',
    'jasa maintenance website',
  ],
  authors: [{ name: 'Fovea Teknologi', url: 'https://www.fovea.digital' }],
  creator: 'Fovea Teknologi',
  publisher: 'Fovea Teknologi',
  alternates: {
    canonical: 'https://www.fovea.digital',
    languages: {
      'id-ID': 'https://www.fovea.digital',
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
    title: 'Fovea Teknologi | Digitalisasi Pendidikan & Partner Web Agensi',
    description:
      'Spesialis digitalisasi sekolah swasta dan technical partner andalan untuk digital agency dalam pembuatan website custom kelas dunia. Konsultasi gratis!',
    url: 'https://www.fovea.digital',
    siteName: 'Fovea Teknologi',
    locale: 'id_ID',
    type: 'website',
    images: [],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fovea Teknologi | Digitalisasi Sekolah & Partner Web Agensi',
    description:
      'Spesialis digitalisasi sekolah swasta dan technical partner andalan untuk digital agency dalam pembuatan website custom kelas dunia.',
    images: [],
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
        <meta name="language" content="Indonesian" />
        <meta httpEquiv="content-language" content="id" />
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
        <ConditionalNavbar />
        <main id="main-content">{children}</main>
        <ConditionalFooter />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-NXEDX1X6ZP'} />
      </body>
    </html>
  );
}
