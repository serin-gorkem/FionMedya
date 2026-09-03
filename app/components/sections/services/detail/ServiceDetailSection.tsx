import PillList from "@/app/components/ui/PillList";

import ServiceDetailVisual from "./ServiceDetailVisual";

import type {
  ServiceDetailItem,
} from "./services-detail.data";

type ServiceDetailSectionProps = {
  service: ServiceDetailItem;
};

export default function ServiceDetailSection({
  service,
}: ServiceDetailSectionProps) {
  return (
    <article
      className="
        border-t
        border-white/10

        py-20

        sm:py-28
      "
    >
      {/* INTRO */}

      <div
        className="
          grid
          gap-10

          lg:grid-cols-[120px_minmax(0,1fr)_minmax(320px,0.45fr)]
          lg:items-start
          lg:gap-12
        "
      >
        {/* NUMBER */}

        <div>
          <span
            className="
              font-serif
              text-4xl
              tracking-[-0.05em]
              text-white/25
            "
          >
            {service.number}
          </span>
        </div>

        {/* HEADLINE */}

        <div>
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-wine-light
            "
          >
            {service.eyebrow}
          </p>

          <h2
            className="
              mt-6
              max-w-3xl

              font-serif

              text-[clamp(3.4rem,6vw,7rem)]

              leading-[0.84]
              tracking-[-0.06em]

              text-ivory
            "
          >
            {service.title}
            <br />

            <em className="text-white/55">
              {service.statement}
            </em>
          </h2>
        </div>

        {/* DESCRIPTION */}

        <div
          className="
            border-t
            border-white/10

            pt-7

            lg:border-l
            lg:border-t-0
            lg:pl-8
            lg:pt-0
          "
        >
          <p
            className="
              text-sm
              leading-7
              text-white/60
            "
          >
            {service.description}
          </p>

          <PillList
            items={[
              ...service.tags,
            ]}
            className="mt-7"
          />
        </div>
      </div>

      {/* VISUAL SHOW */}

      <div className="mt-16 sm:mt-20">
        <ServiceDetailVisual
          type={service.mockup}
          number={service.number}
        />
      </div>

      {/* SCOPE */}

      <div
        className="
          mt-10
          grid

          border-t
          border-white/10

          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {service.scope.map(
          (
            item,
            index,
          ) => (
            <div
              key={item}
              className="
                flex
                min-h-28
                flex-col
                justify-between

                border-b
                border-white/10

                py-6

                sm:px-6
                sm:first:pl-0

                lg:border-b-0
                lg:border-r
                lg:last:border-r-0
              "
            >
              <span
                className="
                  text-[8px]
                  tracking-[0.24em]
                  text-wine-light
                "
              >
                {String(
                  index + 1,
                ).padStart(
                  2,
                  "0",
                )}
              </span>

              <p
                className="
                  mt-8
                  text-sm
                  text-ivory
                "
              >
                {item}
              </p>
            </div>
          ),
        )}
      </div>
    </article>
  );
}