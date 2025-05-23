import { useState } from "react";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { navLinks } from "../contants";

import { useTranslation } from "react-i18next";

const NavItems = ({ t }) => {
  const links = navLinks(t);

  return (
    <ul className="nav-ul flex items-center">
      {links.map(({ id, href, name, type, component: Component }) => {
        if (type === "link") {
          return (
            <li key={id} className="nav-li">
              <a href={href} className="nav-li_a">
                {name}
              </a>
            </li>
          );
        }
        if (type === "component" && Component) {
          return (
            <li key={id} className="nav-li">
              <Component />
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            İbrahim Fatih Taner
          </a>

          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
              aria-label="Toggle menu"
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                alt="toggle"
                className="w-6 h-6"
              />
            </button>

            <div className="hidden sm:flex"></div>
          </div>

          <nav className="sm:flex hidden">
            <NavItems t={t} />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems t={t} />
          <div className="mt-4">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
