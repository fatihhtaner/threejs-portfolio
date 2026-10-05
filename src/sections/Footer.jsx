import { useTranslation } from "react-i18next";
import { personalInfo } from "../constants";
import { trackEvent } from "../lib/analytics";

const socialLinks = [
  { key: "github", href: personalInfo.github, icon: "/assets/github.svg" },
  { key: "linkedin", href: personalInfo.linkedin, icon: "/assets/linkedin.webp" },
  { key: "gitlab", href: personalInfo.gitlab, icon: "/assets/gitlab.svg" },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>{t("footer.terms")}</p>
        <p>|</p>
        <p>{t("footer.privacy")}</p>
      </div>

      <div className="flex gap-3">
        {socialLinks.map(({ key, href, icon }) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("social_click", { network: key })}
            aria-label={t(`footer.social.${key}`)}
            className="social-icon hover:bg-black-500 transition-colors"
          >
            <img src={icon} alt="" className="w-1/2 h-1/2" />
          </a>
        ))}
      </div>

      <p className="text-white-500">
        © {new Date().getFullYear()} {personalInfo.name}. {t("footer.rights")}
      </p>
    </footer>
  );
};

export default Footer;
