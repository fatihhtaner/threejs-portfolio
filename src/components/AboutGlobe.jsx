import Globe from "react-globe.gl";
import { useEffect, useRef } from "react";
import { personalInfo } from "../constants";

const AboutGlobe = ({ label, paused = false }) => {
  const globeEl = useRef();

  // Configure the globe on mount instead of in onGlobeReady: that callback
  // only fires once every texture has loaded, so a single failed image
  // would otherwise leave the globe static.
  useEffect(() => {
    const globe = globeEl.current;
    if (!globe) return;

    globe.pointOfView({ ...personalInfo.location, altitude: 2 }, 0);

    const controls = globe.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
  }, []);

  // Stop the render loop while the globe is off-screen
  useEffect(() => {
    const globe = globeEl.current;
    if (!globe) return;
    if (paused) globe.pauseAnimation();
    else globe.resumeAnimation();
  }, [paused]);

  return (
    <Globe
      ref={globeEl}
      height={326}
      width={326}
      backgroundColor="rgba(0,0,0,0)"
      backgroundImageOpacity={0.5}
      showAtmosphere
      showGraticules
      globeImageUrl="https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
      bumpImageUrl="https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png"
      labelsData={[
        {
          ...personalInfo.location,
          text: label,
          color: "white",
          size: 100,
        },
      ]}
      controllerType="orbit"
      enablePointerInteraction={true}
    />
  );
};

export default AboutGlobe;
