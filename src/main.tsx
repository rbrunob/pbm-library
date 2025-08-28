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
      clientID="U{uD-;WBAT8dTMYTl73X0nCieq8c$c9wmXk"
      eanProduct="7896261000115"
    />
  </StrictMode>
);
