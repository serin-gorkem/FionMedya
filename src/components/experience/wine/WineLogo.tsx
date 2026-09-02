"use client";

import {
  useFrame,
} from "@react-three/fiber";

import {
  useTexture,
} from "@react-three/drei";

import {
  useRef,
} from "react";

import * as THREE from "three";

import {
  getExperienceAnchorPosition,
} from "@/lib/experienceAnchors";

const LOGO_PATH =
  "/images/fion-logo.png";

const CONTACT_POSITION =
  getExperienceAnchorPosition(
    "contact",
  );

/**
 * Şimdilik çalışma değerleri.
 * Final composition'da fine tune ederiz.
 */
const LOGO_WIDTH = 6.4;
const LOGO_HEIGHT = 1.79;

const LOGO_OFFSET_X = 0.55;
const LOGO_OFFSET_Z = -0.45;

const vertexShader = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;

    gl_Position =
      projectionMatrix *
      modelViewMatrix *
      vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec2 vUv;

  uniform sampler2D uLogo;
  uniform float uFillProgress;
  uniform float uTime;

  float hash(float n) {
    return fract(
      sin(n) *
      43758.5453123
    );
  }

  float noise(float x) {
    float i = floor(x);
    float f = fract(x);

    float a = hash(i);
    float b = hash(i + 1.0);

    float u =
      f * f *
      (3.0 - 2.0 * f);

    return mix(
      a,
      b,
      u
    );
  }

  void main() {
    vec4 logoSample =
      texture2D(
        uLogo,
        vUv
      );

    /**
     * PNG'nin alpha kanalı
     * bizim logo maskemiz.
     */
    float logoMask =
      logoSample.a;

    if (logoMask < 0.01) {
      discard;
    }

    /**
     * Sıvı sınırını kusursuz düz
     * olmaktan çıkarıyoruz.
     */
    float largeWave =
      sin(
        vUv.y * 12.0 +
        uTime * 0.35
      ) * 0.025;

    float smallWave =
      sin(
        vUv.y * 41.0 -
        uTime * 0.2
      ) * 0.012;

    float organicNoise =
      (
        noise(
          vUv.y * 18.0 +
          uTime * 0.08
        ) -
        0.5
      ) * 0.035;

    /**
     * Soldan sağa ilerleyen
     * ana wine front.
     *
     * Biraz negatiften başladığı için
     * ilk frame tamamen boş.
     */
    float front =
      uFillProgress * 1.22 -
      0.1 +
      largeWave +
      smallWave +
      organicNoise;

    float liquidFill =
      1.0 -
      smoothstep(
        front - 0.025,
        front + 0.025,
        vUv.x
      );

    /**
     * Logo dolmadan önce çok hafif
     * bir ghost bırakıyoruz.
     *
     * Kullanıcı zeminde bir form
     * olduğunu sezebiliyor.
     */
    float ghost =
      logoMask *
      0.055;

    float wineAlpha =
      logoMask *
      liquidFill;

    vec3 deepWine =
      vec3(
        0.19,
        0.004,
        0.025
      );

    vec3 brightWine =
      vec3(
        0.42,
        0.018,
        0.07
      );

    /**
     * Harflerin içinde küçük
     * renk derinliği.
     */
    float depthVariation =
      sin(
        vUv.x * 14.0
      ) *
      0.5 +
      0.5;

    vec3 wineColor =
      mix(
        deepWine,
        brightWine,
        depthVariation * 0.28
      );

    float finalAlpha =
      max(
        ghost,
        wineAlpha * 0.96
      );

    gl_FragColor =
      vec4(
        wineColor,
        finalAlpha
      );
  }
`;

type WineLogoProps = {
  fillProgress: number;
};

export function WineLogo({
  fillProgress,
}: WineLogoProps) {
  const materialRef =
    useRef<THREE.ShaderMaterial>(
      null,
    );

  const logoTexture =
    useTexture(
      LOGO_PATH,
    );

  useFrame((_, delta) => {
    const material =
      materialRef.current;

    if (!material) {
      return;
    }

    const current =
      material.uniforms
        .uFillProgress.value;

    const damping =
      1 -
      Math.exp(
        -6 * delta,
      );

    material.uniforms
      .uFillProgress.value =
      THREE.MathUtils.lerp(
        current,
        fillProgress,
        damping,
      );

    material.uniforms
      .uTime.value +=
      delta;
  });

  return (
    <mesh
      position={[
        CONTACT_POSITION.x +
          LOGO_OFFSET_X,

        0.078,

        CONTACT_POSITION.z +
          LOGO_OFFSET_Z,
      ]}
      rotation={[
        -Math.PI / 2,
        0,
        0,
      ]}
      frustumCulled={
        false
      }
    >
      <planeGeometry
        args={[
          LOGO_WIDTH,
          LOGO_HEIGHT,
        ]}
      />

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
          uLogo: {
            value:
              logoTexture,
          },

          uFillProgress: {
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

useTexture.preload(
  LOGO_PATH,
);