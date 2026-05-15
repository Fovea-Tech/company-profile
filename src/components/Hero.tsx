'use client';

import Link from 'next/link';
import { MonitorCog, Search, Workflow } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

const statCards = [
  { value: 'SaaS', label: 'Product strategy and delivery', icon: Workflow },
  { value: 'Web', label: 'Custom builds for specific teams', icon: MonitorCog },
  { value: 'SEO', label: 'Performance-first foundations', icon: Search },
];

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

          <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
            {statCards.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.value} className="aurora-panel rounded-[1.25rem] p-5 text-left md:text-center">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-cyan-100 md:mx-auto">
                    <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={2} />
                  </div>
                  <p className="text-lg font-semibold text-fg">{item.value}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
