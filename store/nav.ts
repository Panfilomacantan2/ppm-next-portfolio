import { create } from "zustand";

type navState = {
  active: string;
  setActive: (route: string) => void;
};

export const useNavStore = create<navState>((set) => ({
  active: "#home",
  setActive: (route) => set(() => ({ active: route })),
}));
