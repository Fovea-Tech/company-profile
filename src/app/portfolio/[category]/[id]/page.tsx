import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getItemByCategory,
  getCategoryItems,
  getAllItems,
  type PortfolioCategory,
} from '@/data/portfolio';
import PortfolioDetailContent from '@/components/PortfolioDetailContent';

interface PageProps {
  params: Promise<{ category: string; id: string }>;
}

function isValidCategory(s: string): s is PortfolioCategory {
  return s === 'saas' || s === 'upcoming' || s === 'custom';
}

export async function generateStaticParams() {
  return getAllItems().map((item) => ({
    category: item.category,
    id: String(item.id),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, id } = await params;
  if (!isValidCategory(category)) return {};
  const item = getItemByCategory(category, Number(id));
  if (!item) return {};
  return {
    title: `${item.name} — Fovea Tech`,
    description: item.description,
  };
}

export default async function PortfolioDetailPage({ params }: PageProps) {
  const { category, id } = await params;

  if (!isValidCategory(category)) notFound();

  const item = getItemByCategory(category, Number(id));
  if (!item) notFound();

  const allInCategory = getCategoryItems(category);
  const currentIndex = allInCategory.findIndex((i) => i.id === item.id);
  const prev = currentIndex > 0 ? allInCategory[currentIndex - 1] : null;
  const next = currentIndex < allInCategory.length - 1 ? allInCategory[currentIndex + 1] : null;

  return (
    <PortfolioDetailContent 
      item={item} 
      category={category} 
      prev={prev} 
      next={next} 
    />
  );
}
