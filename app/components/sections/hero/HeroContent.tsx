"use client";

import SmoothAnchor from "@/app/components/navigation/SmoothAnchor";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mb-7 text-[9px] uppercase tracking-[0.36em] text-[#c45a78] sm:text-[10px]"
        >
          Sosyal Medya
          <span className="mx-2 text-white/20">•</span>
          Grafik Tasarım
          <span className="mx-2 text-white/20">•</span>
          Reklam Yönetimi
        </motion.p>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.45, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-[1100px] font-serif text-[clamp(4.4rem,11vw,10rem)] leading-[0.79] tracking-[-0.065em] text-ivory"
        >
          Sıradan
          <br />
          Olanı Unut.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.9 }}
          className="mt-10 max-w-[640px] text-sm leading-7 text-white/62 sm:text-[15px]"
        >
          Fion Medya;{" "}
          <strong className="font-normal text-white/82">
            sosyal medya, tasarım ve reklamı aynı hedefe bağlayan
          </strong>{" "}
          yaratıcı medya ekibi. Markaların yalnızca görünmesine değil, doğru
          insanlara ulaşmasına ve daha güçlü bir marka algısı oluşturmasına
          yardımcı oluyoruz.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.12, duration: 0.8 }}
          className="mt-4 text-[9px] uppercase tracking-[0.28em] text-white/30"
        >
          Kuşadası
          <span className="mx-2 text-[#c45a78]">/</span>
          Aydın
          <span className="mx-2 text-[#c45a78]">/</span>
          İzmir
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-9"
        >
          <SmoothAnchor
            href="#services"
            duration={1350}
            delay={100}
            intensity="soft"
            aria-label="Fion Medya hizmetlerini incele"
            className="group relative inline-flex items-center gap-3 pb-2 text-[10px] uppercase tracking-[0.3em] text-white/62 transition-colors duration-300 hover:text-ivory"
          >
            Neler Yapıyoruz?
            <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
              →
            </span>
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-ivory transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
            />
          </SmoothAnchor>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.55, duration: 0.9 }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/35">
          Aşağı kaydır
        </span>
        <span className="relative h-7 w-px overflow-hidden bg-white/10">
          <motion.span
            className="absolute left-0 top-0 h-3 w-px bg-[#c45a78]"
            animate={{ y: [-12, 28] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </>
  );
}
