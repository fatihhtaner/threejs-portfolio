import { useRef, useState, useEffect } from "react";
import { GLTFLoader } from "three-stdlib";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MODEL_URL = "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf";

const Target = (props) => {
  const targetRef = useRef();
  const [scene, setScene] = useState(null);
  const [error, setError] = useState(false);

  // Manually load the model with error handling
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      MODEL_URL,
      (gltf) => {
        setScene(gltf.scene);
      },
      undefined,
      (err) => {
        console.warn("Target model failed to load:", err);
        setError(true);
      }
    );
  }, []);

  useGSAP(() => {
    if (targetRef.current && scene && !error) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  }, [scene, error]);

  // Return null if there's an error or scene hasn't loaded yet
  if (error || !scene) {
    return null;
  }

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
