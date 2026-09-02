"use client";

import {
  Environment,
  Lightformer,
} from "@react-three/drei";

import {
  useExperienceStore,
} from "@/store/experience";

import {
  CameraRig,
} from "./camera/CameraRig";

import {
  HeroGlassStage,
} from "./hero/HeroGlassStage";

import {
  AnswerStage,
} from "./stages/AnswerStage";

import {
  ContactStage,
} from "./stages/ContactStage";

import {
  ProblemStage,
} from "./stages/ProblemStage";

import {
  ProjectStage,
} from "./stages/ProjectStage";

import {
  ServicesStage,
} from "./stages/ServicesStage";

import {
  TrustStage,
} from "./stages/TrustStage";

import {
  WorldEnvironment,
} from "./world/WorldEnvironment";

import {
  WineHead,
} from "./WineHead";

import {
  WineRoute,
} from "./WineRoute";

export function ExperienceScene() {
  const experienceMode =
    useExperienceStore(
      (state) =>
        state.experienceMode,
    );

  const isMobile =
    experienceMode ===
    "mobile";

  return (
    <>
      <CameraRig />

      <ambientLight
        intensity={0.55}
      />

      <directionalLight
        position={[
          5,
          8,
          4,
        ]}
        intensity={2.2}
        castShadow={
          !isMobile
        }
        shadow-mapSize-width={
          isMobile
            ? 512
            : 1024
        }
        shadow-mapSize-height={
          isMobile
            ? 512
            : 1024
        }
        shadow-camera-left={
          -12
        }
        shadow-camera-right={
          12
        }
        shadow-camera-top={
          12
        }
        shadow-camera-bottom={
          -12
        }
        shadow-camera-near={
          0.1
        }
        shadow-camera-far={
          40
        }
      />

      <Environment
        resolution={256}
      >
        <Lightformer
          intensity={4}
          position={[
            -4,
            5,
            4,
          ]}
          scale={[
            4,
            4,
            1,
          ]}
        />

        <Lightformer
          intensity={2.5}
          position={[
            4,
            2,
            1,
          ]}
          scale={[
            3,
            6,
            1,
          ]}
          rotation={[
            0,
            Math.PI / 2,
            0,
          ]}
        />

        <Lightformer
          intensity={2}
          position={[
            0,
            6,
            -4,
          ]}
          scale={[
            5,
            2,
            1,
          ]}
          rotation={[
            Math.PI / 2,
            0,
            0,
          ]}
        />
      </Environment>

      {/* Ana dünya yüzeyi */}
      <mesh
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
        position={[
          0,
          0,
          -10,
        ]}
        receiveShadow
      >
        <planeGeometry
          args={[
            40,
            50,
          ]}
        />

        <meshStandardMaterial
          color="#ebe7df"
          roughness={0.85}
        />
      </mesh>

      <WorldEnvironment />

      <HeroGlassStage />

      <WineRoute />

      <WineHead />

      <ProblemStage />

      <AnswerStage />

      <ProjectStage
        anchor="workOne"
      />

      <ProjectStage
        anchor="workTwo"
      />

      <ServicesStage />

      <TrustStage />

      <ContactStage />
    </>
  );
}