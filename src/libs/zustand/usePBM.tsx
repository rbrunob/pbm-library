import { create, createStore, StateCreator, StoreApi } from "zustand";
import { usePBMTypes } from "../../types/globals";

export interface PBMStore extends usePBMTypes {
  setSecurityNumber: (securityNumber: string) => void;
  setState: (state: usePBMTypes["state"]) => void;
  setAvailableDiscountSelected: (
    availableDiscount: usePBMTypes["availableDiscountSelected"]
  ) => void;
}

const initialPBMState: usePBMTypes = {
  securityNumber: "",
  state: "isEmpty",
  availableDiscountSelected: {
    quantity: 0,
    discount: {
      unit: 0,
      total: 0,
    },
    totalPrice: 0,
  },
  campaign: "pbm_campaign",
};

// ✅ TIPANDO a função corretamente com StateCreator
const createPBMStore: StateCreator<PBMStore> = (set) => ({
  ...initialPBMState,

  setSecurityNumber: (securityNumber: string) => set({ securityNumber }),
  setState: (state: usePBMTypes["state"]) => set({ state }),
  setAvailableDiscountSelected: (
    availableDiscount: usePBMTypes["availableDiscountSelected"]
  ) => set({ availableDiscountSelected: availableDiscount }),
});

// React hook (usado dentro de componentes React)
export const usePBMStore = create<PBMStore>(createPBMStore);

// Store para uso em Vanilla JS
export const pbmStore: StoreApi<PBMStore> =
  createStore<PBMStore>(createPBMStore);
