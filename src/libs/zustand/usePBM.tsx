import { usePBMTypes } from "@/types/globals";
import { create } from "zustand";

interface PBMStore extends usePBMTypes {
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
};

export const usePBMStore = create<PBMStore>((set) => ({
  ...initialPBMState,

  setSecurityNumber: (securityNumber) =>
    set({ securityNumber: securityNumber }),

  setState: (state) => set({ state }),

  setAvailableDiscountSelected: (availableDiscount) =>
    set({ availableDiscountSelected: availableDiscount }),
}));
