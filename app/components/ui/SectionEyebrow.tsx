import type {
  ReactNode,
} from "react";

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
        font-medium
        uppercase
        tracking-[0.22em]

        text-[var(--accent)]

        ${className}
      `}
    >
      {children}
    </p>
  );
}