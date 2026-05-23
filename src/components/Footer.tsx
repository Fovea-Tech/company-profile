'use client';

import Link from 'next/link';
import type { SVGProps } from 'react';
import { useLang } from '@/context/LanguageContext';

const TiktokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
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
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
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
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
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
  const { t } = useLang();
  const year = new Date().getFullYear();

  const navigationLinks = [
    {
      href: '/#hero',
      label: t.footer.navigation[0],
    },
    {
      href: '/#who-are-we',
      label: t.footer.navigation[1],
    },
    {
      href: '/#process',
      label: t.footer.navigation[2],
    },
    {
      href: '/#services',
      label: t.footer.navigation[3],
    },
    {
      href: '/#faq',
      label: t.footer.navigation[4],
    },
    {
      href: '/#contact',
      label: t.footer.navigation[5],
    },
  ];

  const servicesLinks = [
    {
      href: '/services/saas',
      label: t.footer.services[0],
    },
    {
      href: '/services/website-custom',
      label: t.footer.services[1],
    },
    {
      href: '/services/maintenance',
      label: t.footer.services[2],
    },
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
    <footer className="bg-[#111111] px-4 py-14 text-white sm:px-6">
      <div className="page-shell">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.8fr_0.7fr]">
          <section aria-labelledby="footer-brand">
            <Link href="/#hero" className="inline-flex">
              <h2
                id="footer-brand"
                className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl"
              >
                {t.footer.brand}
              </h2>
            </Link>

            <p className="mt-4 max-w-sm text-base font-medium leading-7 text-white/70">
              {t.footer.tagline}
            </p>

            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-black"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </section>

          <nav aria-labelledby="footer-navigation">
            <h3
              id="footer-navigation"
              className="text-lg font-black text-white"
            >
              {t.footer.title[0]}
            </h3>

            <ul className="mt-4 space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-services">
            <h3 id="footer-services" className="text-lg font-black text-white">
              {t.footer.title[1]}
            </h3>

            <ul className="mt-4 space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base font-medium text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact">
            <h3 id="footer-contact" className="text-lg font-black text-white">
              {t.footer.title[2]}
            </h3>

            <address className="mt-4 space-y-2 not-italic">
              <a
                href="mailto:hello@fovea.digital"
                className="block text-base font-medium text-white/70 transition-colors hover:text-white"
              >
                hello@fovea.digital
              </a>

              <a
                href="https://wa.me/628818204100"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base font-medium text-white/70 transition-colors hover:text-white"
              >
                +62 881-8204-100
              </a>
            </address>
          </section>
        </div>

        <div className="mx-auto mt-8 h-px max-w-3xl bg-white/50" />

        <p className="mt-6 text-center text-sm font-medium text-white/80">
          &copy; {year} {t.footer.brand}.{' '}
          {t.footer.copyright}
        </p>
      </div>
    </footer>
  );
}