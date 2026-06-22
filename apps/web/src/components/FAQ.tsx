import { Faq } from '@/types';
import React from 'react';
import Link from 'next/link';
import Plus from 'lucide-react/dist/esm/icons/plus';
import MessageCircle from 'lucide-react/dist/esm/icons/message-circle';

interface FAQProps {
  faqs: Faq[];
}

export default function FAQ({ faqs }: FAQProps) {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="section-padding bg-white border-t border-border"
    >
      <div className="page-shell">
        <div className="faq-layout grid gap-12 items-start lg:grid-cols-[1fr_1.5fr]">
          
          {/* ── Left: sticky header ── */}
          <header className="faq-sidebar lg:sticky lg:top-32">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-primary mb-5 border border-blue-100">
              PERTANYAAN UMUM
            </span>

            <h2
              id="faq-title"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: '#0F172A',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                margin: '0 0 16px',
                textWrap: 'balance',
              }}
            >
              Jawaban Cepat untuk Pertanyaan Anda.
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8" style={{ fontSize: '1.125rem' }}>
              Temukan jawaban dari pertanyaan yang paling sering diajukan klien sebelum memulai kerja sama dengan kami.
            </p>

            {/* Soft CTA nudge to contact */}
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-blue-600 transition-colors mt-4"
            >
              <MessageCircle size={18} />
              Masih ada pertanyaan? Hubungi kami
            </Link>
          </header>

          {/* ── Right: accordion list ── */}
          <div className="faq-list flex flex-col gap-4">
            {faqs.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 border border-slate-200 rounded-2xl text-slate-600 text-sm">
                Belum ada data FAQ.
              </div>
            ) : (
              faqs.map((item, index) => {
                const num = String(index + 1).padStart(2, '0');
                return (
                  <details
                    key={item.id}
                    className="group bg-white border border-slate-200 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden"
                    style={{ transition: 'all 0.2s ease' }}
                  >
                    <summary className="flex items-center gap-4 p-6 cursor-pointer select-none">
                      <span className="text-sm font-bold text-slate-400 font-mono shrink-0">
                        {num}
                      </span>
                      <span className="text-lg font-bold text-slate-800 flex-1 pr-4">
                        {item.question}
                      </span>
                      <span className="text-slate-400 group-open:rotate-45 transition-transform duration-300 shrink-0">
                        <Plus size={20} />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 pt-0 ml-8 md:ml-10 text-slate-600 leading-relaxed text-base">
                      {item.answer}
                    </div>
                  </details>
                );
              })
            )}
          </div>

        </div>
      </div>
    </section>
  );
}