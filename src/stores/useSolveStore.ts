import { create } from "zustand";

interface SolveState {
  solve: string;
  setSolve: (value: string) => void;
}

const useSolveStore = create<SolveState>((set) => ({
  solve: "",
  setSolve: (value) => set({ solve: value }),
}));

export default useSolveStore;
