"use client";

import {
  EXPERIENCE_SECTIONS,
} from "@/config/experience";

import {
  useExperienceStore,
} from "@/store/experience";

export function ExperienceDebug() {
  const scrollProgress =
    useExperienceStore(
      (state) =>
        state.scrollProgress,
    );

  const wineProgress =
    useExperienceStore(
      (state) =>
        state.wineProgress,
    );

  const activeSection =
    useExperienceStore(
      (state) =>
        state.activeSection,
    );

  const experienceMode =
    useExperienceStore(
      (state) =>
        state.experienceMode,
    );

  const reducedMotion =
    useExperienceStore(
      (state) =>
        state.reducedMotion,
    );

  /**
   * Bütün hook'lar çağrıldıktan
   * sonra production kontrolü.
   */
  if (
    process.env.NODE_ENV ===
    "production"
  ) {
    return null;
  }

  const sectionConfig =
    EXPERIENCE_SECTIONS[
      activeSection
    ];

  return (
    <aside
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 9999,

        padding: "12px 14px",

        background:
          "rgba(20, 16, 14, 0.9)",

        color: "#ffffff",

        fontFamily:
          "monospace",

        fontSize: 11,
        lineHeight: 1.6,

        pointerEvents:
          "none",
      }}
    >
      <div>
        section:{" "}
        {activeSection}
      </div>

      <div>
        progress:{" "}
        {scrollProgress.toFixed(
          3,
        )}
      </div>

      <div>
        wine:{" "}
        {wineProgress.toFixed(
          3,
        )}
      </div>

      <div>
        range:{" "}
        {sectionConfig.start.toFixed(
          3,
        )}
        {" → "}
        {sectionConfig.end.toFixed(
          3,
        )}
      </div>

      <div>
        mode:{" "}
        {experienceMode}
      </div>

      <div>
        motion:{" "}
        {reducedMotion
          ? "reduced"
          : "full"}
      </div>
    </aside>
  );
}