"use client";

import type { ReactNode } from "react";

import SmoothAnchor from "@/app/components/navigation/SmoothAnchor";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  arrow?: "right" | "upRight" | "up";
  ariaLabel?: string;
};

const arrows = {
  right: "→",
  upRight: "↗",
  up: "↑",
} as const;

export default function TextLink({
  href,
  children,
  external = false,
  className = "",
  arrow = "right",
  ariaLabel,
}: TextLinkProps) {
  const content = (
    <>
      {children}

      <span
        aria-hidden="true"
        className="transition-transform duration-500 group-hover:translate-x-1"
      >
        {arrows[arrow]}
      </span>
    </>
  );

  const classes = `
    group inline-flex items-center gap-3
    text-[9px] uppercase tracking-[0.26em]
    text-white/48
    transition-colors duration-300
    hover:text-white
    ${className}
  `;

  if (external || !href.startsWith("#")) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <SmoothAnchor
      href={href}
      aria-label={ariaLabel}
      className={classes}
      duration={1250}
      delay={90}
      intensity="soft"
    >
      {content}
    </SmoothAnchor>
  );
}
