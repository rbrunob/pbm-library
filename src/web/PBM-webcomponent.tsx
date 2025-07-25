import ReactDOM from "react-dom/client";
import PBM from "../PBM";

class PBMComponent extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private props = {
    originalProductPrice: 0,
    industryLogo: "",
  };

  static get observedAttributes() {
    return ["originalproductprice", "industrylogo"];
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
