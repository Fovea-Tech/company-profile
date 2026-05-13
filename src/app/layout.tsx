import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// next/font: font di-preload & di-inline otomatis, tidak render-blocking
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: 'Fovea Tech — Building the Future, One Product at a Time',
  description:
    'Fovea Tech is a software house focused on building innovative SaaS products and high-quality custom websites.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={outfit.variable}>
      <body className="antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
