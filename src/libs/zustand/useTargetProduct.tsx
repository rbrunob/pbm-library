import { create, StateCreator } from "zustand";
import { IProduct } from "../../types/globals";

interface targetProductDataType {
  targetProductInternal: IProduct | null;
}

export interface useTargetProduct extends targetProductDataType {
  setTargetProductInternal: (
    targetProductInternal: useTargetProduct["targetProductInternal"]
  ) => void;
}

const initialTargetProductState: targetProductDataType = {
  targetProductInternal: null,
};

// ✅ TIPANDO a função corretamente com StateCreator
const createPBMStore: StateCreator<useTargetProduct> = (set) => ({
  ...initialTargetProductState,

  setTargetProductInternal: (
    targetProductInternal: useTargetProduct["targetProductInternal"]
  ) => set({ targetProductInternal }),
});

// React hook (usado dentro de componentes React)
export const useTargetProducts = create<useTargetProduct>(createPBMStore);
