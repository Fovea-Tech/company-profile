'use client';

import { MonitorCog, Workflow } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

const serviceIcons = [Workflow, MonitorCog];

export default function Services() {
  const { t, lang } = useLang();

  const services = [
    {
      title: t.services.saasTitle,
      desc: t.services.saasDesc,
      bullets:
        lang === 'id'
          ? ['MVP dan roadmap produk', 'Dashboard, subscription, dan automation', 'Arsitektur siap scale']
          : ['MVP and product roadmaps', 'Dashboards, subscriptions, and automation', 'Architecture prepared for scale'],
    },
    {
      title: t.services.webTitle,
      desc: t.services.webDesc,
      bullets:
        lang === 'id'
          ? ['Brand system yang rapi', 'Landing page dan company profile', 'SEO teknis dan performa inti']
          : ['Clean brand systems', 'Landing pages and company profiles', 'Technical SEO and core performance'],
    },
  ];

  return (
    <section id="services" className="section-shell">
      <div className="page-shell space-y-10">
        <div className="max-w-3xl space-y-4">
          <span className="eyebrow">{t.nav.services}</span>
          <h2 className="section-subtitle aurora-text">{t.services.heading}</h2>
          <p className="section-copy">{t.services.subheading}</p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <article key={service.title} className="grid gap-6 lg:grid-cols-2">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aurora-panel h-full rounded-3xl p-6 sm:p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-cyan-50 shadow-[0_10px_30px_rgba(89,243,255,0.12)]">
                      <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={2.1} />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-fg">{service.title}</h3>
                    <p className="mt-4 text-base leading-7 text-muted">{service.desc}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.bullets.map((item) => (
                        <span key={item} className="chip">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aurora-panel mesh-card grid h-full min-h-80 rounded-3xl p-5 sm:p-6">
                    <div className="grid gap-4 self-end sm:grid-cols-2">
                      {service.bullets.map((item, bulletIndex) => (
                        <div
                          key={item}
                          className={[
                            'rounded-[1.25rem] border border-white/10 bg-slate-950/20 p-4',
                            bulletIndex === 0 ? 'sm:col-span-2' : '',
                          ].join(' ')}
                        >
                          <p className="text-xs uppercase tracking-[0.18em] text-muted">Focus {bulletIndex + 1}</p>
                          <p className="mt-3 text-sm leading-6 text-slate-100">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
