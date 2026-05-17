'use client';

import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLang();
  const [line1, line2] = t.hero.title.split('\n');

  return (
    <section id="hero" className="section-shell flex min-h-dvh items-center pt-28 sm:pt-32">
      <div className="page-shell max-w-5xl">
        <div className="mx-auto space-y-8 text-center stagger-in">
          <span className="eyebrow">{t.hero.tagline}</span>

          <div className="mx-auto max-w-4xl space-y-5">
            <h1 className="section-title text-balance">
              <span className="aurora-text">{line1}</span>
              <br />
              <span>{line2}</span>
            </h1>
            <p className="section-copy mx-auto text-base sm:text-lg">{t.hero.subtitle}</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/#services" className="aurora-button">
              {t.hero.cta}
            </Link>
            <Link href="/#contact" className="aurora-button-secondary">
              {t.hero.ctaSecondary}
            </Link>
          </div>

          <p className="mt-8 text-sm font-medium text-muted/80">
            {t.hero.trustMicrocopy}
          </p>
        </div>
      </div>
    </section>
  );
}
