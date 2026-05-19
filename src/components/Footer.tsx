'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

const TiktokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  const links = [
    { href: '#hero', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#about', label: t.nav.about },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <footer className="section-shell pb-10 pt-0">
      <div className="page-shell aurora-panel rounded-3xl p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.7fr_0.8fr]">
          <div>
            <Link href="/#hero" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center">
                <Image src="/logo_dark.svg" alt={t.footer.brand} width={30} height={30} style={{ width: 'auto', height: 'auto' }} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-fg">{t.footer.brand}</p>
                <p className="text-xs text-muted">{t.footer.tagline}</p>
              </div>
            </Link>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">{t.footer.quickLinks}</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-muted hover:text-fg">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">{t.footer.contactUs}</p>
            <div className="mt-4 space-y-2 text-sm text-muted">
              <a href="mailto:hello@fovea.digital" className="block hover:text-fg transition-colors">hello@fovea.digital</a>
              <a href="https://wa.me/6288182041000" target="_blank" rel="noopener noreferrer" className="block hover:text-fg transition-colors">+62 881 8204 100</a>
              <a href="https://www.fovea.digital" className="block hover:text-fg transition-colors">www.fovea.digital</a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {t.footer.brand}. {t.footer.rights}</p>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/company/fovea-technology/" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-cyan-400">
              <span className="sr-only">LinkedIn</span>
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/buildwithfovea/" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-cyan-400">
              <span className="sr-only">Instagram</span>
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a href="https://www.tiktok.com/@buildwithfovea" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-cyan-400">
              <span className="sr-only">TikTok</span>
              <TiktokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
