import * as THREE from "three";

import {
  getWineOriginWorldPosition,
} from "@/lib/wineOrigin";

export const WINE_ORIGIN =
  getWineOriginWorldPosition();

/**
 * Kadehten çıkan şarabın zemine
 * ilk değdiği nokta.
 */
export const WINE_SURFACE_CONTACT =
  new THREE.Vector3(
    WINE_ORIGIN.x + 0.35,
    0.06,
    WINE_ORIGIN.z - 0.12,
  );

/**
 * Artık sıvı "rota" diline geçiyor.
 */
export const WINE_ROUTE_ENTRY =
  new THREE.Vector3(
    WINE_ORIGIN.x + 1.1,
    0.06,
    WINE_ORIGIN.z - 0.4,
  );

const surfacePathPoints = [
  WINE_SURFACE_CONTACT,

  WINE_ROUTE_ENTRY,

  new THREE.Vector3(
    -1,
    0.06,
    0.6,
  ),

  new THREE.Vector3(
    0.5,
    0.06,
    0,
  ),

  new THREE.Vector3(
    2,
    0.06,
    -1,
  ),

  new THREE.Vector3(
    1,
    0.06,
    -3,
  ),

  new THREE.Vector3(
    -1.5,
    0.06,
    -5,
  ),

  new THREE.Vector3(
    -2.5,
    0.06,
    -7,
  ),

  new THREE.Vector3(
    0,
    0.06,
    -9,
  ),

  new THREE.Vector3(
    2.5,
    0.06,
    -11,
  ),

  new THREE.Vector3(
    1,
    0.06,
    -14,
  ),

  new THREE.Vector3(
    -1,
    0.06,
    -17,
  ),

  new THREE.Vector3(
    0,
    0.06,
    -20,
  ),
];

/**
 * Kadehten zemine akan kısa fiziksel bölüm.
 */
export const WINE_POUR_CURVE =
  new THREE.CatmullRomCurve3(
    [
      WINE_ORIGIN,

      new THREE.Vector3(
        THREE.MathUtils.lerp(
          WINE_ORIGIN.x,
          WINE_SURFACE_CONTACT.x,
          0.45,
        ),

        THREE.MathUtils.lerp(
          WINE_ORIGIN.y,
          WINE_SURFACE_CONTACT.y,
          0.45,
        ) - 0.08,

        THREE.MathUtils.lerp(
          WINE_ORIGIN.z,
          WINE_SURFACE_CONTACT.z,
          0.45,
        ),
      ),

      WINE_SURFACE_CONTACT,
    ],
    false,
    "catmullrom",
    0.4,
  );

/**
 * Zemindeki düz rota.
 */
export const WINE_TRAIL_CURVE =
  new THREE.CatmullRomCurve3(
    surfacePathPoints,
    false,
    "catmullrom",
    0.35,
  );

/**
 * Kamera, WineHead ve anchor sisteminin
 * kullandığı tam yol.
 */
export const EXPERIENCE_PATH_POINTS = [
  WINE_ORIGIN,
  ...surfacePathPoints,
];

export const EXPERIENCE_CURVE =
  new THREE.CatmullRomCurve3(
    EXPERIENCE_PATH_POINTS,
    false,
    "catmullrom",
    0.35,
  );

/**
 * Global wineProgress'in ne kadarında
 * kadehten zemine dökülme tamamlanıyor?
 *
 * Şimdilik çalışma değeri.
 */
export const WINE_POUR_END_PROGRESS =
  0.055;