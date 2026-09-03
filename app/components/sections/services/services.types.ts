export type ServiceMockupType =
  | "social"
  | "design"
  | "ads";

export type ServiceSide =
  | "left"
  | "right";

export type ServiceItem = {
  number: string;
  title: string;
  description: string;
  tags: readonly string[];
  mockup: ServiceMockupType;
  align: ServiceSide;
};