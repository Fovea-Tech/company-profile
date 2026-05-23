import type { NextConfig } from 'next';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    // Content Security Policy — allows Google Ads/GTM, fonts, self-hosted assets.
    // This is the primary Lighthouse Best Practices requirement.
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Scripts: self + Google Ads + GTM + inline (needed for Next.js)
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com",
      // Styles: self + Google Fonts + inline
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Fonts
      "font-src 'self' https://fonts.gstatic.com",
      // Images: self + data URIs + Google domains
      "img-src 'self' data: blob: https://www.google.com https://www.googletagmanager.com https://googleads.g.doubleclick.net",
      // Connections: self + Google analytics
      "connect-src 'self' https://www.google-analytics.com https://googleads.g.doubleclick.net https://region1.google-analytics.com",
      // Frames: only Google Ads
      "frame-src https://bid.g.doubleclick.net https://td.doubleclick.net",
      // Block all plugins/objects
      "object-src 'none'",
      // Base URI restriction
      "base-uri 'self'",
      // Form submissions
      "form-action 'self'",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },

  // Enable compression
  compress: true,

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

initOpenNextCloudflareForDev();

export default nextConfig;

