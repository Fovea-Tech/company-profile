'use client';

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
  pricing?: {
    title: { id: string; en: string };
    price: string;
    features: { id: string; en: string }[];
    cta: { id: string; en: string };
    ctaHref?: string;
    isPopular?: boolean;
  }[];
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

  return (
    <div className="pb-16 pt-32 space-y-16 sm:space-y-24">
      {/* Hero */}
      <section className="relative overflow-visible">
        <div className="page-shell text-center max-w-4xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-primary mb-6 border border-blue-100 uppercase tracking-wider">
            Layanan Kami
          </div>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-6">
            {title.id}
          </h1>
          <p className="mx-auto max-w-2xl text-slate-600 text-base sm:text-lg leading-relaxed">
            {subtitle.id}
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="">
        <div className="page-shell">
          <div className="card-clean p-8 sm:p-12 lg:p-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              Gambaran Umum
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {overview.id}
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="">
        <div className="page-shell">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-10 text-center">
            Apa yang Anda Dapatkan
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div key={i} className="group flex flex-col card-clean p-6 justify-between hover:-translate-y-0.5 transition-all">
                <h3 className="mb-3 text-lg font-bold text-slate-900 tracking-tight">{f.title.id}</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{f.desc.id}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="">
        <div className="page-shell">
          <div className="card-clean bg-blue-50/50 p-8 sm:p-12 lg:p-16 border border-blue-100">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-8">
              Cocok Untuk
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2">
              {idealFor.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold text-xs mt-0.5">
                    ✓
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-slate-800 mt-0.5">{item.id}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="">
        <div className="page-shell">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-16 text-center">
            Proses Kerja
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 relative before:absolute before:left-0 before:top-6 before:h-0.5 before:w-full before:bg-slate-200 before:hidden lg:before:block">
            {process.map((p, i) => (
              <div key={i} className="relative z-10 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-base font-bold text-primary shadow-xs">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">{p.title.id}</h3>
                <p className="text-sm text-slate-755 leading-relaxed">{p.desc.id}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="">
        <div className="page-shell">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8">
            Hasil Akhir (Deliverables)
          </h2>
          <div className="flex flex-wrap gap-3">
            {deliverables.map((item, i) => (
              <div key={i} className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-xs">
                {item.id}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQ */}
      <section className="">
        <div className="page-shell max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-10 text-center">FAQ</h2>
          <div className="grid gap-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-xl border border-border bg-white p-5 [&_summary::-webkit-details-marker]:hidden cursor-pointer transition-all duration-200">
                <summary className="flex items-center justify-between text-base md:text-lg font-bold text-slate-900 outline-none select-none">
                  {faq.q.id}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-transform group-open:rotate-180 group-open:bg-blue-50 group-open:text-primary">↓</span>
                </summary>
                <div className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a.id}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="">
        <div className="page-shell">
          <div className="card-clean p-12 sm:p-20 text-center relative overflow-hidden bg-bg">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
              Mari Bangun Solusi Digital Anda Bersama Kami.
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-sm sm:text-base text-slate-600 leading-relaxed">
              Ceritakan kebutuhan agensi Anda atau konsultasikan digitalisasi sekolah Anda secara gratis.
            </p>
            <Link
              href="/#contact"
              className="btn-primary cursor-pointer text-sm font-semibold shadow-sm"
            >
              Kirim Pesan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
