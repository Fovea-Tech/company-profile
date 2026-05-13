'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';
import {
  saasProducts,
  upcomingSaas,
  customWebsiteProjects,
  type PortfolioCategory,
  type SaasProduct,
  type UpcomingSaas,
  type CustomProject,
} from '../data/portfolio';

type Tab = PortfolioCategory;
type AnyItem = SaasProduct | UpcomingSaas | CustomProject;

const Portfolio = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState<Tab>('saas');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'saas', label: t.portfolio.tabSaas },
    { id: 'upcoming', label: t.portfolio.tabUpcoming },
    { id: 'custom', label: t.portfolio.tabCustom },
  ];

  const getData = (): AnyItem[] => {
    switch (activeTab) {
      case 'saas': return saasProducts;
      case 'upcoming': return upcomingSaas;
      case 'custom': return customWebsiteProjects;
    }
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-transparent relative z-10">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-[8vw] xl:px-[12vw] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 w-full md:w-[60%] lg:w-[50%]"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted mb-3">
            {t.portfolio.heading}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight text-gradient">
            {t.portfolio.subheading}
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="mb-8 sm:mb-10 flex gap-0.5 sm:gap-1 bg-surface/50 rounded-full p-1 sm:p-1.5 w-full sm:w-fit border border-white/5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 sm:flex-none min-w-0 px-2 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-sm font-medium rounded-full transition-all duration-300 text-center overflow-hidden text-ellipsis whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-accent to-blue-500 text-white shadow-lg shadow-accent/20'
                  : 'text-muted hover:text-fg hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid or Empty State */}
        <AnimatePresence mode="wait">
          {getData().length === 0 ? (
            <motion.div
              key={`empty-${activeTab}`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className="col-span-full flex flex-col items-center justify-center py-24 sm:py-32 text-center"
            >
              {/* Animated icon */}
              <div className="relative mb-8">
                <div className="absolute inset-0 rounded-full bg-accent/10 blur-2xl scale-150 animate-pulse" />
                <div className="relative w-24 h-24 rounded-full bg-surface border border-white/10 flex items-center justify-center shadow-xl shadow-black/20">
                  <svg className="w-10 h-10 text-muted/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold text-fg mb-3">
                {t.portfolio.emptyTitle}
              </h3>
              <p className="text-sm sm:text-base text-muted max-w-md leading-relaxed mb-8">
                {t.portfolio.emptySubtitle}
              </p>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 hover:bg-accent text-accent hover:text-white border border-accent/30 hover:border-accent rounded-full text-sm font-medium transition-all duration-300 group"
              >
                {t.portfolio.emptyCta}
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Decorative dots */}
              <div className="flex gap-2 mt-12 opacity-30">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
            >
              {getData().map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group glass-card p-5 sm:p-8 hover:-translate-y-1 transition-all duration-500 flex flex-col relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
                  {'status' in item && activeTab === 'upcoming' && (
                    <span className={`self-start mb-4 px-3 py-1.5 rounded-full text-[11px] font-medium border ${
                      item.status === 'in-development'
                        ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                        : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                    }`}>
                      {item.status === 'in-development' ? t.portfolio.inDev : t.portfolio.comingSoon}
                    </span>
                  )}
                  <div className="w-full aspect-video bg-gradient-to-br from-surface to-bg rounded-[1.25rem] sm:rounded-[1.5rem] mb-4 sm:mb-6 flex items-center justify-center border-[4px] border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.2)] group-hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-2 w-full flex justify-center opacity-30">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                    </div>
                    <div className="w-12 h-12 bg-white/5 backdrop-blur border border-white/10 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-accent/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-fg mb-1.5">{item.name}</h3>
                  {activeTab === 'saas' && (
                    <p className="text-[11px] text-muted mb-2 font-medium">
                      {t.portfolio.techStack}:{' '}
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {(item as any).techStack?.join(' · ')}
                    </p>
                  )}
                  {activeTab === 'custom' && (
                    <p className="text-[11px] text-muted mb-2 font-medium">
                      {t.portfolio.industry}:{' '}
                      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                      {(item as any).clientIndustry}
                    </p>
                  )}
                  <p className="text-sm text-muted leading-relaxed mb-5 flex-1">{item.description}</p>
                  <div className="flex items-center justify-between mt-auto gap-3">
                    <Link
                      href={`/portfolio/${activeTab}/${item.id}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200"
                    >
                      {t.portfolio.viewProduct}
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    {'progress' in item && (
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-accent rounded-full" style={{ width: `${item.progress}%` }} />
                        </div>
                        <span className="text-[11px] text-muted">{item.progress}%</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;