import { useGLTF } from "@react-three/drei";
import { useRef, Suspense } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ErrorBoundary from "./ErrorBoundary";

// Inner component that handles the model loading
// Note: The Supabase URL is currently unavailable (ERR_NAME_NOT_RESOLVED).
// The ErrorBoundary will catch any loading errors and return null.
const TargetModel = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    if (targetRef.current) {
      gsap.to(targetRef.current.position, {
        y: targetRef.current.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

// Wrapper with ErrorBoundary and Suspense to handle loading errors gracefully
const Target = (props) => {
  return (
    <ErrorBoundary fallback={null}>
      <Suspense fallback={null}>
        <TargetModel {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default Target;
