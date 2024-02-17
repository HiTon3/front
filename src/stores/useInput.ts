import { create } from "zustand";

interface InputState {
  input: string;
  setInput: (value: string) => void;
}

const useInputStore = create<InputState>((set) => ({
  input: "",
  setInput: (value) => set({ input: value }),
}));

export default useInputStore;
