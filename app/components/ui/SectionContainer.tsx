import type { ReactNode } from "react";

type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <div
      className={`
        relative z-20
        mx-auto max-w-[1600px]
        px-6 py-24
        sm:px-10 sm:py-32
        xl:py-40
        ${className}
      `}
    >
      {children}
    </div>
  );
}
