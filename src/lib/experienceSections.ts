import {
  EXPERIENCE_MANIFEST,
  type ExperienceSection,
} from "@/config/experience";

export function getExperienceSection(
  section: ExperienceSection,
) {
  return EXPERIENCE_MANIFEST[section];
}