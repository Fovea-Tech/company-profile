'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLang } from '@/context/LanguageContext';

const Navbar = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#portfolio', label: t.nav.portfolio },
    { href: '#about', label: t.nav.about },
    { href: '#faq', label: t.nav.faq },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-4`}
    >
      <div className={`w-full max-w-6xl mx-auto px-4 md:px-6 transition-all duration-300 ${scrolled ? 'transform translate-y-0' : 'transform translate-y-2'
        }`}>
        <div className={`flex items-center justify-between h-16 px-6 md:px-8 rounded-[2rem] transition-all duration-300 ${scrolled ? 'glass-card border-white/10' : 'bg-transparent'
          }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
              <Image
                src="/logo_dark.png"
                alt="Fovea Tech Logo"
                width={64}
                height={64}
                className="object-contain group-hover:scale-105 transition-transform duration-200"
                priority
              />
            </div>
            <span className="font-semibold text-fg text-sm tracking-tight">Fovea Tech</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-fg transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Language + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/5">
              <button
                onClick={() => setLang('id')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${lang === 'id' ? 'bg-accent text-white shadow-sm' : 'text-muted hover:text-fg'
                  }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${lang === 'en' ? 'bg-accent text-white shadow-sm' : 'text-muted hover:text-fg'
                  }`}
              >
                EN
              </button>
            </div>

            <Link
              href="#contact"
              className="px-5 py-2.5 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-hover hover:scale-105 transition-all duration-300 shadow-lg shadow-accent/20"
            >
              {t.nav.contact}
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/5">
              <button
                onClick={() => setLang('id')}
                className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${lang === 'id' ? 'bg-accent text-white shadow-sm' : 'text-muted'
                  }`}
              >
                ID
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${lang === 'en' ? 'bg-accent text-white shadow-sm' : 'text-muted'
                  }`}
              >
                EN
              </button>
            </div>
            <button
              id="mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-muted hover:text-fg"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass-card mt-2 mx-4 rounded-2xl px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-muted hover:text-fg py-1.5 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-3 px-4 py-2 bg-accent text-white text-sm font-medium rounded-lg text-center"
          >
            {t.nav.contact}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;