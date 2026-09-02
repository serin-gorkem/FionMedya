import * as THREE from "three";

type CreateRibbonGeometryOptions = {
  curve: THREE.Curve<THREE.Vector3>;
  segments?: number;
  width?: number;
};

export function createRibbonGeometry({
  curve,
  segments = 500,
  width = 0.22,
}: CreateRibbonGeometryOptions) {
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  const point =
    new THREE.Vector3();

  const tangent =
    new THREE.Vector3();

  const side =
    new THREE.Vector3();

  for (
    let index = 0;
    index <= segments;
    index++
  ) {
    const progress =
      index / segments;

    curve.getPointAt(
      progress,
      point,
    );

    curve.getTangentAt(
      progress,
      tangent,
    );

    /**
     * XZ yüzeyinde tangent'a dik vektör.
     */
    side.set(
      -tangent.z,
      0,
      tangent.x,
    );

    if (
      side.lengthSq() <
      0.000001
    ) {
      side.set(1, 0, 0);
    }

    side.normalize();

    /**
     * Hafif organik width variation.
     *
     * Shader'a geçmeden bile mekanik
     * görünmesini azaltıyor.
     */
    const widthVariation =
      1 +
      Math.sin(
        progress * 31,
      ) *
        0.08 +
      Math.sin(
        progress * 73,
      ) *
        0.035;

    const halfWidth =
      (width *
        widthVariation) /
      2;

    const left =
      point
        .clone()
        .addScaledVector(
          side,
          halfWidth,
        );

    const right =
      point
        .clone()
        .addScaledVector(
          side,
          -halfWidth,
        );

    /**
     * Z-fighting engellemek için
     * zeminin çok az üstünde.
     */
    left.y += 0.012;
    right.y += 0.012;

    positions.push(
      left.x,
      left.y,
      left.z,

      right.x,
      right.y,
      right.z,
    );

    /**
     * u = rota progress
     * v = şeridin solu / sağı
     */
    uvs.push(
      progress,
      0,

      progress,
      1,
    );

    if (
      index <
      segments
    ) {
      const a =
        index * 2;

      const b =
        a + 1;

      const c =
        a + 2;

      const d =
        a + 3;

      indices.push(
        a,
        c,
        b,

        c,
        d,
        b,
      );
    }
  }

  const geometry =
    new THREE.BufferGeometry();

  geometry.setAttribute(
    "position",

    new THREE.Float32BufferAttribute(
      positions,
      3,
    ),
  );

  geometry.setAttribute(
    "uv",

    new THREE.Float32BufferAttribute(
      uvs,
      2,
    ),
  );

  geometry.setIndex(indices);

  geometry.computeVertexNormals();

  return geometry;
}