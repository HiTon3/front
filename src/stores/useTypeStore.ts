import { create } from "zustand";

interface TypeState {
  type: string;
  setType: (value: string) => void;
}

const useTypeStore = create<TypeState>((set) => ({
  type: "",
  setType: (value) => set({ type: value }),
}));

export default useTypeStore;
