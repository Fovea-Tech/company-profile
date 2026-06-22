'use client';

import Link from 'next/link';
import type { SVGProps } from 'react';

const TiktokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const InstagramIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/solusi-pendidikan', label: 'Solusi Pendidikan' },
    { href: '/agency-partnership', label: 'Kemitraan Agensi' },
    { href: '/portfolio', label: 'Portofolio' },
    { href: '/blog', label: 'Blog' },
  ];

  const servicesLinks = [
    { href: '/services/website-custom', label: 'Website Custom' },
    { href: '/services/saas', label: 'SaaS Product' },
    { href: '/services/maintenance', label: 'Paket Maintenance' },
  ];

  const socialLinks = [
    {
      href: 'https://www.instagram.com/buildwithfovea/',
      label: 'Instagram',
      icon: InstagramIcon,
    },
    {
      href: 'https://www.tiktok.com/@buildwithfovea',
      label: 'TikTok',
      icon: TiktokIcon,
    },
    {
      href: 'https://www.linkedin.com/company/fovea-technology/',
      label: 'LinkedIn',
      icon: LinkedinIcon,
    },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-16 px-4">
      <div className="page-shell">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-flex">
              <h2
                className="text-xl font-bold tracking-tight"
                style={{ color: '#FFFFFF' }}
              >
                Fovea Teknologi
              </h2>
            </Link>
            <p className="text-sm leading-relaxed text-slate-300">
              Fovea Teknologi membantu sekolah swasta mendigitalisasi operasional dan menjadi technical partner agensi digital.
            </p>
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer"
                  >
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">Layanan</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">Kontak</h3>
            <address className="space-y-2 not-italic text-sm">
              <a
                href="mailto:hello@fovea.digital"
                className="block text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                hello@fovea.digital
              </a>
              <a
                href="https://wa.me/628818204100"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                +62 881-8204-100
              </a>
              <p className="text-sm text-slate-400 pt-2">
                Kami juga melayani pengembangan website dan software untuk bisnis lainnya sesuai kebutuhan.
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            Copyright &copy; {year} Fovea Teknologi. Semua hak dilindungi.
          </p>
          <div className="flex gap-4 text-sm text-slate-400">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}