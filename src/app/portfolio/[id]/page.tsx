import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import PortfolioDetailClient from './PortfolioDetailClient';

export async function generateStaticParams() {
  const portfolios = await prisma.portfolio.findMany({ select: { id: true } });
  return portfolios.map((project) => ({
    id: project.id,
  }));
}

export default async function PortfolioDetailPage(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const project = await prisma.portfolio.findUnique({ where: { id } });

  if (!project) {
    notFound();
  }

  return <PortfolioDetailClient project={project} />;
}
