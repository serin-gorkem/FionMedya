import { projectTestimonials } from "./projects-proof.data";

export default function ProjectsTestimonials() {
  if (projectTestimonials.length === 0) {
    return null;
  }

  return (
    <div
      className="
        relative
        z-20

        mt-28

        xl:mt-40
      "
    >
      {/* HEADER */}

      <div
        className="
          xl:grid
          xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
          xl:gap-10
        "
      >
        <div>
          <p
            className="
    text-[9px]
    uppercase
    tracking-[0.3em]
    text-[#c45a78]
  "
          >
            Müşteri Notları
          </p>

          <h3
            className="
            mt-5
            max-w-lg

            font-serif
            text-[clamp(2.8rem,4.5vw,5rem)]
            leading-[0.9]
            tracking-[-0.05em]

            text-[#f4efe9]
          "
          >
            Biz değil,
            <br />
            <em className="text-white/50">onlar anlatsın.</em>
          </h3>
        </div>

        <div aria-hidden="true" className="hidden xl:block" />

        <div aria-hidden="true" className="hidden xl:block" />
      </div>

      {/* TESTIMONIALS */}

      <div
        className="
          mt-16
          space-y-16

          xl:space-y-24
        "
      >
        {projectTestimonials
          .slice(0, 2)
          .map(
            (
              testimonial: (typeof projectTestimonials)[number],
              index: (typeof projectTestimonials)[number] extends infer T
                ? T extends { client: string }
                  ? number
                  : never
                : never,
            ) => {
              const alignLeft = index % 2 === 0;

              return (
                <article
                  key={`${testimonial.client}-${index}`}
                  className="
                  xl:grid
                  xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
                  xl:gap-10
                "
                >
                  {/* LEFT */}

                  <div>{alignLeft && <TestimonialCard {...testimonial} />}</div>

                  {/* WINE LANE */}

                  <div aria-hidden="true" className="hidden xl:block" />

                  {/* RIGHT */}

                  <div>
                    {!alignLeft && <TestimonialCard {...testimonial} />}
                  </div>

                  {/* MOBILE */}

                  <div className="xl:hidden">
                    {!alignLeft && <TestimonialCard {...testimonial} />}
                  </div>
                </article>
              );
            },
          )}
      </div>
    </div>
  );
}

type TestimonialCardProps = {
  quote: string;
  client: string;
  person?: string;
  role?: string;
};

function TestimonialCard({
  quote,
  client,
  person,
  role,
}: TestimonialCardProps) {
  return (
    <blockquote
      className="
        relative

        border-t
        border-white/10

        pt-8
      "
    >
      <span
        aria-hidden="true"
        className="
          absolute
          left-0
          top-0

          h-px
          w-20

          bg-[#c45a78]
        "
      />

      <span
        aria-hidden="true"
        className="
          font-serif
          text-5xl
          leading-none

          text-[#591323]
        "
      >
        “
      </span>

      <p
        className="
          -mt-3

          max-w-xl

          font-serif
          text-[clamp(1.9rem,3vw,3.2rem)]
          leading-[1.04]
          tracking-[-0.04em]

          text-[#f4efe9]
        "
      >
        {quote}
      </p>

      <footer
        className="
          mt-8

          flex
          items-center
          gap-4
        "
      >
        <span
          className="
            size-1.5
            bg-[#c45a78]
          "
        />

        <div>
          <p
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.23em]

              text-white/65
            "
          >
            {person ? `${person} · ${client}` : client}
          </p>

          {role && (
            <p
              className="
                mt-1

                text-[8px]
                uppercase
                tracking-[0.18em]

                text-white/25
              "
            >
              {role}
            </p>
          )}
        </div>
      </footer>
    </blockquote>
  );
}
