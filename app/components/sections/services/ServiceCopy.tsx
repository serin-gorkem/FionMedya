import PillList from "@/app/components/ui/PillList";
import TextLink from "@/app/components/ui/TextLink";
import type { ServiceItem } from "./services.types";

type ServiceCopyProps = {
  service: ServiceItem;
};

export default function ServiceCopy({ service }: ServiceCopyProps) {
  const headingId = `service-${service.number}`;

  return (
    <div className="w-full max-w-[500px]">
      <div className="mb-7 flex items-center justify-between border-b border-white/10 pb-4">
        <span className="text-[10px] tracking-[0.3em] text-[#c45a78]">
          {service.number}
        </span>
        <span className="text-[9px] uppercase tracking-[0.28em] text-white/48">
          {service.label}
        </span>
      </div>

      <h3
        id={headingId}
        className="font-serif text-[clamp(2.9rem,4vw,5rem)] leading-[0.88] tracking-[-0.055em] text-[#f4efe9]"
      >
        {service.title}
      </h3>

      <p className="mt-7 max-w-[430px] text-sm leading-7 text-white/62">
        {service.description}
      </p>

      <PillList items={[...service.tags]} className="mt-8" />

      <TextLink href="#contact" className="mt-9">
        Bir proje konuşalım
      </TextLink>
    </div>
  );
}
