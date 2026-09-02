"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { EXPERIENCE_CURVE } from "@/lib/experiencePath";

import { useExperienceStore } from "@/store/experience";

export function WineRoute() {
  const meshRef = useRef<THREE.Mesh<THREE.TubeGeometry>>(null);

  const wineProgress = useExperienceStore((state) => state.wineProgress);

  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(EXPERIENCE_CURVE, 400, 0.09, 16, false);
  }, []);

  useFrame(() => {
    const mesh = meshRef.current;

    if (!mesh) {
      return;
    }

    const routeGeometry = mesh.geometry;

    if (!routeGeometry.index) {
      return;
    }

    const indexCount = routeGeometry.index.count;

    /**
     * İlk frame'de biraz şarap görünür.
     * Scroll arttıkça route açılır.
     */
    const visibleProgress = THREE.MathUtils.clamp(wineProgress, 0.001, 1);

    routeGeometry.setDrawRange(0, Math.floor(indexCount * visibleProgress));
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial color="#651526" roughness={0.3} metalness={0} />
    </mesh>
  );
}
