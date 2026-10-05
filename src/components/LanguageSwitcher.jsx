import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "../i18n";

const LanguageSwitcher = ({ className = "" }) => {
  const { t, i18n } = useTranslation();
  // resolvedLanguage is always one of SUPPORTED_LANGUAGES (unlike i18n.language, which can be "en-US")
  const currentLang = i18n.resolvedLanguage;

  return (
    <div
      role="group"
      aria-label={t("language.label")}
      className={`lang-switcher ${className}`}
    >
      {SUPPORTED_LANGUAGES.map((lng) => (
        <button
          key={lng}
          type="button"
          onClick={() => i18n.changeLanguage(lng)}
          aria-pressed={currentLang === lng}
          className={`lang-switcher_btn ${
            currentLang === lng ? "lang-switcher_btn--active" : ""
          }`}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
