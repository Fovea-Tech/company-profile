'use client';

import Link from 'next/link';
import type { ElementType } from 'react';
import { ArrowRight, Check, Code2, MonitorCog, ShieldCheck } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

type ServiceItem = {
  number: string;
  title: string;
  desc: string;
  bullets: string[];
  bgClass: string;
  checkClass: string;
  icon: ElementType;
  cta: string;
  href: string;
};

export default function Services() {
  const { t } = useLang();

  const services: ServiceItem[] = [
    {
      number: '01',
      title: t.services.cards[0].title,
      desc:
        t.services.cards[0].desc,
      bullets: t.services.cards[0].bullets,
      bgClass: 'bg-[#6EA8FF]',
      checkClass: 'bg-[#006CFF]',
      icon: MonitorCog,
      cta: t.services.cards[0].cta,
      href: '/services/saas',
    },
    {
      number: '02',
      title: t.services.cards[1].title,
      desc:
        t.services.cards[1].desc,
      bullets:
        t.services.cards[1].bullets,
      bgClass: 'bg-[#F47AC2]',
      checkClass: 'bg-[#D93672]',
      icon: Code2,
      cta: t.services.cards[1].cta,
      href: '/services/website-custom',
    },
    {
      number: '03',
      title: t.services.cards[2].title,
      desc: t.services.cards[2].desc,
      bullets:
        t.services.cards[2].bullets,
      bgClass: 'bg-[#84F29B]',
      checkClass: 'bg-[#0E8F43]',
      icon: ShieldCheck,
      cta: t.services.cards[2].cta,
      href: '/services/maintenance',
    },
  ];

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="section-shell overflow-visible bg-[#F7F7F4] py-24 sm:py-28 lg:py-32"
    >
      <div className="page-shell overflow-visible">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full border-[3px] border-black bg-[#FFD84D] px-5 py-3 text-xs font-black uppercase tracking-wide text-black shadow-[5px_5px_0_#111111]">
            { t.services.heading }
          </p>

          <div className="mt-10 space-y-5">
            <h2
              id="services-title"
              className="text-balance text-4xl font-black leading-[1.12] tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-[56px]"
            >
              {t.services.title }
            </h2>

            <p className="max-w-2xl text-base font-medium leading-8 text-[#2C2C2C] sm:text-lg">
              {t.services.subtitle}
            </p>
          </div>
        </div>

        <div className="mt-10 overflow-visible px-1 pb-6 sm:px-2">
          <div className="grid overflow-visible gap-6 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className={[
                    'group flex min-h-140 flex-col rounded-2xl border-[3px] border-black p-6 sm:p-8',
                    'shadow-[8px_8px_0_#111111]',
                    'transition-all duration-200',
                    'hover:-translate-y-1 hover:shadow-[12px_12px_0_#111111]',
                    'active:translate-y-1 active:shadow-[4px_4px_0_#111111]',
                    service.bgClass,
                  ].join(' ')}
                >
                  <header className="flex items-start justify-between gap-5">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg border-[3px] border-black bg-white text-3xl font-black tracking-[-0.06em] text-black shadow-[3px_3px_0_#111111]">
                      {service.number}
                    </div>

                    <Icon
                      className="h-16 w-16 shrink-0 text-black"
                      aria-hidden="true"
                      strokeWidth={2.4}
                    />
                  </header>

                  <div className="mt-8">
                    <h3 className="text-3xl font-black tracking-tighter text-black sm:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 max-w-md text-lg font-medium leading-8 text-black">
                      {service.desc}
                    </p>
                  </div>

                  <ul className="mt-7 space-y-4">
                    {service.bullets.map((item) => (
                      <li key={item} className="flex items-center gap-4">
                        <span
                          className={[
                            'flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white',
                            service.checkClass,
                          ].join(' ')}
                        >
                          <Check
                            className="h-4 w-4"
                            aria-hidden="true"
                            strokeWidth={3}
                          />
                        </span>

                        <span className="text-lg font-medium text-black">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <footer className="mt-auto flex items-center justify-between gap-4 pt-10">
                    <Link
                      href={service.href}
                      className="inline-flex min-h-14 flex-1 items-center justify-center rounded-lg border-[3px] border-black bg-white px-4 text-base font-black text-black shadow-[4px_4px_0_#111111] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
                    >
                      {service.cta}
                    </Link>

                    <Link
                      href={service.href}
                      aria-label={`Daftar ${service.title}`}
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-[3px] border-black bg-white text-black shadow-[4px_4px_0_#111111] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
                    >
                      <ArrowRight
                        className="h-9 w-9 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                        strokeWidth={3}
                      />
                    </Link>
                  </footer>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}