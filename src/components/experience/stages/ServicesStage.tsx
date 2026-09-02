"use client";

import { useFrame } from "@react-three/fiber";
import {
  useMemo,
  useRef,
} from "react";
import * as THREE from "three";

import { EXPERIENCE_ANCHORS } from "@/config/experienceAnchors";
import { getExperienceAnchorPosition } from "@/lib/experienceAnchors";
import { useExperienceStore } from "@/store/experience";

const SERVICES_POSITION =
  getExperienceAnchorPosition(
    "services",
  );

export function ServicesStage() {
  const groupRef =
    useRef<THREE.Group>(null);

  const wineProgress =
    useExperienceStore(
      (state) => state.wineProgress,
    );

  const geometries =
    useMemo(() => {
      const brandCurve =
        new THREE.CatmullRomCurve3([
          new THREE.Vector3(
            0,
            0,
            0,
          ),

          new THREE.Vector3(
            -0.7,
            0,
            -0.3,
          ),

          new THREE.Vector3(
            -1.8,
            0,
            -1.2,
          ),
        ]);

      const contentCurve =
        new THREE.CatmullRomCurve3([
          new THREE.Vector3(
            0,
            0,
            0,
          ),

          new THREE.Vector3(
            0.8,
            0,
            -0.1,
          ),

          new THREE.Vector3(
            2,
            0,
            -0.15,
          ),
        ]);

      const growthCurve =
        new THREE.CatmullRomCurve3([
          new THREE.Vector3(
            0,
            0,
            0,
          ),

          new THREE.Vector3(
            0.5,
            0,
            0.5,
          ),

          new THREE.Vector3(
            1.5,
            0,
            1.2,
          ),
        ]);

      return [
        new THREE.TubeGeometry(
          brandCurve,
          40,
          0.045,
          8,
          false,
        ),

        new THREE.TubeGeometry(
          contentCurve,
          40,
          0.045,
          8,
          false,
        ),

        new THREE.TubeGeometry(
          growthCurve,
          40,
          0.045,
          8,
          false,
        ),
      ];
    }, []);

  useFrame(() => {
    const group =
      groupRef.current;

    if (!group) {
      return;
    }

    const distance =
      Math.abs(
        wineProgress -
          EXPERIENCE_ANCHORS.services,
      );

    const influence =
      THREE.MathUtils.clamp(
        1 - distance / 0.1,
        0,
        1,
      );

    const eased =
      THREE.MathUtils.smoothstep(
        influence,
        0,
        1,
      );

    const scale =
      THREE.MathUtils.lerp(
        0.01,
        1,
        eased,
      );

    group.scale.setScalar(
      scale,
    );
  });

  return (
    <group
      ref={groupRef}
      position={[
        SERVICES_POSITION.x,
        0.085,
        SERVICES_POSITION.z,
      ]}
    >
      {geometries.map(
        (geometry, index) => (
          <mesh
            geometry={geometry}
            key={index}
          >
            <meshBasicMaterial
              color="#651526"
              transparent
              opacity={0.65}
            />
          </mesh>
        ),
      )}

      <ServiceNode
        position={[
          -1.8,
          0,
          -1.2,
        ]}
      />

      <ServiceNode
        position={[
          2,
          0,
          -0.15,
        ]}
      />

      <ServiceNode
        position={[
          1.5,
          0,
          1.2,
        ]}
      />
    </group>
  );
}

type ServiceNodeProps = {
  position: [
    number,
    number,
    number,
  ];
};

function ServiceNode({
  position,
}: ServiceNodeProps) {
  return (
    <mesh position={position}>
      <sphereGeometry
        args={[
          0.11,
          20,
          20,
        ]}
      />

      <meshBasicMaterial
        color="#651526"
      />
    </mesh>
  );
}