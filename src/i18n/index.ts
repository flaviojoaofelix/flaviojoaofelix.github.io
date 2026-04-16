import i18n from "i18next";
import BrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";
import ptBR from "./locales/pt-BR.json";

const resources = {
  en: { translation: en },
  "pt-BR": { translation: ptBR },
  es: { translation: es },
};

i18n
  .use(BrowserLanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },
  });

export { useTranslation } from "react-i18next";
export { i18n };
