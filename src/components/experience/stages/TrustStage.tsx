"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { EXPERIENCE_ANCHORS } from "@/config/experienceAnchors";
import { getExperienceAnchorPosition } from "@/lib/experienceAnchors";
import { useExperienceStore } from "@/store/experience";

const TRUST_POSITION =
  getExperienceAnchorPosition(
    "trust",
  );

export function TrustStage() {
  const groupRef =
    useRef<THREE.Group>(
      null,
    );

  const wineProgress =
    useExperienceStore(
      (state) =>
        state.wineProgress,
    );

  useFrame(() => {
    const group =
      groupRef.current;

    if (!group) {
      return;
    }

    const distance =
      Math.abs(
        wineProgress -
          EXPERIENCE_ANCHORS.trust,
      );

    const influence =
      THREE.MathUtils.clamp(
        1 -
          distance /
            0.08,
        0,
        1,
      );

    const eased =
      THREE.MathUtils.smoothstep(
        influence,
        0,
        1,
      );

    group.scale.setScalar(
      THREE.MathUtils.lerp(
        0.1,
        1,
        eased,
      ),
    );
  });

  return (
    <group
      ref={groupRef}
      position={[
        TRUST_POSITION.x,
        0.09,
        TRUST_POSITION.z,
      ]}
    >
      <TrustNode
        x={-0.8}
        z={-0.5}
      />

      <TrustNode
        x={0.8}
        z={-0.5}
      />

      <TrustNode
        x={-0.8}
        z={0.5}
      />

      <TrustNode
        x={0.8}
        z={0.5}
      />
    </group>
  );
}

function TrustNode({
  x,
  z,
}: {
  x: number;
  z: number;
}) {
  return (
    <mesh
      position={[
        x,
        0,
        z,
      ]}
    >
      <sphereGeometry
        args={[
          0.1,
          16,
          16,
        ]}
      />

      <meshBasicMaterial
        color="#651526"
      />
    </mesh>
  );
}