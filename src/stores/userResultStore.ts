import { create } from "zustand";

interface ResultState {
  result: any;
  setResult: (value: any) => void;
}

const useResultState = create<ResultState>((set) => ({
  result: "",
  setResult: (value) => set({ result: value }),
}));

export default useResultState;
