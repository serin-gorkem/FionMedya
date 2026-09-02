export function TippedGlass() {
  return (
    <group
      position={[-2.4, 0.35, 1]}
      rotation={[0, 0, Math.PI / 2.3]}
    >
      {/* Glass body */}
      <mesh>
        <cylinderGeometry args={[0.75, 0.5, 1.4, 64, 1, true]} />

        <meshPhysicalMaterial
          transparent
          opacity={0.42}
          roughness={0.08}
          transmission={1}
          thickness={0.2}
          ior={1.45}
        />
      </mesh>

      {/* Base */}
      <mesh position={[0, -0.75, 0]}>
        <cylinderGeometry args={[0.55, 0.55, 0.07, 64]} />

        <meshPhysicalMaterial
          transparent
          opacity={0.4}
          roughness={0.08}
          transmission={1}
          thickness={0.2}
        />
      </mesh>
    </group>
  );
}