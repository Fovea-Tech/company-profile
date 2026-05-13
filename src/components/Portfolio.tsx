'use client';

import { ListFilter } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';
import {
  customWebsiteProjects,
  saasProducts,
  upcomingSaas,
  type CustomProject,
  type PortfolioCategory,
  type SaasProduct,
  type UpcomingSaas,
} from '@/data/portfolio';

type Tab = PortfolioCategory;
type AnyItem = SaasProduct | UpcomingSaas | CustomProject;

export default function Portfolio() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<Tab>('saas');

  const tabs = [
    { id: 'saas' as const, label: t.portfolio.tabSaas },
    { id: 'upcoming' as const, label: t.portfolio.tabUpcoming },
    { id: 'custom' as const, label: t.portfolio.tabCustom },
  ];

  const data: Record<Tab, AnyItem[]> = {
    saas: saasProducts,
    upcoming: upcomingSaas,
    custom: customWebsiteProjects,
  };

  const items = data[activeTab];

  return (
    <section id="portfolio" className="section-shell">
      <div className="page-shell space-y-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="space-y-4">
            <span className="eyebrow">{t.nav.portfolio}</span>
            <h2 className="section-subtitle aurora-text">{t.portfolio.heading}</h2>
            <p className="section-copy">{t.portfolio.subheading}</p>
          </div>

          <div className="aurora-panel rounded-[1.25rem] p-2">
            <div className="grid gap-2 sm:grid-cols-3">
              {tabs.map((tab) => {
                const isActive = tab.id === activeTab;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={[
                      'rounded-[0.9rem] px-4 py-3 text-sm font-semibold',
                      isActive
                        ? 'bg-white text-slate-950 shadow-sm'
                        : 'bg-transparent text-muted hover:bg-white/5 hover:text-fg',
                    ].join(' ')}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="aurora-panel grid min-h-80place-items-center rounded-3xl p-8 text-center">
            <div className="mx-auto flex max-w-lg flex-col items-center space-y-4 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/8">
                <ListFilter className="h-7 w-7 text-cyan-200" aria-hidden="true" strokeWidth={1.7} />
              </div>
              <h3 className="text-2xl font-semibold text-fg">{t.portfolio.emptyTitle}</h3>
              <p className="section-copy mx-auto">{t.portfolio.emptySubtitle}</p>
              <Link href="/#contact" className="aurora-button mt-2">
                {t.portfolio.emptyCta}
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-5 lg:grid-cols-2">
            {items.map((item) => (
              <article key={`${activeTab}-${item.id}`} className="aurora-panel rounded-3xl p-5 sm:p-6">
                <div className="grid gap-5 md:grid-cols-[0.92fr_1.08fr]">
                  <div className="mesh-card flex min-h-55 items-end rounded-[1.25rem] p-4">
                    <div className="w-full rounded-2xl border border-white/10 bg-slate-950/28 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-muted">{activeTab}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {'techStack' in item && item.techStack.slice(0, 3).map((tech) => <span key={tech} className="chip">{tech}</span>)}
                        {'clientIndustry' in item && <span className="chip">{item.clientIndustry}</span>}
                        {'progress' in item && <span className="chip">{item.progress}%</span>}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    {'status' in item && (
                      <span className="chip mb-4 w-fit">
                        {item.status === 'in-development' ? t.portfolio.inDev : t.portfolio.comingSoon}
                      </span>
                    )}
                    <h3 className="text-2xl font-semibold tracking-tight text-fg">{item.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {'techStack' in item && item.techStack.slice(0, 4).map((tech) => <span key={tech} className="chip">{tech}</span>)}
                      {'clientIndustry' in item && <span className="chip">{item.clientIndustry}</span>}
                    </div>

                    {'progress' in item && (
                      <div className="mt-5">
                        <div className="mb-2 flex items-center justify-between text-sm text-muted">
                          <span>{t.portfolio.inDev}</span>
                          <span>{item.progress}%</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/8">
                          <div
                            className="h-full rounded-full bg-[linear-gradient(90deg,#3a8dff,#59f3ff,#ff4db8)]"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <div className="mt-6 pt-2">
                      <Link href={`/portfolio/${activeTab}/${item.id}`} className="aurora-button-secondary">
                        {t.portfolio.viewProduct}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
