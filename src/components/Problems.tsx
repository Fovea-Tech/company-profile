'use client';

import { CheckCircle2, XCircle } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

export default function Problems() {
  const { t } = useLang();

  return (
    <section id="problems" className="section-shell bg-slate-950/30">
      <div className="page-shell max-w-4xl space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="section-subtitle aurora-text mx-auto">{t.problems.heading}</h2>
        </div>

        <div className="aurora-panel rounded-3xl p-6 sm:p-10">
          <div className="space-y-6">
            {t.problems.items.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-red-400">
                  <XCircle className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="text-base text-slate-300 sm:text-lg">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-950/30 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex-shrink-0 text-cyan-400">
                <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="text-lg font-medium text-cyan-50 sm:text-xl">
                {t.problems.footer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
