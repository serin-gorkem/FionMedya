"use client";

import { WinePour } from "./wine/WinePour";
import { WineTrail } from "./wine/WineTrail";

export function WineRoute() {
  return (
    <>
      <WinePour />

      <WineTrail />
    </>
  );
}