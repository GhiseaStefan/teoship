'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Locale = 'ro' | 'en';

interface LocaleContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ro');

  useEffect(() => {
    // Check if there's a saved locale in localStorage
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'ro' || savedLocale === 'en')) {
      setLocale(savedLocale);
    } else {
      // Detect browser language - română pentru România, engleză altfel
      const browserLang = navigator.language.toLowerCase();
      // Check if browser language is Romanian (ro, ro-RO, ro-MD, etc.)
      if (browserLang.startsWith('ro')) {
        setLocale('ro');
      } else {
        // Default to English for all other languages
        setLocale('en');
      }
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    // Return default values instead of throwing error
    return { locale: 'ro' as const, setLocale: () => { } };
  }
  return context;
}
