import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader";
import { workExperiences } from "../constants";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";
import Developer from "../components/Developer";
import useInView from "../hooks/useInView";

const Experience = () => {
  const { t } = useTranslation("experience");
  const [animationName, setAnimationName] = useState("idle");
  const { ref: canvasRef, inView, hasBeenInView } = useInView();

  return (
    <section className="c-space my-20" id="experience">
      <div className="w-full text-white-600">
        <h2 className="head-text">{t("title")}</h2>
        <div className="work-container">
          <div className="work-canvas" ref={canvasRef}>
            {hasBeenInView && (
              <Canvas dpr={[1, 1.5]} frameloop={inView ? "always" : "never"}>
                <ambientLight intensity={7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                <Suspense fallback={<CanvasLoader />}>
                  <Developer
                    position-y={-3}
                    scale={3}
                    animationName={animationName}
                  />
                </Suspense>
              </Canvas>
            )}
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map((item) => (
                <div
                  key={item.key}
                  onClick={() => setAnimationName(item.animation)}
                  onPointerOver={() => setAnimationName(item.animation)}
                  onPointerOut={() => setAnimationName("idle")}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img
                        className="w-full h-full"
                        src={item.icon}
                        alt={item.name}
                      />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {t(`items.${item.key}.position`)} —{" "}
                      <span>{t(`items.${item.key}.duration`)}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500">
                      {t(`items.${item.key}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
