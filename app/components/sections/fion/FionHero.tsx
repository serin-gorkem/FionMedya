"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function FionHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative

        flex
        min-h-[calc(100svh-76px)]

        items-end

        overflow-hidden

        border-b
        border-white/10
      "
    >
      {/* =========================================
          SMALL INDEX
      ========================================== */}

      <div
        className="
          absolute
          left-5
          top-10

          z-10

          sm:left-8
          lg:left-12
          lg:top-14
        "
      >
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.25,
            duration: 0.8,
          }}
          className="
            flex
            items-center
            gap-4
          "
        >
          <span
            className="
              size-1.5
              rotate-45

              bg-[#c45a78]
            "
          />

          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.3em]

              text-[#c45a78]
            "
          >
            Fion / Hakkımızda
          </span>
        </motion.div>
      </div>

      {/* =========================================
          HERO COPY
      ========================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          grid
          w-full
          max-w-[1500px]

          gap-14

          px-5
          pb-14

          sm:px-8
          sm:pb-20

          lg:grid-cols-[minmax(0,1fr)_390px]
          lg:items-end
          lg:gap-20
          lg:px-12
          lg:pb-24
        "
      >
        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 50,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.1,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="
              mb-6

              text-[8px]
              uppercase
              tracking-[0.28em]

              text-white/40
            "
          >
            Creative Media Studio
          </p>

          <h1
            className="
              max-w-[950px]

              font-serif

              text-[clamp(4.8rem,10vw,11rem)]

              leading-[0.72]
              tracking-[-0.075em]

              text-[#f4efe9]
            "
          >
            FİON
            <br />
            <em className="text-white/55">olarak;</em>
          </h1>
        </motion.div>

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 30,
                }
          }
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            border-t
            border-white/10

            pt-6

            lg:border-l
            lg:border-t-0
            lg:pl-8
            lg:pt-0
          "
        >
          <p
            className="
              font-serif

              text-[clamp(1.55rem,2vw,2rem)]

              leading-[1.28]
              tracking-[-0.03em]

              text-white/72
            "
          >
            Markaların ruhunu ortaya çıkarmayı ve hikayelerini, tıpkı damakta iz
            bırakan bir tat gibi, sıradanı unutturup akılda kalıcı bir
            yaratıcılıkla sunmayı hedefliyoruz.
          </p>

          <div
            className="
              mt-8

              flex
              flex-wrap

              gap-x-5
              gap-y-3
            "
          >
            {["Kuşadası", "Aydın", "İzmir"].map((location) => (
              <span
                key={location}
                className="
                    text-[7px]
                    uppercase
                    tracking-[0.23em]

                    text-white/35
                  "
              >
                {location}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* =========================================
          SCROLL MARKER
      ========================================== */}

      <div
        className="
          absolute
          bottom-5
          right-5

          hidden

          items-center
          gap-3

          sm:flex
          sm:right-8

          lg:right-12
        "
      >
        <span
          className="
            text-[6px]
            uppercase
            tracking-[0.24em]

            text-white/25
          "
        >
          Scroll
        </span>

        <span
          className="
            h-px
            w-10

            bg-white/15
          "
        />
      </div>
    </section>
  );
}
