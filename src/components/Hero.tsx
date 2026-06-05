'use client';

import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';
import HeroImage from '@/components/HeroImage';

export default function Hero() {
  const { t } = useLang();

  const title = t.hero.title;

  const titleWords = title.replace('\n', ' ').split(' ');
  const firstWord = titleWords[0] ?? 'Website';
  const restTitle = titleWords.slice(1).join(' ');

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative min-h-dvh overflow-hidden px-4 pt-32 pb-16 sm:px-6 lg:pt-36"
    >
      <div className="page-shell">
        <div className="grid min-h-[calc(100dvh-9rem)] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Left Content */}
          <div className="max-w-3xl text-center lg:text-left">
            <p className="mx-auto inline-flex rounded-full border-3 border-black bg-[#6FFF9A] px-4 py-3 text-xs font-black uppercase tracking-tight text-black shadow-[6px_6px_0_#111111] lg:mx-0">
              {t.hero.tagline}
            </p>

            <div className="mt-10 space-y-6">
              <h1
                id="hero-title"
                className="text-balance text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl xl:text-[82px]"
              >
                <span className="text-[#FFD84D]">{firstWord}</span>{" "}
                <span className="text-[#101010]">{restTitle}</span>
              </h1>

              <p className="mx-auto max-w-2xl text-base font-bold leading-8 text-[#242424] sm:text-lg lg:mx-0">
                {t.hero.subtitle}
              </p>
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <Link
                href="/#contact"
                className="inline-flex min-h-16 w-full items-center justify-center rounded-xl border-3 border-black bg-[#FFD84D] px-8 text-base font-black text-black shadow-[8px_8px_0_#111111] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[10px_10px_0_#111111] active:translate-y-1 active:shadow-[4px_4px_0_#111111] sm:w-auto"
              >
                {t.hero.cta}
              </Link>

              <a
                href="https://wa.me/628818204100"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-16 w-full items-center justify-center gap-2 rounded-xl border-3 border-black bg-[#25D366] px-8 text-base font-black text-white shadow-[8px_8px_0_#111111] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[10px_10px_0_#111111] active:translate-y-1 active:shadow-[4px_4px_0_#111111] sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
                {t.hero.ctaWA}
              </a>
            </div>

            <ul
              aria-label="Website highlights"
              className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              {t.hero.trustMicrocopy.map(
                (item) => (
                  <li
                    key={item}
                    className="rounded-full border-3 border-black bg-white px-4 py-3 text-sm font-black text-black shadow-[4px_4px_0_#111111]"
                  >
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Right Browser Mockup — server-rendered for optimal LCP */}
          <HeroImage />
        </div>
      </div>
    </section>
  );
}