'use client';

import { ChevronDown } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

export default function FAQ() {
  const { t } = useLang();

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="section-shell overflow-visible py-24 sm:py-28 lg:py-32"
    >
      <div className="page-shell overflow-visible">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left Content */}
          <header className="max-w-xl">
            <p className="inline-flex rounded-full border-[3px] border-black bg-[#6FFF9A] px-10 py-3 text-xs font-black uppercase tracking-wide text-black shadow-[6px_6px_0_#111111]">
              {t.faq.heading}
            </p>

            <div className="mt-10 space-y-5">
              <h2
                id="faq-title"
                className="text-balance text-4xl font-black leading-[1.1] tracking-[-0.05em] text-[#101010] sm:text-5xl lg:text-[56px]"
              >
                {t.faq.title}
              </h2>

              <p className="max-w-lg text-base font-bold leading-8 text-[#242424] sm:text-lg">
                {t.faq.subtitle}
              </p>
            </div>
          </header>

          {/* Right FAQ List */}
          <div className="overflow-visible pb-5">
            <div className="space-y-4">
              {t.faq.items.map((item, index) => (
                <details
                  key={item.q}
                  className={[
                    'group rounded-2xl border-[3px] border-black bg-white',
                    'shadow-[7px_7px_0_#111111]',
                    'transition-all duration-200',
                    'open:bg-[#FFD84D]',
                    'hover:-translate-y-0.5 hover:shadow-[9px_9px_0_#111111]',
                  ].join(' ')}
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 sm:px-6">
                    <span className="text-left text-base font-black leading-6 text-black sm:text-lg">
                      {item.q}
                    </span>

                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-[3px] border-black bg-[#6FFF9A] text-black shadow-[3px_3px_0_#111111] transition-transform duration-200 group-open:rotate-180 group-open:bg-white">
                      <ChevronDown
                        className="h-5 w-5"
                        aria-hidden="true"
                        strokeWidth={3}
                      />
                    </span>
                  </summary>

                  <div className="px-5 pb-6 pt-0 sm:px-6">
                    <div className="h-[3px] w-full bg-black" />

                    <p className="mt-5 text-sm font-medium leading-7 text-black sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}