"use client";

import { Canvas } from "@react-three/fiber";

import { ExperienceScene } from "./ExperienceScene";

export function ExperienceCanvas() {
  return (
    <div className="experience-canvas">
      <Canvas
        camera={{
          position: [3.8, 3.4, 6.2],
          fov: 40,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: false,
        }}
      >
        <ExperienceScene />
      </Canvas>
    </div>
  );
}