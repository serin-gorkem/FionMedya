"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { EXPERIENCE_CURVE } from "@/lib/experiencePath";
import { useExperienceStore } from "@/store/experience";
import { WINE_POUR_END_PROGRESS } from "@/lib/experiencePath";

export function WineHead() {
  const meshRef = useRef<THREE.Mesh>(null);

  const pointRef = useRef(new THREE.Vector3());

  const wineProgress = useExperienceStore((state) => state.wineProgress);

  useFrame(() => {
    const mesh = meshRef.current;

    if (!mesh) {
      return;
    }

    const point = pointRef.current;

    EXPERIENCE_CURVE.getPointAt(
      THREE.MathUtils.clamp(wineProgress, 0, 1),
      point,
    );

    mesh.position.copy(point);
    const surfaceProgress = THREE.MathUtils.clamp(
      (wineProgress - WINE_POUR_END_PROGRESS) / 0.03,
      0,
      1,
    );

    const scale = THREE.MathUtils.lerp(1, 0.28, surfaceProgress);

    mesh.scale.setScalar(scale);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.07, 24, 24]} />

      <meshStandardMaterial color="#651526" roughness={0.25} />
    </mesh>
  );
}
