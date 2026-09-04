import PillList from "@/app/components/ui/PillList";
import TextLink from "@/app/components/ui/TextLink";

import type { ServiceItem } from "./services.types";

type ServiceCopyProps = {
  service: ServiceItem;
};

export default function ServiceCopy({
  service,
}: ServiceCopyProps) {
  const headingId =
    `service-${service.number}`;

  return (
    <div className="w-full max-w-lg">
      {/* NUMBER */}

      <div
        className="
          mb-6
          flex
          items-center
          gap-4
        "
      >
        <span
          className="
            text-[10px]
            tracking-[0.3em]
            text-wine-light
          "
        >
          {service.number}
        </span>

        <span className="h-px flex-1 bg-white/10" />
      </div>

      {/* TITLE */}

      <h3
        id={headingId}
        className="
          font-serif
          text-[clamp(2.9rem,4vw,5rem)]
          leading-[0.88]
          tracking-[-0.055em]
          text-ivory
        "
      >
        {service.title}
      </h3>

      {/* ONE SENTENCE */}

      <p
        className="
          mt-6
          max-w-md
          text-sm
          leading-7
          text-white/62
        "
      >
        {service.description}
      </p>

      {/* THREE TAGS */}

      <PillList
        items={[...service.tags]}
        className="mt-6"
      />

      {/* ACTIONS */}

      <div
        className="
          mt-8
          flex
          flex-col
          items-start
          gap-4
        "
      >
        <TextLink href="#contact">
          Bir proje konuşalım
        </TextLink>
      </div>
    </div>
  );
}