export type ServiceMockupType = "social" | "design" | "ads";
export type ServiceSide = "left" | "right";

export type ServiceItem = {
  number: string;
  title: string;
  label: string;
  description: string;
  tags: readonly string[];
  mockup: ServiceMockupType;
  align: ServiceSide;
};
