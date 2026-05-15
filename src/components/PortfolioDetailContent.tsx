'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import PortfolioDetailClient from '@/components/PortfolioDetailClient';
import { useLang } from '@/context/LanguageContext';
import type { CustomProject, PortfolioCategory, SaasProduct, UpcomingSaas } from '@/data/portfolio';

type AnyItem = SaasProduct | UpcomingSaas | CustomProject;

interface Props {
  item: AnyItem;
  category: PortfolioCategory;
  prev: AnyItem | null;
  next: AnyItem | null;
}

export default function PortfolioDetailContent({ item, category, prev, next }: Props) {
  const { t, lang } = useLang();
  const td = t.portfolioDetail;

  const i18n = item.i18n?.[lang] ?? {
    description: item.description,
    longDescription: item.longDescription,
    features: item.features,
  };

  const url = 'url' in item ? item.url : 'notifyUrl' in item ? item.notifyUrl : '#';

  return (
    <div className="site-shell min-h-dvh pt-28 pb-12">
      <div className="page-shell space-y-8">
        <div className="aurora-panel flex flex-wrap items-center gap-3 rounded-[1.25rem] px-5 py-4 text-sm text-muted">
          <Link href="/#portfolio" className="hover:text-fg">
            {t.nav.portfolio}
          </Link>
          <span>/</span>
          <span className="chip">{td.categoryLabel[category]}</span>
          <span className="text-fg">{item.name}</span>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            <span className="eyebrow">{td.categoryLabel[category]}</span>
            <h1 className="section-title aurora-text text-4xl sm:text-5xl">{item.name}</h1>
            <p className="section-copy">{i18n.longDescription}</p>

            <div className="grid gap-3 sm:grid-cols-2">
              {'client' in item && item.client && (
                <div className="aurora-panel rounded-[1.25rem] p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">{td.client}</p>
                  <p className="mt-2 text-base font-medium text-fg">{item.client}</p>
                </div>
              )}
              {'clientIndustry' in item && (
                <div className="aurora-panel rounded-[1.25rem] p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">{td.industry}</p>
                  <p className="mt-2 text-base font-medium text-fg">{item.clientIndustry}</p>
                </div>
              )}
              {'techStack' in item && item.techStack.length > 0 && (
                <div className="aurora-panel rounded-[1.25rem] p-4 sm:col-span-2">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">{td.techStack}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.techStack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {'progress' in item && (
                <div className="aurora-panel rounded-[1.25rem] p-4 sm:col-span-2">
                  <div className="mb-3 flex items-center justify-between text-sm text-muted">
                    <span>{td.progress}</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/8">
                    <div className="h-full rounded-full bg-[linear-gradient(90deg,#3a8dff,#59f3ff,#ff4db8)]" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              )}
            </div>

            {url !== '#' ? (
              <Link href={url} target="_blank" rel="noopener noreferrer" className="aurora-button">
                {category === 'upcoming' ? td.notifyMe : td.viewProduct}
              </Link>
            ) : (
              <span className="aurora-button-secondary w-fit opacity-70">
                {category === 'upcoming' ? td.comingSoon : td.demoSoon}
              </span>
            )}
          </div>

          <div className="aurora-panel mesh-card rounded-3xl p-5 sm:p-6">
            <div className="grid h-full gap-4">
              {/* Screenshot */}
              <div className="relative min-h-64 overflow-hidden rounded-[1.25rem] border border-white/10">
                {item.screenshot ? (
                  <Image
                    src={item.screenshot}
                    alt={`Screenshot ${item.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-end bg-slate-950/20 p-4 backdrop-blur-md">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-muted">Preview</p>
                      <p className="mt-2 text-lg font-semibold text-fg">{item.name}</p>
                      <p className="mt-2 text-sm leading-7 text-muted">{i18n.description}</p>
                    </div>
                  </div>
                )}
                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/70 to-transparent" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {i18n.features.slice(0, 4).map((feature) => (
                  <div key={feature} className="rounded-[1.1rem] border border-white/10 bg-slate-950/24 p-4 text-sm leading-6 text-slate-100 backdrop-blur-md">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-100">{td.features}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {i18n.features.map((feature) => (
              <div key={feature} className="aurora-panel rounded-[1.25rem] p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-cyan-200">
                  <Check className="h-4 w-4" aria-hidden="true" strokeWidth={1.8} />
                </div>
                <p className="text-sm leading-7 text-slate-100">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <PortfolioDetailClient prev={prev} next={next} category={category} />
        </div>
      </div>
    </div>
  );
}
