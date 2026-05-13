import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // Jika Anda memiliki sitemap nanti, pastikan URL-nya benar
    sitemap: 'https://fovea.digital/sitemap.xml',
  };
}
