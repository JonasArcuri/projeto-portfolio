import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Padrão: inglês
    const saved = localStorage.getItem('portfolio-language');
    return saved || 'en';
  });

  const [translations, setTranslations] = useState({});

  useEffect(() => {
    // Carregar traduções
    import(`../locales/${language}.json`)
      .then((module) => {
        setTranslations(module.default);
      })
      .catch((err) => {
        console.error('Error loading translations:', err);
        // Fallback para inglês
        import('../locales/en.json')
          .then((module) => setTranslations(module.default));
      });
  }, [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

