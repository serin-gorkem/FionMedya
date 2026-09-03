"use client";

import {
  useEffect,
} from "react";

import * as THREE from "three";

import {
  EXPERIENCE_SECTIONS,
} from "@/config/experience";

import {
  getActiveExperienceSection,
} from "@/lib/experienceTimeline";

import {
  useExperienceStore,
} from "@/store/experience";

/**
 * Glass:
 *
 * 0.14 -> tipping başlıyor
 * 0.42 -> tipping bitiyor
 *
 * Şarap tam tipping'in sonuna
 * yaklaşırken çıkıyor.
 */
const WINE_START =
  THREE.MathUtils.lerp(
    EXPERIENCE_SECTIONS.hero.start,

    EXPERIENCE_SECTIONS.hero.end,

    0.39,
  );

export function ScrollProgress() {
  const setScrollProgress =
    useExperienceStore(
      (state) =>
        state.setScrollProgress,
    );

  const setWineProgress =
    useExperienceStore(
      (state) =>
        state.setWineProgress,
    );

  const setActiveSection =
    useExperienceStore(
      (state) =>
        state.setActiveSection,
    );

  useEffect(() => {
    function update() {
      const scrollableHeight =
        document
          .documentElement
          .scrollHeight -
        window.innerHeight;

      if (
        scrollableHeight <= 0
      ) {
        setScrollProgress(0);
        setWineProgress(0);
        setActiveSection(
          "hero",
        );

        return;
      }

      const progress =
        THREE.MathUtils.clamp(
          window.scrollY /
            scrollableHeight,

          0,
          1,
        );

      setScrollProgress(
        progress,
      );

      const wineProgress =
        THREE.MathUtils.clamp(
          (
            progress -
            WINE_START
          ) /
            (
              1 -
              WINE_START
            ),

          0,
          1,
        );

      setWineProgress(
        wineProgress,
      );

      setActiveSection(
        getActiveExperienceSection(
          progress,
        ),
      );
    }

    update();

    window.addEventListener(
      "scroll",
      update,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      update,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        update,
      );

      window.removeEventListener(
        "resize",
        update,
      );
    };
  }, [
    setScrollProgress,
    setWineProgress,
    setActiveSection,
  ]);

  return null;
}