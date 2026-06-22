'use client';

import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = useMemo(
    () => [
      {
        href: '/',
        label: 'Home',
      },
      {
        href: '/solusi-pendidikan',
        label: 'Solusi Pendidikan',
      },
      {
        href: '/agency-partnership',
        label: 'Kemitraan Agensi',
      },
      {
        href: '/portfolio',
        label: 'Portfolio',
      },
      {
        href: '/blog',
        label: 'Blog',
      },
    ],
    []
  );

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 border-b ${
      scrolled 
        ? 'bg-surface/90 backdrop-blur-md py-2.5 shadow-sm border-slate-100' 
        : 'bg-transparent py-4 border-transparent'
    }`}>
      <div className="page-shell">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            aria-label={`Fovea Teknologi homepage`}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="relative h-8 w-8 flex items-center justify-center">
              <Image
                src="/logo.svg"
                alt="Fovea Logo"
                width={20}
                height={20}
                className="h-auto w-auto"
                priority
              />
            </div>
            <span className="text-md font-bold tracking-tight text-slate-900">
              Fovea Teknologi
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Primary navigation" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-md font-semibold transition-colors cursor-pointer ${
                        isActive
                          ? 'text-primary font-bold'
                          : 'text-slate-600 hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#contact"
              className="btn-primary py-2 px-5 text-sm font-semibold flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              Mulai Proyek
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-slate-600 cursor-pointer hover:bg-slate-50"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="mt-4 rounded-xl border border-border bg-surface p-4 shadow-lg md:hidden"
          >
            <ul className="flex flex-col gap-3">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-blue-50 text-primary'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2 border-t border-slate-100">
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary w-full py-2.5 text-center flex items-center justify-center gap-1.5 cursor-pointer text-sm font-semibold"
                >
                  Mulai Proyek
                  <ArrowRight size={16} />
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;