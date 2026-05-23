'use client';

import { useLang } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="inline-flex items-center gap-1 rounded-xl border-3 border-black bg-white p-1 shadow-[4px_4px_0_#111111]">
      {(['id', 'en'] as const).map((item) => {
        const active = lang === item;

        return (
          <button
            key={item}
            type="button"
            onClick={() => setLang(item)}
            aria-pressed={active}
            aria-label={`Switch to ${item === 'id' ? 'Indonesian' : 'English'}`}
            className={[
              'rounded-lg px-3 py-1.5 text-[11px] font-black uppercase tracking-wider transition-all duration-200',
              active 
                ? 'bg-[#FFD84D] text-black border-2 border-black shadow-[2px_2px_0_#111111]' 
                : 'text-black border-2 border-transparent hover:border-black/20',
            ].join(' ')}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
