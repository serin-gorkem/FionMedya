import type { ComponentType } from "react";
import type { ServiceMockupType } from "../services.types";
import AdsMockup from "./AdsMockup";
import DesignMockup from "./DesignMockup";
import SocialMockup from "./SocialMockup";

type ServiceMockupProps = {
  type: ServiceMockupType;
};

const mockupRegistry: Record<ServiceMockupType, ComponentType> = {
  social: SocialMockup,
  design: DesignMockup,
  ads: AdsMockup,
};

export default function ServiceMockup({ type }: ServiceMockupProps) {
  const Mockup = mockupRegistry[type];
  return <Mockup />;
}
