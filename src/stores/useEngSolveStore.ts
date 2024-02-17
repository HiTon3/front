import { create } from "zustand";

interface EngSolveState {
  engSolve: string;
  setEngSolve: (value: string) => void;
}

const useEngSolveStore = create<EngSolveState>((set) => ({
  engSolve: "",
  setEngSolve: (value) => set({ engSolve: value }),
}));

export default useEngSolveStore;
