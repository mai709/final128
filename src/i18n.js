// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "wtow": "Welcome to our website"
    }
  },
  fr: {
    translation: {
      "greeting": "Bonjour, bienvenue!",
      "message": "Cliquez sur le bouton pour changer de langue."
    }
  },
  arabic: {
    translation: {
      "Home": "الرئيسية",
      "wtow": "مرحبا بك في موقعنا"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
