"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { EXPERIENCE_ANCHORS } from "@/config/experienceAnchors";
import { getExperienceAnchorPosition } from "@/lib/experienceAnchors";
import { useExperienceStore } from "@/store/experience";

const CONTACT_POSITION =
  getExperienceAnchorPosition(
    "contact",
  );

export function ContactStage() {
  const meshRef =
    useRef<THREE.Mesh>(
      null,
    );

  const materialRef =
    useRef<THREE.MeshBasicMaterial>(
      null,
    );

  const wineProgress =
    useExperienceStore(
      (state) =>
        state.wineProgress,
    );

  useFrame(() => {
    const mesh =
      meshRef.current;

    const material =
      materialRef.current;

    if (!mesh || !material) {
      return;
    }

    const progress =
      THREE.MathUtils.clamp(
        (
          wineProgress -
          0.9
        ) /
          0.1,
        0,
        1,
      );

    const eased =
      THREE.MathUtils.smoothstep(
        progress,
        0,
        1,
      );

    const scale =
      THREE.MathUtils.lerp(
        0.1,
        2.4,
        eased,
      );

    mesh.scale.setScalar(
      scale,
    );

    material.opacity =
      THREE.MathUtils.lerp(
        0,
        0.18,
        eased,
      );
  });

  return (
    <mesh
      ref={meshRef}
      position={[
        CONTACT_POSITION.x,
        0.065,
        CONTACT_POSITION.z,
      ]}
      rotation={[
        -Math.PI / 2,
        0,
        0,
      ]}
    >
      <circleGeometry
        args={[
          1,
          64,
        ]}
      />

      <meshBasicMaterial
        ref={materialRef}
        color="#651526"
        transparent
        opacity={0}
        depthWrite={false}
      />
    </mesh>
  );
}