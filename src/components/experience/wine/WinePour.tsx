"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { EXPERIENCE_SECTIONS } from "@/config/experience";
import { WINE_POUR_CURVE, WINE_POUR_END_PROGRESS } from "@/lib/experiencePath";

import { useExperienceStore } from "@/store/experience";

export function WinePour() {
  const meshRef = useRef<THREE.Mesh<THREE.TubeGeometry>>(null);

  const wineProgress = useExperienceStore((state) => state.wineProgress);
  const scrollProgress = useExperienceStore((state) => state.scrollProgress);
  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(WINE_POUR_CURVE, 64, 0.055, 12, false);
  }, []);

  useFrame(() => {
    const mesh = meshRef.current;

    if (!mesh || !mesh.geometry.index) {
      return;
    }

    const progress = THREE.MathUtils.clamp(
      wineProgress / WINE_POUR_END_PROGRESS,
      0,
      1,
    );

    const indexCount = mesh.geometry.index.count;

    mesh.geometry.setDrawRange(
      0,

      Math.floor(indexCount * progress),
    );
  });
  const visible = scrollProgress < EXPERIENCE_SECTIONS.reveal.end; /*  */
  return (
    <mesh ref={meshRef} geometry={geometry} visible={visible}>
      <meshPhysicalMaterial
        color="#650018"
        roughness={0.2}
        metalness={0}
        clearcoat={0.18}
      />
    </mesh>
  );
}
