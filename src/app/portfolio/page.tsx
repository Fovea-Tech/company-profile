import { Metadata } from 'next';
import PortfolioPage from './PortfolioPage';

import { supabase } from '@/lib/supabase';
import { Portfolio } from '@/types';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Portofolio | Fovea Teknologi',
  description:
    'Lihat hasil kerja Fovea Teknologi dalam pembuatan website custom, dashboard, sistem booking, dan produk SaaS.',
};

export default async function Page() {
  const { data: rawPortfolioData } = await supabase
    .from('Portfolio')
    .select('*')
    .order('createdAt', { ascending: false });

  const portfolioData = (rawPortfolioData as Portfolio[]) || [];

  return <PortfolioPage projects={portfolioData} />;
}