"use client";

import {
  useFrame,
} from "@react-three/fiber";

import {
  useRef,
} from "react";

import * as THREE from "three";

import {
  WINE_POUR_CURVE,
  WINE_POUR_END_PROGRESS,
  WINE_TRAIL_CURVE,
} from "@/lib/experiencePath";

import {
  useExperienceStore,
} from "@/store/experience";

export function WineHead() {
  const meshRef =
    useRef<THREE.Mesh>(null);

  const pointRef =
    useRef(
      new THREE.Vector3(),
    );

  const wineProgress =
    useExperienceStore(
      (state) =>
        state.wineProgress,
    );

  useFrame(() => {
    const mesh =
      meshRef.current;

    if (!mesh) {
      return;
    }

    const point =
      pointRef.current;

    /**
     * 1. KADEHTEN ZEMİNE
     *
     * WinePour ile aynı curve.
     */
    if (
      wineProgress <=
      WINE_POUR_END_PROGRESS
    ) {
      const pourProgress =
        THREE.MathUtils.clamp(
          wineProgress /
            WINE_POUR_END_PROGRESS,

          0,
          1,
        );

      WINE_POUR_CURVE.getPointAt(
        pourProgress,
        point,
      );

      mesh.position.copy(
        point,
      );

      mesh.scale.setScalar(
        1,
      );

      return;
    }

    /**
     * 2. ZEMİNDEKİ ROTA
     *
     * WineTrail ile birebir aynı
     * normalized progress.
     */
    const trailProgress =
      THREE.MathUtils.clamp(
        (
          wineProgress -
          WINE_POUR_END_PROGRESS
        ) /
          (
            1 -
            WINE_POUR_END_PROGRESS
          ),

        0,
        1,
      );

    WINE_TRAIL_CURVE.getPointAt(
      trailProgress,
      point,
    );

    mesh.position.copy(
      point,
    );

    /**
     * Zemine ulaştığında damla
     * biraz yassı / küçük hale geliyor.
     *
     * Şimdilik mevcut davranışa
     * yakın tutuyoruz.
     * Görselini birazdan fine tune edeceğiz.
     */
    const surfaceTransition =
      THREE.MathUtils.smoothstep(
        trailProgress,
        0,
        0.035,
      );

    const scale =
      THREE.MathUtils.lerp(
        1,
        0.28,
        surfaceTransition,
      );

    mesh.scale.setScalar(
      scale,
    );
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry
        args={[
          0.07,
          24,
          24,
        ]}
      />

      <meshStandardMaterial
        color="#651526"
        roughness={0.25}
      />
    </mesh>
  );
}