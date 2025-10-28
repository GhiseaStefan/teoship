import { useLocale } from './LocaleContext';
import { translations } from './translations';

export const useTranslation = () => {
  const { locale, setLocale } = useLocale();
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[locale];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  const changeLanguage = (newLocale: 'ro' | 'en') => {
    setLocale(newLocale);
  };

  return { t, locale, changeLanguage };
};
