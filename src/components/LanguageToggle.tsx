'use client';

import { useLang } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
      {(['id', 'en'] as const).map((item) => {
        const active = lang === item;

        return (
          <button
            key={item}
            type="button"
            onClick={() => setLang(item)}
            className={[
              'rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]',
              active ? 'bg-white text-slate-950 shadow-sm' : 'text-muted hover:text-fg',
            ].join(' ')}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
