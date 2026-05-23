'use client';

import { Crosshair, Network, TrendingUp } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

export default function WhoAreWe() {
  const { t } = useLang();

  const cards = [
    {
      title: t.whoAreWe.titleCards[0],
      description:
        t.whoAreWe.descCards[0],
      icon: Crosshair,
      cardClass: 'bg-white',
      iconClass: 'bg-[#4D8DFF]',
    },
    {
      title: t.whoAreWe.titleCards[1],
      description:
        t.whoAreWe.descCards[1],
      icon: Network,
      cardClass: 'bg-[#FFD91F]',
      iconClass: 'bg-white',
    },
    {
      title: t.whoAreWe.titleCards[2],
      description:
        t.whoAreWe.descCards[2],
      icon: TrendingUp,
      cardClass: 'bg-[#74F793]',
      iconClass: 'bg-white',
    },
  ];

  return (
    <section
      id="who-are-we"
      aria-labelledby="who-are-we-title"
      className="section-shell bg-[#F7F7F4] py-24 sm:py-28 lg:py-32"
    >
      <div className="page-shell">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full border-[3px] border-black bg-[#FF7AD8] px-4 py-3 text-xs font-black uppercase tracking-wide text-black shadow-[5px_5px_0_#111111]">
              {t.whoAreWe.heading}
            </p>

            <div className="mt-10 space-y-6">
              <h2
                id="who-are-we-title"
                className="text-balance text-4xl font-black leading-[1.12] tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-[56px]"
              >
                {t.whoAreWe.title}
              </h2>

              <p className="max-w-xl text-base font-medium leading-8 text-[#2C2C2C] sm:text-lg">
                {t.whoAreWe.subtitle}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className={[
                    'rounded-xl border-[3px] border-black p-4 shadow-[6px_6px_0_#111111]',
                    card.cardClass,
                  ].join(' ')}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div
                      className={[
                        'flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-[2.5px] border-black text-black',
                        card.iconClass,
                      ].join(' ')}
                    >
                      <Icon className="h-11 w-11" aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="text-xl font-black tracking-[-0.03em] text-black">
                        {card.title}
                      </h3>

                      <p className="mt-2 max-w-xl text-sm font-medium leading-6 text-black">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}