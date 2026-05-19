import type { MetadataRoute } from 'next';
import { getAllItems } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.fovea.digital';
  const now = new Date();

  // Static pages — only real URLs (no hash fragments, not valid in sitemaps)
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Dynamic portfolio pages
  const portfolioPages: MetadataRoute.Sitemap = getAllItems().map((item) => ({
    url: `${baseUrl}/portfolio/${item.category}/${item.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...portfolioPages];
}

