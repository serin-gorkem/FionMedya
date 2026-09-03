"use client";

import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

const MODEL_PATH = "/models/Wine+Glass.glb";

export function HeroGlass() {
  const { scene } = useGLTF(MODEL_PATH);

  const model = useMemo(() => {
    const clone = scene.clone(true);

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#ffffff"),

      metalness: 0,

      roughness: 0.015,

      transmission: 1,

      thickness: 0.045,

      ior: 1.48,

      clearcoat: 0.08,

      clearcoatRoughness: 0.06,

      envMapIntensity: 2.2,

      specularIntensity: 1,

      side: THREE.FrontSide,

      transparent: false,

      depthWrite: true,
    });

    clone.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) {
        return;
      }

      object.material = glassMaterial;

      object.castShadow = true;

      object.receiveShadow = true;
    });

    return clone;
  }, [scene]);

  return <primitive object={model} />;
}

useGLTF.preload(MODEL_PATH);
