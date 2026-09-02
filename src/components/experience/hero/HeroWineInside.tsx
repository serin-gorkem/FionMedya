"use client";

import * as THREE from "three";

import { INNER_WINE_TRANSFORM } from "@/config/heroGlass";

export function HeroWineInside() {
  return (
    <group>
      {/* Ana iç doluluk */}
      <mesh
        position={
          INNER_WINE_TRANSFORM.volumePosition
        }
        scale={
          INNER_WINE_TRANSFORM.volumeScale
        }
        renderOrder={1}
      >
        <sphereGeometry
          args={[1, 48, 48]}
        />

        <meshPhysicalMaterial
          color="#6b0018"
          roughness={0.22}
          metalness={0}
          clearcoat={0.15}
          transmission={0.02}
          thickness={0.2}
          transparent
          opacity={0.96}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Üst yüzey */}
      <mesh
        position={
          INNER_WINE_TRANSFORM.surfacePosition
        }
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
        scale={
          INNER_WINE_TRANSFORM.surfaceScale
        }
        renderOrder={2}
      >
        <circleGeometry
          args={[1, 48]}
        />

        <meshStandardMaterial
          color="#7b0824"
          roughness={0.3}
          metalness={0}
          transparent
          opacity={0.92}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Dudak kısmına yaklaşan küçük hacim */}
      <mesh
        position={
          INNER_WINE_TRANSFORM.lipBlobPosition
        }
        scale={
          INNER_WINE_TRANSFORM.lipBlobScale
        }
        renderOrder={2}
      >
        <sphereGeometry
          args={[1, 32, 32]}
        />

        <meshPhysicalMaterial
          color="#8a0a28"
          roughness={0.18}
          metalness={0}
          clearcoat={0.2}
          transmission={0.01}
          transparent
          opacity={0.98}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}