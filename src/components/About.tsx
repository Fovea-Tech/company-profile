'use client';

import { BadgeCheck, Lightbulb, ShieldCheck, Users } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

const valueIcons = [Lightbulb, BadgeCheck, Users, ShieldCheck];

export default function About() {
  const { t } = useLang();

  return (
    <section id="about" className="section-shell">
      <div className="page-shell space-y-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="space-y-4">
            <span className="eyebrow">{t.nav.about}</span>
            <h2 className="section-subtitle aurora-text">{t.about.heading}</h2>
          </div>
          <p className="section-copy">{t.about.subheading}</p>
        </div>

        <div className="aurora-panel rounded-3xl p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">{t.about.valuesHeading}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {t.about.values.map((value, index) => {
              const Icon = valueIcons[index];
              return (
                <div key={value.title} className="surface-outline rounded-[1.2rem] p-4">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-cyan-50 shadow-[0_10px_30px_rgba(89,243,255,0.12)]">
                    <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={2.1} />
                  </div>
                  <h3 className="text-base font-semibold text-fg">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
