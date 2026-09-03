"use client";

import type {
  AnchorHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";

import { useSmoothNavigation } from "./SmoothNavigationProvider";

type SmoothAnchorProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  href: string;
  children: ReactNode;
  duration?: number;
  delay?: number;
  intensity?: "soft" | "strong";
};

export default function SmoothAnchor({
  href,
  children,
  duration,
  delay,
  intensity = "soft",
  onClick,
  ...props
}: SmoothAnchorProps) {
  const { navigateTo } = useSmoothNavigation();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      !href.startsWith("#")
    ) {
      return;
    }

    event.preventDefault();

    navigateTo(href, {
      duration,
      delay,
      intensity,
    });
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
