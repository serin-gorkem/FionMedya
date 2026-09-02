"use client";

import { useEffect } from "react";

import {
  EXPERIENCE_SECTIONS,
  type ExperienceSection,
} from "@/config/experience";

import { useExperienceStore } from "@/store/experience";

export function ScrollProgress() {
  const setScrollProgress = useExperienceStore(
    (state) => state.setScrollProgress,
  );

  const setActiveSection = useExperienceStore(
    (state) => state.setActiveSection,
  );
  const setWineProgress = useExperienceStore((state) => state.setWineProgress);
  useEffect(() => {
    const update = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        setScrollProgress(0);
        setWineProgress(0);
        setActiveSection("hero");

        return;
      }

      const progress = Math.min(
        Math.max(window.scrollY / scrollableHeight, 0),
        1,
      );

      setScrollProgress(progress);
      const wineProgress = Math.min(Math.max(progress * 1.04, 0), 1);

      setWineProgress(wineProgress);

      const entries = Object.entries(EXPERIENCE_SECTIONS) as [
        ExperienceSection,
        {
          start: number;
          end: number;
        },
      ][];

      let currentSection: ExperienceSection = "hero";

      for (const [name, range] of entries) {
        if (progress >= range.start && progress <= range.end) {
          currentSection = name;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    update();

    window.addEventListener("scroll", update, {
      passive: true,
    });

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);

      window.removeEventListener("resize", update);
    };
  }, [setScrollProgress, setWineProgress, setActiveSection]);

  return null;
}
