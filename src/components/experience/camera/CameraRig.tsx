"use client";

import {
  PerspectiveCamera,
} from "@react-three/drei";

import {
  useFrame,
} from "@react-three/fiber";

import {
  useRef,
} from "react";

import * as THREE from "three";

import {
  CAMERA_CONFIG,
} from "@/config/camera";

import {
  EXPERIENCE_SECTIONS,
} from "@/config/experience";

import {
  EXPERIENCE_POLICIES,
  type ExperienceMode,
} from "@/config/experiencePolicy";

import {
  EXPERIENCE_CURVE,
} from "@/lib/experiencePath";

import {
  getSectionProgress,
} from "@/lib/progress";

import {
  useExperienceStore,
} from "@/store/experience";

/* ========================================
   RESPONSIVE HERO
======================================== */

const HERO_POSITIONS:
  Record<
    ExperienceMode,
    THREE.Vector3
  > = {
  desktop:
    new THREE.Vector3(
      ...CAMERA_CONFIG.hero
        .desktop.position,
    ),

  tablet:
    new THREE.Vector3(
      ...CAMERA_CONFIG.hero
        .tablet.position,
    ),

  mobile:
    new THREE.Vector3(
      ...CAMERA_CONFIG.hero
        .mobile.position,
    ),
};

const HERO_TARGETS:
  Record<
    ExperienceMode,
    THREE.Vector3
  > = {
  desktop:
    new THREE.Vector3(
      ...CAMERA_CONFIG.hero
        .desktop.target,
    ),

  tablet:
    new THREE.Vector3(
      ...CAMERA_CONFIG.hero
        .tablet.target,
    ),

  mobile:
    new THREE.Vector3(
      ...CAMERA_CONFIG.hero
        .mobile.target,
    ),
};

/* ========================================
   WORLD REVEAL
======================================== */

const WORLD_REVEAL_POSITIONS:
  Record<
    ExperienceMode,
    THREE.Vector3
  > = {
  desktop:
    new THREE.Vector3(
      ...CAMERA_CONFIG
        .worldReveal
        .desktop.position,
    ),

  tablet:
    new THREE.Vector3(
      ...CAMERA_CONFIG
        .worldReveal
        .tablet.position,
    ),

  mobile:
    new THREE.Vector3(
      ...CAMERA_CONFIG
        .worldReveal
        .mobile.position,
    ),
};

const WORLD_REVEAL_TARGETS:
  Record<
    ExperienceMode,
    THREE.Vector3
  > = {
  desktop:
    new THREE.Vector3(
      ...CAMERA_CONFIG
        .worldReveal
        .desktop.target,
    ),

  tablet:
    new THREE.Vector3(
      ...CAMERA_CONFIG
        .worldReveal
        .tablet.target,
    ),

  mobile:
    new THREE.Vector3(
      ...CAMERA_CONFIG
        .worldReveal
        .mobile.target,
    ),
};

/* ========================================
   TOP DOWN
======================================== */

const TOP_DOWN_TARGET =
  new THREE.Vector3(
    ...CAMERA_CONFIG.topDown.target,
  );

const TOP_DOWN_X =
  CAMERA_CONFIG
    .topDown
    .position[0];

const TOP_DOWN_Z =
  CAMERA_CONFIG
    .topDown
    .position[2];

/* ========================================
   CAMERA
======================================== */

