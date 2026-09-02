import * as THREE from "three";

export const EXPERIENCE_PATH_POINTS = [
  new THREE.Vector3(-2, 0.06, 1),
  new THREE.Vector3(-1, 0.06, 0.6),
  new THREE.Vector3(0.5, 0.06, 0),
  new THREE.Vector3(2, 0.06, -1),
  new THREE.Vector3(1, 0.06, -3),
  new THREE.Vector3(-1.5, 0.06, -5),
  new THREE.Vector3(-2.5, 0.06, -7),
  new THREE.Vector3(0, 0.06, -9),
  new THREE.Vector3(2.5, 0.06, -11),
  new THREE.Vector3(1, 0.06, -14),
  new THREE.Vector3(-1, 0.06, -17),
  new THREE.Vector3(0, 0.06, -20),
];

export const EXPERIENCE_CURVE =
  new THREE.CatmullRomCurve3(
    EXPERIENCE_PATH_POINTS,
    false,
    "catmullrom",
    0.35,
  );