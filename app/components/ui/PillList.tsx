type PillListProps = {
  items: readonly string[];
  variant?: "wine" | "neutral";
  className?: string;
};

export default function PillList({
  items,
  variant = "wine",
  className = "",
}: PillListProps) {
  const variantClass =
    variant === "wine"
      ? "border-[#4f1628] bg-[#12070b] text-white/55"
      : "border-white/[0.08] bg-[#0d0d0d] text-white/42";

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((item) => (
        <span
          key={item}
          className={`
            rounded-full border
            px-4 py-2
            text-[8px] uppercase tracking-[0.16em]
            ${variantClass}
          `}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
