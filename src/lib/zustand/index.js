import { create } from "zustand";

export const useAppStore = create((set) => {
  return {
    filter: "",
    themes: ["default", "blue", "rose"],
    setFilter(value) {
      return set(() => {
        return { filter: value };
      });
    },
  };
});
