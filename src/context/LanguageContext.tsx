'use client';

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { Lang, Translations } from '@/i18n/types';
import id from '@/i18n/messages/id';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') {
      return 'id';
    }

    return window.localStorage.getItem('fovea-lang') === 'en' ? 'en' : 'id';
  });
  const [t, setT] = useState<Translations>(id);

  useEffect(() => {
    let isMounted = true;

    const loadMessages = async () => {
      if (lang === 'id') {
        setT(id);
        window.localStorage.setItem('fovea-lang', 'id');
        return;
      }

      const messagesModule = await import('@/i18n/messages/en');
      if (isMounted) {
        setT(messagesModule.default);
        window.localStorage.setItem('fovea-lang', 'en');
      }
    };

    void loadMessages();

    return () => {
      isMounted = false;
    };
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
