'use client';

import { ArrowRight, Code2, PencilLine, Rocket, Search } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

type ProcessStep = {
  number: string;
  title: string;
  description: string;
  bgClass: string;
  icon: React.ElementType;
};

export default function Process() {
  const { t } = useLang();

  const steps: ProcessStep[] = [
    {
      number: '01',
      title: t.process.cards[0].title,
      description:
        t.process.cards[0].description,
      bgClass: 'bg-[#FFD91F]',
      icon: Search,
    },
    {
      number: '02',
      title: t.process.cards[1].title,
      description:
        t.process.cards[1].description,
      bgClass: 'bg-[#F47AC2]',
      icon: PencilLine,
    },
    {
      number: '03',
      title: t.process.cards[2].title,
      description:
        t.process.cards[2].description,
      bgClass: 'bg-[#4D9BFF]',
      icon: Code2,
    },
    {
      number: '04',
      title: t.process.cards[3].title,
      description:
        t.process.cards[3].description,
      bgClass: 'bg-[#75F594]',
      icon: Rocket,
    },
  ];

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="section-shell overflow-visible py-24 sm:py-28 lg:py-32"
    >
      <div className="page-shell overflow-visible">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border-[3px] border-black bg-[#6EA8FF] px-4 py-3 text-xs font-black uppercase tracking-wide text-black shadow-[5px_5px_0_#111111]">
            {t.process.heading}
          </p>

          <div className="mt-10 space-y-5">
            <h2
              id="process-title"
              className="text-balance text-4xl font-black leading-[1.08] tracking-tighter text-[#101010] sm:text-5xl lg:text-[56px]"
            >
              {t.process.title}
            </h2>

            <p className="max-w-2xl text-base font-bold leading-8 text-[#242424] sm:text-lg">
              {t.process.subtitle}
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-visible px-1 pb-5 sm:px-2">
          <ol className="grid overflow-visible gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <li key={step.number} className="overflow-visible">
                  <article
                    className={[
                      'group flex min-h-110 flex-col rounded-2xl border-[3px] border-black p-6',
                      'shadow-[8px_8px_0_#111111]',
                      'transition-all duration-200',
                      'hover:-translate-y-1 hover:shadow-[12px_12px_0_#111111]',
                      'active:translate-y-1 active:shadow-[4px_4px_0_#111111]',
                      step.bgClass,
                    ].join(' ')}
                  >
                    <header className="flex items-start justify-between gap-4">
                      <span
                        aria-hidden="true"
                        className="text-7xl font-black leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:2px_#111111]"
                      >
                        {step.number}
                      </span>

                      <Icon
                        className="h-16 w-16 shrink-0 text-black"
                        aria-hidden="true"
                        strokeWidth={2.4}
                      />
                    </header>

                    <div className="mt-8">
                      <h3 className="text-2xl font-black tracking-[-0.04em] text-black">
                        {step.title}
                      </h3>

                      <div className="mt-4 h-0.75 w-full bg-black" />

                      <p className="mt-6 text-lg font-medium leading-8 text-black">
                        {step.description}
                      </p>
                    </div>

                    <div className="mt-auto flex justify-end pt-10">
                      <ArrowRight
                        className="h-12 w-12 text-black transition-transform duration-200 group-hover:translate-x-2"
                        aria-hidden="true"
                        strokeWidth={2.8}
                      />
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}