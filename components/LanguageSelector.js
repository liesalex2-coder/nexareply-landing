// components/LanguageSelector.js

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/LanguageSelector.module.css';

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('fr');
  const router = useRouter();

  useEffect(() => {
    const path = router.pathname;
    if (path === '/en') setCurrentLang('en');
    else if (path === '/es') setCurrentLang('es');
    else setCurrentLang('fr');
  }, [router.pathname]);

  const languages = [
    { code: 'fr', name: 'Français', flag: '🇫🇷', path: '/' },
    { code: 'en', name: 'English', flag: '🇬🇧', path: '/en' },
    { code: 'es', name: 'Español', flag: '🇪🇸', path: '/es' }
  ];

  const handleLanguageChange = (langCode, langPath) => {
    localStorage.setItem('preferredLanguage', langCode);
    router.push(langPath);
    setIsOpen(false);
  };

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <div className={styles.languageSelector}>
      <button 
        className={styles.langButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Sélectionner la langue"
      >
        <span className={styles.langFlag}>{currentLanguage?.flag}</span>
        <span className={styles.langCode}>{currentLanguage?.code.toUpperCase()}</span>
        <span className={styles.langArrow}>▼</span>
      </button>

      {isOpen && (
        <>
          <div 
            className={styles.backdrop} 
            onClick={() => setIsOpen(false)}
          />
          <div className={styles.langDropdown}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`${styles.langOption} ${
                  lang.code === currentLang ? styles.active : ''
                }`}
                onClick={() => handleLanguageChange(lang.code, lang.path)}
              >
                <span className={styles.optionFlag}>{lang.flag}</span>
                <span className={styles.optionName}>{lang.name}</span>
                {lang.code === currentLang && (
                  <span className={styles.checkmark}>✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}