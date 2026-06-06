"use client";

import Link from 'next/link';
import PortfolioClient from './PortfolioClient';

import { useLang } from '@/context/LanguageContext';
import { Portfolio } from '@/types';

interface PortfolioPageProps {
  projects: Portfolio[];
}

export default function PortfolioPage({
  projects,
}: PortfolioPageProps) {
  const { t } = useLang();

  return (
    <div className="pb-24 pt-32">
      <section className="section-shell relative overflow-visible">
        <div className="page-shell text-center">
          <div className="inline-flex rounded-full border-[3px] border-black bg-[#FFD84D] px-5 py-2 text-sm font-black uppercase tracking-wide text-black shadow-[4px_4px_0_#111111] mb-6">
            {t.Portfolio.heading}
          </div>

          <h1 className="text-balance text-5xl font-black leading-[1.1] tracking-[-0.04em] text-[#111111] sm:text-6xl lg:text-[72px] mb-8">
            {t.Portfolio.title}
          </h1>

          <p className="mx-auto max-w-3xl text-xl font-medium leading-relaxed text-[#2C2C2C] sm:text-2xl">
            {t.Portfolio.subtitle}
          </p>
        </div>
      </section>

      <PortfolioClient projects={projects} />

      {/* CTA Section */}
      <section className="section-shell mt-24">
        
        <div className="page-shell">
          
          <div className="rounded-3xl border-[3px] border-black bg-[#6FFF9A] p-12 sm:p-20 text-center shadow-[12px_12px_0_#111111]">
            
            <h2 className="text-4xl font-black tracking-[-0.04em] text-black sm:text-5xl mb-6">
              
              {t.Portfolio.BottomCTA[0]}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl font-medium text-[#111111]">
              
              {t.Portfolio.BottomCTA[1]}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-xl border-[3px] border-black bg-[#FFD84D] px-8 py-4 text-lg font-black text-black shadow-[6px_6px_0_#111111] transition-all duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_#111111] active:translate-y-1 active:shadow-[2px_2px_0_#111111]"
              >
                
                {t.Portfolio.BottomCTA[2]}
              </Link>
              <a
                href="https://wa.me/628818204100"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-[3px] border-black bg-white px-8 py-4 text-lg font-black text-black shadow-[6px_6px_0_#111111] transition-all duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_0_#11111１]"
              >
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle"
                >
                  
                  <path d="M7.9 20A9 9 0 1 0 4 １6.１L2 ２２Z" />
                </svg>
                {t.Portfolio.BottomCTA[3]}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}