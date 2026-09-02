"use client";

import { useMemo } from "react";
import * as THREE from "three";

import { EXPERIENCE_SECTIONS } from "@/config/experience";

import { getExperienceAnchorPosition } from "@/lib/experienceAnchors";
import { getSectionProgress } from "@/lib/progress";

import { useExperienceStore } from "@/store/experience";

type ProjectAnchor =
  | "workOne"
  | "workTwo";

type ProjectStageProps = {
  anchor: ProjectAnchor;
  width?: number;
  height?: number;
};

const PROJECT_RANGES = {
  workOne: {
    start: 0.16,
    peak: 0.38,
    end: 0.58,
  },

  workTwo: {
    start: 0.5,
    peak: 0.72,
    end: 1,
  },
} as const;

export function ProjectStage({
  anchor,
  width = 3.4,
  height = 2.1,
}: ProjectStageProps) {
  const scrollProgress =
    useExperienceStore(
      (state) =>
        state.scrollProgress,
    );

  /**
   * Global scroll'u Works section'ın
   * 0 → 1 local progress'ine çeviriyoruz.
   */
  const worksProgress =
    getSectionProgress(
      scrollProgress,

      EXPERIENCE_SECTIONS.works.start,
      EXPERIENCE_SECTIONS.works.end,
    );

  /**
   * Route üzerindeki fiziksel pozisyon.
   */
  const [
    positionX,
    positionZ,
  ] = useMemo(() => {
    const position =
      getExperienceAnchorPosition(
        anchor,
      );

    return [
      position.x,
      position.z,
    ] as const;
  }, [anchor]);

  /**
   * Bu projenin Works timeline'ındaki
   * görünme aralığı.
   */
  const range =
    PROJECT_RANGES[anchor];

  const visibility =
    getStageVisibility(
      worksProgress,
      range.start,
      range.peak,
      range.end,
    );

  const scale =
    THREE.MathUtils.lerp(
      0.2,
      1.25,
      visibility,
    );

  const opacity =
    THREE.MathUtils.lerp(
      0,
      0.12,
      visibility,
    );

  return (
    <mesh
      position={[
        positionX,
        0.07,
        positionZ,
      ]}
      rotation={[
        -Math.PI / 2,
        0,
        0,
      ]}
      scale={[
        scale,
        scale,
        1,
      ]}
    >
      <planeGeometry
        args={[
          width,
          height,
        ]}
      />

      <meshBasicMaterial
        color="#651526"
        transparent
        opacity={opacity}
        depthWrite={false}
        side={
          THREE.DoubleSide
        }
      />
    </mesh>
  );
}

function getStageVisibility(
  progress: number,
  start: number,
  peak: number,
  end: number,
) {
  if (
    progress <= start ||
    progress >= end
  ) {
    return 0;
  }

  /**
   * Fade in
   */
  if (progress <= peak) {
    return THREE.MathUtils.clamp(
      (progress - start) /
        (peak - start),

      0,
      1,
    );
  }

  /**
   * Fade out
   */
  return THREE.MathUtils.clamp(
    1 -
      (progress - peak) /
        (end - peak),

    0,
    1,
  );
}