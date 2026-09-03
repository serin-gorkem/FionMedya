export default function SocialMockup() {
  const highlights = ["f", "i", "o", "n"];

  const posts = [
    "#26070f",
    "#4a1121",
    "#16070b",
    "#eee9e1",
    "#711d38",
    "#cdbdac",
  ];

  return (
    <div className="group/mockup relative mx-auto w-full max-w-md">
      {/*
       * Mockup'ın tamamını tek parça küçültüyoruz.
       * İç ölçülere dokunmadığımız için telefon oranı bozulmaz.
       */}
      <div className="origin-center scale-75">
        {/* AMBIENT GLOW */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2

            h-[72%]
            w-[72%]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#591323]/25

            blur-[90px]
          "
        />

        {/* DECORATIVE CARD */}

        <div
          aria-hidden="true"
          className="
            absolute
            -right-[1%]
            bottom-[10%]

            hidden
            w-[34%]

            rotate-[7deg]

            rounded-[20px]

            border
            border-[#56152b]

            bg-[#240a13]

            p-3

            opacity-60

            transition-all
            duration-700

            group-hover/mockup:translate-x-4
            group-hover/mockup:rotate-[10deg]

            xl:block
          "
        >
          <div className="aspect-[4/5] rounded-[14px] bg-[#591323]" />
        </div>

        {/* PHONE */}

        <div
          className="
            relative
            z-10

            mx-auto

            w-[86%]
            max-w-[350px]

            rotate-[-1.5deg]

            rounded-[50px]

            border
            border-[#6b2639]

            bg-[#18090e]

            p-[7px]

            shadow-[0_30px_100px_rgba(75,13,34,0.38)]

            transition-all
            duration-700

            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover/mockup:-translate-y-3
            group-hover/mockup:rotate-0
          "
        >
          {/* HARDWARE BUTTONS */}

          <div
            aria-hidden="true"
            className="
              absolute
              -left-[4px]
              top-[110px]

              h-[42px]
              w-[4px]

              rounded-l

              bg-[#45212b]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -left-[4px]
              top-[165px]

              h-[68px]
              w-[4px]

              rounded-l

              bg-[#45212b]
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -right-[4px]
              top-[150px]

              h-[82px]
              w-[4px]

              rounded-r

              bg-[#45212b]
            "
          />

          {/* SCREEN */}

          <div
            className="
              relative

              overflow-hidden

              rounded-[43px]

              border
              border-white/10

              bg-[#050607]

              pb-4
            "
          >
            {/* STATUS BAR */}

            <div className="relative flex h-[40px] items-center justify-end px-5">
              <div
                aria-hidden="true"
                className="
                  absolute
                  left-1/2
                  top-[7px]

                  h-[25px]
                  w-[92px]

                  -translate-x-1/2

                  rounded-full

                  bg-black

                  ring-1
                  ring-white/[0.04]
                "
              />

              <div className="relative z-10 flex items-center gap-2">
                {/* WIFI */}

                <div
                  aria-hidden="true"
                  className="relative h-[13px] w-[17px]"
                >
                  <span
                    className="
                      absolute
                      left-1/2
                      top-[1px]

                      h-[11px]
                      w-[16px]

                      -translate-x-1/2

                      rounded-t-full

                      border-t-2
                      border-white/85
                    "
                  />

                  <span
                    className="
                      absolute
                      left-1/2
                      top-[5px]

                      h-[7px]
                      w-[10px]

                      -translate-x-1/2

                      rounded-t-full

                      border-t-2
                      border-white/85
                    "
                  />

                  <span
                    className="
                      absolute
                      bottom-0
                      left-1/2

                      h-[3px]
                      w-[3px]

                      -translate-x-1/2

                      rounded-full

                      bg-white/85
                    "
                  />
                </div>

                {/* BATTERY */}

                <div
                  aria-hidden="true"
                  className="
                    relative

                    flex
                    h-[11px]
                    w-[20px]

                    items-center

                    rounded-[3px]

                    border
                    border-white/75

                    p-[1px]
                  "
                >
                  <div className="h-full w-[72%] rounded-[1px] bg-white/85" />

                  <span
                    className="
                      absolute
                      -right-[3px]
                      top-[3px]

                      h-[5px]
                      w-[2px]

                      rounded-r

                      bg-white/55
                    "
                  />
                </div>
              </div>
            </div>

            {/* INSTAGRAM HEADER */}

            <div className="flex items-center justify-between px-4 pb-3 pt-1">
              <span className="text-[25px] leading-none text-white/90">
                ‹
              </span>

              <p className="text-[15px] font-semibold tracking-[-0.02em] text-[#f4efe9]">
                fionmedya
              </p>

              <span className="text-[20px] text-white/80">⋯</span>
            </div>

            {/* PROFILE */}

            <div className="px-4">
              <div className="flex items-center gap-5">
                <div
                  className="
                    flex
                    h-[78px]
                    w-[78px]

                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-[#f2efe8]

                    ring-1
                    ring-white/15
                  "
                >
                  <span className="ml-[7px] text-[16px] tracking-[0.4em] text-black">
                    fion
                  </span>
                </div>

                <div className="grid flex-1 grid-cols-3 gap-3 text-center">
                  {[
                    ["XY", "posts"],
                    ["ZT", "followers"],
                    ["AB", "following"],
                  ].map(([value, label]) => (
                    <div key={label}>
                      <p className="text-[15px] font-semibold text-[#f4efe9]">
                        {value}
                      </p>

                      <p className="mt-1 text-[10px] text-white/70">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* BIO */}

              <div className="mt-4">
                <p className="text-[12px] font-semibold text-[#f4efe9]">
                  Fion Medya
                </p>

                <p className="mt-0.5 text-[10px] text-white/42">
                  Creative Agency
                </p>

                <p className="mt-2 text-[11px] leading-[1.45] text-white/78">
                  Sıradan Olanı Unut.
                  <br />
                  Social Media · Design · Ads
                </p>

                <p className="mt-1.5 text-[11px] font-medium text-[#7894ff]">
                  fionmedya.com
                </p>
              </div>

              {/* FOLLOWED BY */}

              <div className="mt-4 flex items-center gap-2.5">
                <div className="flex -space-x-2">
                  {["m", "k", "d"].map((letter, index) => (
                    <div
                      key={letter}
                      className={`
                        flex
                        h-7
                        w-7

                        items-center
                        justify-center

                        rounded-full

                        border-2
                        border-[#050607]

                        text-[9px]

                        ${
                          index === 0
                            ? "bg-[#74364b] text-white"
                            : index === 1
                              ? "bg-[#a76f5d] text-white"
                              : "bg-[#e4ded7] text-black"
                        }
                      `}
                    >
                      {letter}
                    </div>
                  ))}
                </div>

                <p className="text-[9px] leading-4 text-white/60">
                  Followed by{" "}
                  <span className="font-medium text-white/90">
                    melis.jpg
                  </span>
                  ,{" "}
                  <span className="font-medium text-white/90">
                    kaanworks
                  </span>{" "}
                  and others
                </p>
              </div>

              {/* ACTIONS */}

              <div className="mt-4 flex items-center gap-2">
                <button
                  type="button"
                  className="
                    flex
                    min-w-0
                    flex-[1.15]

                    items-center
                    justify-center

                    gap-2

                    rounded-[11px]

                    bg-[#24272d]

                    px-4
                    py-[10px]

                    text-[12px]
                    font-semibold
                    text-[#f4efe9]
                  "
                >
                  Following

                  <span
                    aria-hidden="true"
                    className="
                      mt-[-3px]

                      inline-block

                      h-[7px]
                      w-[7px]

                      rotate-45

                      border-b
                      border-r
                      border-white/80
                    "
                  />
                </button>

                <button
                  type="button"
                  className="
                    flex
                    min-w-0
                    flex-1

                    items-center
                    justify-center

                    rounded-[11px]

                    bg-[#24272d]

                    px-4
                    py-[10px]

                    text-[12px]
                    font-semibold
                    text-[#f4efe9]
                  "
                >
                  Message
                </button>

                <button
                  type="button"
                  aria-label="Kişi ekle"
                  className="
                    flex
                    h-[39px]
                    w-[46px]

                    shrink-0

                    items-center
                    justify-center

                    rounded-[11px]

                    bg-[#24272d]
                  "
                >
                  <span className="relative block h-[18px] w-[20px]">
                    <span
                      className="
                        absolute
                        right-[2px]
                        top-0

                        h-[7px]
                        w-[7px]

                        rounded-full

                        border-[1.5px]
                        border-white/90
                      "
                    />

                    <span
                      className="
                        absolute
                        bottom-0
                        right-0

                        h-[8px]
                        w-[12px]

                        rounded-t-full

                        border-[1.5px]
                        border-white/90
                      "
                    />

                    <span className="absolute left-0 top-[5px] h-[8px] w-[8px]">
                      <span
                        className="
                          absolute
                          left-0
                          top-1/2

                          h-[1.5px]
                          w-full

                          -translate-y-1/2

                          bg-white/90
                        "
                      />

                      <span
                        className="
                          absolute
                          left-1/2
                          top-0

                          h-full
                          w-[1.5px]

                          -translate-x-1/2

                          bg-white/90
                        "
                      />
                    </span>
                  </span>
                </button>
              </div>

              {/* HIGHLIGHTS */}

              <div className="mt-5 flex gap-3 overflow-hidden">
                {highlights.map((item, index) => (
                  <div
                    key={`${item}-${index}`}
                    className="flex shrink-0 flex-col items-center gap-1.5"
                  >
                    <div className="rounded-full border border-white/15 bg-[#11151a] p-[3px]">
                      <div
                        className="
                          flex
                          h-[52px]
                          w-[52px]

                          items-center
                          justify-center

                          rounded-full

                          bg-black

                          font-serif
                          text-[23px]

                          text-[#f4efe9]
                        "
                      >
                        {item}
                      </div>
                    </div>

                    <span className="text-[8px] text-white/70">•</span>
                  </div>
                ))}
              </div>
            </div>

            {/* TABS */}

            <div className="mt-5 grid grid-cols-3 border-t border-white/10">
              <div className="flex justify-center border-b border-[#f4efe9] py-3 text-[17px] text-white">
                ⊞
              </div>

              <div className="flex justify-center py-3 text-[17px] text-white/42">
                ▷
              </div>

              <div className="flex justify-center py-3 text-[17px] text-white/42">
                ◉
              </div>
            </div>

            {/* POSTS */}

            <div className="grid grid-cols-3 gap-[1px] bg-white/10">
              {posts.map((background, index) => (
                <div
                  key={background}
                  className="relative aspect-square overflow-hidden bg-black"
                  style={{
                    backgroundColor: background,
                  }}
                >
                  {index === 0 && (
                    <div className="absolute inset-0 flex flex-col justify-between p-2">
                      <span className="text-[7px] tracking-[0.3em] text-[#f4efe9]">
                        FION
                      </span>

                      <p className="font-serif text-[18px] leading-[0.88] tracking-[-0.04em] text-[#f4efe9]">
                        Sıradan
                        <br />
                        Olanı
                        <br />
                        Unut.
                      </p>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="absolute inset-0 flex items-center p-2">
                      <p className="text-center text-[6px] leading-3 text-white/65">
                        Daha iyi fikir,
                        <br />
                        daha güçlü marka.
                      </p>
                    </div>
                  )}

                  {index === 2 && (
                    <div className="absolute inset-0 flex items-end justify-center pb-3">
                      <span className="text-[7px] tracking-[0.3em] text-[#f4efe9]">
                        FION
                      </span>
                    </div>
                  )}

                  {index === 3 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[8px] text-black/70">
                        SOCIAL
                      </span>
                    </div>
                  )}

                  {index === 4 && (
                    <div className="absolute inset-0 flex items-end p-2">
                      <span className="font-serif text-[18px] text-[#f4efe9]">
                        Menü
                      </span>
                    </div>
                  )}

                  {index === 5 && (
                    <div className="absolute inset-0 flex items-start justify-end p-2">
                      <span className="text-[7px] tracking-[0.3em] text-black/70">
                        FION
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* HOME INDICATOR */}

            <div className="flex justify-center pb-1 pt-3">
              <div className="h-[4px] w-[105px] rounded-full bg-white/75" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}