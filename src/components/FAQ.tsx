'use client';

import { ChevronDown } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

export default function FAQ() {
  const { t } = useLang();

  return (
    <section id="faq" className="section-shell">
      <div className="page-shell space-y-8">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="eyebrow">{t.faq.heading}</span>
          <h2 className="section-subtitle aurora-text">{t.faq.subheading}</h2>
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {t.faq.items.map((item) => (
            <details key={item.q} className="aurora-panel group rounded-[1.25rem]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 sm:px-6">
                <span className="text-left text-base font-semibold text-fg">{item.q}</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/10 text-cyan-50 shadow-[0_10px_30px_rgba(89,243,255,0.12)] group-open:rotate-180 group-open:bg-white group-open:text-slate-950">
                  <ChevronDown className="h-4 w-4" aria-hidden="true" strokeWidth={2.2} />
                </span>
              </summary>
              <div className="px-5 pb-5 pt-1 text-sm leading-7 text-muted sm:px-6">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
