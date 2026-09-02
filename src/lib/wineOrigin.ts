import * as THREE from "three";

import {
  HERO_GLASS_TRANSFORM,
  WINE_ORIGIN_LOCAL,
} from "@/config/heroGlass";

const heroGlassMatrix =
  new THREE.Matrix4();

const heroGlassPosition =
  new THREE.Vector3(
    ...HERO_GLASS_TRANSFORM.position,
  );

const heroGlassRotation =
  new THREE.Euler(
    ...HERO_GLASS_TRANSFORM.rotation,
  );

const heroGlassQuaternion =
  new THREE.Quaternion().setFromEuler(
    heroGlassRotation,
  );

const heroGlassScale =
  new THREE.Vector3(
    HERO_GLASS_TRANSFORM.scale,
    HERO_GLASS_TRANSFORM.scale,
    HERO_GLASS_TRANSFORM.scale,
  );

heroGlassMatrix.compose(
  heroGlassPosition,
  heroGlassQuaternion,
  heroGlassScale,
);

export function getWineOriginWorldPosition(
  target = new THREE.Vector3(),
) {
  target
    .set(
      ...WINE_ORIGIN_LOCAL,
    )
    .applyMatrix4(
      heroGlassMatrix,
    );

  return target;
}