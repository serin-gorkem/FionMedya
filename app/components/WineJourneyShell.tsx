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
  useState,
} from "react";

type WineJourneyShellProps = {
  children: ReactNode;
};

const DEFAULT_HANDOFF_PROGRESS = 0.55;
const HANDOFF_FADE_DISTANCE = 0.02;

const GLASS_X_OFFSET = "16%";
const STREAM_MEDIA_START = 0.15;

const clamp = (
  value: number,
  min = 0,
  max = 1,
) => Math.min(Math.max(value, min), max);

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

  const handoffProgressRef =
    useRef(
      DEFAULT_HANDOFF_PROGRESS,
    );

  const [
    handoffProgress,
    setHandoffProgress,
  ] = useState(
    DEFAULT_HANDOFF_PROGRESS,
  );

  const reduceMotion = useReducedMotion();

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

  const entranceOpacity = useTransform(
    entranceProgress,
    [0, 0.72, 1],
    [0, 0, 1],
  );

  const handoffFadeEnd = Math.min(
    handoffProgress +
      HANDOFF_FADE_DISTANCE,
    0.99,
  );

  /*
   * İlk video handoff noktasına kadar
   * tamamen görünür.
   */

  const glassHandoffOpacity =
    useTransform(
      scrollYProgress,
      [
        handoffProgress,
        handoffFadeEnd,
      ],
      [1, 0],
    );

  const glassOpacity = useTransform(
    [
      entranceOpacity,
      glassHandoffOpacity,
    ],
    ([entrance, handoff]) =>
      Number(entrance) *
      Number(handoff),
  );

  /*
   * İkinci video aynı noktada
   * görünmeye başlar.
   */

  const streamOpacity = useTransform(
    scrollYProgress,
    [
      handoffProgress,
      handoffFadeEnd,
    ],
    [0, 1],
  );

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

    const scrollRange = Math.max(
      scrollEnd - scrollStart,
      0.001,
    );

    const videoProgress = clamp(
      (
        rawProgress -
        scrollStart
      ) / scrollRange,
    );

    const mediaEnd = Math.max(
      video.duration - 0.05,
      mediaStart,
    );

    const targetTime =
      mediaStart +
      videoProgress *
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
    const handoff =
      handoffProgressRef.current;

    /*
     * Birinci video:
     * Services başlangıcından
     * Projects ortasına kadar.
     */

    seekVideo(
      glassVideoRef.current,
      progress,
      0,
      handoff,
    );

    /*
     * İkinci video:
     * Projects ortasından
     * sayfanın sonuna kadar.
     */

    seekVideo(
      streamVideoRef.current,
      progress,
      handoff,
      1,
      STREAM_MEDIA_START,
    );
  };

  /*
   * Projects bölümünün merkezi viewport
   * merkezine geldiğinde handoff gerçekleşir.
   */

  useEffect(() => {
    const container =
      containerRef.current;

    if (!container) {
      return;
    }

    let measureFrame = 0;

    const measure = () => {
      cancelAnimationFrame(
        measureFrame,
      );

      measureFrame =
        requestAnimationFrame(() => {
          const projects =
            container.querySelector<HTMLElement>(
              "#projects",
            );

          if (!projects) {
            return;
          }

          const containerRect =
            container.getBoundingClientRect();

          const projectsRect =
            projects.getBoundingClientRect();

          const projectsTop =
            projectsRect.top -
            containerRect.top;

          const projectsMiddle =
            projectsTop +
            projects.offsetHeight / 2;

          const viewportHeight =
            window.innerHeight;

          const scrollDistance =
            Math.max(
              container.scrollHeight -
                viewportHeight,
              1,
            );

          const handoffScroll =
            projectsMiddle -
            viewportHeight / 2;

          const nextHandoff =
            clamp(
              handoffScroll /
                scrollDistance,
              0.1,
              0.95,
            );

          handoffProgressRef.current =
            nextHandoff;

          setHandoffProgress(
            nextHandoff,
          );

          seekAllVideos(
            scrollYProgress.get(),
          );
        });
    };

    measure();

    const observer =
      new ResizeObserver(measure);

    observer.observe(container);

    window.addEventListener(
      "resize",
      measure,
    );

    return () => {
      cancelAnimationFrame(
        measureFrame,
      );

      observer.disconnect();

      window.removeEventListener(
        "resize",
        measure,
      );
    };
  }, [scrollYProgress]);

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

  return (
    <div
      ref={containerRef}
      className="relative"
    >
      {!reduceMotion && (
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            fixed inset-0
            z-[7]
            overflow-hidden
          "
        >
          {/* First video */}

          <div
            className="
              absolute
              left-1/2 top-0
              z-[2]
              h-screen
              w-[56.25vh]
              -translate-x-1/2
            "
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
              onLoadedMetadata={(
                event,
              ) => {
                seekVideo(
                  event.currentTarget,
                  scrollYProgress.get(),
                  0,
                  handoffProgressRef.current,
                );
              }}
            />
          </div>

          {/* Second video */}

          <div
            className="
              absolute
              left-1/2 top-0
              z-[1]
              h-screen
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
              "
              style={{
                opacity: streamOpacity,

                filter:
                  "contrast(1.2) brightness(0.9)",
              }}
              onLoadedMetadata={(
                event,
              ) => {
                seekVideo(
                  event.currentTarget,
                  scrollYProgress.get(),
                  handoffProgressRef.current,
                  1,
                  STREAM_MEDIA_START,
                );
              }}
            />
          </div>
        </div>
      )}

      <div className="relative">
        {children}
      </div>
    </div>
  );
}