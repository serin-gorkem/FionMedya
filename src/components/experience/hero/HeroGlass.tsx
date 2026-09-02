"use client";

import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

const MODEL_PATH =
  "/models/Wine+Glass.glb";

export function HeroGlass() {
  const { scene } =
    useGLTF(MODEL_PATH);

  const model = useMemo(() => {
    const clone =
      scene.clone(true);

    const glassMaterial =
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(
          "#ffffff",
        ),

        metalness: 0,

        roughness: 0.08,

        transmission: 1,

        thickness: 0.35,

        ior: 1.48,

        transparent: true,

        opacity: 1,

        side: THREE.DoubleSide,

        envMapIntensity: 1.5,
      });

    clone.traverse((object) => {
      if (
        !(object instanceof THREE.Mesh)
      ) {
        return;
      }

      object.material =
        glassMaterial;

      object.castShadow = true;

      object.receiveShadow = true;
    });

    return clone;
  }, [scene]);

  return (
    <primitive
      object={model}
    />
  );
}

useGLTF.preload(MODEL_PATH);