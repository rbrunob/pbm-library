import ReactDOM from "react-dom/client";
import PBM from "../PBM";
import type { StoreApi } from "zustand";
import type { PBMStore } from "../libs/zustand/usePBM";
import { pbmStore } from "../libs/zustand/usePBM";

declare global {
  interface Window {
    pbm?: {
      pbmStore: StoreApi<PBMStore>;
    };
  }
}

window.pbm = {
  ...window.pbm,
  pbmStore,
};

class PBMComponent extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private props = {
    originalProductPrice: 0,
    industryLogo: "",
    clientID: "",
  };

  static get observedAttributes() {
    return ["originalproductprice", "industrylogo", "clientid"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.mount();
  }

  attributeChangedCallback(name: string, _oldVal: string, newVal: string) {
    if (name === "originalproductprice") {
      this.props.originalProductPrice = parseFloat(newVal);
    }
    if (name === "industrylogo") {
      this.props.industryLogo = newVal;
    }
    if (name === "clientid") {
      this.props.clientID = newVal;
    }

    this.mount();
  }

  mount() {
    if (!this.isConnected) return;

    if (!this.root) {
      this.innerHTML = ""; // limpa conteúdo anterior
      this.root = ReactDOM.createRoot(this);
    }

    this.root.render(<PBM {...this.props} />);
  }
}

customElements.define("pbm-component", PBMComponent);
