'use client';

import { MonitorCog, ShieldCheck, Workflow } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';

const serviceIcons = [Workflow, MonitorCog, ShieldCheck];

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
    {
      title: t.services.maintenanceTitle,
      desc: t.services.maintenanceDesc,
      bullets:
        lang === 'id'
          ? ['Monitoring & Security', 'Bug Fixes & Update', 'SLA Support']
          : ['Monitoring & Security', 'Bug Fixes & Updates', 'SLA Support'],
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

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <div key={service.title} className="aurora-panel rounded-3xl p-6 sm:p-8 flex flex-col">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-cyan-50 shadow-[0_10px_30px_rgba(89,243,255,0.12)]">
                  <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-fg">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted flex-grow">{service.desc}</p>
                
                <div className="mt-8 space-y-3">
                  {service.bullets.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
