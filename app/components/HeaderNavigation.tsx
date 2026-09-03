"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  AnimatePresence,
} from "framer-motion";

import NavigationOverlay from "@/app/components/NavigationOverlay";
import NavigationSwitch from "@/app/components/NavigationSwitch";

import {
  useSmoothNavigation,
} from "@/app/components/navigation/SmoothNavigationProvider";

import Header from "@/app/components/sections/Header";

export default function HeaderNavigation() {
  const [
    menuOpen,
    setMenuOpen,
  ] = useState(false);

  /*
   * Menü kapanış animasyonu devam ederken
   * body scroll'u açmamak için ayrı state.
   */
  const [
    menuExiting,
    setMenuExiting,
  ] = useState(false);

  /*
   * Kullanıcı menüden bir hedef seçerse
   * bunu burada bekletiyoruz.
   *
   * Scroll, overlay exit tamamlandıktan
   * SONRA başlayacak.
   */
  const pendingHrefRef =
    useRef<string | null>(
      null,
    );

  const {
    navigateTo,
  } = useSmoothNavigation();

  const menuBlocking =
    menuOpen ||
    menuExiting;

  /* =========================================================
     BODY LOCK
  ========================================================= */

  useEffect(() => {
    const body =
      document.body;

    if (
      menuBlocking
    ) {
      const scrollbarWidth =
        window.innerWidth -
        document
          .documentElement
          .clientWidth;

      body.style.overflow =
        "hidden";

      body.style.paddingRight =
        `${scrollbarWidth}px`;
    } else {
      body.style.overflow =
        "";

      body.style.paddingRight =
        "";
    }

    return () => {
      body.style.overflow =
        "";

      body.style.paddingRight =
        "";
    };
  }, [
    menuBlocking,
  ]);

  /* =========================================================
     ESC
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key !==
        "Escape"
      ) {
        return;
      }

      if (!menuOpen) {
        return;
      }

      pendingHrefRef.current =
        null;

      setMenuExiting(true);
      setMenuOpen(false);
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [menuOpen]);

  /* =========================================================
     OPEN
  ========================================================= */

  const openMenu = () => {
    if (
      menuExiting
    ) {
      return;
    }

    pendingHrefRef.current =
      null;

    setMenuOpen(true);
  };

  /* =========================================================
     CLOSE
  ========================================================= */

  const closeMenu = () => {
    if (
      !menuOpen ||
      menuExiting
    ) {
      return;
    }

    pendingHrefRef.current =
      null;

    setMenuExiting(true);
    setMenuOpen(false);
  };

  /* =========================================================
     SWITCH
  ========================================================= */

  const handleSwitch =
    () => {
      if (
        menuExiting
      ) {
        return;
      }

      if (menuOpen) {
        closeMenu();
        return;
      }

      openMenu();
    };

  /* =========================================================
     MENU LINK CLICK
  ========================================================= */

  const handleNavigate = (
    href: string,
  ) => {
    if (
      menuExiting
    ) {
      return;
    }

    /*
     * Henüz scroll yapmıyoruz.
     *
     * Hedefi sakla.
     */
    pendingHrefRef.current =
      href;

    /*
     * Önce menüyü kapat.
     */
    setMenuExiting(true);
    setMenuOpen(false);
  };

  /* =========================================================
     EXIT COMPLETE
  ========================================================= */

  const handleExitComplete =
    () => {
      setMenuExiting(false);

      const href =
        pendingHrefRef.current;

      pendingHrefRef.current =
        null;

      /*
       * Eğer sadece X / switch ile
       * kapandıysa burada bitiyoruz.
       */
      if (!href) {
        return;
      }

      /*
       * ŞİMDİ scroll başlıyor.
       *
       * Menü tamamen çıkmış durumda.
       */
      navigateTo(href, {
        delay: 40,

        duration: 1450,

        intensity:
          "strong",

        updateHistory:
          true,
      });
    };

  return (
    <>
      <Header />

      <NavigationSwitch
        open={menuOpen}
        onClick={
          handleSwitch
        }
      />

      <AnimatePresence
        mode="wait"
        onExitComplete={
          handleExitComplete
        }
      >
        {menuOpen && (
          <NavigationOverlay
            key="navigation-overlay"
            onNavigate={
              handleNavigate
            }
          />
        )}
      </AnimatePresence>
    </>
  );
}