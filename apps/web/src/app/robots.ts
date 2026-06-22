import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        // Allow Googlebot explicitly with no restrictions
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: 'https://www.fovea.digital/sitemap.xml',
    host: 'https://www.fovea.digital',
  };
}
