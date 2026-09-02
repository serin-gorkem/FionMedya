import { create } from "zustand";

import type { ExperienceSection } from "@/config/experience";

type ExperienceState = {
  scrollProgress: number;
  wineProgress: number;
  activeSection: ExperienceSection;

  setScrollProgress: (progress: number) => void;
  setWineProgress: (progress: number) => void;
  setActiveSection: (
    section: ExperienceSection,
  ) => void;
};

export const useExperienceStore =
  create<ExperienceState>((set) => ({
    scrollProgress: 0,
    wineProgress: 0,
    activeSection: "hero",

    setScrollProgress: (scrollProgress) => {
      set({ scrollProgress });
    },

    setWineProgress: (wineProgress) => {
      set({ wineProgress });
    },

    setActiveSection: (activeSection) => {
      set({ activeSection });
    },
  }));