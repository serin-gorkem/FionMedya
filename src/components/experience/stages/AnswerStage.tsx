"use client";

import * as THREE from "three";

import { EXPERIENCE_SECTIONS } from "@/config/experience";

import { getExperienceAnchorPosition } from "@/lib/experienceAnchors";
import { getSectionProgress } from "@/lib/progress";

import { useExperienceStore } from "@/store/experience";

const ANSWER_POSITION =
  getExperienceAnchorPosition(
    "answer",
  );

export function AnswerStage() {
  const scrollProgress =
    useExperienceStore(
      (state) =>
        state.scrollProgress,
    );

  const progress =
    getSectionProgress(
      scrollProgress,

      EXPERIENCE_SECTIONS.answer.start,
      EXPERIENCE_SECTIONS.answer.end,
    );

  /**
   * Yeni düzenli form ortaya çıkıyor.
   */
  const enter =
    THREE.MathUtils.smoothstep(
      progress,
      0,
      0.42,
    );

  /**
   * Sonrasında sakin biçimde genişliyor.
   */
  const settle =
    THREE.MathUtils.smoothstep(
      progress,
      0.3,
      0.85,
    );

  const groupScale =
    THREE.MathUtils.lerp(
      0.15,
      1,
      enter,
    );

  const discScale =
    THREE.MathUtils.lerp(
      0.4,
      1.25,
      enter,
    );

  const ringScale =
    THREE.MathUtils.lerp(
      0.5,
      1.85,
      settle,
    );

  return (
    <group
      position={[
        ANSWER_POSITION.x,
        0.072,
        ANSWER_POSITION.z,
      ]}
      scale={groupScale}
    >
      {/* Merkez: tek fikir */}
      <mesh
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
        scale={[
          discScale,
          discScale,
          discScale,
        ]}
      >
        <circleGeometry
          args={[
            0.34,
            64,
          ]}
        />

        <meshBasicMaterial
          color="#651526"
          transparent
          opacity={
            enter * 0.34
          }
          depthWrite={false}
        />
      </mesh>

      {/* Düzen / kontrol hissi */}
      <mesh
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
        scale={[
          ringScale,
          ringScale,
          ringScale,
        ]}
      >
        <ringGeometry
          args={[
            0.34,
            0.385,
            96,
          ]}
        />

        <meshBasicMaterial
          color="#651526"
          transparent
          opacity={
            enter * 0.5
          }
          depthWrite={false}
          side={
            THREE.DoubleSide
          }
        />
      </mesh>
    </group>
  );
}