import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Split rarely-changing libraries into their own chunks so browsers
        // keep them cached across deploys of the app code
        manualChunks: {
          react: ["react", "react-dom"],
          three: ["three", "@react-three/fiber", "@react-three/drei"],
          i18n: [
            "i18next",
            "react-i18next",
            "i18next-http-backend",
            "i18next-browser-languagedetector",
          ],
        },
      },
    },
  },
});
