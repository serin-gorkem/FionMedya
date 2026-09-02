"use client";

import * as THREE from "three";

import { EXPERIENCE_SECTIONS } from "@/config/experience";

import { getExperienceAnchorPosition } from "@/lib/experienceAnchors";
import { getSectionProgress } from "@/lib/progress";

import { useExperienceStore } from "@/store/experience";

const CONTACT_POSITION =
  getExperienceAnchorPosition("contact");

export function ContactStage() {
  const scrollProgress =
    useExperienceStore(
      (state) => state.scrollProgress,
    );

  const progress =
    getSectionProgress(
      scrollProgress,
      EXPERIENCE_SECTIONS.contact.start,
      EXPERIENCE_SECTIONS.contact.end,
    );

  const reveal =
    THREE.MathUtils.smoothstep(
      progress,
      0.1,
      0.45,
    );

  const scale =
    THREE.MathUtils.lerp(
      0.1,
      1.4,
      reveal,
    );

  return (
    <mesh
      position={[
        CONTACT_POSITION.x,
        0.074,
        CONTACT_POSITION.z,
      ]}
      rotation={[
        -Math.PI / 2,
        0,
        0,
      ]}
      scale={[
        scale,
        scale * 0.65,
        1,
      ]}
    >
      <circleGeometry
        args={[0.28, 64]}
      />

      <meshBasicMaterial
        color="#651526"
        transparent
        opacity={reveal * 0.32}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}