"use client";

import * as THREE from "three";

import { EXPERIENCE_SECTIONS } from "@/config/experience";

import {
  PROBLEM_BEATS,
  type ProblemBeat,
} from "@/config/problemBeats";

import { getExperienceAnchorPosition } from "@/lib/experienceAnchors";
import { getSectionProgress } from "@/lib/progress";

import { useExperienceStore } from "@/store/experience";

const PROBLEM_POSITION =
  getExperienceAnchorPosition(
    "problem",
  );

export function ProblemStage() {
  const scrollProgress =
    useExperienceStore(
      (state) =>
        state.scrollProgress,
    );

  const problemProgress =
    getSectionProgress(
      scrollProgress,

      EXPERIENCE_SECTIONS.problem.start,
      EXPERIENCE_SECTIONS.problem.end,
    );

  /**
   * Answer başladığında problem stain'lerini
   * kontrollü biçimde söndürüyoruz.
   */
  const answerProgress =
    getSectionProgress(
      scrollProgress,

      EXPERIENCE_SECTIONS.answer.start,
      EXPERIENCE_SECTIONS.answer.end,
    );

  return (
    <group
      position={[
        PROBLEM_POSITION.x,
        0.07,
        PROBLEM_POSITION.z,
      ]}
    >
      {PROBLEM_BEATS.map(
        (beat) => (
          <ProblemStain
            key={beat.id}
            beat={beat}
            problemProgress={
              problemProgress
            }
            answerProgress={
              answerProgress
            }
          />
        ),
      )}
    </group>
  );
}

type ProblemStainProps = {
  beat: ProblemBeat;
  problemProgress: number;
  answerProgress: number;
};

function ProblemStain({
  beat,
  problemProgress,
  answerProgress,
}: ProblemStainProps) {
  /**
   * Stain bir kez oluşunca problem boyunca
   * kalıyor.
   */
  const reveal =
    THREE.MathUtils.smoothstep(
      problemProgress,

      beat.stainRevealAt,

      Math.min(
        beat.stainRevealAt +
          0.18,

        1,
      ),
    );

  /**
   * Answer geldiğinde eski kaotik stain'ler
   * çözülüyor.
   */
  const mergeOut =
    THREE.MathUtils.smoothstep(
      answerProgress,
      0,
      0.42,
    );

  const intensity =
    reveal *
    (1 - mergeOut);

  const scale =
    THREE.MathUtils.lerp(
      0.08,
      beat.scale,
      intensity,
    );

  const opacity =
    THREE.MathUtils.lerp(
      0,
      0.3,
      intensity,
    );

  return (
    <mesh
      position={[
        beat.offset[0],
        0,
        beat.offset[1],
      ]}
      rotation={[
        -Math.PI / 2,
        0,
        beat.rotation,
      ]}
      scale={[
        scale,
        scale * 0.72,
        scale,
      ]}
    >
      <circleGeometry
        args={[
          0.72,
          64,
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