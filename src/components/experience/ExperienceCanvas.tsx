"use client";

import { Canvas } from "@react-three/fiber";

import { Suspense } from "react";

import * as THREE from "three";

import { EXPERIENCE_POLICIES } from "@/config/experiencePolicy";

import { useExperienceStore } from "@/store/experience";

import { ExperienceScene } from "./ExperienceScene";

export function ExperienceCanvas() {
  const experienceMode = useExperienceStore((state) => state.experienceMode);

  const policy = EXPERIENCE_POLICIES[experienceMode];

  return (
    <div className="experience-canvas">
      <Canvas
        shadows
        dpr={policy.dpr}
        gl={{
          antialias: true,
          alpha: false,
        }}
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.ACESFilmicToneMapping;

          gl.toneMappingExposure = 1.15;

          gl.localClippingEnabled = true;
        }}
      >
        <Suspense fallback={null}>
          <ExperienceScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
