import { useTranslation } from "react-i18next";
import { TR, GB } from "country-flag-icons/react/3x2";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "tr" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center text-sm font-medium text-neutral-400 hover:text-white transition-colors ml-4 group"
    >
      <div className="w-6 h-4 group-hover:scale-110 transition-transform duration-200 rounded-sm overflow-hidden">
        {currentLang === "en" ? <TR /> : <GB />}
      </div>
    </button>
  );
};

export default LanguageSwitcher;
