'use client';

import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';
import PortfolioDetailClient from '@/components/PortfolioDetailClient';
import type { PortfolioCategory, SaasProduct, UpcomingSaas, CustomProject } from '@/data/portfolio';

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

  /** Resolve translated fields, fall back to base fields */
  const i18n = item.i18n?.[lang] ?? { description: item.description, longDescription: item.longDescription, features: item.features };

  function getUrl(i: AnyItem): string {
    if ('url' in i && i.url) return i.url;
    if ('notifyUrl' in i && i.notifyUrl) return i.notifyUrl;
    return '#';
  }

  const url = getUrl(item);
  const categoryLabel = td.categoryLabel[category];

  return (
    <div className="min-h-screen bg-bg mt-16">
      {/* Back bar */}
      <div className="sticky top-24 z-40 bg-bg/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.nav.portfolio}
            </Link>
            <span className="text-muted/50">/</span>
            <span className="text-sm text-fg font-medium truncate max-w-[150px] sm:max-w-xs">{item.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left: Info */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="px-2.5 py-1 bg-white/10 text-muted text-xs font-medium rounded-full">
                {categoryLabel}
              </span>
              <span className="px-2.5 py-1 bg-white/10 text-muted text-xs font-medium rounded-full">
                {item.year}
              </span>
              {'status' in item && item.status === 'live' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-full">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Live
                </span>
              )}
              {'status' in item && item.status === 'in-development' && (
                <span className="px-2.5 py-1 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full">
                  {t.portfolio.inDev}
                </span>
              )}
              {'status' in item && item.status === 'coming-soon' && (
                <span className="px-2.5 py-1 bg-amber-500/10 text-amber-400 text-xs font-medium rounded-full">
                  {t.portfolio.comingSoon}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-fg tracking-tight leading-tight mb-5">
              {item.name}
            </h1>

            <p className="text-base sm:text-lg text-muted leading-relaxed mb-8">{i18n.longDescription}</p>

            {/* Meta */}
            {'client' in item && item.client && (
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-widest text-muted w-20 flex-shrink-0">{td.client}</span>
                <span className="text-sm text-fg">{item.client}</span>
              </div>
            )}
            {'clientIndustry' in item && (
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-widest text-muted w-20 flex-shrink-0">{td.industry}</span>
                <span className="text-sm text-fg">{item.clientIndustry}</span>
              </div>
            )}
            {'techStack' in item && item.techStack.length > 0 && (
              <div className="flex items-start gap-3 mb-3">
                <span className="text-xs uppercase tracking-widest text-muted w-20 flex-shrink-0 mt-1">{td.techStack}</span>
                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 bg-white/10 text-fg text-xs font-medium rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {'progress' in item && (
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs uppercase tracking-widest text-muted w-20 flex-shrink-0">{td.progress}</span>
                <div className="flex items-center gap-3 flex-1">
                  <div className="flex-1 h-2 bg-surface rounded-full overflow-hidden border border-border">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-700"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-fg">{item.progress}%</span>
                </div>
              </div>
            )}

            {/* CTA */}
            {url !== '#' ? (
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent text-white text-sm font-medium rounded-xl hover:bg-accent-hover transition-colors duration-200 shadow-lg shadow-accent/20"
              >
                {category === 'upcoming' ? td.notifyMe : td.viewProduct}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white/5 text-muted text-sm font-medium rounded-xl cursor-not-allowed">
                {category === 'upcoming' ? td.comingSoon : td.demoSoon}
              </span>
            )}
          </div>

          {/* Right: Screenshot */}
          <div className="bg-surface rounded-2xl border border-white/10 aspect-video flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-4" />
              <p className="text-sm text-muted">Screenshot Preview</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-6">{td.features}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {i18n.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3 bg-surface rounded-xl border border-white/10 p-4">
                <div className="w-5 h-5 bg-accent rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm shadow-accent/20">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-fg leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div className="border-t border-white/10 pt-10">
          <PortfolioDetailClient prev={prev} next={next} category={category} />
        </div>
      </div>
    </div>
  );
}
