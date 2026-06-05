import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import PortfolioDetailClient from './PortfolioDetailClient';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
  const { data: portfolios } = await supabase.from('Portfolio').select('id');
  return (portfolios || []).map((project) => ({
    id: project.id,
  }));
}

export default async function PortfolioDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const { data: project } = await supabase
    .from('Portfolio')
    .select('*')
    .eq('id', id)
    .single();

  if (!project) {
    notFound();
  }

  return <PortfolioDetailClient project={project} />;
}
