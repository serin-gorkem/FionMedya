import type {
  ReactNode,
} from "react";

import DetailHeader from "@/app/components/pages/DetailHeader";

type DetailPageShellProps = {
  eyebrow: string;

  title: ReactNode;

  description: string;

  children?: ReactNode;

  background?: ReactNode;
};

export default function DetailPageShell({
  eyebrow,
  title,
  description,
  children,
  background,
}: DetailPageShellProps) {
  return (
    <main
      className="
        relative
        isolate

        min-h-screen

        overflow-x-clip

        bg-[#0d0709]

        text-[var(--ivory)]
      "
    >
      {/* =============================================
          BACKGROUND
      ============================================== */}

      {background && (
        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            inset-0
            z-0
          "
        >
          {background}
        </div>
      )}

      {/* =============================================
          PAGE
      ============================================== */}

      <div className="relative z-10">
        {/* ===========================================
            SHARED DETAIL HEADER
        ============================================ */}

        <DetailHeader />

        {/* ===========================================
            HERO
        ============================================ */}

        <section
          className="
            mx-auto
            max-w-[1500px]

            px-6
            pb-20
            pt-24

            sm:px-10
            sm:pb-28
            sm:pt-32
          "
        >
          <div
            className="
              grid
              gap-12

              lg:grid-cols-[minmax(0,1fr)_420px]
              lg:items-end
            "
          >
            {/* LEFT */}

            <div>
              <p
                className="
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.25em]

                  text-[var(--wine-light)]
                "
              >
                {eyebrow}
              </p>

              <h1
                className="
                  mt-6
                  max-w-[950px]

                  font-serif

                  text-[clamp(4rem,8vw,8.5rem)]

                  leading-[0.82]
                  tracking-[-0.065em]

                  text-[var(--ivory)]
                "
              >
                {title}
              </h1>
            </div>

            {/* RIGHT */}

            <div
              className="
                border-t
                border-white/10

                pt-7

                lg:border-l
                lg:border-t-0
                lg:pl-9
                lg:pt-0
              "
            >
              <p
                className="
                  max-w-[390px]

                  text-[15px]
                  leading-7

                  text-[#c2bab6]
                "
              >
                {description}
              </p>
            </div>
          </div>
        </section>

        {/* ===========================================
            CONTENT
        ============================================ */}

        {children && (
          <section
            className="
              border-t
              border-white/10
            "
          >
            <div
              className="
                mx-auto
                max-w-[1500px]

                px-6

                sm:px-10
              "
            >
              {children}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}