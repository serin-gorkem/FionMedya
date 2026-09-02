"use client";

import * as THREE from "three";

import {
  EXPERIENCE_SECTIONS,
} from "@/config/experience";

import {
  TRUST_REFERENCES,
  type TrustReference,
} from "@/config/trust";

import {
  getExperienceAnchorPosition,
} from "@/lib/experienceAnchors";

import {
  getSectionProgress,
} from "@/lib/progress";

import {
  useExperienceStore,
} from "@/store/experience";

const TRUST_POSITION =
  getExperienceAnchorPosition(
    "trust",
  );

export function TrustStage() {
  const scrollProgress =
    useExperienceStore(
      (state) =>
        state.scrollProgress,
    );

  const progress =
    getSectionProgress(
      scrollProgress,

      EXPERIENCE_SECTIONS.trust.start,
      EXPERIENCE_SECTIONS.trust.end,
    );

  return (
    <group
      position={[
        TRUST_POSITION.x,
        0.08,
        TRUST_POSITION.z,
      ]}
    >
      {TRUST_REFERENCES.map(
        (reference) => (
          <TrustNode
            key={
              reference.id
            }
            reference={
              reference
            }
            progress={
              progress
            }
          />
        ),
      )}
    </group>
  );
}

type TrustNodeProps = {
  reference:
    TrustReference;

  progress: number;
};

function TrustNode({
  reference,
  progress,
}: TrustNodeProps) {
  const reveal =
    THREE.MathUtils.clamp(
      (
        progress -
        reference.revealAt
      ) /
        0.18,
      0,
      1,
    );

  const eased =
    THREE.MathUtils.smoothstep(
      reveal,
      0,
      1,
    );

  const scale =
    THREE.MathUtils.lerp(
      0.01,
      1,
      eased,
    );

  const opacity =
    THREE.MathUtils.lerp(
      0,
      0.38,
      eased,
    );

  return (
    <group
      position={[
        reference.offset[0],
        0,
        reference.offset[1],
      ]}
      scale={scale}
    >
      <mesh>
        <sphereGeometry
          args={[
            0.115,
            24,
            24,
          ]}
        />

        <meshBasicMaterial
          color="#651526"
          transparent
          opacity={opacity}
          depthWrite={false}
        />
      </mesh>

      <mesh
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
        position={[
          0,
          -0.015,
          0,
        ]}
        scale={[
          1.9,
          1.9,
          1.9,
        ]}
      >
        <ringGeometry
          args={[
            0.1,
            0.118,
            48,
          ]}
        />

        <meshBasicMaterial
          color="#651526"
          transparent
          opacity={
            opacity *
            0.5
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