import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { translateText } from './translationService';

import { enTranslations } from './en';
import { ruTranslations } from './ru';
import { trTranslations } from './tr';

const resources = {
  en: {
    translation: enTranslations
  },
  ru: {
    translation: ruTranslations
  },
  tr: {
    translation: trTranslations
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      // Custom backend implementation for automatic translation
      loadPath: '{{lng}}|{{ns}}',
      request: (options, url, payload, callback) => {
        const [targetLang] = url.split('|');
        if (!payload) {
          callback(null, {});
          return;
        }
        
        // Translate missing keys automatically
        const missingKeys = Object.keys(payload);
        Promise.all(
          missingKeys.map(async (key) => {
            try {
              const translated = await translateText(payload[key], targetLang, 'en');
              return [key, translated];
            } catch (error) {
              console.error(`Translation failed for key ${key}:`, error);
              return [key, payload[key]];
            }
          })
        ).then((translations) => {
          const result = Object.fromEntries(translations);
          callback(null, result);
        }).catch((error) => {
          console.error('Translation error:', error);
          callback(null, payload);
        });
      }
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru', 'tr'],
    resources,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;