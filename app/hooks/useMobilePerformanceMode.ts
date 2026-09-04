"use client";

import {
  useSyncExternalStore,
} from "react";

const QUERY =
  "(max-width: 900px), (pointer: coarse)";

function subscribe(
  callback: () => void,
) {
  const media =
    window.matchMedia(
      QUERY,
    );

  media.addEventListener(
    "change",
    callback,
  );

  return () => {
    media.removeEventListener(
      "change",
      callback,
    );
  };
}

function getSnapshot() {
  return window.matchMedia(
    QUERY,
  ).matches;
}

/*
 * SSR'da light mode ile başlıyoruz.
 *
 * Böylece telefon daha hydration olmadan
 * ağır video/animation markup'ını almaz.
 *
 * Desktop hydration sonrası full experience'a
 * geçer. Fixed background olduğu için layout
 * shift yaratmaz.
 */
function getServerSnapshot() {
  return true;
}

export default function useMobilePerformanceMode() {
  return useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
}