export const adminPrimaryActionClassName = `
  group
  inline-flex
  items-center
  justify-center
  gap-4

  rounded-[12px]

  border
  border-[#8a304c]

  bg-[#591323]

  px-6
  py-4

  text-[10px]
  font-medium
  uppercase
  tracking-[0.18em]

  text-[#f4efe9]

  shadow-[0_14px_40px_rgba(89,19,35,0.22)]

  transition-all
  duration-300

  hover:-translate-y-0.5
  hover:border-[#d86a88]
  hover:bg-[#6b1830]

  disabled:cursor-wait
  disabled:opacity-50
`;

export const adminSecondaryActionClassName = `
  inline-flex
  items-center
  justify-center
  gap-3

  rounded-[12px]

  border
  border-white/15

  bg-[#111111]

  px-5
  py-3.5

  text-[10px]
  font-medium
  uppercase
  tracking-[0.16em]

  text-[var(--text-secondary)]

  transition-all
  duration-300

  hover:border-white/25
  hover:bg-[#171717]
  hover:text-[var(--text-primary)]

  disabled:cursor-not-allowed
  disabled:opacity-50
`;