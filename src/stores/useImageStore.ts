import { create } from "zustand";

interface ImageState {
  image: string;
  setImage: (value: string) => void;
}

const useImageStore = create<ImageState>((set) => ({
  image: "",
  setImage: (value) => set({ image: value }),
}));

export default useImageStore;
