import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import PBM from "@/PBM";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PBM />
  </StrictMode>
);
