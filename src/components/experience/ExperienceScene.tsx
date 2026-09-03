"use client";

import { Environment, Lightformer } from "@react-three/drei";

import { useExperienceStore } from "@/store/experience";

import { CameraRig } from "./camera/CameraRig";

import { HeroGlassStage } from "./hero/HeroGlassStage";

import { HeroPagePrint } from "./hero/HeroPagePrint";

import { WineHead } from "./WineHead";

import { WineRoute } from "./WineRoute";
import { StudioEnvironment } from "./world/StudioEnvironment";
export function ExperienceScene() {
  const experienceMode = useExperienceStore((state) => state.experienceMode);

  const wineProgress = useExperienceStore((state) => state.wineProgress);

  const isMobile = experienceMode === "mobile";

  return (
    <>
      {/* =================================
          BACKGROUND
      ================================= */}

      <color attach="background" args={["#d8d1c6"]} />

      {/* =================================
          CAMERA
      ================================= */}

      <CameraRig />

      {/* =================================
          LIGHTING
      ================================= */}

      <ambientLight intensity={0.3} />

      <directionalLight
        position={[5, 8, 4]}
        intensity={2.55}
        castShadow={!isMobile}
        shadow-mapSize-width={isMobile ? 512 : 1024}
        shadow-mapSize-height={isMobile ? 512 : 1024}
        shadow-camera-left={-12}
        shadow-camera-right={12}
        shadow-camera-top={12}
        shadow-camera-bottom={-12}
        shadow-camera-near={0.1}
        shadow-camera-far={40}
      />

      <Environment resolution={256}>
        <Lightformer intensity={4} position={[-4, 5, 4]} scale={[4, 4, 1]} />

        <Lightformer
          intensity={2.5}
          position={[4, 2, 1]}
          scale={[3, 6, 1]}
          rotation={[0, Math.PI / 2, 0]}
        />

        <Lightformer
          intensity={2}
          position={[0, 6, -4]}
          scale={[5, 2, 1]}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </Environment>

      {/* =================================
          WORLD GROUND
      ================================= */}

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.01, -10]}
        receiveShadow
      >
        <planeGeometry args={[70, 80]} />

        <meshPhysicalMaterial
          color="#d8d1c6"
          metalness={0}
          roughness={0.93}
          clearcoat={0.01}
          clearcoatRoughness={1}
          envMapIntensity={0.45}
        />
      </mesh>

      {/* =================================
          GENERIC WEBSITE PRINT
      ================================= */}
      <HeroPagePrint mode={experienceMode} />

      <HeroGlassStage />

      <StudioEnvironment mode={experienceMode} />

      <WineRoute />

      {wineProgress > 0.0001 && <WineHead />}
    </>
  );
}
