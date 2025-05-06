import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./main.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import { OverlayProvider } from "@toss/use-overlay";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OverlayProvider>
      <RouterProvider router={router} />
    </OverlayProvider>
  </StrictMode>
);
