'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLang } from '@/context/LanguageContext';
import type { SaasProduct, UpcomingSaas, CustomProject, PortfolioCategory } from '@/data/portfolio';

type AnyItem = SaasProduct | UpcomingSaas | CustomProject;

interface Props {
  prev: AnyItem | null;
  next: AnyItem | null;
  category: PortfolioCategory;
}

export default function PortfolioDetailClient({ prev, next, category }: Props) {
  const { t } = useLang();
  const td = t.portfolioDetail;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between gap-4"
    >
      {prev ? (
        <Link
          href={`/portfolio/${category}/${prev.id}`}
          className="flex items-center gap-3 group text-left flex-1"
        >
          <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-200 shadow-sm shadow-accent/10">
            <svg className="w-4 h-4 text-accent group-hover:text-white transition-colors group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-muted uppercase tracking-widest">{td.prev}</p>
            <p className="text-sm font-medium text-fg mt-0.5">{prev.name}</p>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      <Link
        href="/#portfolio"
        className="px-5 py-2.5 text-sm text-muted hover:text-accent border border-border rounded-full hover:border-accent transition-all duration-200 shrink-0"
      >
        {td.allPortfolio}
      </Link>

      {next ? (
        <Link
          href={`/portfolio/${category}/${next.id}`}
          className="flex items-center gap-3 group text-right flex-1 justify-end"
        >
          <div>
            <p className="text-xs text-muted uppercase tracking-widest">{td.next}</p>
            <p className="text-sm font-medium text-fg mt-0.5">{next.name}</p>
          </div>
          <div className="w-10 h-10 bg-accent-light rounded-full flex items-center justify-center group-hover:bg-accent transition-colors duration-200 shadow-sm shadow-accent/10">
            <svg className="w-4 h-4 text-accent group-hover:text-white transition-colors group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </motion.div>
  );
}
