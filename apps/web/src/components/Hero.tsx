import Link from 'next/link';
import HeroVisual from '@/components/HeroVisual';
import MessageSquare from 'lucide-react/dist/esm/icons/message-square';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import CheckCircle2 from 'lucide-react/dist/esm/icons/circle-check';

export default function Hero() {
  return (
    <header className="relative pt-30 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background glow */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3" aria-hidden="true">
        <div className="w-150 h-150 bg-blue-50/80 rounded-full blur-3xl" />
      </div>

      <div className="page-shell relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-xs mb-8 uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              FOVEA TEKNOLOGI • PARTNER TEKNIS
            </div>

            <h1 className="text-slate-900 font-extrabold tracking-tight text-balance mb-6" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Website & Sistem Digital <span className="text-blue-600">Sekolah & Agensi.</span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl text-pretty" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)' }}>
              Kami membangun website sekolah profesional, PPDB online aman, serta menjadi mitra teknis white-label tepercaya bagi digital agency.
            </p>

            <nav aria-label="Hero actions" className="flex flex-wrap items-center gap-4 mb-12 mt-4">
              <Link href="/#contact" className="btn-primary py-3.5 px-8 text-base shadow-lg shadow-blue-500/20 flex items-center gap-2">
                Konsultasi Gratis
                <ArrowRight size={18} />
              </Link>
              <a href="https://wa.me/628818204100" target="_blank" rel="noopener noreferrer" className="btn-secondary py-3.5 px-8 text-base bg-white flex items-center gap-2">
                <MessageSquare size={18} className="text-green-500" />
                Hubungi WA
              </a>
            </nav>

            <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm font-medium text-slate-600" aria-label="Key benefits">
              {['Exclusive Design', 'SEO Optimized', 'Ongoing Tech Support'].map((item) => (
                <li key={item} className="flex items-center gap-2" style={{ fontSize: '1rem' }}>
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual */}
          <figure className="relative w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0" aria-label="Dashboard mockup">
            <HeroVisual />
          </figure>

        </div>
      </div>
    </header>
  );
}