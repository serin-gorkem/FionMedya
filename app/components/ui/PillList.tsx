type PillListProps = {
  items: string[];
  className?: string;
};

export default function PillList({
  items,
  className = "",
}: PillListProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className={`
        flex
        flex-wrap
        gap-2

        ${className}
      `}
    >
      {items.map((item) => (
        <span
          key={item}
          className="
            inline-flex
            items-center

            rounded-full

            border
            border-white/15

            bg-[#111111]

            px-3.5
            py-2.5

            text-[10px]
            font-medium
            uppercase
            tracking-[0.12em]

            text-[var(--text-body)]
          "
        >
          {item}
        </span>
      ))}
    </div>
  );
}