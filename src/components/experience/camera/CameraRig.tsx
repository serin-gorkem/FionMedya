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

const HERO_POSITION =
  new THREE.Vector3(
    ...CAMERA_CONFIG.hero.position,
  );

const HERO_TARGET =
  new THREE.Vector3(
    ...CAMERA_CONFIG.hero.target,
  );

const TOP_DOWN_TARGET =
  new THREE.Vector3(
    ...CAMERA_CONFIG.topDown.target,
  );

const TOP_DOWN_Z =
  CAMERA_CONFIG.topDown.position[2];

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

  const desiredPositionRef =
    useRef(
      HERO_POSITION.clone(),
    );

  const desiredTargetRef =
    useRef(
      HERO_TARGET.clone(),
    );

  const currentTargetRef =
    useRef(
      HERO_TARGET.clone(),
    );

  const topDownPositionRef =
    useRef(
      new THREE.Vector3(),
    );

  const pathPointRef =
    useRef(
      new THREE.Vector3(),
    );

  useFrame((_, delta) => {
    const camera =
      cameraRef.current;

    if (!camera) {
      return;
    }

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

    /**
     * Responsive top-down position.
     */
    topDownPosition.set(
      0,
      policy.camera.topDownHeight,
      TOP_DOWN_Z,
    );

    /**
     * HERO -> TOP DOWN
     */
    const transitionProgress =
      THREE.MathUtils.smoothstep(
        scrollProgress,
        EXPERIENCE_SECTIONS.hero.start,
        EXPERIENCE_SECTIONS.reveal.end,
      );

    const effectiveTransitionProgress =
      reducedMotion
        ? scrollProgress >=
          EXPERIENCE_SECTIONS.reveal.start
          ? 1
          : 0
        : transitionProgress;

    desiredPosition.lerpVectors(
      HERO_POSITION,
      topDownPosition,
      effectiveTransitionProgress,
    );

    desiredTarget.lerpVectors(
      HERO_TARGET,
      TOP_DOWN_TARGET,
      effectiveTransitionProgress,
    );

    let desiredFov =
      THREE.MathUtils.lerp(
        CAMERA_CONFIG.hero.fov,
        policy.camera.topDownFov,
        effectiveTransitionProgress,
      );

    /**
     * JOURNEY
     */
    const journeyProgress =
      getSectionProgress(
        scrollProgress,
        EXPERIENCE_SECTIONS.reveal.end,
        EXPERIENCE_SECTIONS.contact.end,
      );

    if (journeyProgress > 0) {
      const curveProgress =
        THREE.MathUtils.lerp(
          CAMERA_CONFIG.journey.curveStart,
          1,
          journeyProgress,
        );

      EXPERIENCE_CURVE.getPointAt(
        curveProgress,
        pathPoint,
      );

      /**
       * Kamera route'u takip ediyor.
       */
      desiredPosition.set(
        pathPoint.x *
          policy.camera.xInfluence,

        policy.camera.topDownHeight,

        pathPoint.z +
          policy.camera.zOffset,
      );

      /**
       * Kamera route'un biraz ilerisini
       * izliyor.
       */
      desiredTarget.set(
        pathPoint.x,
        0,
        pathPoint.z -
          policy.camera.lookAhead,
      );

      desiredFov =
        policy.camera.topDownFov;
    }

    /**
     * DAMPING
     */
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
      ) > 0.001
    ) {
      camera.fov =
        nextFov;

      camera.updateProjectionMatrix();
    }
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={
        CAMERA_CONFIG.hero.position
      }
      fov={
        CAMERA_CONFIG.hero.fov
      }
      near={0.1}
      far={100}
    />
  );
}