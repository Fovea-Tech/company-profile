'use client';

import { useLang } from '@/context/LanguageContext';
import Link from 'next/link';

interface ServiceTemplateProps {
  title: { id: string; en: string };
  subtitle: { id: string; en: string };
  overview: { id: string; en: string };
  features: { title: { id: string; en: string }; desc: { id: string; en: string } }[];
  idealFor: { id: string; en: string }[];
  process: { title: { id: string; en: string }; desc: { id: string; en: string } }[];
  deliverables: { id: string; en: string }[];
  faqs: { q: { id: string; en: string }; a: { id: string; en: string } }[];
}

export default function ServiceTemplate({
  title,
  subtitle,
  overview,
  features,
  idealFor,
  process,
  deliverables,
  faqs,
}: ServiceTemplateProps) {
  const { lang, t } = useLang();

  return (
    <div className="pb-16 pt-32">
      {/* Hero */}
      <section className="section-shell relative overflow-visible">
        <div className="page-shell text-center">
          <div className="inline-flex rounded-full border-[3px] border-black bg-[#FFD84D] px-5 py-2 text-sm font-black uppercase tracking-wide text-black shadow-[4px_4px_0_#111111] mb-6">
            {lang === 'id' ? 'Layanan Kami' : 'Our Service'}
          </div>
          <h1 className="text-balance text-5xl font-black leading-[1.1] tracking-[-0.04em] text-[#111111] sm:text-6xl lg:text-[72px] mb-8">
            {lang === 'id' ? title.id : title.en}
          </h1>
          <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-[#2C2C2C] sm:text-2xl">
            {lang === 'id' ? subtitle.id : subtitle.en}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-shell">
        <div className="page-shell">
          <div className="rounded-3xl border-[3px] border-black bg-white p-8 sm:p-12 shadow-[8px_8px_0_#111111] lg:p-16">
            <h2 className="text-3xl font-black tracking-[-0.03em] text-black sm:text-4xl mb-6">
              {lang === 'id' ? 'Gambaran Umum' : 'Overview'}
            </h2>
            <p className="text-xl font-medium leading-relaxed text-[#2C2C2C]">
              {lang === 'id' ? overview.id : overview.en}
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-shell">
        <div className="page-shell">
          <h2 className="text-4xl font-black tracking-[-0.04em] text-black mb-10 text-center">
            {lang === 'id' ? 'Apa yang Anda Dapatkan' : 'What You Get'}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div key={i} className="group flex flex-col rounded-2xl border-[3px] border-black bg-[#F7F7F4] p-6 shadow-[6px_6px_0_#111111] transition-all duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_#111111]">
                <h3 className="mb-4 text-2xl font-black tracking-tight text-black">{lang === 'id' ? f.title.id : f.title.en}</h3>
                <p className="text-lg font-medium text-[#2C2C2C]">{lang === 'id' ? f.desc.id : f.desc.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="section-shell">
        <div className="page-shell">
          <div className="rounded-3xl border-[3px] border-black bg-[#6EA8FF] p-8 sm:p-12 lg:p-16 shadow-[8px_8px_0_#111111]">
            <h2 className="text-3xl font-black tracking-[-0.03em] text-black sm:text-4xl mb-8">
              {lang === 'id' ? 'Cocok Untuk' : 'Ideal For'}
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2">
              {idealFor.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-[3px] border-black bg-[#FFD84D] text-black font-black text-lg shadow-[2px_2px_0_#111111]">
                    ✓
                  </span>
                  <span className="text-xl font-bold text-black mt-0.5">{lang === 'id' ? item.id : item.en}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-shell">
        <div className="page-shell">
          <h2 className="text-4xl font-black tracking-[-0.04em] text-black mb-16 text-center">
            {lang === 'id' ? 'Proses Kerja' : 'Our Process'}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative before:absolute before:left-0 before:top-[36px] before:h-[3px] before:w-full before:bg-black before:hidden lg:before:block">
            {process.map((p, i) => (
              <div key={i} className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border-[3px] border-black bg-white text-2xl font-black text-black shadow-[4px_4px_0_#111111]">
                  {i + 1}
                </div>
                <h3 className="mb-3 text-2xl font-black text-black tracking-tight">{lang === 'id' ? p.title.id : p.title.en}</h3>
                <p className="text-lg font-medium text-[#2C2C2C]">{lang === 'id' ? p.desc.id : p.desc.en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="section-shell">
        <div className="page-shell">
          <h2 className="text-3xl font-black tracking-[-0.03em] text-black mb-8">
            {lang === 'id' ? 'Hasil Akhir (Deliverables)' : 'Deliverables'}
          </h2>
          <div className="flex flex-wrap gap-4">
            {deliverables.map((item, i) => (
              <div key={i} className="inline-flex rounded-xl border-[3px] border-black bg-white px-5 py-3 text-lg font-bold text-black shadow-[4px_4px_0_#111111]">
                {lang === 'id' ? item.id : item.en}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQ */}
      <section className="section-shell">
        <div className="page-shell max-w-3xl">
          <h2 className="text-4xl font-black tracking-[-0.04em] text-black mb-10 text-center">FAQ</h2>
          <div className="grid gap-5">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border-[3px] border-black bg-white p-6 shadow-[6px_6px_0_#111111] [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_#111111]">
                <summary className="flex items-center justify-between text-xl font-black text-black outline-none">
                  {lang === 'id' ? faq.q.id : faq.q.en}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-black bg-[#FFD84D] text-black transition-transform group-open:rotate-180">↓</span>
                </summary>
                <div className="mt-5 text-lg font-medium leading-relaxed text-[#2C2C2C]">
                  {lang === 'id' ? faq.a.id : faq.a.en}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="section-shell">
        <div className="page-shell">
          <div className="rounded-3xl border-[3px] border-black bg-[#84F29B] p-12 sm:p-20 text-center shadow-[12px_12px_0_#111111]">
            <h2 className="text-4xl font-black tracking-[-0.04em] text-black sm:text-5xl mb-6">
              {t.contact.title}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl font-medium text-[#111111]">
              {t.contact.subtitle}
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-xl border-[3px] border-black bg-[#FFD84D] px-8 py-5 text-xl font-black text-black shadow-[6px_6px_0_#111111] transition-all duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
            >
              {t.contact.cta ?? 'Hubungi Kami'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
