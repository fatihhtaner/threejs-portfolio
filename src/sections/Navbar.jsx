import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { navLinks, personalInfo } from "../constants";

const NavItems = ({ onClick }) => {
  const { t } = useTranslation();

  return (
    <ul className="nav-ul">
      {navLinks.map(({ key, href }) => (
        <li key={key} className="nav-li">
          <a href={href} className="nav-li_a" onClick={onClick}>
            {t(`nav.${key}`)}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="#home"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            {personalInfo.name}
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label={t("nav.toggleMenu")}
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt=""
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden items-center gap-6">
            <NavItems />
            <LanguageSwitcher />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5 flex flex-col gap-4">
          <NavItems onClick={closeMenu} />
          <LanguageSwitcher className="self-center" />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
