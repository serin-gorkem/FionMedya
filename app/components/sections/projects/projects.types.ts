export type ProjectAccentType = "camera" | "record" | "frame";
export type ProjectSide = "left" | "right";

export type Project = {
  number: string;
  client: string;
  eyebrow: string;
  headline: string;
  description: string;
  result: string;
  tags: readonly string[];
  images: readonly [string, string];
  align: ProjectSide;
  accent: ProjectAccentType;
};
