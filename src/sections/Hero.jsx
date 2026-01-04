import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../contants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";
import CanvasErrorBoundary from "../components/CanvasErrorBoundary";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const { t } = useTranslation("hero");
  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          {t("Hero.greeting")} <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">{t("Hero.tagline")}</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <CanvasErrorBoundary>
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  position={sizes.deskPosition}
                  rotation={[0, -Math.PI, 0]}
                  scale={sizes.deskScale}
                />
              </HeroCamera>
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube position={sizes.cubePosition} />
              </group>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </CanvasErrorBoundary>
      </div>

      <div className="absolute bottom-1 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name={t("Hero.cta")}
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
