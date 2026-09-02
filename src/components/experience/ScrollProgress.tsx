"use client";

import {
  useEffect,
} from "react";

import * as THREE from "three";

import {
  getActiveExperienceSection,
} from "@/lib/experienceTimeline";

import {
  useExperienceStore,
} from "@/store/experience";

const WINE_START = 0.015;

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
        document.documentElement
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

      /**
       * Browser'ın gerçek global
       * scroll progress'i.
       */
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

      /**
       * Wine timeline global scroll'dan
       * bağımsız bir mapping'e sahip.
       *
       * İlk %1.5 scroll boyunca origin'de
       * bekliyor.
       */
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