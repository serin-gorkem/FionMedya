"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden z-10 bg-[#090708] px-6"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      {/* Çok hafif wine atmosfer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 15% 20%,
              rgba(89,19,35,0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 87% 78%,
              rgba(142,48,77,0.12),
              transparent 32%
            ),
            linear-gradient(
              135deg,
              #090708 0%,
              #0d080a 45%,
              #10080c 100%
            )
          `,
        }}
      />

      {/* İnce grafik grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.08) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "110px 110px",
          maskImage:
            "radial-gradient(circle at center, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 72%)",
        }}
      />

      {/* Sol büyük grafik form */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="
          pointer-events-none
          absolute
          -left-[18vw]
          top-[8vh]
          h-[55vw]
          w-[55vw]
          z-10
          rounded-full
          border border-[#7c2039]/20
        "
      />

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2, delay: 0.1 }}
        className="
          pointer-events-none
          absolute
          -left-[10vw]
          top-[18vh]
          h-[34vw]
          w-[34vw]
          rounded-full
          border border-white/[0.055]
        "
      />

      {/* Sağ grafik form */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2, delay: 0.15 }}
        className="
          pointer-events-none
          absolute
          -right-[17vw]
          bottom-[-10vw]
          h-[50vw]
          w-[50vw]
          rounded-full
          border border-[#8e304d]/20
        "
      />

      {/* Diyagonal editorial çizgi */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[11%]
          top-0
          h-[150%]
          w-px
          origin-top
          -rotate-[19deg]
          bg-gradient-to-b
          from-transparent
          via-white/[0.07]
          to-transparent
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[14%]
          top-[-25%]
          h-[150%]
          w-px
          origin-top
          rotate-[24deg]
          bg-gradient-to-b
          from-transparent
          via-[#8e304d]/20
          to-transparent
        "
      />

      {/* =========================================================
          CENTRAL SPOTLIGHT
      ========================================================= */}

      <motion.div
        aria-hidden="true"
        initial={{
          opacity: 0,
          scale: 0.65,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[47%]
          h-[62vh]
          w-[80vw]
          max-w-[1050px]
          -translate-x-1/2
          -translate-y-1/2
        "
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              rgba(255,247,235,0.19) 0%,
              rgba(255,247,235,0.11) 23%,
              rgba(142,48,77,0.10) 46%,
              rgba(89,19,35,0.05) 60%,
              transparent 75%
            )
          `,
          filter: "blur(8px)",
        }}
      />

      {/* Spotlight iç çekirdeği */}
      <motion.div
        aria-hidden="true"
        initial={{
          opacity: 0,
          scale: 0.4,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[47%]
          h-[34vh]
          w-[55vw]
          max-w-[720px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-[50%]
          blur-[45px]
        "
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,248,238,0.12) 0%, transparent 72%)",
        }}
      />

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div
        className="
          relative z-10
          flex min-h-screen
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        <motion.h1
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
            max-w-[1100px]
            font-serif
            text-[clamp(4.4rem,11vw,10rem)]
            leading-[0.79]
            tracking-[-0.065em]
            text-ivory
          "
        >
          Sıradan
          <br />
          Olanı Unut.
        </motion.h1>

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
            mt-10
            max-w-lg
            text-sm
            leading-7
            text-white/50
            sm:text-[15px]
          "
        >
          Sadece paylaşım yapmıyoruz. Markaların fark edilmesini, hatırlanmasını
          ve doğru müşterilere ulaşmasını sağlayan yaratıcı işler üretiyoruz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="mt-9"
        >
          <Link
            href="#projects"
            className="
      group
      relative
      inline-flex
      items-center
      gap-3
      pb-2
      text-[10px]
      uppercase
      tracking-[0.3em]
      text-white/55
      transition-colors
      duration-300
      hover:text-ivory
    "
          >
            İşleri İncele
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
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.45,
          duration: 0.9,
        }}
        className="
    absolute
    bottom-8
    left-1/2
    z-20
    flex
    -translate-x-1/2
    flex-col
    items-center
    gap-3
  "
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/35">
          Aşağı kaydır
        </span>

        <span className="relative h-7 w-px overflow-hidden bg-white/10">
          <motion.span
            className="absolute left-0 top-0 h-3 w-px bg-wine-light"
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

      {/* Alt vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          boxShadow: "inset 0 0 180px 50px rgba(0,0,0,0.75)",
        }}
      />
    </section>
  );
}
