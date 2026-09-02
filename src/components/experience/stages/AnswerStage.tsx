"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { EXPERIENCE_ANCHORS } from "@/config/experienceAnchors";
import { getExperienceAnchorPosition } from "@/lib/experienceAnchors";
import { useExperienceStore } from "@/store/experience";

const ANSWER_POSITION =
  getExperienceAnchorPosition("answer");

export function AnswerStage() {
  const meshRef = useRef<THREE.Mesh>(null);

  const materialRef =
    useRef<THREE.MeshBasicMaterial>(null);

  const wineProgress = useExperienceStore(
    (state) => state.wineProgress,
  );

  useFrame(() => {
    const mesh = meshRef.current;
    const material = materialRef.current;

    if (!mesh || !material) {
      return;
    }

    const distance = Math.abs(
      wineProgress -
        EXPERIENCE_ANCHORS.answer,
    );

    /**
     * Wine head Answer anchor'a yaklaşırken
     * reaksiyon başlıyor.
     */
    const influence =
      THREE.MathUtils.clamp(
        1 - distance / 0.06,
        0,
        1,
      );

    const eased =
      THREE.MathUtils.smoothstep(
        influence,
        0,
        1,
      );

    const scale =
      THREE.MathUtils.lerp(
        0.4,
        1.4,
        eased,
      );

    mesh.scale.setScalar(scale);

    material.opacity =
      THREE.MathUtils.lerp(
        0,
        0.45,
        eased,
      );
  });

  return (
    <mesh
      ref={meshRef}
      position={[
        ANSWER_POSITION.x,
        0.075,
        ANSWER_POSITION.z,
      ]}
      rotation={[
        -Math.PI / 2,
        0,
        0,
      ]}
    >
      <ringGeometry
        args={[
          0.32,
          0.4,
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