import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n";
import { initAnalytics } from "./lib/analytics";
import App from "./App.jsx";

initAnalytics();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Translations are loaded over HTTP; wait for them before rendering */}
    <Suspense fallback={<div className="page-loader" />}>
      <App />
    </Suspense>
  </StrictMode>
);
