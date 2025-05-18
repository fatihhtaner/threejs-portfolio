import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation("about");
  const [hasCopied, setHasCopied] = useState(false);
  const globeEl = useRef();

  const handleCopy = () => {
    navigator.clipboard.writeText(t("email"));
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  useEffect(() => {
    let animationId;
    const animate = () => {
      if (globeEl.current && globeEl.current.controls()) {
        const controls = globeEl.current.controls();
        controls.autoRotate = true;
        controls.update();
      }
      animationId = requestAnimationFrame(animate);
    };

    const timer = setTimeout(() => {
      animate();
    }, 100);

    return () => {
      clearTimeout(timer);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="flex justify-end mb-4 space-x-2">
        <button
          onClick={() => changeLanguage("tr")}
          className={`px-3 py-1 rounded ${
            i18n.language === "tr" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          TR
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className={`px-3 py-1 rounded ${
            i18n.language === "en" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          EN
        </button>
      </div>

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
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
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
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                ref={globeEl}
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.jpg"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: t("globeLabel"),
                    color: "white",
                    size: 100,
                  },
                ]}
                controllerType="orbit"
                enablePointerInteraction={true}
                onGlobeReady={() => {
                  if (globeEl.current && globeEl.current.controls()) {
                    const controls = globeEl.current.controls();
                    controls.autoRotate = true;
                    controls.autoRotateSpeed = 0.5;
                    controls.dampingFactor = 0.1;
                    controls.enableDamping = true;
                  }
                }}
              />
            </div>
            <div>
              <p className="grid-headtext">{t("remoteWorkTitle")}</p>
              <p className="grid-subtext">{t("remoteWorkDesc")}</p>
              <Button
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
              className="w-full sm:h-[266px] h-fit object-container"
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
                  {t("email")}
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
