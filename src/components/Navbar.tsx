'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

const Navbar = () => {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#hero', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#about', label: t.nav.about },
    { href: '#faq', label: t.nav.faq },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-100 px-4 pt-4 sm:px-6">
      <div className="page-shell">
        <div
          className={[
            'flex items-center justify-between rounded-2xl border px-4 py-3 sm:px-5',
            scrolled ? 'aurora-panel border-white/12' : 'border-white/8 bg-white/3 backdrop-blur-md',
          ].join(' ')}
        >
          <Link href="/#hero" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <Image src="/logo_dark.png" alt="Fovea Tech" width={28} height={28} priority style={{ width: 'auto', height: 'auto' }} />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.14em] text-fg uppercase">Fovea Tech</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link font-medium">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle />
            <Link href="/#contact" className="aurora-button">
              {t.nav.contact}
            </Link>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="surface-outline flex h-11 w-11 items-center justify-center"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X className="h-5 w-5 text-fg" aria-hidden="true" strokeWidth={1.8} /> : <Menu className="h-5 w-5 text-fg" aria-hidden="true" strokeWidth={1.8} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div id="mobile-menu" className="aurora-panel mt-3 rounded-2xl p-4 lg:hidden stagger-in">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-medium text-muted hover:bg-white/6 hover:text-fg"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/#contact" onClick={() => setMenuOpen(false)} className="aurora-button mt-3">
                {t.nav.contact}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
