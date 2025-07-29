import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import PBM from "./PBM";
import { MOCK_PRICE } from "./mocks/price";
import { MOCK_LOGO } from "./mocks/logo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PBM
      originalProductPrice={MOCK_PRICE as number}
      industryLogo={MOCK_LOGO}
      clientID={import.meta.env.VITE_CLIENT_ID}
    />
  </StrictMode>
);
