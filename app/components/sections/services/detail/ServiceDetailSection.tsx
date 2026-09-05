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

        py-14

        sm:py-16
        lg:py-20
      "
    >
      <div
        className="
          grid
          gap-12

          lg:grid-cols-[minmax(0,0.92fr)_minmax(360px,0.68fr)]
          lg:items-center
          lg:gap-16

          xl:grid-cols-[minmax(0,1fr)_500px]
          xl:gap-20
        "
      >
        {/* =================================================
            LEFT / COPY
        ================================================== */}

        <div
          className="
            max-w-[720px]
          "
        >
          {/* =============================================
              META
          ============================================== */}

          <div
            className="
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                text-[8px]
                tracking-[0.28em]

                text-wine-light
              "
            >
              {service.number}
            </span>

            <span
              aria-hidden="true"
              className="
                h-px
                w-10

                bg-[#591323]
              "
            />

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.26em]

                text-white/28
              "
            >
              {service.eyebrow}
            </span>
          </div>

          {/* =============================================
              TITLE
          ============================================== */}

          <h2
            className="
              mt-7
              max-w-[680px]

              font-serif
              font-normal

              text-[clamp(3rem,5vw,5.6rem)]

              leading-[0.92]
              tracking-[-0.05em]

              text-ivory
            "
          >
            {service.title}

            <br />

            <em
              className="
                text-white/48
              "
            >
              {service.statement}
            </em>
          </h2>

          {/* =============================================
              DESCRIPTION
          ============================================== */}

          <p
            className="
              mt-7
              max-w-[560px]

              text-[13px]
              leading-6

              text-white/52

              sm:text-sm
              sm:leading-7
            "
          >
            {service.description}
          </p>

          {/* =============================================
              TAGS
          ============================================== */}

          <PillList
            items={[
              ...service.tags,
            ]}
            className="mt-7"
          />

          {/* =============================================
              SCOPE
          ============================================== */}

          <div
            className="
              mt-10

              grid

              border-t
              border-white/10

              sm:grid-cols-2
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
                    min-h-24

                    flex-col
                    justify-between

                    border-b
                    border-white/10

                    py-5

                    sm:min-h-28
                    sm:px-5
                    sm:odd:border-r
                    sm:odd:pl-0
                  "
                >
                  <span
                    className="
                      text-[7px]
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

                  <span
                    className="
                      mt-5

                      text-[13px]

                      text-ivory/85

                      sm:text-sm
                    "
                  >
                    {item}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>

        {/* =================================================
            RIGHT / VISUAL
        ================================================== */}

        <div
          className="
            relative

            lg:self-center
          "
        >
          <ServiceDetailVisual
            type={service.mockup}
          />
        </div>
      </div>
    </article>
  );
}