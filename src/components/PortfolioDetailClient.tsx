'use client';

import Link from 'next/link';
import { useLang } from '@/context/LanguageContext';
import type { CustomProject, PortfolioCategory, SaasProduct, UpcomingSaas } from '@/data/portfolio';

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
    <div className="grid gap-4 md:grid-cols-3">
      <div>
        {prev && (
          <Link href={`/portfolio/${category}/${prev.id}`} className="aurora-panel block rounded-[1.25rem] p-4 hover:scale-[1.03]">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">{td.prev}</p>
            <p className="mt-2 text-base font-semibold text-fg">{prev.name}</p>
          </Link>
        )}
      </div>
      <Link href="/#portfolio" className="aurora-button-secondary justify-center">
        {td.allPortfolio}
      </Link>
      <div>
        {next && (
          <Link href={`/portfolio/${category}/${next.id}`} className="aurora-panel block rounded-[1.25rem] p-4 text-left hover:scale-[1.03] md:text-right">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">{td.next}</p>
            <p className="mt-2 text-base font-semibold text-fg">{next.name}</p>
          </Link>
        )}
      </div>
    </div>
  );
}
