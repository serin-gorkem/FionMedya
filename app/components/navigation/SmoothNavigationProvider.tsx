"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

type NavigateOptions = {
  delay?: number;
  duration?: number;
  intensity?: "soft" | "strong";
  updateHistory?: boolean;
};

type SmoothNavigationContextValue = {
  navigateTo: (href: string, options?: NavigateOptions) => void;
  isNavigating: boolean;
};

const SmoothNavigationContext =
  createContext<SmoothNavigationContextValue | null>(null);

const DEFAULT_DURATION = 1250;

function easeInOutQuint(progress: number) {
  return progress < 0.5
    ? 16 * progress ** 5
    : 1 - ((-2 * progress + 2) ** 5) / 2;
}

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export function useSmoothNavigation() {
  const context = useContext(SmoothNavigationContext);

  if (!context) {
    throw new Error(
      "useSmoothNavigation must be used inside SmoothNavigationProvider.",
    );
  }

  return context;
}

type SmoothNavigationProviderProps = {
  children: ReactNode;
};

export default function SmoothNavigationProvider({
  children,
}: SmoothNavigationProviderProps) {
  const [isNavigating, setIsNavigating] = useState(false);
  const [intensity, setIntensity] = useState<"soft" | "strong">("soft");

  const animationFrameRef = useRef<number | null>(null);
  const navigationIdRef = useRef(0);

  const cancelActiveScroll = useCallback(() => {
    navigationIdRef.current += 1;

    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }

    setIsNavigating(false);
  }, []);

  useEffect(() => {
    const interrupt = () => {
      if (animationFrameRef.current !== null) {
        cancelActiveScroll();
      }
    };

    window.addEventListener("wheel", interrupt, { passive: true });
    window.addEventListener("touchstart", interrupt, { passive: true });
    window.addEventListener("keydown", interrupt);

    return () => {
      window.removeEventListener("wheel", interrupt);
      window.removeEventListener("touchstart", interrupt);
      window.removeEventListener("keydown", interrupt);
    };
  }, [cancelActiveScroll]);

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const animateScroll = useCallback(
    (
      targetY: number,
      duration: number,
      navigationId: number,
    ): Promise<void> => {
      return new Promise((resolve) => {
        const startY = window.scrollY;
        const distance = targetY - startY;

        if (Math.abs(distance) < 2 || duration <= 0) {
          window.scrollTo(0, targetY);
          resolve();
          return;
        }

        const startedAt = performance.now();

        const frame = (now: number) => {
          if (navigationId !== navigationIdRef.current) {
            resolve();
            return;
          }

          const elapsed = now - startedAt;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeInOutQuint(progress);

          window.scrollTo(0, startY + distance * eased);

          if (progress < 1) {
            animationFrameRef.current = requestAnimationFrame(frame);
            return;
          }

          animationFrameRef.current = null;
          resolve();
        };

        animationFrameRef.current = requestAnimationFrame(frame);
      });
    },
    [],
  );

  const navigateTo = useCallback(
    async (href: string, options: NavigateOptions = {}) => {
      if (!href.startsWith("#")) {
        return;
      }

      const targetId = href.slice(1);
      const target = document.getElementById(targetId);

      if (!target) {
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      navigationIdRef.current += 1;
      const navigationId = navigationIdRef.current;

      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      const {
        delay = 90,
        duration = DEFAULT_DURATION,
        intensity: nextIntensity = "soft",
        updateHistory = true,
      } = options;

      setIntensity(nextIntensity);
      setIsNavigating(true);

      if (!prefersReducedMotion) {
        await wait(delay);
      }

      if (navigationId !== navigationIdRef.current) {
        return;
      }

      const targetY = Math.max(
        0,
        window.scrollY + target.getBoundingClientRect().top,
      );

      await animateScroll(
        targetY,
        prefersReducedMotion ? 0 : duration,
        navigationId,
      );

      if (navigationId !== navigationIdRef.current) {
        return;
      }

      if (updateHistory) {
        history.pushState(null, "", href);
      }

      if (!prefersReducedMotion) {
        await wait(120);
      }

      if (navigationId === navigationIdRef.current) {
        setIsNavigating(false);
      }
    },
    [animateScroll],
  );

  const contextValue = useMemo(
    () => ({ navigateTo, isNavigating }),
    [navigateTo, isNavigating],
  );

  return (
    <SmoothNavigationContext.Provider value={contextValue}>
      {children}

      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          fixed inset-0 z-[35]
          transition-all
          duration-[800ms]
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${isNavigating ? "opacity-100" : "opacity-0"}
        `}
        style={{
          backgroundColor:
            intensity === "strong"
              ? "rgba(0,0,0,0.42)"
              : "rgba(0,0,0,0.22)",
          backdropFilter: isNavigating
            ? intensity === "strong"
              ? "brightness(0.42) saturate(0.75) blur(1px)"
              : "brightness(0.68) saturate(0.88)"
            : "brightness(1) saturate(1)",
          WebkitBackdropFilter: isNavigating
            ? intensity === "strong"
              ? "brightness(0.42) saturate(0.75) blur(1px)"
              : "brightness(0.68) saturate(0.88)"
            : "brightness(1) saturate(1)",
        }}
      >
        <div
          className={`
            absolute
            left-1/2 top-1/2
            h-[30vh] w-[42vw]
            max-w-[640px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            bg-[#591323]
            blur-[120px]
            transition-all
            duration-[900ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              isNavigating
                ? "scale-100 opacity-[0.16]"
                : "scale-[0.55] opacity-0"
            }
          `}
        />
      </div>
    </SmoothNavigationContext.Provider>
  );
}
