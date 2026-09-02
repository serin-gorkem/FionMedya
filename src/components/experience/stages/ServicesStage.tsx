"use client";

import { useFrame } from "@react-three/fiber";

import { useEffect, useMemo, useRef } from "react";

import * as THREE from "three";

import { EXPERIENCE_SECTIONS } from "@/config/experience";

import { SERVICES, type ServiceDefinition } from "@/config/services";

import { getExperienceAnchorPosition } from "@/lib/experienceAnchors";

import { getSectionProgress } from "@/lib/progress";

import { useExperienceStore } from "@/store/experience";

const SERVICES_POSITION = getExperienceAnchorPosition("services");

export function ServicesStage() {
  const scrollProgress = useExperienceStore((state) => state.scrollProgress);

  const progress = getSectionProgress(
    scrollProgress,

    EXPERIENCE_SECTIONS.services.start,
    EXPERIENCE_SECTIONS.services.end,
  );

  return (
    <group position={[SERVICES_POSITION.x, 0.085, SERVICES_POSITION.z]}>
      {SERVICES.map((service) => (
        <ServiceBranch
          key={service.id}
          service={service}
          sectionProgress={progress}
        />
      ))}
    </group>
  );
}

type ServiceBranchProps = {
  service: ServiceDefinition;

  sectionProgress: number;
};

function ServiceBranch({ service, sectionProgress }: ServiceBranchProps) {
  const meshRef = useRef<THREE.Mesh<THREE.TubeGeometry>>(null);

  const nodeRef = useRef<THREE.Mesh>(null);

  const curve = useMemo(() => {
    const points = service.branchPoints.map(
      ([x, y, z]) => new THREE.Vector3(x, y, z),
    );

    return new THREE.CatmullRomCurve3(points, false, "catmullrom", 0.4);
  }, [service]);

  const geometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 80, 0.038, 8, false);
  }, [curve]);
  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  const endPoint = useMemo(() => {
    return curve.getPointAt(1);
  }, [curve]);

  useFrame(() => {
    const mesh = meshRef.current;

    const node = nodeRef.current;

    if (!mesh || !mesh.geometry.index) {
      return;
    }

    const reveal = THREE.MathUtils.clamp(
      (sectionProgress - service.revealAt) / 0.2,
      0,
      1,
    );

    const eased = THREE.MathUtils.smoothstep(reveal, 0, 1);

    const indexCount = mesh.geometry.index.count;

    mesh.geometry.setDrawRange(
      0,

      Math.floor(indexCount * eased),
    );

    if (node) {
      const nodeReveal = THREE.MathUtils.smoothstep(reveal, 0.72, 1);

      const scale = THREE.MathUtils.lerp(0.01, 1, nodeReveal);

      node.scale.setScalar(scale);
    }
  });

  return (
    <>
      <mesh ref={meshRef} geometry={geometry}>
        <meshPhysicalMaterial
          color="#651526"
          roughness={0.28}
          metalness={0}
          clearcoat={0.12}
        />
      </mesh>

      <mesh
        ref={nodeRef}
        position={[endPoint.x, endPoint.y + 0.035, endPoint.z]}
        scale={0.01}
      >
        <sphereGeometry args={[0.12, 24, 24]} />

        <meshPhysicalMaterial
          color="#651526"
          roughness={0.24}
          clearcoat={0.18}
        />
      </mesh>
    </>
  );
}
