"use client";

import { motion, useReducedMotion } from "framer-motion";

import FionGraphicLayer from "./FionGraphicLayer";

const notUs = [
  "İçerik fabrikası.",
  "Her markaya aynı reçete.",
  "Sırf paylaşmış olmak için paylaşmak.",
  "Takipçi sayısını tek başına başarı sanmak.",
] as const;

const us = [
  "Fikri olan bir ekip.",
  "Markayı önce anlayan.",
  "Strateji, kreatif ve reklamı aynı hedefe bağlayan.",
  "Yeni müşteri kazandırmak.",
] as const;

export default function FionNotUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="
        relative

        overflow-hidden

        border-b
        border-white/10
      "
    >
      <FionGraphicLayer variant="not-us" />

      {/* =========================================
          HEADING
      ========================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          max-w-[1500px]

          px-5
          pb-14
          pt-24

          sm:px-8
          sm:pb-20

          lg:px-12
          lg:pt-32
        "
      >
        <div
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
            02 / Tavır
          </span>
        </div>

        <div
          className="
            mt-8

            grid
            gap-10

            lg:grid-cols-[minmax(0,1fr)_350px]
            lg:items-end
          "
        >
          <h2
            className="
              max-w-[900px]

              font-serif

              text-[clamp(4.5rem,9vw,10rem)]

              leading-[0.75]
              tracking-[-0.07em]

              text-[#f4efe9]
            "
          >
            Biz ne
            <br />
            <em className="text-white/45">değiliz?</em>
          </h2>

          <div
            className="
              border-l
              border-[#c45a78]/20

              pl-6
            "
          >
            <span
              className="
                block

                font-serif
                text-5xl

                leading-none

                text-[#c45a78]/40
              "
            >
              × / →
            </span>

            <p
              className="
                mt-5

                text-[11px]
                leading-6

                text-white/35
              "
            >
              Bazen ne olmadığını bilmek, ne olduğunu anlatmanın en kısa
              yoludur.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          SPLIT SYSTEM
      ========================================== */}

      <div
        className="
          relative
          z-10

          mx-auto
          grid
          max-w-[1500px]

          border-t
          border-white/10

          lg:grid-cols-2
        "
      >
        {/* =====================================
            NOT US
        ====================================== */}

        <div
          className="
            relative

            px-5
            py-16

            sm:px-8
            sm:py-20

            lg:border-r
            lg:border-white/10
            lg:px-12
            lg:py-24
          "
        >
          {/* giant x */}

          <span
            aria-hidden="true"
            className="
              absolute
              -left-[0.05em]
              top-[0.05em]

              select-none

              font-serif
              text-[clamp(8rem,15vw,16rem)]

              leading-none

              text-white/[0.025]
            "
          >
            ×
          </span>

          <p
            className="
              relative
              z-10

              mb-10

              text-[8px]
              uppercase
              tracking-[0.28em]

              text-white/30
            "
          >
            Fion değildir
          </p>

          <div
            className="
              relative
              z-10
            "
          >
            {notUs.map((item, index) => (
              <motion.div
                key={item}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,

                        x: -30,
                      }
                }
                whileInView={{
                  opacity: 1,

                  x: 0,
                }}
                viewport={{
                  once: true,

                  amount: 0.45,
                }}
                transition={{
                  duration: 0.65,

                  delay: index * 0.05,

                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                    group

                    grid
                    grid-cols-[56px_minmax(0,1fr)]

                    border-t
                    border-white/[0.07]

                    py-6

                    sm:py-7
                  "
              >
                <div
                  className="
                      flex
                      items-start
                    "
                >
                  <span
                    className="
                        font-serif
                        text-3xl

                        leading-none

                        text-[#c45a78]/45

                        transition-transform
                        duration-300

                        group-hover:rotate-12
                        group-hover:scale-110
                      "
                  >
                    ×
                  </span>
                </div>

                <div>
                  <span
                    className="
                        mb-2
                        block

                        text-[6px]
                        uppercase
                        tracking-[0.2em]

                        text-white/15
                      "
                  >
                    NO.
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p
                    className="
                        max-w-xl

                        font-serif
                        text-[clamp(1.6rem,2.4vw,2.5rem)]

                        leading-[1.08]
                        tracking-[-0.035em]

                        text-white/38

                        transition-colors
                        duration-300

                        group-hover:text-white/60
                      "
                  >
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================
            THIS IS US
        ====================================== */}

        <div
          className="
            relative

            overflow-hidden

            px-5
            py-16

            sm:px-8
            sm:py-20

            lg:px-12
            lg:py-24
          "
        >
          {/* graphic wash */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              right-[-15%]
              top-[10%]

              aspect-square
              w-[470px]

              rounded-full

              border
              border-[#c45a78]/[0.06]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              right-[-5%]
              top-[20%]

              aspect-square
              w-[310px]

              rounded-full

              border
              border-[#c45a78]/[0.07]
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none

              absolute
              right-[-20%]
              top-[5%]

              size-[520px]

              rounded-full

              bg-[#591323]/20

              blur-[130px]
            "
          />

          <p
            className="
              relative
              z-10

              mb-10

              text-[8px]
              uppercase
              tracking-[0.28em]

              text-[#c45a78]
            "
          >
            Fion budur
          </p>

          <div
            className="
              relative
              z-10
            "
          >
            {us.map((item, index) => (
              <motion.div
                key={item}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,

                        x: 30,
                      }
                }
                whileInView={{
                  opacity: 1,

                  x: 0,
                }}
                viewport={{
                  once: true,

                  amount: 0.45,
                }}
                transition={{
                  duration: 0.65,

                  delay: index * 0.05,

                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                    group

                    grid
                    grid-cols-[56px_minmax(0,1fr)]

                    border-t
                    border-white/[0.09]

                    py-6

                    sm:py-7
                  "
              >
                <div>
                  <span
                    className="
                        inline-block

                        font-serif
                        text-2xl

                        leading-none

                        text-[#c45a78]

                        transition-transform
                        duration-500

                        group-hover:translate-x-2
                      "
                  >
                    →
                  </span>
                </div>

                <div>
                  <span
                    className="
                        mb-2
                        block

                        text-[6px]
                        uppercase
                        tracking-[0.2em]

                        text-[#c45a78]/35
                      "
                  >
                    YES.
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p
                    className="
                        max-w-xl

                        font-serif
                        text-[clamp(1.6rem,2.4vw,2.5rem)]

                        leading-[1.08]
                        tracking-[-0.035em]

                        text-[#f4efe9]/80

                        transition-colors
                        duration-300

                        group-hover:text-[#f4efe9]
                      "
                  >
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================
          GRAPHIC FOOTER BAND
      ========================================== */}

      <div
        className="
          relative
          z-10

          overflow-hidden

          border-t
          border-white/10
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            inset-y-0
            left-1/2

            w-px

            bg-[#c45a78]/10
          "
        />

        <div
          className="
            mx-auto
            max-w-[1500px]

            px-5
            py-10

            sm:px-8
            lg:px-12
          "
        >
          <div
            className="
              flex
              flex-col
              gap-6

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div
              className="
                flex
                items-center
                gap-4
              "
            >
              <span
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.25em]

                  text-white/25
                "
              >
                Fion / Creative Media
              </span>

              <span
                className="
                  hidden

                  h-px
                  w-10

                  bg-[#c45a78]/20

                  sm:block
                "
              />

              <span
                className="
                  hidden

                  size-1.5

                  rotate-45

                  border
                  border-[#c45a78]/40

                  sm:block
                "
              />
            </div>

            <span
              className="
                font-serif
                text-xl
                italic

                text-white/45
              "
            >
              Sıradanlıktan uzak, ilham verici.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
