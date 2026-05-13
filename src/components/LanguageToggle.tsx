'use client';

import { useLang } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/5">
      <button
        onClick={() => setLang('id')}
        className={`px-2.5 py-1 text-[10px] font-medium rounded-full transition-all duration-200 ${
          lang === 'id' ? 'bg-accent text-white shadow-sm' : 'text-muted hover:text-fg'
        }`}
      >
        ID
      </button>
      <button
        onClick={() => setLang('en')}
        className={`px-2.5 py-1 text-[10px] font-medium rounded-full transition-all duration-200 ${
          lang === 'en' ? 'bg-accent text-white shadow-sm' : 'text-muted hover:text-fg'
        }`}
      >
        EN
      </button>
    </div>
  );
}
