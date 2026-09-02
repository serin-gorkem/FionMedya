import { create } from "zustand";

import type {
  ExperienceSection,
} from "@/config/experience";

import type {
  ExperienceMode,
} from "@/config/experiencePolicy";

type ExperienceState = {
  scrollProgress: number;
  wineProgress: number;

  activeSection:
    ExperienceSection;

  experienceMode:
    ExperienceMode;

  reducedMotion: boolean;

  setScrollProgress: (
    progress: number,
  ) => void;

  setWineProgress: (
    progress: number,
  ) => void;

  setActiveSection: (
    section: ExperienceSection,
  ) => void;

  setExperienceMode: (
    mode: ExperienceMode,
  ) => void;

  setReducedMotion: (
    reduced: boolean,
  ) => void;
};

export const useExperienceStore =
  create<ExperienceState>(
    (set) => ({
      scrollProgress: 0,
      wineProgress: 0,

      activeSection: "hero",

      experienceMode:
        "desktop",

      reducedMotion: false,

      setScrollProgress:
        (scrollProgress) =>
          set({
            scrollProgress,
          }),

      setWineProgress:
        (wineProgress) =>
          set({
            wineProgress,
          }),

      setActiveSection:
        (activeSection) =>
          set({
            activeSection,
          }),

      setExperienceMode:
        (experienceMode) =>
          set({
            experienceMode,
          }),

      setReducedMotion:
        (reducedMotion) =>
          set({
            reducedMotion,
          }),
    }),
  );