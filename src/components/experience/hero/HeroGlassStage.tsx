"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { EXPERIENCE_SECTIONS } from "@/config/experience";
import { HeroWineInside } from "./HeroWineInside";
import { HERO_GLASS_TRANSFORM, WINE_ORIGIN_LOCAL } from "@/config/heroGlass";

import { useExperienceStore } from "@/store/experience";

import { HeroGlass } from "./HeroGlass";

const SHOW_ORIGIN_DEBUG = true;

export function HeroGlassStage() {
  const groupRef = useRef<THREE.Group>(null);

  const scrollProgress = useExperienceStore((state) => state.scrollProgress);

  useFrame(() => {
    const group = groupRef.current;

    if (!group) {
      return;
    }

    const exitProgress = THREE.MathUtils.smoothstep(
      scrollProgress,
      EXPERIENCE_SECTIONS.hero.end,
      EXPERIENCE_SECTIONS.reveal.end,
    );

    group.position.y = THREE.MathUtils.lerp(
      HERO_GLASS_TRANSFORM.position[1],

      -0.8,

      exitProgress,
    );

    const scale = THREE.MathUtils.lerp(
      HERO_GLASS_TRANSFORM.scale,

      HERO_GLASS_TRANSFORM.scale * 0.92,

      exitProgress,
    );

    group.scale.setScalar(scale);

    group.visible = scrollProgress < EXPERIENCE_SECTIONS.reveal.end + 0.02;
  });

  return (
    <group
      ref={groupRef}
      position={HERO_GLASS_TRANSFORM.position}
      rotation={HERO_GLASS_TRANSFORM.rotation}
      scale={HERO_GLASS_TRANSFORM.scale}
    >
      <HeroWineInside />

      <HeroGlass />

      {SHOW_ORIGIN_DEBUG && (
        <mesh position={WINE_ORIGIN_LOCAL}>
          <sphereGeometry args={[0.015, 16, 16]} />
          <meshBasicMaterial color="#ff0044" depthTest={false} />
        </mesh>
      )}
    </group>
  );
}
