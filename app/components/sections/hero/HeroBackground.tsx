"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, rgba(89,19,35,0.18), transparent 30%),
            radial-gradient(circle at 87% 78%, rgba(142,48,77,0.12), transparent 32%),
            linear-gradient(135deg, #090708 0%, #0d080a 45%, #10080c 100%)
          `,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.13]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "110px 110px",
          maskImage: "radial-gradient(circle at center, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 0%, transparent 72%)",
        }}
      />

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="pointer-events-none absolute -left-[18vw] top-[8vh] z-10 h-[55vw] w-[55vw] rounded-full border border-[#7c2039]/20"
      />

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2, delay: 0.1 }}
        className="pointer-events-none absolute -left-[10vw] top-[18vh] h-[34vw] w-[34vw] rounded-full border border-white/[0.055]"
      />

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2, delay: 0.15 }}
        className="pointer-events-none absolute -right-[17vw] bottom-[-10vw] h-[50vw] w-[50vw] rounded-full border border-[#8e304d]/20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[11%] top-0 h-[150%] w-px origin-top -rotate-[19deg] bg-gradient-to-b from-transparent via-white/[0.07] to-transparent"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[14%] top-[-25%] h-[150%] w-px origin-top rotate-[24deg] bg-gradient-to-b from-transparent via-[#8e304d]/20 to-transparent"
      />

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.65 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-1/2 top-[47%] h-[62vh] w-[80vw] max-w-[1050px] -translate-x-1/2 -translate-y-1/2"
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

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-1/2 top-[47%] h-[34vh] w-[55vw] max-w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-[45px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,248,238,0.12) 0%, transparent 72%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ boxShadow: "inset 0 0 180px 50px rgba(0,0,0,0.75)" }}
      />
    </>
  );
}
