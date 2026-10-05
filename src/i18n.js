import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

export const SUPPORTED_LANGUAGES = ["tr", "en"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGUAGES,
    nonExplicitSupportedLngs: true, // en-US -> en, tr-TR -> tr
    load: "languageOnly",
    debug: import.meta.env.DEV,
    ns: [
      "common",
      "hero",
      "about",
      "projects",
      "clients",
      "experience",
      "contact",
    ],
    defaultNS: "common",
    detection: {
      order: ["querystring", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      lookupQuerystring: "lng",
      lookupLocalStorage: "i18nextLng",
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

// Keep <html lang> in sync for screen readers, hyphenation and SEO
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = i18n.resolvedLanguage || lng;
});

export default i18n;
