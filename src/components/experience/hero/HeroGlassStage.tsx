"use client";

import { useFrame } from "@react-three/fiber";

import { useRef } from "react";

import * as THREE from "three";

import { EXPERIENCE_SECTIONS } from "@/config/experience";

import {
  HERO_GLASS_IDLE_TRANSFORM,
  HERO_GLASS_TRANSFORM,
} from "@/config/heroGlass";

import { getSectionProgress } from "@/lib/progress";

import { useExperienceStore } from "@/store/experience";

import { HeroGlass } from "./HeroGlass";
import { HeroWineInside } from "./HeroWineInside";
/* ========================================
   STATIC TRANSFORMS
======================================== */

const IDLE_POSITION = new THREE.Vector3(...HERO_GLASS_IDLE_TRANSFORM.position);

const TIPPED_POSITION = new THREE.Vector3(...HERO_GLASS_TRANSFORM.position);

const IDLE_QUATERNION = new THREE.Quaternion().setFromEuler(
  new THREE.Euler(...HERO_GLASS_IDLE_TRANSFORM.rotation),
);

const TIPPED_QUATERNION = new THREE.Quaternion().setFromEuler(
  new THREE.Euler(...HERO_GLASS_TRANSFORM.rotation),
);

const SETTLE_AXIS = new THREE.Vector3(0, 0, 1);

/* ========================================
   COMPONENT
======================================== */

export function HeroGlassStage() {
  const groupRef = useRef<THREE.Group>(null);

  const settleQuaternionRef = useRef(new THREE.Quaternion());

  const scrollProgress = useExperienceStore((state) => state.scrollProgress);

  const reducedMotion = useExperienceStore((state) => state.reducedMotion);

  useFrame(() => {
    const group = groupRef.current;

    if (!group) {
      return;
    }

    const heroProgress = getSectionProgress(
      scrollProgress,

      EXPERIENCE_SECTIONS.hero.start,

      EXPERIENCE_SECTIONS.hero.end,
    );

    /* ======================================
       PHASE 01
       GENERIC WEBSITE
    ====================================== */

    /**
     * İlk %14 boyunca bardak
     * tamamen sabit.
     *
     * 3D olduğunu belli etmiyoruz.
     */

    /* ======================================
       PHASE 02
       BARDAK SAĞA DEVRİLİYOR
    ====================================== */

    const rawTipProgress = THREE.MathUtils.smoothstep(heroProgress, 0.14, 0.42);

    const tipProgress = reducedMotion
      ? heroProgress >= 0.2
        ? 1
        : 0
      : rawTipProgress;

    group.position.lerpVectors(IDLE_POSITION, TIPPED_POSITION, tipProgress);

    group.quaternion.slerpQuaternions(
      IDLE_QUATERNION,
      TIPPED_QUATERNION,
      tipProgress,
    );

    /* ======================================
       PHASE 03
       SETTLE
    ====================================== */

    if (!reducedMotion) {
      const settleProgress = THREE.MathUtils.clamp(
        (heroProgress - 0.42) / 0.12,

        0,
        1,
      );

      if (settleProgress > 0 && settleProgress < 1) {
        const settle =
          Math.sin(settleProgress * Math.PI) * (1 - settleProgress);

        settleQuaternionRef.current.setFromAxisAngle(
          SETTLE_AXIS,
          settle * 0.018,
        );

        group.quaternion.multiply(settleQuaternionRef.current);
      }
    }

    group.scale.setScalar(HERO_GLASS_TRANSFORM.scale);

    group.visible = scrollProgress < EXPERIENCE_SECTIONS.reveal.end + 0.02;
  });

  return (
    <group
      ref={groupRef}
      position={HERO_GLASS_IDLE_TRANSFORM.position}
      rotation={HERO_GLASS_IDLE_TRANSFORM.rotation}
      scale={HERO_GLASS_IDLE_TRANSFORM.scale}
    >
      <HeroWineInside />
      <HeroGlass />
    </group>
  );
}
