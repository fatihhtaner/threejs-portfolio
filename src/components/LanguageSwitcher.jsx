import { useTranslation } from "react-i18next";

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
      className="text-sm font-medium text-neutral-400 hover:text-white transition-colors ml-4"
    >
      {currentLang === "en" ? "TR 🇹🇷" : "EN 🇬🇧"}
    </button>
  );
};

export default LanguageSwitcher;
