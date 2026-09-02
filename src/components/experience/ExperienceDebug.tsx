"use client";

import { useExperienceStore } from "@/store/experience";

export function ExperienceDebug() {
  const scrollProgress = useExperienceStore((state) => state.scrollProgress);

  const activeSection = useExperienceStore((state) => state.activeSection);
  const wineProgress = useExperienceStore((state) => state.wineProgress);
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <div className="experience-debug">
      <div>section: {activeSection}</div>

      <div>progress: {scrollProgress.toFixed(3)}</div>
      <div>wine: {wineProgress.toFixed(3)}</div>
    </div>
  );
}
