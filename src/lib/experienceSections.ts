import {
  EXPERIENCE_SECTIONS,
  type ExperienceSection,
} from "@/config/experience";

export function getExperienceSection(
  section: ExperienceSection,
) {
  return EXPERIENCE_SECTIONS[
    section
  ];
}