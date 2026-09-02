"use client";

import { useFrame } from "@react-three/fiber";
import {
  useMemo,
  useRef,
} from "react";
import * as THREE from "three";

import {
  WINE_POUR_END_PROGRESS,
  WINE_TRAIL_CURVE,
} from "@/lib/experiencePath";

import { createRibbonGeometry } from "@/lib/createRibbonGeometry";

import { useExperienceStore } from "@/store/experience";

const vertexShader = /* glsl */ `
  varying vec2 vUv;

  uniform float uTime;

  void main() {
    vUv = uv;

    vec3 transformed = position;

    /**
     * Şimdilik çok hafif yüzey hareketi.
     * Finalde daha rafine olabilir.
     */
    float wave =
      sin(
        uv.x * 70.0 +
        uTime * 0.4
      ) * 0.002;

    transformed.y += wave;

    gl_Position =
      projectionMatrix *
      modelViewMatrix *
      vec4(
        transformed,
        1.0
      );
  }
`;

const fragmentShader = /* glsl */ `
  varying vec2 vUv;

  uniform float uProgress;
  uniform float uTime;

  void main() {
    /**
     * Wine head'den sonrasını çizme.
     */
    if (
      vUv.x >
      uProgress
    ) {
      discard;
    }

    /**
     * Şeridin merkezine uzaklık.
     *
     * 0 = merkez
     * 1 = kenar
     */
    float edge =
      abs(
        vUv.y - 0.5
      ) * 2.0;

    /**
     * Kenarı kusursuz çizgi olmaktan çıkar.
     */
    float irregularity =
      sin(
        vUv.x * 93.0
      ) *
        0.035 +
      sin(
        vUv.x * 217.0
      ) *
        0.018;

    float edgeMask =
      1.0 -
      smoothstep(
        0.78 +
          irregularity,
        1.0 +
          irregularity,
        edge
      );

    /**
     * Şarabın ortası daha koyu.
     */
    vec3 deepWine =
      vec3(
        0.20,
        0.008,
        0.035
      );

    vec3 wine =
      vec3(
        0.38,
        0.018,
        0.075
      );

    vec3 color =
      mix(
        deepWine,
        wine,
        edge * 0.65
      );

    /**
     * Wine head civarında hafif ıslaklık/parlama.
     */
    float headDistance =
      abs(
        vUv.x -
        uProgress
      );

    float headHighlight =
      1.0 -
      smoothstep(
        0.0,
        0.035,
        headDistance
      );

    color +=
      vec3(
        0.12,
        0.025,
        0.035
      ) *
      headHighlight;

    gl_FragColor =
      vec4(
        color,
        edgeMask
      );
  }
`;

export function WineTrail() {
  const materialRef =
    useRef<THREE.ShaderMaterial>(
      null,
    );

  const wineProgress =
    useExperienceStore(
      (state) =>
        state.wineProgress,
    );

  const geometry =
    useMemo(() => {
      return createRibbonGeometry({
        curve:
          WINE_TRAIL_CURVE,

        segments: 500,

        width: 0.24,
      });
    }, []);

  /**
   * Global progress'i trail progress'e çevir.
   */
  const trailProgress =
    THREE.MathUtils.clamp(
      (
        wineProgress -
        WINE_POUR_END_PROGRESS
      ) /
        (
          1 -
          WINE_POUR_END_PROGRESS
        ),
      0,
      1,
    );

  useFrame(
    (_, delta) => {
      const material =
        materialRef.current;

      if (!material) {
        return;
      }

      material.uniforms
        .uProgress.value =
        trailProgress;

      material.uniforms
        .uTime.value +=
        delta;
    },
  );

  return (
    <mesh
      geometry={geometry}
      frustumCulled={false}
    >
      <shaderMaterial
        ref={materialRef}
        vertexShader={
          vertexShader
        }
        fragmentShader={
          fragmentShader
        }
        transparent
        depthWrite={false}
        uniforms={{
          uProgress: {
            value: 0,
          },

          uTime: {
            value: 0,
          },
        }}
      />
    </mesh>
  );
}