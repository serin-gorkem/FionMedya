import * as THREE from "three";

export function getSectionProgress(
  progress: number,
  start: number,
  end: number,
) {
  if (end <= start) {
    return 0;
  }

  return THREE.MathUtils.clamp(
    (progress - start) / (end - start),
    0,
    1,
  );
}