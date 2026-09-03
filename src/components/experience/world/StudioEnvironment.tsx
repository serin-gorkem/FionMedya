"use client";

import {
  useEffect,
  useMemo,
} from "react";

import * as THREE from "three";

import type {
  ExperienceMode,
} from "@/config/experiencePolicy";

type StudioEnvironmentProps = {
  mode: ExperienceMode;
};

type Transform = {
  position: readonly [
    number,
    number,
    number,
  ];

  rotation: number;

  scale: number;
};

/* ========================================
   LAYOUT

   Generic website'in hemen dışındalar.

   Sıra:
   CAMERA
      ↓
   MONITOR
      ↓
   LAPTOP
      ↓
   PHONE
      ↓
   INSTAGRAM
      ↓
   WEBSITE MOCKUP
======================================== */

const STUDIO_LAYOUTS = {
  desktop: {
    camera: {
      position: [5.75, 0, 1.45],
      rotation: -1.05,
      scale: 0.9,
    },

    monitor: {
      position: [4.75, 0, -3.55],
      rotation: -0.45,
      scale: 0.9,
    },

    laptop: {
      position: [2.85, 0, -3.95],
      rotation: -0.18,
      scale: 0.9,
    },

    phone: {
      position: [1.15, 0, -4.08],
      rotation: 0.15,
      scale: 0.95,
    },

    instagram: {
      position: [-0.55, 0, -4.08],
      rotation: -0.08,
      scale: 0.9,
    },

    website: {
      position: [-3.15, 0, -3.75],
      rotation: 0.32,
      scale: 0.9,
    },
  },

  tablet: {
    camera: {
      position: [3.88, 0, 1.5],
      rotation: -0.95,
      scale: 0.78,
    },

    monitor: {
      position: [3.28, 0, -4.48],
      rotation: -0.42,
      scale: 0.76,
    },

    laptop: {
      position: [1.95, 0, -4.72],
      rotation: -0.15,
      scale: 0.76,
    },

    phone: {
      position: [0.72, 0, -4.8],
      rotation: 0.16,
      scale: 0.82,
    },

    instagram: {
      position: [-0.52, 0, -4.8],
      rotation: -0.08,
      scale: 0.75,
    },

    website: {
      position: [-2.35, 0, -4.52],
      rotation: 0.3,
      scale: 0.76,
    },
  },

  mobile: {
    camera: {
      position: [2.32, 0, 1.4],
      rotation: -0.82,
      scale: 0.62,
    },

    monitor: {
      position: [2.05, 0, -4.03],
      rotation: -0.38,
      scale: 0.58,
    },

    laptop: {
      position: [1.12, 0, -4.15],
      rotation: -0.12,
      scale: 0.58,
    },

    phone: {
      position: [0.32, 0, -4.2],
      rotation: 0.15,
      scale: 0.66,
    },

    instagram: {
      position: [-0.48, 0, -4.2],
      rotation: -0.05,
      scale: 0.58,
    },

    website: {
      position: [-1.48, 0, -4.05],
      rotation: 0.25,
      scale: 0.58,
    },
  },
} satisfies Record<
  ExperienceMode,
  {
    camera: Transform;
    monitor: Transform;
    laptop: Transform;
    phone: Transform;
    instagram: Transform;
    website: Transform;
  }
>;

/* ========================================
   MAIN
======================================== */

export function StudioEnvironment({
  mode,
}: StudioEnvironmentProps) {
  const layout =
    STUDIO_LAYOUTS[mode];

  return (
    <group>
      <CinemaCamera
        {...layout.camera}
      />

      <ProductionMonitor
        {...layout.monitor}
      />

      <Laptop
        {...layout.laptop}
      />

      <Phone
        {...layout.phone}
      />

      <InstagramObject
        {...layout.instagram}
      />

      <WebsiteMockup
        {...layout.website}
      />
    </group>
  );
}

/* ========================================
   CAMERA
======================================== */

