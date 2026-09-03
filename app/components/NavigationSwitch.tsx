"use client";

type NavigationSwitchProps = {
  open: boolean;
  onClick: () => void;
};

export default function NavigationSwitch({
  open,
  onClick,
}: NavigationSwitchProps) {
  return (
    <div
      className="
        navigation-switch-appear
        pointer-events-none
        fixed right-6 top-6 z-50
        sm:right-10 sm:top-8
      "
    >
      <button
        type="button"
        aria-label={open ? "Navigasyonu kapat" : "Navigasyonu aç"}
        aria-expanded={open}
        onClick={onClick}
        className="
          group
          pointer-events-auto
          flex h-11 w-8
          items-center justify-center
          cursor-pointer
        "
      >
        <span
          className={`
            relative
            block h-[38px] w-[24px]
            overflow-hidden
            rounded-[3px]
            border
            backdrop-blur-md
            transition-all
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]
            ${
              open
                ? `
                  border-white/25
                  bg-[#241016]/85
                  shadow-[0_0_18px_rgba(89,19,35,0.18)]
                `
                : `
                  border-white/30
                  bg-[#161113]/90
                  shadow-[0_4px_16px_rgba(0,0,0,0.35)]
                `
            }
          `}
        >
          <span
            className={`
              absolute
              left-[4px]
              h-[14px] w-[14px]
              rounded-[2px]
              border
              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              ${
                open
                  ? `
                    top-[19px]
                    border-white/15
                    bg-[#681a30]
                    shadow-[0_-3px_8px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.14)]
                  `
                  : `
                    top-[4px]
                    border-white/18
                    bg-[#302629]
                    shadow-[0_3px_8px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.12)]
                  `
              }
            `}
          />

          <span
            aria-hidden="true"
            className="
              pointer-events-none
              absolute left-1/2 top-1/2
              h-[18px] w-px
              -translate-x-1/2 -translate-y-1/2
              bg-white/[0.04]
            "
          />

          <span
            aria-hidden="true"
            className={`
              pointer-events-none
              absolute inset-0
              transition-opacity duration-500
              ${open ? "opacity-100" : "opacity-30"}
            `}
            style={{
              background:
                "radial-gradient(circle at 50% 80%, rgba(142,48,77,0.22), transparent 70%)",
            }}
          />
        </span>
      </button>
    </div>
  );
}
