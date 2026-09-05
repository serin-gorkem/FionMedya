"use client";

import { useEffect, useState, type MouseEvent } from "react";

import { useSmoothNavigation } from "@/app/components/navigation/SmoothNavigationProvider";

const items = [
  {
    id: "services",
    number: "01",
    label: "Hizmetler",
  },
  {
    id: "about",
    number: "02",
    label: "Fion'u Tanıyın",
  },
  {
    id: "blog",
    number: "03",
    label: "Blog",
  },
  {
    id: "contact",
    number: "04",
    label: "İletişim",
  },
];

export default function QuickNavigation() {
  const [active, setActive] = useState("services");
  const { navigateTo, isNavigating } = useSmoothNavigation();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(item.id);
          }
        },
        {
          rootMargin: "-42% 0px -42% 0px",
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    navigateTo(`#${id}`, {
      delay: 100,
      duration: 1250,
      intensity: "soft",
    });
  };

  return (
    <nav
      aria-label="Sayfa bölümleri"
      className={`
        group
        fixed right-6 top-1/2 z-30
        hidden
        -translate-y-1/2
        transition-opacity
        duration-500
        xl:flex
        xl:flex-col
        xl:items-end
        xl:gap-3
        ${
          active === "contact"
            ? "pointer-events-none opacity-0"
            : isNavigating
              ? "opacity-45"
              : "opacity-100"
        }
      `}
    >
      {items.map((item) => {
        const isActive = active === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(event) => handleClick(event, item.id)}
            className="flex items-center justify-end gap-3"
          >
            <div
              className={`
                flex items-center gap-2
                rounded-full
                border border-[#4c1526]
                bg-black/80
                px-3 py-2
                backdrop-blur-md
                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  isActive
                    ? "translate-x-0 opacity-100"
                    : "translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                }
              `}
            >
              <span className="text-[7px] tracking-[0.22em] text-[#c45a78]">
                {item.number}
              </span>

              <span className="text-[8px] uppercase tracking-[0.2em] text-white/55">
                {item.label}
              </span>
            </div>

            <span
              className={`
                block rounded-full
                transition-all
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                ${
                  isActive
                    ? "h-[9px] w-[9px] bg-[#c45a78] shadow-[0_0_12px_rgba(196,90,120,0.55)]"
                    : "h-[5px] w-[5px] bg-white/25"
                }
              `}
            />
          </a>
        );
      })}
    </nav>
  );
}
