"use client";

import {
  EXPERIENCE_POLICIES,
} from "@/config/experiencePolicy";

import {
  WORLD_OBJECTS,
  type WorldObjectConfig,
} from "@/config/worldEnvironment";

import {
  getExperienceAnchorPosition,
} from "@/lib/experienceAnchors";

import {
  useExperienceStore,
} from "@/store/experience";

export function WorldEnvironment() {
  const experienceMode =
    useExperienceStore(
      (state) =>
        state.experienceMode,
    );

  const allowedPriorities =
    EXPERIENCE_POLICIES[
      experienceMode
    ].worldPriorities;

  const visibleObjects =
    WORLD_OBJECTS.filter(
      (object) =>
        allowedPriorities.includes(
          object.priority,
        ),
    );

  return (
    <group>
      {visibleObjects.map(
        (object) => (
          <WorldObject
            key={object.id}
            config={object}
          />
        ),
      )}
    </group>
  );
}

type WorldObjectProps = {
  config: WorldObjectConfig;
};

function WorldObject({
  config,
}: WorldObjectProps) {
  const anchorPosition =
    getExperienceAnchorPosition(
      config.anchor,
    );

  const position = [
    anchorPosition.x +
      config.offset[0],

    config.scale[1] / 2,

    anchorPosition.z +
      config.offset[1],
  ] as const;

  const rotation =
    config.rotation ?? 0;

  if (
    config.type === "tile"
  ) {
    return (
      <Tile
        position={position}
        scale={config.scale}
        rotation={rotation}
      />
    );
  }

  if (
    config.type ===
    "monolith"
  ) {
    return (
      <BoxObject
        position={position}
        scale={config.scale}
        rotation={rotation}
        color="#dedad2"
        roughness={0.74}
      />
    );
  }

  return (
    <BoxObject
      position={position}
      scale={config.scale}
      rotation={rotation}
      color="#e5e1d9"
      roughness={0.82}
    />
  );
}

type PrimitiveProps = {
  position: readonly [
    number,
    number,
    number,
  ];

  scale: readonly [
    number,
    number,
    number,
  ];

  rotation: number;
};

type BoxObjectProps =
  PrimitiveProps & {
    color: string;
    roughness: number;
  };

function BoxObject({
  position,
  scale,
  rotation,
  color,
  roughness,
}: BoxObjectProps) {
  return (
    <mesh
      position={position}
      rotation={[
        0,
        rotation,
        0,
      ]}
      scale={scale}
      castShadow
      receiveShadow
    >
      <boxGeometry
        args={[1, 1, 1]}
      />

      <meshStandardMaterial
        color={color}
        roughness={
          roughness
        }
      />
    </mesh>
  );
}

function Tile({
  position,
  scale,
  rotation,
}: PrimitiveProps) {
  return (
    <group
      position={position}
      rotation={[
        0,
        rotation,
        0,
      ]}
    >
      <mesh
        scale={scale}
        castShadow
        receiveShadow
      >
        <boxGeometry
          args={[1, 1, 1]}
        />

        <meshStandardMaterial
          color="#e8e4dc"
          roughness={0.76}
        />
      </mesh>

      <mesh
        position={[
          0,
          scale[1] / 2 +
            0.012,
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
            scale[0] * 0.78,
            scale[2] * 0.78,
          ]}
        />

        <meshStandardMaterial
          color="#d5d1ca"
          roughness={0.9}
        />
      </mesh>
    </group>
  );
}