function CinemaCamera({
  position,
  rotation,
  scale,
}: Transform) {
  return (
    <group
      position={position}
      rotation={[
        0,
        rotation,
        0,
      ]}
      scale={scale}
    >
      {/* Tripod */}

      <mesh
        position={[0, 0.65, 0]}
        castShadow
      >
        <cylinderGeometry
          args={[
            0.055,
            0.07,
            1.25,
            14,
          ]}
        />

        <DarkMetal />
      </mesh>

      <TripodLeg
        rotation={0}
      />

      <TripodLeg
        rotation={
          (Math.PI * 2) / 3
        }
      />

      <TripodLeg
        rotation={
          (Math.PI * 4) / 3
        }
      />

      {/* Camera body */}

      <mesh
        position={[
          0,
          1.55,
          0,
        ]}
        castShadow
      >
        <boxGeometry
          args={[
            1,
            0.58,
            0.62,
          ]}
        />

        <meshStandardMaterial
          color="#191918"
          roughness={0.42}
          metalness={0.3}
        />
      </mesh>

      {/* Top rig */}

      <mesh
        position={[
          -0.05,
          1.95,
          0,
        ]}
        castShadow
      >
        <boxGeometry
          args={[
            0.62,
            0.18,
            0.4,
          ]}
        />

        <DarkMetal />
      </mesh>

      {/* Handle */}

      <mesh
        position={[
          0,
          2.18,
          0,
        ]}
        castShadow
      >
        <boxGeometry
          args={[
            0.52,
            0.09,
            0.12,
          ]}
        />

        <DarkMetal />
      </mesh>

      {/* Lens */}

      <mesh
        position={[
          0,
          1.55,
          -0.58,
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
        castShadow
      >
        <cylinderGeometry
          args={[
            0.21,
            0.29,
            0.64,
            32,
          ]}
        />

        <meshStandardMaterial
          color="#101010"
          roughness={0.2}
          metalness={0.42}
        />
      </mesh>

      {/* Lens glass */}

      <mesh
        position={[
          0,
          1.55,
          -0.91,
        ]}
        rotation={[
          Math.PI / 2,
          0,
          0,
        ]}
      >
        <circleGeometry
          args={[
            0.185,
            32,
          ]}
        />

        <meshPhysicalMaterial
          color="#203238"
          roughness={0.06}
          clearcoat={0.8}
          clearcoatRoughness={0.03}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
}

function TripodLeg({
  rotation,
}: {
  rotation: number;
}) {
  return (
    <group
      rotation={[
        0,
        rotation,
        0,
      ]}
    >
      <mesh
        position={[
          0,
          0.34,
          0.52,
        ]}
        rotation={[
          0.78,
          0,
          0,
        ]}
        castShadow
      >
        <cylinderGeometry
          args={[
            0.035,
            0.045,
            1.05,
            10,
          ]}
        />

        <DarkMetal />
      </mesh>
    </group>
  );
}

/* ========================================
   PRODUCTION MONITOR
======================================== */

function ProductionMonitor({
  position,
  rotation,
  scale,
}: Transform) {
  return (
    <group
      position={position}
      rotation={[
        0,
        rotation,
        0,
      ]}
      scale={scale}
    >
      <mesh
        position={[
          0,
          1.15,
          0,
        ]}
        castShadow
      >
        <boxGeometry
          args={[
            1.45,
            0.9,
            0.2,
          ]}
        />

        <DarkPlastic />
      </mesh>

      <mesh
        position={[
          0,
          1.15,
          -0.106,
        ]}
      >
        <planeGeometry
          args={[
            1.25,
            0.7,
          ]}
        />

        <meshPhysicalMaterial
          color="#12171a"
          roughness={0.12}
          clearcoat={0.65}
          clearcoatRoughness={0.04}
        />
      </mesh>

      {/* Stand */}

      <mesh
        position={[
          0,
          0.52,
          0,
        ]}
        castShadow
      >
        <cylinderGeometry
          args={[
            0.045,
            0.06,
            0.72,
            12,
          ]}
        />

        <DarkMetal />
      </mesh>

      <mesh
        position={[
          0,
          0.08,
          0,
        ]}
        scale={[
          0.62,
          0.07,
          0.38,
        ]}
        castShadow
      >
        <boxGeometry />

        <DarkMetal />
      </mesh>
    </group>
  );
}

/* ========================================
   LAPTOP
======================================== */

function Laptop({
  position,
  rotation,
  scale,
}: Transform) {
  return (
    <group
      position={position}
      rotation={[
        0,
        rotation,
        0,
      ]}
      scale={scale}
    >
      {/* Keyboard/base */}

      <mesh
        position={[
          0,
          0.08,
          0.25,
        ]}
        scale={[
          0.95,
          0.08,
          0.68,
        ]}
        castShadow
      >
        <boxGeometry />

        <meshStandardMaterial
          color="#bcbab4"
          roughness={0.38}
          metalness={0.52}
        />
      </mesh>

      {/* Keyboard inset */}

      <mesh
        position={[
          0,
          0.165,
          0.2,
        ]}
        scale={[
          0.72,
          0.012,
          0.42,
        ]}
      >
        <boxGeometry />

        <meshStandardMaterial
          color="#262624"
          roughness={0.65}
        />
      </mesh>

      {/* Screen group */}

      <group
        position={[
          0,
          0.15,
          -0.38,
        ]}
        rotation={[
          -1.05,
          0,
          0,
        ]}
      >
        <mesh
          position={[
            0,
            0.58,
            0,
          ]}
          scale={[
            0.95,
            0.63,
            0.045,
          ]}
          castShadow
        >
          <boxGeometry />

          <meshStandardMaterial
            color="#aaa8a2"
            roughness={0.36}
            metalness={0.5}
          />
        </mesh>

        <mesh
          position={[
            0,
            0.58,
            -0.051,
          ]}
        >
          <planeGeometry
            args={[
              1.7,
              1.02,
            ]}
          />

          <meshPhysicalMaterial
            color="#15191c"
            roughness={0.11}
            clearcoat={0.55}
          />
        </mesh>
      </group>
    </group>
  );
}

/* ========================================
   PHONE
======================================== */

function Phone({
  position,
  rotation,
  scale,
}: Transform) {
  return (
    <group
      position={position}
      rotation={[
        0,
        rotation,
        0,
      ]}
      scale={scale}
    >
      <mesh
        position={[
          0,
          0.08,
          0,
        ]}
        scale={[
          0.42,
          0.075,
          0.82,
        ]}
        castShadow
      >
        <boxGeometry />

        <meshStandardMaterial
          color="#191919"
          roughness={0.3}
          metalness={0.25}
        />
      </mesh>

      <mesh
        position={[
          0,
          0.158,
          0,
        ]}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
      >
        <planeGeometry
          args={[
            0.76,
            1.52,
          ]}
        />

        <meshPhysicalMaterial
          color="#232d31"
          roughness={0.08}
          clearcoat={0.8}
          clearcoatRoughness={0.03}
        />
      </mesh>

      {/* Camera bump */}

      <mesh
        position={[
          -0.22,
          0.175,
          -0.52,
        ]}
        scale={[
          0.13,
          0.03,
          0.13,
        ]}
      >
        <cylinderGeometry
          args={[
            1,
            1,
            1,
            24,
          ]}
        />

        <meshStandardMaterial
          color="#090909"
          roughness={0.18}
        />
      </mesh>
    </group>
  );
}

/* ========================================
   INSTAGRAM OBJECT
======================================== */

function InstagramObject({
  position,
  rotation,
  scale,
}: Transform) {
  const texture =
    useInstagramTexture();

  return (
    <group
      position={position}
      rotation={[
        0,
        rotation,
        0,
      ]}
      scale={scale}
    >
      <mesh
        position={[
          0,
          0.08,
          0,
        ]}
        scale={[
          0.72,
          0.08,
          0.72,
        ]}
        castShadow
      >
        <boxGeometry />

        <meshStandardMaterial
          color="#252322"
          roughness={0.48}
        />
      </mesh>

      <mesh
        position={[
          0,
          0.165,
          0,
        ]}
        rotation={[
          -Math.PI / 2,
          0,
          0,
        ]}
      >
        <planeGeometry
          args={[
            1.32,
            1.32,
          ]}
        />

        <meshBasicMaterial
          map={texture}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function useInstagramTexture() {
  const texture =
    useMemo(() => {
      if (
        typeof document ===
        "undefined"
      ) {
        return null;
      }

      const canvas =
        document.createElement(
          "canvas",
        );

      canvas.width = 512;
      canvas.height = 512;

      const ctx =
        canvas.getContext("2d");

      if (!ctx) {
        return null;
      }

      const gradient =
        ctx.createLinearGradient(
          40,
          500,
          470,
          20,
        );

      gradient.addColorStop(
        0,
        "#f6b044",
      );

      gradient.addColorStop(
        0.38,
        "#d62870",
      );

      gradient.addColorStop(
        0.7,
        "#8134af",
      );

      gradient.addColorStop(
        1,
        "#405de6",
      );

      ctx.fillStyle =
        gradient;

      ctx.fillRect(
        0,
        0,
        512,
        512,
      );

      ctx.strokeStyle =
        "#ffffff";

      ctx.lineWidth = 34;

      ctx.beginPath();

      ctx.roundRect(
        105,
        105,
        302,
        302,
        78,
      );

      ctx.stroke();

      ctx.beginPath();

      ctx.arc(
        256,
        256,
        76,
        0,
        Math.PI * 2,
      );

      ctx.stroke();

      ctx.fillStyle =
        "#ffffff";

      ctx.beginPath();

      ctx.arc(
        355,
        160,
        22,
        0,
        Math.PI * 2,
      );

      ctx.fill();

      const nextTexture =
        new THREE.CanvasTexture(
          canvas,
        );

      nextTexture.colorSpace =
        THREE.SRGBColorSpace;

      nextTexture.needsUpdate =
        true;

      return nextTexture;
    }, []);

  useEffect(() => {
    return () => {
      texture?.dispose();
    };
  }, [texture]);

  return texture ??
    undefined;
}

/* ========================================
   WEBSITE MOCKUP
======================================== */

function WebsiteMockup({
  position,
  rotation,
  scale,
}: Transform) {
  return (
    <group
      position={position}
      rotation={[
        0,
        rotation,
        0,
      ]}
      scale={scale}
    >
      {/* Stand */}

      <mesh
        position={[
          0,
          0.45,
          0,
        ]}
        castShadow
      >
        <cylinderGeometry
          args={[
            0.04,
            0.055,
            0.9,
            12,
          ]}
        />

        <DarkMetal />
      </mesh>

      <mesh
        position={[
          0,
          0.05,
          0,
        ]}
        scale={[
          0.55,
          0.05,
          0.32,
        ]}
        castShadow
      >
        <boxGeometry />

        <DarkMetal />
      </mesh>

      {/* Browser panel */}

      <mesh
        position={[
          0,
          1.2,
          0,
        ]}
        rotation={[
          -0.08,
          0,
          0,
        ]}
        castShadow
      >
        <boxGeometry
          args={[
            1.75,
            1.12,
            0.11,
          ]}
        />

        <meshStandardMaterial
          color="#dedbd4"
          roughness={0.48}
          metalness={0.08}
        />
      </mesh>

      {/* Screen */}

      <group
        position={[
          0,
          1.2,
          -0.061,
        ]}
      >
        <mesh>
          <planeGeometry
            args={[
              1.58,
              0.94,
            ]}
          />

          <meshBasicMaterial
            color="#f0ece4"
          />
        </mesh>

        {/* Browser bar */}

        <mesh
          position={[
            0,
            0.39,
            -0.002,
          ]}
        >
          <planeGeometry
            args={[
              1.58,
              0.13,
            ]}
          />

          <meshBasicMaterial
            color="#d1cdc5"
          />
        </mesh>

        {/* Fake hero */}

        <mesh
          position={[
            -0.4,
            0.08,
            -0.004,
          ]}
        >
          <planeGeometry
            args={[
              0.56,
              0.18,
            ]}
          />

          <meshBasicMaterial
            color="#171311"
          />
        </mesh>

        <mesh
          position={[
            -0.46,
            -0.13,
            -0.004,
          ]}
        >
          <planeGeometry
            args={[
              0.44,
              0.07,
            ]}
          />

          <meshBasicMaterial
            color="#651526"
          />
        </mesh>

        {/* Image block */}

        <mesh
          position={[
            0.43,
            -0.02,
            -0.004,
          ]}
        >
          <planeGeometry
            args={[
              0.55,
              0.58,
            ]}
          />

          <meshBasicMaterial
            color="#c7c2b9"
          />
        </mesh>
      </group>
    </group>
  );
}

/* ========================================
   MATERIAL HELPERS
======================================== */

function DarkMetal() {
  return (
    <meshStandardMaterial
      color="#242321"
      roughness={0.5}
      metalness={0.36}
    />
  );
}

function DarkPlastic() {
  return (
    <meshStandardMaterial
      color="#20201f"
      roughness={0.58}
      metalness={0.08}
    />
  );
}