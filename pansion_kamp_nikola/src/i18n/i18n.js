import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import hr from './locales/hr.json';
import en from './locales/en.json';
import de from './locales/de.json';
import it from './locales/it.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      hr: { translation: hr },
      en: { translation: en },
      de: { translation: de },
      it: { translation: it },
    },
    lng: 'en',            // default jezik pri prvom učitavanju
    fallbackLng: 'en',    // ako neki ključ fali u odabranom jeziku
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;