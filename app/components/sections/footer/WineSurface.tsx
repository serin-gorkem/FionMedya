export default function WineSurface() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-px bg-[#d06a87]/45"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-[2] h-[28px] w-[72vw] max-w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#591323]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[4px] z-[1] h-[22px] w-[46vw] max-w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#6c1830] opacity-45"
      />
    </>
  );
}
