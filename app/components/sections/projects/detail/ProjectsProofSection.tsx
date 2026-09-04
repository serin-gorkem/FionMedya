import Image from "next/image";

import { clientLogos, projectTestimonials } from "../projects-proof.data";

export default function ProjectsProofSection() {
  return (
    <section
      className="
        border-t
        border-white/10

        py-20
        sm:py-28
      "
    >
      {/* =================================================
          INTRO
      ================================================== */}

      <div
        className="
          grid
          gap-10

          lg:grid-cols-[minmax(0,1fr)_360px]
          lg:items-end
        "
      >
        <div>
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.32em]

              text-[#c45a78]
            "
          >
            Birlikte Çalıştık
          </p>

          <h2
            className="
              mt-6
              max-w-3xl

              font-serif
              text-[clamp(3.6rem,6vw,7rem)]
              leading-[0.84]
              tracking-[-0.06em]

              text-[#f4efe9]
            "
          >
            Logodan
            <br />
            <em className="text-white/50">fazlası.</em>
          </h2>
        </div>

        <p
          className="
            max-w-sm

            text-sm
            leading-7

            text-white/45
          "
        >
          Farklı sektörlerden markalarla sosyal medya, reklam, tasarım ve
          dijital deneyimler üzerine birlikte çalıştık.
        </p>
      </div>
      {/* =================================================
    CLIENT WALL
================================================== */}

      <div
        className="
    mt-14

    grid
    grid-cols-2

    border-l
    border-t
    border-white/10

    sm:mt-16
    sm:grid-cols-3

    lg:mt-20
    lg:grid-cols-4
  "
      >
        {clientLogos.map((client, index) => (
          <div
            key={client.name}
            className="
          group
          relative

          flex
          min-w-0

          h-36
          items-center
          justify-center

          overflow-hidden

          border-b
          border-r
          border-white/10

          bg-black/10

          px-5
          py-6

          backdrop-blur-sm

          sm:h-44
          sm:px-7
          sm:py-8

          lg:h-52
          lg:px-8

          xl:h-56
        "
          >
            {/* INDEX */}

            <span
              className="
            absolute
            left-3
            top-3
            z-20

            text-[6px]
            tracking-[0.22em]
            text-white/20

            sm:left-4
            sm:top-4
            sm:text-[7px]
          "
            >
              {(index + 1).toString().padStart(2, "0")}
            </span>

            {/* HOVER WASH */}

            <span
              aria-hidden="true"
              className="
            absolute
            inset-0

            origin-bottom
            scale-y-0

            bg-[#591323]/18

            transition-transform
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:scale-y-100
          "
            />

            {/* LOGO STAGE */}

            <div
              className="
            relative
            z-10

            flex
            h-[72%]
            w-[82%]

            items-center
            justify-center

            sm:h-[76%]
            sm:w-[84%]

            lg:h-[78%]
            lg:w-[86%]
          "
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={300}
                height={180}
                style={{
                  transform: `scale(${client.wallScale ?? 1})`,
                }}
                className="
                max-h-full
                max-w-full

                object-contain

                opacity-100

                transition-[filter,opacity]
                duration-500

                sm:grayscale
                sm:opacity-50

                sm:group-hover:grayscale-0
                sm:group-hover:opacity-100
              "
              />
            </div>

            {/* CLIENT NAME */}

            <span
              className="
            absolute
            bottom-3
            left-3

            max-w-[80%]

            truncate

            text-[6px]
            uppercase
            tracking-[0.18em]

            text-white/0

            transition-colors
            duration-500

            group-hover:text-white/35

            sm:bottom-4
            sm:left-4
            sm:text-[7px]
          "
            >
              {client.name}
            </span>

            {/* CORNER */}

            <span
              aria-hidden="true"
              className="
            absolute
            bottom-0
            right-0

            h-px
            w-0

            bg-[#c45a78]

            transition-all
            duration-700

            group-hover:w-12
          "
            />
          </div>
        ))}
      </div>

      {/* =================================================
          TESTIMONIALS
      ================================================== */}

      {projectTestimonials.length > 0 && (
        <div
          className="
            mt-24

            border-t
            border-white/10

            pt-16

            sm:mt-32
            sm:pt-20
          "
        >
          <div
            className="
              grid
              gap-10

              lg:grid-cols-[300px_minmax(0,1fr)]
              lg:gap-20
            "
          >
            {/* LEFT */}

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

                  font-serif
                  text-[clamp(2.8rem,4vw,4.5rem)]
                  leading-[0.9]
                  tracking-[-0.05em]

                  text-[#f4efe9]
                "
              >
                Biz değil,
                <br />
                <em className="text-white/45">onlar anlatsın.</em>
              </h3>
            </div>

            {/* RIGHT */}

            <div>
              {projectTestimonials.map((testimonial, index) => (
                <blockquote
                  key={`${testimonial.client}-${index}`}
                  className="
                      grid
                      gap-8

                      border-t
                      border-white/10

                      py-10

                      first:border-t-0
                      first:pt-0

                      sm:grid-cols-[70px_minmax(0,1fr)]
                    "
                >
                  <span
                    aria-hidden="true"
                    className="
                        font-serif
                        text-6xl
                        leading-none

                        text-[#591323]
                      "
                  >
                    “
                  </span>

                  <div>
                    <p
                      className="
                          max-w-3xl

                          font-serif
                          text-[clamp(2rem,3.4vw,3.8rem)]
                          leading-[1]
                          tracking-[-0.045em]

                          text-[#f4efe9]
                        "
                    >
                      {testimonial.quote}
                    </p>

                    <div
                      className="
                          mt-8

                          flex
                          items-center
                          gap-4
                        "
                    >
                      <span
                        className="
                            h-px
                            w-8

                            bg-[#c45a78]
                          "
                      />

                      <div>
                        <p
                          className="
                              text-[8px]
                              uppercase
                              tracking-[0.24em]

                              text-white/60
                            "
                        >
                          {testimonial.person
                            ? `${testimonial.person} · ${testimonial.client}`
                            : testimonial.client}
                        </p>

                        {testimonial.role && (
                          <p
                            className="
                                mt-1

                                text-[7px]
                                uppercase
                                tracking-[0.18em]

                                text-white/25
                              "
                          >
                            {testimonial.role}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
