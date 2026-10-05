import { Html, useProgress } from "@react-three/drei";
import { useTranslation } from "react-i18next";

const CanvasLoader = () => {
  const { progress } = useProgress();
  // Never suspend here: this component is itself a Suspense fallback
  const { t } = useTranslation("common", { useSuspense: false });

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader">
        <p
          style={{
            fontSize: 14,
            color: "#F1F1F1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress !== 0 ? `${progress.toFixed(0)}%` : t("loader.loading")}
        </p>
      </span>
    </Html>
  );
};

export default CanvasLoader;
