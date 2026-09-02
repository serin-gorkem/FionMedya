"use client";

import { useMemo } from "react";
import * as THREE from "three";

import {
  EXPERIENCE_ANCHORS,
  type ExperienceAnchor,
} from "@/config/experienceAnchors";
import { Html } from "@react-three/drei";
import { getExperienceAnchorPosition } from "@/lib/experienceAnchors";

export function ExperienceAnchors() {
  const anchors = useMemo(() => {
    return Object.keys(EXPERIENCE_ANCHORS).map((name) => {
      const anchor = name as ExperienceAnchor;

      const position = getExperienceAnchorPosition(anchor, new THREE.Vector3());

      return {
        name: anchor,
        position,
      };
    });
  }, []);

  if (process.env.NODE_ENV === "production") {
    return null;
  }

  return (
    <>
      {anchors.map(({ name, position }) => (
        <group key={name} position={position}>
          <mesh position={[0, 0.12, 0]}>
            <sphereGeometry args={[0.1, 16, 16]} />

            <meshStandardMaterial color="#111111" />
          </mesh>
          <Html position={[0, 0.3, 0]} center distanceFactor={12}>
            <span
              style={{
                display: "block",
                padding: "2px 5px",
                background: "#111",
                color: "#fff",
                fontSize: "8px",
                fontFamily: "monospace",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </span>
          </Html>
        </group>
      ))}
    </>
  );
}
