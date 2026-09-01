"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import {
  type ReactNode,
  useEffect,
  useRef,
} from "react";

type WineJourneyShellProps = {
  children: ReactNode;
};

/* =========================================================
   SCROLL PHASES
========================================================= */

const GLASS_START = 0;
const GLASS_END = 0.28;

const HANDOFF_START = GLASS_END;
const HANDOFF_END = 0.38;

const STREAM_END = 0.94;

/* Footer accumulation */

const POOL_START = 0.88;
const STREAM_FADE_START = 0.9;
const STREAM_FADE_END = 0.95;

const FILL_START = 0.92;
const FILL_END = 1;

/* =========================================================
   LAYOUT
========================================================= */

const GLASS_X_OFFSET = "16%";

const GLASS_TOP_VH = 4;
const GLASS_HEIGHT_VH = 72;

/*
 * İlk video 4vh + 72vh = 76vh'de biter.
 * İkinci video 74vh'den başlayarak
 * yaklaşık 2vh bindirme yapar.
 */

const STREAM_ENTRY_Y = "74vh";

export default function WineJourneyShell({
  children,
}: WineJourneyShellProps) {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const glassVideoRef =
    useRef<HTMLVideoElement>(null);

  const streamVideoRef =
    useRef<HTMLVideoElement>(null);

  const scrubFrameRef =
    useRef<number | null>(null);

  const latestScrollRef = useRef(0);

  const reduceMotion = useReducedMotion();

  /* =======================================================
     SCROLL
  ======================================================= */

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const {
    scrollYProgress: entranceProgress,
  } = useScroll({
    target: containerRef,
    offset: ["start 55%", "start 8%"],
  });

  const journeyOpacity = useTransform(
    entranceProgress,
    [0, 0.7, 1],
    [0, 0, 1],
  );

  /* =======================================================
     GLASS HANDOFF
  ======================================================= */

  const glassOpacity = useTransform(
    scrollYProgress,
    [
      HANDOFF_START,
      HANDOFF_END - 0.025,
      HANDOFF_END,
    ],
    [1, 1, 0],
  );

  /* =======================================================
     STREAM ENTRANCE
  ======================================================= */

  const streamEntranceOpacity =
    useTransform(
      scrollYProgress,
      [
        HANDOFF_START,
        HANDOFF_START + 0.02,
        HANDOFF_END,
      ],
      [0, 0.35, 1],
    );

  const streamExitOpacity = useTransform(
    scrollYProgress,
    [
      STREAM_FADE_START,
      STREAM_FADE_END,
    ],
    [1, 0],
  );

  const streamOpacity = useTransform(
    [
      streamEntranceOpacity,
      streamExitOpacity,
    ],
    ([entrance, exit]) =>
      Number(entrance) * Number(exit),
  );

  const streamY = useTransform(
    scrollYProgress,
    [HANDOFF_START, HANDOFF_END],
    [STREAM_ENTRY_Y, "0vh"],
  );

  /* =======================================================
     FOOTER POOL
  ======================================================= */

  const poolOpacity = useTransform(
    scrollYProgress,
    [
      POOL_START,
      POOL_START + 0.025,
      FILL_END,
    ],
    [0, 1, 1],
  );

  const poolScaleX = useTransform(
    scrollYProgress,
    [POOL_START, 0.96, FILL_END],
    [0.1, 1.6, 6],
  );

  const poolScaleY = useTransform(
    scrollYProgress,
    [POOL_START, 0.96, FILL_END],
    [0.1, 0.75, 2.8],
  );

  /* =======================================================
     FOOTER FILL
  ======================================================= */

  const footerFillOpacity = useTransform(
    scrollYProgress,
    [FILL_START, FILL_START + 0.025],
    [0, 1],
  );

  const footerFillHeight = useTransform(
    scrollYProgress,
    [FILL_START, 0.97, FILL_END],
    ["0vh", "22vh", "100vh"],
  );

  /* =======================================================
     VIDEO SEEK
  ======================================================= */

  const seekVideo = (
    video: HTMLVideoElement | null,
    rawProgress: number,
    scrollStart: number,
    scrollEnd: number,
    mediaStart = 0,
  ) => {
    if (
      !video ||
      !Number.isFinite(video.duration)
    ) {
      return;
    }

    const normalizedProgress =
      Math.min(
        Math.max(
          (rawProgress - scrollStart) /
            (scrollEnd - scrollStart),
          0,
        ),
        1,
      );

    const mediaEnd = Math.max(
      video.duration - 0.05,
      mediaStart,
    );

    const targetTime =
      mediaStart +
      normalizedProgress *
        (mediaEnd - mediaStart);

    if (
      Math.abs(
        video.currentTime - targetTime,
      ) > 0.025
    ) {
      video.currentTime = targetTime;
    }
  };

  const seekAllVideos = (
    progress: number,
  ) => {
    seekVideo(
      glassVideoRef.current,
      progress,
      GLASS_START,
      GLASS_END,
    );

    /*
     * İkinci video HANDOFF_START'tan itibaren
     * oynuyor. Böylece aşağıdan yukarı gelirken
     * şarap da hareket ediyor.
     */

    seekVideo(
      streamVideoRef.current,
      progress,
      HANDOFF_START,
      STREAM_END,
      0.15,
    );
  };

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (latest) => {
      latestScrollRef.current = latest;

      if (
        scrubFrameRef.current !== null
      ) {
        return;
      }

      scrubFrameRef.current =
        requestAnimationFrame(() => {
          scrubFrameRef.current = null;

          seekAllVideos(
            latestScrollRef.current,
          );
        });
    },
  );

  useEffect(() => {
    return () => {
      if (
        scrubFrameRef.current !== null
      ) {
        cancelAnimationFrame(
          scrubFrameRef.current,
        );
      }
    };
  }, []);

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <div
      ref={containerRef}
      className="relative"
    >
      {!reduceMotion && (
        <motion.div
          aria-hidden="true"
          className="
            pointer-events-none
            fixed inset-0
            z-[7]
            overflow-hidden
          "
          style={{
            opacity: journeyOpacity,
          }}
        >
          {/* ===============================================
              FOOTER FILL
          =============================================== */}

          <motion.div
            className="
              absolute
              bottom-0 left-0
              z-[1]
              w-full
              mix-blend-lighten
            "
            style={{
              height: footerFillHeight,

              opacity:
                footerFillOpacity,

              background:
                "linear-gradient(180deg, #7b1f3d 0%, #571026 48%, #2d0712 100%)",
            }}
          />

          {/* ===============================================
              FOOTER POOL
          =============================================== */}

          <motion.div
            className="
              absolute
              bottom-[-3vh]
              left-1/2
              z-[3]
              h-[90px]
              w-[260px]
              -translate-x-1/2
              rounded-[50%]
              mix-blend-lighten
              blur-[1px]
            "
            style={{
              opacity: poolOpacity,

              scaleX: poolScaleX,
              scaleY: poolScaleY,

              background:
                "radial-gradient(ellipse at center, #8c2948 0%, #63142d 48%, #350815 100%)",
            }}
          />

          {/* ===============================================
              FIRST VIDEO
          =============================================== */}

          <div
            className="
              absolute
              left-1/2
              z-[4]
              -translate-x-1/2
            "
            style={{
              top: `${GLASS_TOP_VH}vh`,

              height:
                `${GLASS_HEIGHT_VH}vh`,

              width: `${
                GLASS_HEIGHT_VH *
                (9 / 16)
              }vh`,
            }}
          >
            <motion.video
              ref={glassVideoRef}
              src="/videos/wine/wine-glass-pour.mp4"
              muted
              playsInline
              preload="auto"
              controls={false}
              disablePictureInPicture
              className="
                absolute inset-0
                h-full w-full
                object-cover
                mix-blend-lighten
              "
              style={{
                x: GLASS_X_OFFSET,

                opacity: glassOpacity,

                filter:
                  "contrast(1.2) brightness(0.9)",
              }}
              onLoadedMetadata={(event) => {
                seekVideo(
                  event.currentTarget,
                  scrollYProgress.get(),
                  GLASS_START,
                  GLASS_END,
                );
              }}
            />
          </div>

          {/* ===============================================
              SECOND VIDEO
          =============================================== */}

          <div
            className="
              absolute
              left-1/2 top-0
              z-[2]
              h-full
              w-[56.25vh]
              -translate-x-1/2
            "
          >
            <motion.video
              ref={streamVideoRef}
              src="/videos/wine/wine-stream.mp4"
              muted
              playsInline
              preload="auto"
              controls={false}
              disablePictureInPicture
              className="
                absolute inset-0
                h-full w-full
                object-cover
                mix-blend-lighten
                will-change-transform
              "
              style={{
                y: streamY,

                opacity: streamOpacity,

                filter:
                  "contrast(1.2) brightness(0.9)",
              }}
              onLoadedMetadata={(event) => {
                seekVideo(
                  event.currentTarget,
                  scrollYProgress.get(),
                  HANDOFF_START,
                  STREAM_END,
                  0.15,
                );
              }}
            />
          </div>
        </motion.div>
      )}

      <div className="relative">
        {children}
      </div>
    </div>
  );
}