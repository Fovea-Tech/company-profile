'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

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
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Image src="/logo_dark.png" alt="Fovea Tech" width={30} height={30} style={{ width: 'auto', height: 'auto' }} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-fg">Fovea Tech</p>
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
              <p>hello@fovea.digital</p>
              <p>+62 821 2542 8320</p>
              <p>www.fovea.digital</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Fovea Tech. {t.footer.rights}</p>
          {/* <div className="flex gap-4">
            {['LinkedIn', 'GitHub', 'Behance'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}
