import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  // HTTP üzerinden çeviri dosyalarını yükle
  .use(Backend)
  // Tarayıcı dilini algıla
  .use(LanguageDetector)
  // React entegrasyonu
  .use(initReactI18next)
  // i18n başlangıç ayarları
  .init({
    fallbackLng: "tr",
    debug: true,
    ns: ["about", "common", "constants"], // Kullanılacak namespace'ler
    defaultNS: "constants", // Varsayılan namespace
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
    backend: {
      // Backend yapılandırması - çeviri dosyalarının yolu
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false, // React zaten XSS'e karşı güvenli
    },
    react: {
      useSuspense: true, // Suspense ile kullanım
    },
  });

export default i18n;
