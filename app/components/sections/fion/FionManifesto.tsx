"use client";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import FionGraphicLayer from "./FionGraphicLayer";

const statements = [
  {
    index: "01",

    first:
      "DAHA FAZLA",

    second:
      "İÇERİK DEĞİL.",

    accent:
      "DAHA İYİ FİKİR.",

    meta:
      "Fikir / Nicelik",
  },

  {
    index: "02",

    first:
      "TAKİPÇİDEN",

    second:
      "ÖNCE",

    accent:
      "MÜŞTERİYİ DÜŞÜNÜYORUZ.",

    meta:
      "İnsan / Metrik",
  },

  {
    index: "03",

    first:
      "GÖRÜNMEK",

    second:
      "YETMEZ.",

    accent:
      "HATIRLANMAK GEREK.",

    meta:
      "İz / Görünürlük",
  },
] as const;

export default function FionManifesto() {
  const reduceMotion =
    useReducedMotion();

  return (
    <section
      className="
        relative

        border-b
        border-white/10
      "
    >
      {/* =========================================
          INTRO
      ========================================== */}

      <div
        className="
          relative

          mx-auto
          max-w-[1500px]

          px-5
          py-20

          sm:px-8
          sm:py-24

          lg:px-12
          lg:py-28
        "
      >
        <div
          className="
            grid
            gap-10

            lg:grid-cols-[minmax(0,1fr)_360px]
            lg:items-end
          "
        >
          <div>
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
                01 / Manifesto
              </span>
            </div>

            <h2
              className="
                mt-8

                max-w-3xl

                font-serif

                text-[clamp(3.5rem,6vw,6.8rem)]

                leading-[0.86]
                tracking-[-0.06em]

                text-[#f4efe9]
              "
            >
              Bir bakış
              <br />

              <em className="text-white/45">
                açımız var.
              </em>
            </h2>
          </div>

          <div
            className="
              border-t
              border-white/10

              pt-5

              lg:border-l
              lg:border-t-0
              lg:pl-8
              lg:pt-0
            "
          >
            <p
              className="
                max-w-sm

                text-[12px]
                leading-6

                text-white/38
              "
            >
              Ne yaptığımızdan
              önce, neden
              yaptığımızı
              önemsiyoruz. Çünkü
              iyi işin başlangıç
              noktası format
              değil, fikirdir.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          STATEMENTS
      ========================================== */}

      <div>
        {statements.map(
          (
            statement,
            index,
          ) => (
            <article
              key={
                statement.index
              }
              className="
                relative

                min-h-[78svh]

                overflow-hidden

                border-t
                border-white/[0.07]
              "
            >
              {/* GRAPHICS */}

              <FionGraphicLayer
                variant="manifesto"
                index={
                  index
                }
              />

              {/* HUGE INDEX */}

              <span
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute
                  right-[3vw]
                  top-1/2

                  -translate-y-1/2

                  select-none

                  font-serif
                  text-[clamp(12rem,27vw,29rem)]

                  leading-none
                  tracking-[-0.09em]

                  text-white/[0.02]
                "
              >
                {
                  statement.index
                }
              </span>

              {/* CONTENT */}

              <div
                className="
                  relative
                  z-10

                  mx-auto

                  flex
                  min-h-[78svh]
                  max-w-[1500px]

                  flex-col
                  justify-center

                  px-5
                  py-24

                  sm:px-8

                  lg:px-12
                "
              >
                <motion.div
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity:
                            0,

                          y:
                            70,
                        }
                  }
                  whileInView={{
                    opacity:
                      1,

                    y:
                      0,
                  }}
                  viewport={{
                    once:
                      true,

                    amount:
                      0.25,
                  }}
                  transition={{
                    duration:
                      0.9,

                    ease: [
                      0.22,
                      1,
                      0.36,
                      1,
                    ],
                  }}
                >
                  {/* META */}

                  <div
                    className="
                      mb-9

                      flex
                      items-center
                      gap-5
                    "
                  >
                    <span
                      className="
                        text-[7px]
                        uppercase
                        tracking-[0.27em]

                        text-white/30
                      "
                    >
                      Manifesto
                      /{" "}
                      {
                        statement.index
                      }
                    </span>

                    <span
                      className="
                        h-px
                        w-12

                        bg-[#c45a78]/30
                      "
                    />

                    <span
                      className="
                        text-[6px]
                        uppercase
                        tracking-[0.22em]

                        text-[#c45a78]/60
                      "
                    >
                      {
                        statement.meta
                      }
                    </span>
                  </div>

                  {/* STATEMENT */}

                  <h3
                    className="
                      max-w-[1300px]

                      font-sans
                      font-medium

                      text-[clamp(3.5rem,9vw,9.8rem)]

                      leading-[0.81]
                      tracking-[-0.065em]

                      text-[#f4efe9]
                    "
                  >
                    {
                      statement.first
                    }

                    <br />

                    <span className="text-white/28">
                      {
                        statement.second
                      }
                    </span>

                    <br />

                    <em
                      className="
                        font-serif
                        font-normal

                        text-[#c45a78]
                      "
                    >
                      {
                        statement.accent
                      }
                    </em>
                  </h3>
                </motion.div>

                {/* BOTTOM CODE */}

                <div
                  className="
                    absolute
                    bottom-8
                    left-5
                    right-5

                    flex
                    items-center
                    justify-between

                    sm:left-8
                    sm:right-8

                    lg:left-12
                    lg:right-12
                  "
                >
                  <span
                    className="
                      text-[6px]
                      uppercase
                      tracking-[0.22em]

                      text-white/18
                    "
                  >
                    FION / POINT OF
                    VIEW
                  </span>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <span
                      className="
                        h-px
                        w-8

                        bg-white/10
                      "
                    />

                    <span
                      className="
                        size-1
                        rotate-45

                        bg-[#c45a78]/50
                      "
                    />
                  </div>
                </div>
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
}