import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.foveatech.com'),
  title: {
    default: 'Fovea Tech - SaaS & Custom Website Development',
    template: '%s | Fovea Tech',
  },
  description:
    'Fovea Tech builds SaaS products and custom websites with strong performance, accessible UX, and production-ready foundations.',
  keywords: [
    'Fovea Tech',
    'software house Indonesia',
    'SaaS development',
    'custom website development',
    'web development agency',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fovea Tech - SaaS & Custom Website Development',
    description:
      'Fovea Tech builds SaaS products and custom websites with strong performance, accessible UX, and production-ready foundations.',
    url: 'https://www.foveatech.com',
    siteName: 'Fovea Tech',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fovea Tech - SaaS & Custom Website Development',
    description:
      'Fovea Tech builds SaaS products and custom websites with strong performance, accessible UX, and production-ready foundations.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={outfit.variable}>
      <body className="site-shell antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[500] focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-slate-950">
          Skip to content
        </a>
        <LanguageProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
