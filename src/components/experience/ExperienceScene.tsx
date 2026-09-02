"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import { EXPERIENCE_SECTIONS } from "@/config/experience";
import { EXPERIENCE_CURVE } from "@/lib/experiencePath";
import { getSectionProgress } from "@/lib/progress";
import { useExperienceStore } from "@/store/experience";
import { ExperienceAnchors } from "./ExperienceAnchors";
import { TippedGlass } from "./TippedGlass";
import { WineHead } from "./WineHead";
import { WineRoute } from "./WineRoute";

import { AnswerStage } from "./stages/AnswerStage";
import { ProblemStage } from "./stages/ProblemStage";
import { ProjectStage } from "./stages/ProjectStage";
import { ServicesStage } from "./stages/ServicesStage";
import { ContactStage } from "./stages/ContactStage";
import { TrustStage } from "./stages/TrustStage";
const START_POSITION = new THREE.Vector3(3.8, 3.4, 6.2);

const TOP_DOWN_POSITION = new THREE.Vector3(0, 13, 1);

const START_TARGET = new THREE.Vector3(-1.5, 0, 0.5);

const TOP_DOWN_TARGET = new THREE.Vector3(0, 0, -2);

export function ExperienceScene() {
  const { camera } = useThree();

  const scrollProgress = useExperienceStore((state) => state.scrollProgress);

  const targetPositionRef = useRef(new THREE.Vector3());

  const targetLookAtRef = useRef(new THREE.Vector3());

  const pathPointRef = useRef(new THREE.Vector3());

  useFrame(() => {
    const targetPosition = targetPositionRef.current;

    const targetLookAt = targetLookAtRef.current;

    const pathPoint = pathPointRef.current;

    /**
     * HERO -> TOP DOWN
     */
    const heroToTopDown = THREE.MathUtils.smoothstep(
      scrollProgress,
      EXPERIENCE_SECTIONS.hero.start,
      EXPERIENCE_SECTIONS.reveal.end,
    );

    targetPosition.lerpVectors(
      START_POSITION,
      TOP_DOWN_POSITION,
      heroToTopDown,
    );

    targetLookAt.lerpVectors(START_TARGET, TOP_DOWN_TARGET, heroToTopDown);

    /**
     * JOURNEY
     */
    const journeyProgress = getSectionProgress(
      scrollProgress,
      EXPERIENCE_SECTIONS.reveal.end,
      EXPERIENCE_SECTIONS.contact.end,
    );

    if (journeyProgress > 0) {
      const pathProgress = THREE.MathUtils.lerp(
        EXPERIENCE_SECTIONS.reveal.end,
        1,
        journeyProgress,
      );

      EXPERIENCE_CURVE.getPointAt(pathProgress, pathPoint);

      targetPosition.set(pathPoint.x * 0.45, 13, pathPoint.z + 2.8);

      targetLookAt.set(pathPoint.x, 0, pathPoint.z - 1.5);
    }

    camera.position.lerp(targetPosition, 0.055);

    camera.lookAt(targetLookAt);
  });

  return (
    <>
      <ambientLight intensity={1.8} />

      <directionalLight position={[4, 8, 4]} intensity={3} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -10]}>
        <planeGeometry args={[40, 50]} />

        <meshStandardMaterial color="#ebe7df" roughness={0.85} />
      </mesh>

      <TippedGlass />

      <WineRoute />
      <WineHead />

      {/* Stages */}
      <ProblemStage />

      <AnswerStage />

      <ProjectStage anchor="workOne" />

      <ProjectStage anchor="workTwo" />

      <ServicesStage />

      <TrustStage />

      <ContactStage />

      <ExperienceAnchors />
    </>
  );
}
