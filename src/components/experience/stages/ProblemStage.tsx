"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { EXPERIENCE_ANCHORS } from "@/config/experienceAnchors";
import { getExperienceAnchorPosition } from "@/lib/experienceAnchors";
import { useExperienceStore } from "@/store/experience";

const PROBLEM_POSITION =
  getExperienceAnchorPosition("problem");

export function ProblemStage() {
  const meshRef = useRef<THREE.Mesh>(null);

  const materialRef =
    useRef<THREE.MeshStandardMaterial>(null);

  const wineProgress = useExperienceStore(
    (state) => state.wineProgress,
  );

  useFrame(() => {
    const mesh = meshRef.current;
    const material = materialRef.current;

    if (!mesh || !material) {
      return;
    }

    /**
     * Wine head ile Problem anchor arasındaki
     * curve-progress mesafesi.
     */
    const distance = Math.abs(
      wineProgress -
        EXPERIENCE_ANCHORS.problem,
    );

    /**
     * Anchor'a yaklaşık %7 curve mesafesinde
     * reaction başlıyor.
     */
    const influence =
      THREE.MathUtils.clamp(
        1 - distance / 0.07,
        0,
        1,
      );

    const easedInfluence =
      THREE.MathUtils.smoothstep(
        influence,
        0,
        1,
      );

    const scale =
      THREE.MathUtils.lerp(
        0.15,
        1.8,
        easedInfluence,
      );

    mesh.scale.set(
      scale,
      scale,
      scale,
    );

    material.opacity =
      THREE.MathUtils.lerp(
        0,
        0.32,
        easedInfluence,
      );
  });

  return (
    <mesh
      ref={meshRef}
      position={[
        PROBLEM_POSITION.x,
        0.065,
        PROBLEM_POSITION.z,
      ]}
      rotation={[
        -Math.PI / 2,
        0,
        0,
      ]}
    >
      <circleGeometry
        args={[1, 64]}
      />

      <meshStandardMaterial
        ref={materialRef}
        color="#651526"
        transparent
        opacity={0}
        depthWrite={false}
        roughness={0.45}
      />
    </mesh>
  );
}