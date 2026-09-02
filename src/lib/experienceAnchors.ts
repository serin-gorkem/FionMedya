import * as THREE from "three";

import {
  EXPERIENCE_ANCHORS,
  type ExperienceAnchor,
} from "@/config/experienceAnchors";

import { EXPERIENCE_CURVE } from "@/lib/experiencePath";

export function getExperienceAnchorPosition(
  anchor: ExperienceAnchor,
  target = new THREE.Vector3(),
) {
  const progress =
    EXPERIENCE_ANCHORS[anchor];

  EXPERIENCE_CURVE.getPointAt(
    progress,
    target,
  );

  return target;
}