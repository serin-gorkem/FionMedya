"use client";

import { useEffect, useState } from "react";

import Header from "@/app/components/sections/Header";
import NavigationSwitch from "@/app/components/NavigationSwitch";
import NavigationOverlay from "@/app/components/NavigationOverlay";

export default function HeaderNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <Header />

      <NavigationSwitch
        open={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
      />

      <NavigationOverlay
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}