export function CameraRig() {
  const cameraRef =
    useRef<THREE.PerspectiveCamera>(
      null,
    );

  const scrollProgress =
    useExperienceStore(
      (state) =>
        state.scrollProgress,
    );

  const experienceMode =
    useExperienceStore(
      (state) =>
        state.experienceMode,
    );

  const reducedMotion =
    useExperienceStore(
      (state) =>
        state.reducedMotion,
    );

  const policy =
    EXPERIENCE_POLICIES[
      experienceMode
    ];

  /* ========================================
     REUSABLE VECTORS
  ======================================== */

  const desiredPositionRef =
    useRef(
      HERO_POSITIONS.desktop
        .clone(),
    );

  const desiredTargetRef =
    useRef(
      HERO_TARGETS.desktop
        .clone(),
    );

  const currentTargetRef =
    useRef(
      HERO_TARGETS.desktop
        .clone(),
    );

  const topDownPositionRef =
    useRef(
      new THREE.Vector3(),
    );

  const pathPointRef =
    useRef(
      new THREE.Vector3(),
    );

  const journeyPositionRef =
    useRef(
      new THREE.Vector3(),
    );

  const journeyTargetRef =
    useRef(
      new THREE.Vector3(),
    );

  useFrame((_, delta) => {
    const camera =
      cameraRef.current;

    if (!camera) {
      return;
    }

    /**
     * Exact top-down kamera için
     * default Y-up kullanamayız.
     *
     * Screen'in üstü = world -Z.
     */
    camera.up.set(
      0,
      0,
      -1,
    );

    const heroPosition =
      HERO_POSITIONS[
        experienceMode
      ];

    const heroTarget =
      HERO_TARGETS[
        experienceMode
      ];

    const worldRevealPosition =
      WORLD_REVEAL_POSITIONS[
        experienceMode
      ];

    const worldRevealTarget =
      WORLD_REVEAL_TARGETS[
        experienceMode
      ];

    const heroConfig =
      CAMERA_CONFIG.hero[
        experienceMode
      ];

    const worldRevealConfig =
      CAMERA_CONFIG
        .worldReveal[
          experienceMode
        ];

    const desiredPosition =
      desiredPositionRef.current;

    const desiredTarget =
      desiredTargetRef.current;

    const currentTarget =
      currentTargetRef.current;

    const topDownPosition =
      topDownPositionRef.current;

    const pathPoint =
      pathPointRef.current;

    const journeyPosition =
      journeyPositionRef.current;

    const journeyTarget =
      journeyTargetRef.current;

    /* ======================================
       SECTION PROGRESS
    ====================================== */

    const heroProgress =
      getSectionProgress(
        scrollProgress,

        EXPERIENCE_SECTIONS.hero.start,

        EXPERIENCE_SECTIONS.hero.end,
      );

    const revealProgress =
      getSectionProgress(
        scrollProgress,

        EXPERIENCE_SECTIONS.reveal.start,

        EXPERIENCE_SECTIONS.reveal.end,
      );

    /* ======================================
       PHASE 01 + 02
       WEBSITE -> WORLD
    ====================================== */

    const heroExitProgress =
      THREE.MathUtils.smoothstep(
        heroProgress,

        CAMERA_CONFIG.timing
          .heroExitStart,

        CAMERA_CONFIG.timing
          .heroExitEnd,
      );

    const effectiveHeroExit =
      reducedMotion
        ? heroProgress >
          CAMERA_CONFIG.timing
            .heroExitStart
          ? 1
          : 0
        : heroExitProgress;

    desiredPosition.lerpVectors(
      heroPosition,

      worldRevealPosition,

      effectiveHeroExit,
    );

    desiredTarget.lerpVectors(
      heroTarget,

      worldRevealTarget,

      effectiveHeroExit,
    );

    let desiredFov =
      THREE.MathUtils.lerp(
        heroConfig.fov,

        worldRevealConfig.fov,

        effectiveHeroExit,
      );

    /* ======================================
       PHASE 03
       WORLD -> ROUTE TOP DOWN
    ====================================== */

    topDownPosition.set(
      TOP_DOWN_X,

      policy.camera
        .topDownHeight,

      TOP_DOWN_Z,
    );

    const topDownProgress =
      THREE.MathUtils.smoothstep(
        revealProgress,

        0,

        CAMERA_CONFIG.timing
          .revealTopDownEnd,
      );

    const effectiveTopDown =
      reducedMotion
        ? revealProgress > 0
          ? 1
          : 0
        : topDownProgress;

    if (
      effectiveTopDown >
      0
    ) {
      desiredPosition.lerpVectors(
        worldRevealPosition,

        topDownPosition,

        effectiveTopDown,
      );

      desiredTarget.lerpVectors(
        worldRevealTarget,

        TOP_DOWN_TARGET,

        effectiveTopDown,
      );

      desiredFov =
        THREE.MathUtils.lerp(
          worldRevealConfig.fov,

          policy.camera
            .topDownFov,

          effectiveTopDown,
        );
    }

    /* ======================================
       PHASE 04
       JOURNEY
    ====================================== */

    const journeyStart =
      THREE.MathUtils.lerp(
        EXPERIENCE_SECTIONS
          .reveal.start,

        EXPERIENCE_SECTIONS
          .reveal.end,

        CAMERA_CONFIG.timing
          .journeyStartAtReveal,
      );

    const journeyProgress =
      getSectionProgress(
        scrollProgress,

        journeyStart,

        EXPERIENCE_SECTIONS
          .contact.end,
      );

    if (
      journeyProgress >
      0
    ) {
      const curveProgress =
        THREE.MathUtils.lerp(
          CAMERA_CONFIG.journey
            .curveStart,

          1,

          journeyProgress,
        );

      EXPERIENCE_CURVE.getPointAt(
        curveProgress,

        pathPoint,
      );

      journeyPosition.set(
        pathPoint.x *
          policy.camera
            .xInfluence,

        policy.camera
          .topDownHeight,

        pathPoint.z +
          policy.camera
            .zOffset,
      );

      journeyTarget.set(
        pathPoint.x,

        0,

        pathPoint.z -
          policy.camera
            .lookAhead,
      );

      const journeyBlend =
        THREE.MathUtils.smoothstep(
          journeyProgress,

          0,

          CAMERA_CONFIG.timing
            .journeyBlendEnd,
        );

      desiredPosition.lerpVectors(
        topDownPosition,

        journeyPosition,

        journeyBlend,
      );

      desiredTarget.lerpVectors(
        TOP_DOWN_TARGET,

        journeyTarget,

        journeyBlend,
      );

      desiredFov =
        policy.camera
          .topDownFov;
    }

    /* ======================================
       DAMPING
    ====================================== */

    const positionAlpha =
      1 -
      Math.exp(
        -CAMERA_CONFIG.damping
          .position *
          delta,
      );

    const targetAlpha =
      1 -
      Math.exp(
        -CAMERA_CONFIG.damping
          .target *
          delta,
      );

    const fovAlpha =
      1 -
      Math.exp(
        -CAMERA_CONFIG.damping
          .fov *
          delta,
      );

    camera.position.lerp(
      desiredPosition,

      positionAlpha,
    );

    currentTarget.lerp(
      desiredTarget,

      targetAlpha,
    );

    camera.lookAt(
      currentTarget,
    );

    const nextFov =
      THREE.MathUtils.lerp(
        camera.fov,

        desiredFov,

        fovAlpha,
      );

    if (
      Math.abs(
        camera.fov -
          nextFov,
      ) >
      0.001
    ) {
      camera.fov =
        nextFov;

      camera
        .updateProjectionMatrix();
    }
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault

      position={
        CAMERA_CONFIG.hero
          .desktop.position
      }

      fov={
        CAMERA_CONFIG.hero
          .desktop.fov
      }

      up={[
        0,
        0,
        -1,
      ]}

      near={0.1}
      far={100}
    />
  );
}