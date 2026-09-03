"use client";

import { useEffect, useState } from "react";

import type { ExperienceSection } from "@/config/experience";

import { useExperienceStore } from "@/store/experience";

type NavId = "works" | "services" | "about" | "contact";

const NAV_ITEMS: {
  id: NavId;
  label: string;
}[] = [
  {
    id: "works",
    label: "İşler",
  },
  {
    id: "services",
    label: "Hizmetler",
  },
  {
    id: "about",
    label: "Hakkımızda",
  },
  {
    id: "contact",
    label: "İletişim",
  },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeSection = useExperienceStore((state) => state.activeSection);

  const reducedMotion = useExperienceStore((state) => state.reducedMotion);

  const activeNav = getActiveNav(activeSection);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";

      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function navigateTo(id: NavId | "hero") {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",

      block: "start",
    });

    setMenuOpen(false);
  }

  return (
    <header
      className={`
    site-header
    ${menuOpen ? "is-menu-open" : ""}
    ${activeSection === "hero" ? "is-intro-hidden" : ""}
  `}
    >
      <button
        type="button"
        className="site-logo"
        onClick={() => navigateTo("hero")}
        aria-label="Fion ana sayfa"
      >
        FION
      </button>

      <nav className="site-nav" aria-label="Ana navigasyon">
        {NAV_ITEMS.map((item) => {
          const isActive = activeNav === item.id;

          return (
            <button
              key={item.id}
              type="button"
              className={`site-nav-link ${isActive ? "is-active" : ""}`}
              onClick={() => navigateTo(item.id)}
            >
              <span>{item.label}</span>

              <span className="site-nav-dot" aria-hidden="true" />
            </button>
          );
        })}
      </nav>

      <button
        type="button"
        className="site-menu-toggle"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span>{menuOpen ? "KAPAT" : "MENÜ"}</span>
      </button>

      <div
        id="mobile-navigation"
        className="mobile-navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-navigation-inner">
          {NAV_ITEMS.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className="mobile-nav-link"
              onClick={() => navigateTo(item.id)}
            >
              <span className="mobile-nav-index">0{index + 1}</span>

              <span>{item.label}</span>
            </button>
          ))}

          <div className="mobile-nav-footer">
            <span>FION MEDYA</span>

            <span>KUŞADASI / AYDIN</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function getActiveNav(section: ExperienceSection): NavId | null {
  switch (section) {
    case "works":
      return "works";

    case "services":
      return "services";

    case "trust":
    case "about":
      return "about";

    case "contact":
      return "contact";

    default:
      return null;
  }
}
