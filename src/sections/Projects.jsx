import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { useTranslation } from "react-i18next";
import CanvasLoader from "../components/CanvasLoader";
import DemoComputer from "../components/DemoComputer";
import { myProjects } from "../constants";
import useInView from "../hooks/useInView";
import { trackEvent } from "../lib/analytics";
import CanvasErrorBoundary from "../components/CanvasErrorBoundary";

const Projects = () => {
  const { t } = useTranslation("projects");
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const { ref: canvasRef, inView, hasBeenInView } = useInView();

  const currentProject = myProjects[selectedProjectIndex];
  const projectCount = myProjects.length;
  const projectText = (field) => t(`items.${currentProject.key}.${field}`);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prev) =>
      direction === "previous"
        ? prev === 0
          ? projectCount - 1
          : prev - 1
        : prev === projectCount - 1
        ? 0
        : prev + 1
    );
  };

  return (
    <section className="c-space my-20" id="projects">
      <h2 className="head-text">{t("title")}</h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt=""
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt=""
              className="w-10 h-10 shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">
              {projectText("title")}
            </p>
            <p className="animatedText">{projectText("desc")}</p>
            <p className="animatedText">{projectText("subdesc")}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3 flex-wrap">
              {currentProject.tags.map((tag) => (
                <div key={tag.id} className="tech-logo" title={tag.name}>
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent("project_visit", { project: currentProject.key })
              }
            >
              <p>{t("checkSite")}</p>
              <img src="/assets/arrow-up.png" className="w-3 h-3" alt="" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
              aria-label={t("previous")}
            >
              <img src="/assets/left-arrow.png" alt="" className="w-4 h-4" />
            </button>
            <p className="text-white-500 text-sm tabular-nums">
              {selectedProjectIndex + 1} / {projectCount}
            </p>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
              aria-label={t("next")}
            >
              <img src="/assets/right-arrow.png" alt="" className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={canvasRef}
          className="border border-black-200 bg-black-400 rounded-lg h-96 md:h-full"
        >
          {hasBeenInView && (
            <CanvasErrorBoundary>
              <Canvas dpr={[1, 1.5]} frameloop={inView ? "always" : "never"}>
                <ambientLight intensity={Math.PI / 2} />
                <directionalLight position={[10, 10, 5]} />
                <Center>
                  <Suspense fallback={<CanvasLoader />}>
                    <group
                      scale={2}
                      position={[0, -3, 0]}
                      rotation={[0, -0.1, 0]}
                    >
                      <DemoComputer
                        texture={currentProject.texture}
                        paused={!inView}
                      />
                    </group>
                  </Suspense>
                </Center>
                <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
              </Canvas>
            </CanvasErrorBoundary>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
