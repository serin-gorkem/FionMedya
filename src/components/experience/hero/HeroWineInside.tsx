"use client";

import * as THREE from "three";

export function HeroWineInside() {
  return (
    <group>
      {/* =================================
          WINE BODY
      ================================= */}

      <mesh
        position={[
          0,
          0.105,
          0.004,
        ]}
        scale={[
          0.042,
          0.026,
          0.042,
        ]}
        renderOrder={1}
      >
        <sphereGeometry
          args={[
            1,
            48,
            48,
          ]}
        />

        <meshPhysicalMaterial
          color="#4b0014"
          metalness={0}
          roughness={0.16}
          ior={1.34}
          clearcoat={0.24}
          clearcoatRoughness={0.08}
          envMapIntensity={1.25}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* =================================
          LIQUID SURFACE
      ================================= */}

      <mesh
        position={[
          0,
          0.124,
          0.004,
        ]}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
        renderOrder={2}
      >
        <circleGeometry
          args={[
            0.037,
            64,
          ]}
        />

        <meshPhysicalMaterial
          color="#680019"
          metalness={0}
          roughness={0.08}
          clearcoat={0.5}
          clearcoatRoughness={0.045}
          envMapIntensity={1.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* =================================
          SUBTLE MENISCUS
      ================================= */}

      <mesh
        position={[
          0,
          0.1245,
          0.004,
        ]}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
        renderOrder={3}
      >
        <ringGeometry
          args={[
            0.034,
            0.038,
            64,
          ]}
        />

        <meshBasicMaterial
          color="#9b2440"
          transparent
          opacity={0.3}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}