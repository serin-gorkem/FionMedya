"use client";

import SmoothAnchor from "@/app/components/navigation/SmoothAnchor";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <>
      {/* =================================================
          HERO CONTENT

          min-height var fakat sabit height yok.
          İçerik gerektiğinde section'ı büyütebilir.
      ================================================== */}

      <div
        className="
          relative
          z-10

          flex
          min-h-[100svh]

          flex-col
          items-center
          justify-center

          px-1

          pb-36
          pt-28

          text-center

          sm:pb-40
          sm:pt-32

          lg:pb-36
          lg:pt-28
        "
      >
        {/* =============================================
            EYEBROW
        ============================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.8,
          }}
          className="
            mb-6

            text-[8px]
            uppercase
            tracking-[0.34em]

            text-[#c45a78]

            sm:text-[9px]
          "
        >
          Sosyal Medya
          <span className="mx-2 text-white/20">•</span>
          Grafik Tasarım
          <span className="mx-2 text-white/20">•</span>
          Reklam Yönetimi
        </motion.p>

        {/* =============================================
            TITLE
        ============================================== */}

        <motion.h1
          id="hero-title"
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 0.45,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative

            max-w-[1000px]

            font-serif

            text-[clamp(3.8rem,9vw,8.3rem)]

            leading-[0.86]
            tracking-[-0.055em]

            text-ivory
          "
        >
          Sıradan
          <br />
          Olanı Unut.
        </motion.h1>

        {/* =============================================
            DESCRIPTION
        ============================================== */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.95,
            duration: 0.9,
          }}
          className="
            mt-8

            max-w-[590px]

            text-[13px]
            leading-6

            text-white/60

            sm:text-sm
            sm:leading-7
          "
        >
          Fion Medya;{" "}
          <strong
            className="
              font-medium
              text-white/82
            "
          >
            tasarım, strateji ve yaratıcılığı
          </strong>{" "}
          bir araya getirerek markaları yalnızca görünür değil, fark edilir,
          tercih edilir ve hatırlanır hale getiren yaratıcı medya ekibidir.
        </motion.p>

        {/* =============================================
            LOCATION
        ============================================== */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.12,
            duration: 0.8,
          }}
          className="
            mt-4

            text-[8px]
            uppercase
            tracking-[0.26em]

            text-white/30
          "
        >
          Kuşadası
          <span className="mx-2 text-[#c45a78]">/</span>
          Aydın
          <span className="mx-2 text-[#c45a78]">/</span>
          İzmir
        </motion.p>

        {/* =============================================
            CTA
        ============================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.3,
            duration: 0.8,
          }}
          className="
            mt-8
          "
        >
          <SmoothAnchor
            href="#services"
            duration={1350}
            delay={100}
            intensity="soft"
            aria-label="Fion Medya hizmetlerini incele"
            className="
              group
              relative

              inline-flex
              items-center
              gap-3

              pb-2

              text-[9px]
              uppercase
              tracking-[0.28em]

              text-white/60

              transition-colors
              duration-300

              hover:text-ivory
            "
          >
            Neler Yapıyoruz?
            <span
              className="
                transition-transform
                duration-500

                ease-[cubic-bezier(0.22,1,0.36,1)]

                group-hover:translate-x-1
              "
            >
              →
            </span>
            <span
              aria-hidden="true"
              className="
                absolute
                bottom-0
                left-0

                h-px
                w-full

                origin-left
                scale-x-0

                bg-ivory

                transition-transform
                duration-500

                ease-[cubic-bezier(0.22,1,0.36,1)]

                group-hover:scale-x-100
              "
            />
          </SmoothAnchor>
        </motion.div>
      </div>

      {/* =================================================
          SCROLL INDICATOR

          İçerik için altta ciddi bir safe-area bıraktık.
      ================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: -5,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.55,
          duration: 0.9,
        }}
        className="
          absolute

          bottom-6
          left-1/2
          z-20

          flex
          -translate-x-1/2

          flex-col
          items-center
          gap-3

          sm:bottom-8
        "
      >
        <span
          className="
            whitespace-nowrap

            text-[8px]
            uppercase
            tracking-[0.36em]

            text-white/30
          "
        >
          Aşağı kaydır
        </span>

        <span
          className="
            relative

            h-7
            w-px

            overflow-hidden

            bg-white/10
          "
        >
          <motion.span
            className="
              absolute
              left-0
              top-0

              h-3
              w-px

              bg-[#c45a78]
            "
            animate={{
              y: [-12, 28],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </span>
      </motion.div>
    </>
  );
}
