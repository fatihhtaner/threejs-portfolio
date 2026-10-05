import { lazy, Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import { personalInfo } from "../constants";
import useInView from "../hooks/useInView";

// The globe pulls in a large library, so it is split out and only loaded
// when the About section approaches the viewport
const AboutGlobe = lazy(() => import("../components/AboutGlobe"));

const About = () => {
  const { t } = useTranslation("about");
  const [hasCopied, setHasCopied] = useState(false);
  const { ref: globeRef, inView, hasBeenInView } = useInView();

  const handleCopy = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">{t("greeting")}</p>
              <p className="grid-subtext">{t("experience")}</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container items-center">
            <img
              src="/assets/tech-stack.png"
              alt="grid-2"
              className="w-full sm:w-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">{t("techStack")}</p>
              <p className="grid-subtext">{t("techStackDesc")}</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div
              ref={globeRef}
              className="rounded-3xl w-full h-[326px] flex justify-center items-center"
            >
              {hasBeenInView && (
                <Suspense fallback={null}>
                  <AboutGlobe label={t("globeLabel")} paused={!inView} />
                </Suspense>
              )}
            </div>
            <div>
              <p className="grid-headtext">{t("remoteWorkTitle")}</p>
              <p className="grid-subtext">{t("remoteWorkDesc")}</p>
              <Button
                href="#contact"
                name={t("contactBtn")}
                isBeam
                containerClass="w-full mt-10"
              />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">{t("passionTitle")}</p>
              <p className="grid-subtext">{t("passionDesc")}</p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">{t("contactMe")}</p>
              <div className="copy-container" onClick={handleCopy}>
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  {personalInfo.email}
                </p>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                {hasCopied && (
                  <span className="absolute bottom-0 left-0 right-0 text-green-500 text-sm">
                    {t("copySuccess")}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
