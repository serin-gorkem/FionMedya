"use client";

import Link from "next/link";
import { useState } from "react";

type NavigationOverlayProps = {
  open: boolean;
  onClose: () => void;
};

const items = [
  { label: "Hizmetler", href: "#services" },
  { label: "Projeler", href: "#projects" },
  { label: "İletişim", href: "#contact" },
  { label: "Fion", href: "#about" },
];

export default function NavigationOverlay({
  open,
  onClose,
}: NavigationOverlayProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      className={`fixed inset-0 z-40 overflow-hidden transition-opacity duration-300 ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      style={{
        background:
          "radial-gradient(circle at 50% 55%, #1f0b12 0%, #13090d 48%, #090708 100%)",
      }}
    >
      {/* Arka plandaki silik marka */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        style={{
          transitionDelay: open ? "300ms" : "0ms",
        }}
      >
        <p className="whitespace-nowrap font-serif text-[16vw] leading-none tracking-[-0.07em] text-white/[0.035]">
          FİON MEDYA
        </p>
      </div>

      {/* Spotlight */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[65vh] w-[85vw] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] transition-all duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "scale-100 opacity-100" : "scale-[0.2] opacity-0"
        }`}
        style={{
          transitionDelay: open ? "350ms" : "0ms",
        }}
      >
        {/* Ana ışık */}
        <div
          className="absolute inset-0 rounded-[50%] blur-[42px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(255,244,230,0.18) 0%, rgba(179,86,111,0.10) 34%, rgba(89,19,35,0.04) 52%, transparent 74%)",
          }}
        />

        {/* Işık merkezi */}
        <div
          className="absolute left-1/2 top-1/2 h-[48%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, rgba(255,248,238,0.16) 0%, rgba(255,248,238,0.055) 48%, transparent 76%)",
          }}
        />
      </div>

      {/* Menü */}
      {/* Menü */}
      <nav
        className="
    relative z-10
    flex min-h-screen
    flex-col
    items-center
    justify-center
    gap-3
    px-6
    text-center
  "
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const hasHoveredItem = hoveredIndex !== null;

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              onMouseEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              tabIndex={open ? 0 : -1}
              className={`
          font-serif
          leading-[0.82]
          tracking-[-0.055em]
          text-[var(--ivory)]
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}

          ${hasHoveredItem && !isHovered ? "text-ivory/40" : "text-ivory"}

          ${isHovered ? "italic" : ""}
        `}
              style={{
                fontSize: isHovered
                  ? "clamp(3.15rem, 6.4vw, 6.2rem)"
                  : hasHoveredItem
                    ? "clamp(2.15rem, 4.15vw, 4rem)"
                    : "clamp(2.5rem, 5vw, 4.8rem)",

                transitionProperty:
                  "font-size, opacity, color, transform, letter-spacing",

                transitionDuration: "650ms",

                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",

                transitionDelay: open
                  ? hoveredIndex === null
                    ? `${650 + index * 90}ms`
                    : "0ms"
                  : "0ms",
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
