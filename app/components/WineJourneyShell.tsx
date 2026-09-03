"use client";

import { type ReactNode, useRef } from "react";
import WineScrollVideo from "@/app/components/wine/WineScrollVideo";

type WineJourneyShellProps = {
  children: ReactNode;
};

export default function WineJourneyShell({ children }: WineJourneyShellProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative">
      <WineScrollVideo containerRef={containerRef} />
      <div className="relative">{children}</div>
    </div>
  );
}
