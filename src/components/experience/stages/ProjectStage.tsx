"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import {
  EXPERIENCE_ANCHORS,
  type ExperienceAnchor,
} from "@/config/experienceAnchors";

import { getExperienceAnchorPosition } from "@/lib/experienceAnchors";
import { useExperienceStore } from "@/store/experience";

type ProjectStageProps = {
  anchor: ExperienceAnchor;
  width?: number;
  height?: number;
};

export function ProjectStage({
  anchor,
  width = 3.4,
  height = 2.1,
}: ProjectStageProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const materialRef =
    useRef<THREE.MeshBasicMaterial>(null);

  const wineProgress =
    useExperienceStore(
      (state) => state.wineProgress,
    );

  /**
   * Anchor değişmediği sürece bu pozisyon
   * yeniden hesaplanmaz.
   *
   * React render tarafına sadece primitive
   * x/z değerlerini taşıyoruz.
   */
  const [positionX, positionZ] =
    useMemo(() => {
      const position =
        getExperienceAnchorPosition(
          anchor,
        );

      return [
        position.x,
        position.z,
      ] as const;
    }, [anchor]);

  useFrame(() => {
    const mesh = meshRef.current;

    const material =
      materialRef.current;

    if (!mesh || !material) {
      return;
    }

    const anchorProgress =
      EXPERIENCE_ANCHORS[anchor];

    const distance =
      Math.abs(
        wineProgress -
          anchorProgress,
      );

    /**
     * Wine head anchor'a yaklaştığında
     * stage görünür hale geliyor.
     */
    const influence =
      THREE.MathUtils.clamp(
        1 - distance / 0.1,
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
        0.2,
        1,
        eased,
      );

    mesh.scale.set(
      scale,
      scale,
      1,
    );

    material.opacity =
      THREE.MathUtils.lerp(
        0,
        0.22,
        eased,
      );
  });

  return (
    <mesh
      ref={meshRef}
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
    >
      <planeGeometry
        args={[
          width,
          height,
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