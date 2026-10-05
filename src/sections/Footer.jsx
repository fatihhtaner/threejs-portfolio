import { useTranslation } from "react-i18next";
import { personalInfo } from "../constants";

const socialLinks = [
  { name: "GitHub", href: personalInfo.github, icon: "/assets/github.svg" },
  { name: "LinkedIn", href: personalInfo.linkedin, icon: "/assets/linkedin.svg" },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <p className="text-white-500">
        © {new Date().getFullYear()} {personalInfo.name}. {t("footer.rights")}
      </p>

      <div className="flex gap-3">
        {socialLinks.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="social-icon hover:bg-black-500 transition-colors"
          >
            <img src={icon} alt="" className="w-1/2 h-1/2" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
