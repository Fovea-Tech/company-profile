import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { href: '#hero', label: 'Beranda' },
    { href: '#services', label: 'Layanan' },
    { href: '#portfolio', label: 'Portofolio' },
    { href: '#about', label: 'Tentang Kami' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Kontak' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 mt-0 relative z-10 overflow-hidden border-t-0">
      {/* Decorative background blobs */}
      <div className="absolute top-[-50%] left-[-10%] w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[120px] pointer-events-none animate-morph" />
      <div className="absolute bottom-[-50%] right-[-10%] w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none animate-morph animation-delay-4000" />

      <div className="relative z-10 w-full px-5 sm:px-8 md:px-12 lg:px-[8vw] xl:px-[12vw] pt-14 sm:pt-20 pb-10 sm:pb-12 mx-auto">
        {/* Top grid: stacked on mobile, 3-col on sm+ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 sm:col-span-1">
            <Link href="/#hero" className="inline-flex items-center gap-2 mb-3 group">
              <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
                <Image
                  src="/logo_dark.png"
                  alt="Fovea Tech Logo"
                  width={64}
                  height={64}
                  className="object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <span className="font-bold text-white text-base tracking-tight">Fovea Tech</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Building the Future, One Product at a Time.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4 sm:mb-5">Navigasi</p>
            <ul className="space-y-2.5 sm:space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4 sm:mb-5">Kontak</p>
            <ul className="space-y-2.5 sm:space-y-3 text-sm text-slate-400">
              <li className="hover:text-white transition-colors cursor-default break-all">hello@fovea.digital</li>
              <li className="hover:text-white transition-colors cursor-default">+62 812 3456 7890</li>
              <li className="hover:text-white transition-colors cursor-default">www.fovea.digital</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs text-slate-500 font-medium text-center sm:text-left">© {year} Fovea Tech. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-5">
            {['Twitter', 'LinkedIn', 'GitHub'].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs font-medium text-slate-500 hover:text-white transition-colors duration-200"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;