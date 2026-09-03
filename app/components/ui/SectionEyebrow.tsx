import type { ReactNode } from "react";

type SectionEyebrowProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionEyebrow({
  children,
  className = "",
}: SectionEyebrowProps) {
  return (
    <p
      className={`
        text-[10px]
        uppercase tracking-[0.42em]
        text-[#c45a78]
        ${className}
      `}
    >
      {children}
    </p>
  );
}
