"use client";

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import { type ReactNode, useEffect, useRef } from "react";

type WineJourneyShellProps = {
  children: ReactNode;
};

const VIDEO_END_PADDING = 0.05;
const SEEK_THRESHOLD = 0.01;

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

export default function WineJourneyShell({ children }: WineJourneyShellProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  const scrubFrameRef = useRef<number | null>(null);

  const latestScrollRef = useRef(0);

  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  /*
   * Footer z-10 olduğu için video footer'ın
   * altına zaten girecek.
   *
   * Bu yüzden burada agresif footer fade
   * yapmıyoruz.
   */

  const seekVideo = (progress: number) => {
    const video = videoRef.current;

    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) {
      return;
    }

    const targetTime =
      clamp(progress) * Math.max(video.duration - VIDEO_END_PADDING, 0);

    if (Math.abs(video.currentTime - targetTime) > SEEK_THRESHOLD) {
      video.currentTime = targetTime;
    }
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    latestScrollRef.current = latest;

    if (scrubFrameRef.current !== null) {
      return;
    }

    scrubFrameRef.current = requestAnimationFrame(() => {
      scrubFrameRef.current = null;

      seekVideo(latestScrollRef.current);
    });
  });

  useEffect(() => {
    return () => {
      if (scrubFrameRef.current !== null) {
        cancelAnimationFrame(scrubFrameRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
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
          <div
            className="
              absolute
              left-[78%]
              top-[6vh]

              h-screen
              w-[56.25vh]

              -translate-x-1/2

              md:left-[64%]
              md:top-0

              xl:left-1/2
            "
          >
            <motion.video
              ref={videoRef}
              src="/videos/wine/wine.mp4"
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

                opacity-[0.48]
                sm:opacity-[0.5]
                md:opacity-[0.62]
                lg:opacity-[0.80]
                xl:opacity-[1.0]
              "
              style={{
                filter: "contrast(1.2) brightness(0.9)",
              }}
              onLoadedMetadata={(event) => {
                const video = event.currentTarget;

                const progress = scrollYProgress.get();

                video.currentTime =
                  progress * Math.max(video.duration - VIDEO_END_PADDING, 0);
              }}
              onLoadedData={() => {
                seekVideo(scrollYProgress.get());
              }}
            />
          </div>
        </div>
      )}

      <div className="relative">{children}</div>
    </div>
  );
}
