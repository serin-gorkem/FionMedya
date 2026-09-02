"use client";

import {
  useEffect,
} from "react";

import type {
  ExperienceMode,
} from "@/config/experiencePolicy";

import {
  useExperienceStore,
} from "@/store/experience";

export function ExperienceViewport() {
  const setExperienceMode =
    useExperienceStore(
      (state) =>
        state.setExperienceMode,
    );

  const setReducedMotion =
    useExperienceStore(
      (state) =>
        state.setReducedMotion,
    );

  useEffect(() => {
    const mobileQuery =
      window.matchMedia(
        "(max-width: 767px)",
      );

    const tabletQuery =
      window.matchMedia(
        "(max-width: 1023px)",
      );

    const reducedMotionQuery =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );

    function updateViewport() {
      let mode:
        ExperienceMode =
          "desktop";

      if (
        mobileQuery.matches
      ) {
        mode = "mobile";
      } else if (
        tabletQuery.matches
      ) {
        mode = "tablet";
      }

      setExperienceMode(
        mode,
      );

      setReducedMotion(
        reducedMotionQuery.matches,
      );
    }

    updateViewport();

    mobileQuery.addEventListener(
      "change",
      updateViewport,
    );

    tabletQuery.addEventListener(
      "change",
      updateViewport,
    );

    reducedMotionQuery.addEventListener(
      "change",
      updateViewport,
    );

    return () => {
      mobileQuery.removeEventListener(
        "change",
        updateViewport,
      );

      tabletQuery.removeEventListener(
        "change",
        updateViewport,
      );

      reducedMotionQuery.removeEventListener(
        "change",
        updateViewport,
      );
    };
  }, [
    setExperienceMode,
    setReducedMotion,
  ]);

  return null;
}