import ServiceCopy from "./ServiceCopy";
import type { ServiceItem } from "./services.types";
import ServiceMockup from "./mockups/ServiceMockup";

type ServiceRowProps = {
  service: ServiceItem;
};

export default function ServiceRow({ service }: ServiceRowProps) {
  const copyOnLeft = service.align === "left";

  return (
    <article aria-labelledby={`service-${service.number}`} className="border-t border-white/10 pt-12">
      <div className="grid gap-12 xl:hidden">
        <ServiceCopy service={service} />
        <ServiceMockup type={service.mockup} />
      </div>

      <div className="hidden min-h-[680px] xl:grid xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)] xl:items-center xl:gap-10">
        <div className={`flex ${copyOnLeft ? "justify-start" : "justify-end"}`}>
          {copyOnLeft ? <ServiceCopy service={service} /> : <ServiceMockup type={service.mockup} />}
        </div>
        <div aria-hidden="true" className="h-full" />
        <div className={`flex ${copyOnLeft ? "justify-start" : "justify-end"}`}>
          {copyOnLeft ? <ServiceMockup type={service.mockup} /> : <ServiceCopy service={service} />}
        </div>
      </div>
    </article>
  );
}
