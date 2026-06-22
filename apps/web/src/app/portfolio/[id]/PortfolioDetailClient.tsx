'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Portfolio } from '@/types';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left';
import ArrowUpRight from 'lucide-react/dist/esm/icons/arrow-up-right';
import FolderKanban from 'lucide-react/dist/esm/icons/folder-kanban';
import Calendar from 'lucide-react/dist/esm/icons/calendar';
import User from 'lucide-react/dist/esm/icons/user';
import Layers from 'lucide-react/dist/esm/icons/layers';
import React from 'react';

export default function PortfolioDetailClient({ project }: { project: Portfolio }) {

  // Parse tech strings
  const technologies = (project.tech || '').split(',').map(t => t.trim()).filter(Boolean);

  const isUrl = (text: string) =>
    /^(https?:\/\/|www\.)/i.test(text);

  const href = project.link.startsWith("www.")
    ? `https://${project.link}`
    : project.link;

  return (
    <div className="pb-24 pt-32 bg-[#F8FAFC]">
      {/* ── Hero & Metadata Grid ── */}
      <section className="mb-12">
        <div className="page-shell">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft size={16} />
            Kembali ke Portofolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3.5 py-1 text-xs font-bold text-white tracking-widest uppercase shadow-sm">
                {project.category}
              </span>
              <h1 className="text-balance text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
                {project.title}
              </h1>
            </div>

            {/* Metadata Grid (Bento Style in Header) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <User size={12} /> Nama Klien
                </p>
                <p className="text-sm font-bold text-slate-800">{project.client || '-'}</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <Calendar size={12} /> Tahun Proyek
                </p>
                <p className="text-sm font-bold text-slate-800">{project.year || '-'}</p>
              </div>
              <div className="col-span-2 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                  <Layers size={12} /> Teknologi
                </p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map(tech => (
                    <span key={tech} className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Image ── */}
      <section className="mb-16">
        <div className="page-shell">
          <div className="relative aspect-21/9 w-full rounded-4xl bg-slate-200 overflow-hidden border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400 bg-white">
                <FolderKanban size={64} opacity={0.2} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Project Story (Bento Cards) ── */}
      <section className="mb-24">
        <div className="page-shell">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Challenge */}
            {project.challenge && (
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 mb-6">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">Tantangan & Latar Belakang</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {/* Solution */}
            {project.solution && (
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 mb-6">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">Solusi Pendekatan</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {/* Results (Spans Full Width) */}
            {project.results && (
              <div className="md:col-span-2 bg-[#0F172A] p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-lg relative overflow-hidden flex flex-col md:flex-row gap-8 items-center justify-between">
                {/* Decorative glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20 pointer-events-none" />
                
                <div className="flex-1 space-y-4 relative z-10">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">Dampak Nyata</p>
                  <p className="text-lg sm:text-xl font-semibold text-slate-100 leading-relaxed">
                    &quot;{project.results}&quot;
                  </p>
                </div>

                {project.link && (
                  <div className="relative z-10 shrink-0 w-full md:w-auto">
                    {isUrl(project.link) ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 w-full justify-center bg-white text-slate-900 px-6 py-3 rounded-full font-bold text-sm hover:bg-slate-100 transition-colors"
                      >
                        Kunjungi Live Site
                        <ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <p className="text-sm font-bold text-slate-300 bg-slate-800/50 px-6 py-3 rounded-full border border-slate-700">
                        {project.link}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="pt-12 border-t border-border">
        <div className="page-shell">
          <div className="card-clean p-8 md:p-12 text-center max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-3">
              Ingin Membangun Sistem Digital Seperti Ini?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mb-6">
              Fovea membantu mendigitalkan operasional sekolah swasta dan menjadi technical partner agensi digital. Konsultasikan proyek Anda sekarang gratis.
            </p>
            <Link
              href="/#contact"
              className="btn-primary cursor-pointer text-sm"
            >
              Konsultasi Proyek Gratis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
