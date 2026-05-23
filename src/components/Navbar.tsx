'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '@/context/LanguageContext';
import LanguageToggle from '@/components/LanguageToggle';

const Navbar = () => {
  const { t } = useLang();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const observerRef = useRef<IntersectionObserver | null>(null);

  const navText = t.nav as Record<string, string>;
  const isHomePage = pathname === '/';

  const links = useMemo(
    () => [
      {
        href: '/#hero',
        label: t.nav.home,
      },
      {
        href: '/#who-are-we',
        label: t.nav.whoWeAre,
      },
      {
        href: '/#process',
        label: t.nav.process,
      },
      {
        href: '/#services',
        label: t.nav.services,
      },
      {
        href: '/#faq',
        label: t.nav.faq,
      },
      {
        href: '/#contact',
        label: t.nav.contact,
      },
    ],
    [
      t.nav.home,
      t.nav.whoWeAre,
      t.nav.process,
      t.nav.services,
      t.nav.faq,
      t.nav.contact,
    ]
  );

  // Reset active section when navigating away from / back to homepage
  useEffect(() => {
    if (isHomePage) {
      setActiveSection('hero');
    }
  }, [isHomePage]);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver — only active on the homepage
  useEffect(() => {
    if (!isHomePage) {
      // Disconnect any existing observer when on detail pages
      observerRef.current?.disconnect();
      return;
    }

    const sectionIds = links.map((link) => link.href.replace('/#', ''));

    const startObserving = () => {
      // Disconnect previous observer before creating a new one
      observerRef.current?.disconnect();

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          rootMargin: '-40% 0px -55% 0px',
          threshold: 0,
        }
      );

      observerRef.current = observer;

      let foundCount = 0;
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.observe(section);
          foundCount++;
        }
      });

      return foundCount;
    };

    // Try immediately — sections might already be in DOM
    const foundOnFirstTry = startObserving();

    // If not all sections found (dynamic imports still loading), retry after a short delay
    if (foundOnFirstTry < sectionIds.length) {
      const retryTimer = setTimeout(() => {
        startObserving();
      }, 800);

      return () => {
        clearTimeout(retryTimer);
        observerRef.current?.disconnect();
      };
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [isHomePage, links]);

  return (
    <header className={[
      'fixed inset-x-0 top-0 z-100 px-4 pt-4 pb-4 sm:px-6 transition-all duration-300',
      scrolled ? 'bg-bg shadow-sm' : 'bg-transparent'
    ].join(' ')}>
      <div className="page-shell">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <Link
            href="/#hero"
            aria-label={`${t.nav.brand} homepage`}
            className={[
              'inline-flex items-center gap-3 rounded-xl border-3 border-black bg-white px-3 py-2',
              'shadow-[6px_6px_0_#111111] transition-all duration-200',
              'hover:-translate-y-0.5 hover:shadow-[7px_7px_0_#111111]',
              'active:translate-y-1 active:shadow-[3px_3px_0_#111111]',
              scrolled ? 'scale-[0.98]' : 'scale-100',
            ].join(' ')}
          >
            <span className="flex h-9 w-9 items-center justify-center">
              <Image
                src="/logo.svg"
                alt=""
                role="presentation"
                width={32}
                height={32}
                priority
                className="h-auto w-auto"
              />
            </span>

            <span className="hidden text-xl font-bold tracking-tight text-[#111111] sm:inline">
              {t.nav.brand}
            </span>
          </Link>

          <nav aria-label="Primary navigation" className="hidden justify-self-center lg:block">
            <ul className="flex items-center gap-6">
              {links.map((link) => {
                const sectionId = link.href.replace('/#', '');
                // On detail pages, no nav item should be "active"
                const isActive = isHomePage && activeSection === sectionId;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={[
                        'inline-flex items-center justify-center rounded-full border-2 px-4 py-2',
                        'text-sm font-bold transition-all duration-200',
                        isActive
                          ? 'border-black bg-[#FFD84D] text-black shadow-[3px_3px_0_#111111]'
                          : 'border-transparent text-[#111111] hover:border-black hover:bg-white hover:text-black hover:shadow-[3px_3px_0_#111111]',
                      ].join(' ')}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 justify-self-end lg:flex">
            <LanguageToggle />

            <Link
              href="/#contact"
              className={[
                'inline-flex items-center justify-center rounded-xl border-3 border-black bg-[#FFD84D]',
                'px-5 py-4 text-sm font-bold text-black shadow-[6px_6px_0_#111111]',
                'transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[7px_7px_0_#111111]',
                'active:translate-y-1 active:shadow-[3px_3px_0_#111111]',
              ].join(' ')}
            >
              {navText.startProject ?? 'Start a Project'}
            </Link>
          </div>

          <div className="flex items-center gap-3 justify-self-end lg:hidden">
            <LanguageToggle />

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className={[
                'inline-flex h-12 w-12 items-center justify-center rounded-xl border-3 border-black',
                'bg-[#FFD84D] text-black shadow-[4px_4px_0_#111111] transition-all duration-200',
                'active:translate-y-1 active:shadow-[2px_2px_0_#111111]',
              ].join(' ')}
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              aria-controls="mobile-menu"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" strokeWidth={2.4} />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" strokeWidth={2.4} />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className={[
              'mt-4 rounded-2xl border-3 border-black bg-white p-3',
              'shadow-[6px_6px_0_#111111] lg:hidden',
            ].join(' ')}
          >
            <ul className="flex flex-col gap-2">
              {links.map((link) => {
                const sectionId = link.href.replace('/#', '');
                const isActive = isHomePage && activeSection === sectionId;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={[
                        'flex rounded-xl border-2 px-4 py-3 text-sm font-bold transition-all duration-200',
                        isActive
                          ? 'border-black bg-[#FFD84D] text-black'
                          : 'border-transparent text-black hover:border-black hover:bg-[#E2EEFF]',
                      ].join(' ')}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}

              <li>
                <Link
                  href="/#contact"
                  onClick={() => setMenuOpen(false)}
                  className={[
                    'mt-2 flex items-center justify-center rounded-xl border-3 border-black',
                    'bg-[#FFD84D] px-4 py-3 text-sm font-bold text-black',
                    'shadow-[4px_4px_0_#111111]',
                  ].join(' ')}
                >
                  {navText.startProject ?? 'Start a Project'}
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