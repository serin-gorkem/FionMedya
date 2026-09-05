import ServiceCopy from "./ServiceCopy";

import type {
  ServiceItem,
} from "./services.types";

import ServiceMockup from "./mockups/ServiceMockup";

type ServiceRowProps = {
  service: ServiceItem;
};

export default function ServiceRow({
  service,
}: ServiceRowProps) {
  const copyOnLeft =
    service.align ===
    "left";

  return (
    <article
      aria-labelledby={`service-${service.number}`}
      className="
        border-t
        border-white/10

        pt-8

        xl:pt-9
      "
    >
      {/* MOBILE / TABLET */}

      <div
        className="
          grid
          gap-7

          xl:hidden
        "
      >
        <ServiceCopy
          service={
            service
          }
        />

        <ServiceMockup
          type={
            service.mockup
          }
        />
      </div>

      {/* DESKTOP */}

      <div
        className="
          hidden

          xl:grid
          xl:min-h-[500px]

          xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]

          xl:items-center
          xl:gap-10
        "
      >
        {/* LEFT */}

        <div
          className={`
            flex

            ${
              copyOnLeft
                ? "justify-start"
                : "justify-end"
            }
          `}
        >
          {copyOnLeft ? (
            <ServiceCopy
              service={
                service
              }
            />
          ) : (
            <ServiceMockup
              type={
                service.mockup
              }
            />
          )}
        </div>

        {/* WINE LANE */}

        <div
          aria-hidden="true"
          className="
            h-full
          "
        />

        {/* RIGHT */}

        <div
          className={`
            flex

            ${
              copyOnLeft
                ? "justify-start"
                : "justify-end"
            }
          `}
        >
          {copyOnLeft ? (
            <ServiceMockup
              type={
                service.mockup
              }
            />
          ) : (
            <ServiceCopy
              service={
                service
              }
            />
          )}
        </div>
      </div>
    </article>
  );
}