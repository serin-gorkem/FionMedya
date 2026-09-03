type ServiceItem = {
  number: string;
  title: string;
  label: string;
  description: string;
  tags: string[];
  mockup: "social" | "design" | "ads";
  align: "left" | "right";
};

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Sosyal Medya Yönetimi",
    label: "İçerik",
    description:
      "İçerik stratejisini, kreatif tasarımı ve yayın planını birlikte yönetiyoruz. Markanın sosyal medyada görünür, tutarlı ve akılda kalıcı olmasını sağlıyoruz.",
    tags: [
      "İçerik Stratejisi",
      "Kreatif",
      "Planlama",
      "Yönetim",
    ],
    mockup: "social",
    align: "left",
  },
  {
    number: "02",
    title: "Grafik Tasarım",
    label: "Marka",
    description:
      "Kurumsal kimlikten sosyal medya tasarımlarına kadar markanın görsel dilini oluşturuyoruz. Her temas noktasında aynı marka algısını koruyoruz.",
    tags: [
      "Kurumsal Kimlik",
      "Sosyal Tasarım",
      "Basılı İşler",
      "Görsel Sistem",
    ],
    mockup: "design",
    align: "right",
  },
  {
    number: "03",
    title: "Reklam Yönetimi",
    label: "Büyüme",
    description:
      "Meta reklam yönetimini doğru hedef kitle, güçlü kreatif ve ölçülebilir sonuç odağında yürütüyoruz. Reklam bütçesini yalnızca erişime değil, gerçek iş sonucuna yönlendiriyoruz.",
    tags: [
      "Meta Ads",
      "Hedef Kitle",
      "Optimizasyon",
      "Dönüşüm",
    ],
    mockup: "ads",
    align: "left",
  },
];

/* =========================================================
   SOCIAL MEDIA / IPHONE
========================================================= */

function SocialMockup() {
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
    <div className="group/mockup relative mx-auto w-full max-w-[520px]">
      {/* ambient wine light */}

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

      {/* decorative post */}

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

      {/* =====================================================
          IPHONE
      ====================================================== */}

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
        {/* side buttons */}

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

        {/* screen */}

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
          {/* IOS STATUS */}

          <div
            className="
              relative
              flex
              h-[40px]
              items-center
              justify-end
              px-5
            "
          >
            {/* island */}

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

            {/* status */}

            <div className="relative z-10 flex items-center gap-2">
              {/* wifi */}

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

              {/* battery */}

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

          {/* INSTAGRAM NAV */}

          <div
            className="
              flex
              items-center
              justify-between
              px-4
              pb-3
              pt-1
            "
          >
            <span className="text-[25px] leading-none text-white/90">
              ‹
            </span>

            <p
              className="
                text-[15px]
                font-semibold
                tracking-[-0.02em]
                text-[#f4efe9]
              "
            >
              fionmedya
            </p>

            <span className="text-[20px] text-white/80">
              ⋯
            </span>
          </div>

          {/* PROFILE */}

          <div className="px-4">
            <div className="flex items-center gap-5">
              {/* avatar */}

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
                <span
                  className="
                    ml-[7px]
                    text-[16px]
                    tracking-[0.4em]
                    text-black
                  "
                >
                  fion
                </span>
              </div>

              {/* metrics */}

              <div
                className="
                  grid
                  flex-1
                  grid-cols-3
                  gap-3
                  text-center
                "
              >
                <div>
                  <p className="text-[15px] font-semibold text-[#f4efe9]">
                    XY
                  </p>

                  <p className="mt-1 text-[10px] text-white/70">
                    posts
                  </p>
                </div>

                <div>
                  <p className="text-[15px] font-semibold text-[#f4efe9]">
                    ZT
                  </p>

                  <p className="mt-1 text-[10px] text-white/70">
                    followers
                  </p>
                </div>

                <div>
                  <p className="text-[15px] font-semibold text-[#f4efe9]">
                    AB
                  </p>

                  <p className="mt-1 text-[10px] text-white/70">
                    following
                  </p>
                </div>
              </div>
            </div>

            {/* bio */}

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

            {/* followed by */}

            <div className="mt-4 flex items-center gap-2.5">
              <div className="flex -space-x-2">
                <div
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#050607]
                    bg-[#74364b]
                    text-[9px]
                    text-white
                  "
                >
                  m
                </div>

                <div
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#050607]
                    bg-[#a76f5d]
                    text-[9px]
                    text-white
                  "
                >
                  k
                </div>

                <div
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border-2
                    border-[#050607]
                    bg-[#e4ded7]
                    text-[9px]
                    text-black
                  "
                >
                  d
                </div>
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

            {/* buttons */}

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

                  <span
                    className="
                      absolute
                      left-0
                      top-[5px]
                      h-[8px]
                      w-[8px]
                    "
                  >
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

            {/* highlights */}

            <div className="mt-5 flex gap-3 overflow-hidden">
              {highlights.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="
                    flex
                    shrink-0
                    flex-col
                    items-center
                    gap-1.5
                  "
                >
                  <div
                    className="
                      rounded-full
                      border
                      border-white/15
                      bg-[#11151a]
                      p-[3px]
                    "
                  >
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

                  <span className="text-[8px] text-white/70">
                    •
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* tabs */}

          <div
            className="
              mt-5
              grid
              grid-cols-3
              border-t
              border-white/10
            "
          >
            <div
              className="
                flex
                justify-center
                border-b
                border-[#f4efe9]
                py-3
                text-[17px]
                text-white
              "
            >
              ⊞
            </div>

            <div className="flex justify-center py-3 text-[17px] text-white/42">
              ▷
            </div>

            <div className="flex justify-center py-3 text-[17px] text-white/42">
              ◉
            </div>
          </div>

          {/* posts */}

          <div
            className="
              grid
              grid-cols-3
              gap-[1px]
              bg-white/10
            "
          >
            {posts.map((background, index) => (
              <div
                key={index}
                className="
                  relative
                  aspect-square
                  overflow-hidden
                  bg-black
                "
                style={{
                  backgroundColor: background,
                }}
              >
                {index === 0 && (
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      flex-col
                      justify-between
                      p-2
                    "
                  >
                    <span className="text-[7px] tracking-[0.3em] text-[#f4efe9]">
                      FION
                    </span>

                    <p
                      className="
                        font-serif
                        text-[18px]
                        leading-[0.88]
                        tracking-[-0.04em]
                        text-[#f4efe9]
                      "
                    >
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
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-end
                      justify-center
                      pb-3
                    "
                  >
                    <span className="text-[7px] tracking-[0.3em] text-[#f4efe9]">
                      FION
                    </span>
                  </div>
                )}

                {index === 3 && (
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-center
                      justify-center
                    "
                  >
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
                  <div
                    className="
                      absolute
                      inset-0
                      flex
                      items-start
                      justify-end
                      p-2
                    "
                  >
                    <span className="text-[7px] tracking-[0.3em] text-black/70">
                      FION
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* home indicator */}

          <div className="flex justify-center pb-1 pt-3">
            <div className="h-[4px] w-[105px] rounded-full bg-white/75" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   GRAPHIC DESIGN / PHOTOSHOP MACBOOK
========================================================= */

function DesignMockup() {
  const swatches = [
    "#591323",
    "#f4efe9",
    "#22090f",
    "#b24767",
  ];

  return (
    <div className="group/mockup relative mx-auto w-full max-w-[760px]">
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[68%]
          w-[76%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#591323]/18
          blur-[100px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          w-[98%]
          -rotate-[0.7deg]
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover/mockup:-translate-y-3
          group-hover/mockup:rotate-0
        "
      >
        {/* display */}

        <div
          className="
            rounded-t-[24px]
            border
            border-[#5a2133]
            bg-[#17090e]
            p-[7px]
            pb-0
            shadow-[0_30px_100px_rgba(73,12,32,0.34)]
          "
        >
          <div
            className="
              relative
              aspect-[4/3]
              overflow-hidden
              rounded-t-[17px]
              border-x
              border-t
              border-white/10
              bg-[#080808]
            "
          >
            <span
              aria-hidden="true"
              className="
                absolute
                left-1/2
                top-[5px]
                z-30
                h-[5px]
                w-[5px]
                -translate-x-1/2
                rounded-full
                bg-white/10
              "
            />

            <div
              className="
                grid
                h-full
                grid-rows-[42px_minmax(0,1fr)_44px]
              "
            >
              {/* top */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/[0.08]
                  bg-[#0d0d0d]
                  px-4
                "
              >
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#4f1628]" />
                    <span className="h-2 w-2 rounded-full bg-[#7a3047]" />
                    <span className="h-2 w-2 rounded-full bg-[#b15e77]" />
                  </div>

                  <div
                    className="
                      rounded-[6px]
                      bg-[#171717]
                      px-3
                      py-1.5
                      text-[7px]
                      text-white/42
                    "
                  >
                    Adobe Photoshop
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[7px] text-white/30">
                  <span>File</span>
                  <span>Edit</span>
                  <span>Image</span>
                  <span>Layer</span>
                  <span>Type</span>
                </div>
              </div>

              {/* workspace */}

              <div
                className="
                  grid
                  min-h-0
                  grid-cols-[48px_minmax(0,1fr)_118px]
                "
              >
                {/* tools */}

                <aside
                  className="
                    flex
                    min-h-0
                    flex-col
                    items-center
                    gap-2
                    overflow-hidden
                    border-r
                    border-white/[0.08]
                    bg-[#090909]
                    py-3
                  "
                >
                  {[
                    "↖",
                    "T",
                    "▭",
                    "○",
                    "✎",
                    "#",
                  ].map((tool, index) => (
                    <div
                      key={`${tool}-${index}`}
                      className={`
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-[7px]
                        text-[9px]

                        ${
                          index === 0
                            ? "bg-[#7b1737] text-white"
                            : "text-white/38"
                        }
                      `}
                    >
                      {tool}
                    </div>
                  ))}
                </aside>

                {/* canvas */}

                <div className="relative min-h-0 overflow-hidden bg-[#111111]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(
                          rgba(255,255,255,0.05) 1px,
                          transparent 1px
                        ),
                        linear-gradient(
                          90deg,
                          rgba(255,255,255,0.05) 1px,
                          transparent 1px
                        )
                      `,
                      backgroundSize:
                        "24px 24px",
                    }}
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      left-[12%]
                      top-[18%]
                      aspect-[4/5]
                      h-[58%]
                      -rotate-[5deg]
                      border
                      border-white/[0.06]
                      bg-[#191919]
                    "
                  />

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-[14%]
                      right-[11%]
                      aspect-[4/5]
                      h-[53%]
                      rotate-[6deg]
                      border
                      border-[#4c1627]
                      bg-[#260b14]
                    "
                  />

                  {/* artwork */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      z-10
                      aspect-[4/5]
                      h-[68%]
                      -translate-x-1/2
                      -translate-y-1/2
                      border
                      border-white/10
                      bg-[#74152f]
                      p-4
                      shadow-[0_20px_50px_rgba(0,0,0,0.4)]
                    "
                  >
                    <div
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        -inset-[3px]
                        border
                        border-[#d05779]/30
                      "
                    >
                      <span className="absolute -left-[2px] -top-[2px] h-[4px] w-[4px] bg-white" />
                      <span className="absolute -right-[2px] -top-[2px] h-[4px] w-[4px] bg-white" />
                      <span className="absolute -bottom-[2px] -left-[2px] h-[4px] w-[4px] bg-white" />
                      <span className="absolute -bottom-[2px] -right-[2px] h-[4px] w-[4px] bg-white" />
                    </div>

                    <div className="flex h-full flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <span className="text-[6px] tracking-[0.25em] text-white/45">
                          FION / 01
                        </span>

                        <span className="text-[6px] text-white/25">
                          1080 × 1350
                        </span>
                      </div>

                      <div>
                        <p
                          className="
                            font-serif
                            text-[clamp(1.4rem,2.4vw,2.45rem)]
                            leading-[0.82]
                            tracking-[-0.055em]
                            text-[#f4efe9]
                          "
                        >
                          Sıradan
                          <br />
                          Olanı
                          <br />
                          Unut.
                        </p>

                        <div className="mt-3 h-px w-9 bg-white/40" />

                        <p className="mt-3 max-w-[115px] text-[6px] leading-3 text-white/52">
                          Fikri ve görsel dili
                          aynı sistemde
                          buluşturuyoruz.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="
                      absolute
                      bottom-2
                      left-1/2
                      -translate-x-1/2
                      rounded-[5px]
                      bg-black/60
                      px-2
                      py-1
                      text-[6px]
                      text-white/30
                    "
                  >
                    78%
                  </div>
                </div>

                {/* properties */}

                <aside
                  className="
                    min-h-0
                    overflow-hidden
                    border-l
                    border-white/[0.08]
                    bg-[#090909]
                    p-3
                  "
                >
                  <p className="text-[7px] uppercase tracking-[0.22em] text-white/35">
                    Properties
                  </p>

                  <div className="mt-4 border-t border-white/[0.08] pt-3">
                    <p className="text-[7px] text-white/32">
                      Fill
                    </p>

                    <div className="mt-2 flex items-center gap-2">
                      <span className="h-7 w-7 rounded-[8px] bg-[#591323]" />

                      <span className="text-[7px] text-white/50">
                        #591323
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-white/[0.08] pt-3">
                    <p className="text-[7px] text-white/32">
                      Typeface
                    </p>

                    <p className="mt-2 font-serif text-[18px] text-[#f4efe9]">
                      Aa
                    </p>

                    <p className="mt-1 text-[6px] text-white/38">
                      Display Serif
                    </p>
                  </div>

                  <div className="mt-4 border-t border-white/[0.08] pt-3">
                    <div className="flex justify-between">
                      <p className="text-[7px] text-white/32">
                        Opacity
                      </p>

                      <span className="text-[6px] text-white/25">
                        78%
                      </span>
                    </div>

                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[78%] rounded-full bg-[#c45a78]" />
                    </div>
                  </div>

                  <div className="mt-4 border-t border-white/[0.08] pt-3">
                    <p className="text-[7px] text-white/32">
                      Layers
                    </p>

                    <div className="mt-2 space-y-1.5">
                      {[
                        "Headline",
                        "Body Copy",
                        "Background",
                      ].map((layer, index) => (
                        <div
                          key={layer}
                          className={`
                            truncate
                            rounded-[5px]
                            px-2
                            py-1.5
                            text-[6px]

                            ${
                              index === 0
                                ? "bg-[#32101c] text-white/65"
                                : "bg-[#141414] text-white/30"
                            }
                          `}
                        >
                          {layer}
                        </div>
                      ))}
                    </div>
                  </div>
                </aside>
              </div>

              {/* palette */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/[0.08]
                  bg-[#090909]
                  px-4
                "
              >
                <div className="flex gap-2">
                  {swatches.map((color) => (
                    <span
                      key={color}
                      className="
                        h-7
                        w-7
                        rounded-[7px]
                        border
                        border-white/10
                      "
                      style={{
                        backgroundColor: color,
                      }}
                    />
                  ))}
                </div>

                <span className="text-[6px] uppercase tracking-[0.2em] text-white/22">
                  RGB / 8
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* base */}

        <div
          aria-hidden="true"
          className="
            relative
            mx-auto
            h-[16px]
            w-[108%]
            -translate-x-[4%]
            rounded-b-[44px]
            border-t
            border-white/10
            bg-[#241117]
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-0
              h-[4px]
              w-[100px]
              -translate-x-1/2
              rounded-b-[6px]
              bg-[#10080b]
            "
          />
        </div>

        <div className="mx-auto h-[4px] w-[88%] rounded-b-full bg-[#12080c]" />
      </div>
    </div>
  );
}

/* =========================================================
   ADS DASHBOARD
========================================================= */

function AdsMockup() {
  const bars = [
    34,
    48,
    42,
    58,
    54,
    71,
    64,
    83,
  ];

  const campaigns = [
    {
      name: "Brand Awareness",
      status: "Active",
      reach: "XY.K",
      result: "ZT",
    },
    {
      name: "Conversion Push",
      status: "Active",
      reach: "AB.K",
      result: "QR",
    },
    {
      name: "Remarketing",
      status: "Paused",
      reach: "JK.K",
      result: "LM",
    },
  ];

  return (
    <div className="group/mockup relative mx-auto w-full max-w-[560px]">
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[74%]
          w-[74%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#591323]/18
          blur-[100px]
        "
      />

      <div
        className="
          relative
          z-10
          rounded-[30px]
          border
          border-[#5f1c31]
          bg-[#0a0a0a]
          p-6
          shadow-[0_30px_100px_rgba(72,12,31,0.30)]
          transition-all
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover/mockup:-translate-y-2
        "
      >
        {/* top */}

        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-[#c45a78]">
              Campaign Manager
            </p>

            <h4 className="mt-3 font-serif text-[46px] leading-[0.9] tracking-[-0.05em] text-[#f4efe9]">
              Reklam
              <br />
              Yönetimi
            </h4>
          </div>

          <button
            type="button"
            className="
              rounded-[14px]
              bg-[#7a1636]
              px-5
              py-3
              text-sm
              font-medium
              text-white
            "
          >
            + Campaign
          </button>
        </div>

        {/* stats */}

        <div className="mt-5 grid grid-cols-3 gap-3">
          <div className="rounded-[20px] border border-white/10 bg-[#111111] p-4">
            <p className="text-[9px] uppercase tracking-[0.24em] text-white/35">
              Reach
            </p>

            <p className="mt-4 font-serif text-[44px] tracking-[-0.05em] text-[#f4efe9]">
              XY.K
            </p>

            <p className="mt-2 text-[10px] text-[#c45a78]">
              +ZT%
            </p>
          </div>

          <div className="rounded-[20px] border border-[#622036] bg-[#2a0d17] p-4">
            <p className="text-[9px] uppercase tracking-[0.24em] text-white/40">
              CTR
            </p>

            <p className="mt-4 font-serif text-[44px] tracking-[-0.05em] text-[#f4efe9]">
              Z.T%
            </p>

            <p className="mt-2 text-[10px] text-[#d86c89]">
              +AB%
            </p>
          </div>

          <div className="rounded-[20px] border border-white/10 bg-[#111111] p-4">
            <p className="text-[9px] uppercase tracking-[0.24em] text-white/35">
              Results
            </p>

            <p className="mt-4 font-serif text-[44px] tracking-[-0.05em] text-[#f4efe9]">
              AB
            </p>

            <p className="mt-2 text-[10px] text-[#c45a78]">
              Active
            </p>
          </div>
        </div>

        {/* graph */}

        <div className="mt-4 rounded-[24px] border border-white/10 bg-[#101010] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white/70">
                Campaign activity
              </p>

              <p className="mt-1 text-[11px] text-white/28">
                Last 8 periods
              </p>
            </div>

            <span className="text-[11px] text-white/28">
              Reach
            </span>
          </div>

          <div className="mt-6 flex h-[170px] items-end gap-3">
            {bars.map(
              (
                height,
                index,
              ) => (
                <div
                  key={index}
                  className="
                    flex
                    h-full
                    w-full
                    items-end
                  "
                >
                  <div
                    className={`
                      w-full
                      rounded-t-[8px]

                      ${
                        index ===
                        bars.length -
                          1
                          ? "bg-[#c45a78]"
                          : "bg-[#74203b]"
                      }
                    `}
                    style={{
                      height: `${height}%`,
                    }}
                  />
                </div>
              ),
            )}
          </div>
        </div>

        {/* table */}

        <div className="mt-4 overflow-hidden rounded-[24px] border border-white/10 bg-[#0f0f0f]">
          <div className="grid grid-cols-[1fr_88px_72px_56px] border-b border-white/10 px-5 py-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Campaign
            </span>

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Status
            </span>

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Reach
            </span>

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
              Result
            </span>
          </div>

          {campaigns.map(
            (
              campaign,
              index,
            ) => (
              <div
                key={campaign.name}
                className={`
                  grid
                  grid-cols-[1fr_88px_72px_56px]
                  items-center
                  px-5
                  py-5

                  ${
                    index !==
                    campaigns.length -
                      1
                      ? "border-b border-white/[0.06]"
                      : ""
                  }
                `}
              >
                <span className="text-sm text-white/65">
                  {campaign.name}
                </span>

                <div>
                  <span
                    className={`
                      rounded-full
                      px-3
                      py-1
                      text-[10px]

                      ${
                        campaign.status ===
                        "Active"
                          ? "bg-[#39101f] text-[#db6d8a]"
                          : "bg-white/[0.05] text-white/35"
                      }
                    `}
                  >
                    {campaign.status}
                  </span>
                </div>

                <span className="text-sm text-white/45">
                  {campaign.reach}
                </span>

                <span className="text-sm text-white/68">
                  {campaign.result}
                </span>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MOCKUP SWITCH
========================================================= */

function ServiceMockup({
  type,
}: {
  type: ServiceItem["mockup"];
}) {
  if (type === "social") {
    return <SocialMockup />;
  }

  if (type === "design") {
    return <DesignMockup />;
  }

  return <AdsMockup />;
}

/* =========================================================
   SERVICE COPY
========================================================= */

function ServiceCopy({
  service,
}: {
  service: ServiceItem;
}) {
  return (
    <div className="w-full max-w-[500px]">
      <div
        className="
          mb-7
          flex
          items-center
          justify-between
          border-b
          border-white/10
          pb-4
        "
      >
        <span
          className="
            text-[10px]
            tracking-[0.3em]
            text-[#c45a78]
          "
        >
          {service.number}
        </span>

        <span
          className="
            text-[9px]
            uppercase
            tracking-[0.28em]
            text-white/48
          "
        >
          {service.label}
        </span>
      </div>

      {/* SEO HEADING */}

      <h3
        className="
          font-serif
          text-[clamp(2.9rem,4vw,5rem)]
          leading-[0.88]
          tracking-[-0.055em]
          text-[#f4efe9]
        "
      >
        {service.title}
      </h3>

      {/* concise SEO copy */}

      <p
        className="
          mt-7
          max-w-[430px]
          text-sm
          leading-7
          text-white/62
        "
      >
        {service.description}
      </p>

      {/* scan-first keywords */}

      <div className="mt-8 flex flex-wrap gap-2">
        {service.tags.map(
          (tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-[#4f1628]
                bg-[#12070b]
                px-4
                py-2
                text-[8px]
                uppercase
                tracking-[0.16em]
                text-white/55
              "
            >
              {tag}
            </span>
          ),
        )}
      </div>

      <a
        href="#contact"
        className="
          group
          mt-9
          inline-flex
          items-center
          gap-3
          text-[9px]
          uppercase
          tracking-[0.26em]
          text-white/45
          transition-colors
          duration-300
          hover:text-white
        "
      >
        Bir proje konuşalım

        <span
          className="
            transition-transform
            duration-500
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </a>
    </div>
  );
}

/* =========================================================
   SERVICES SECTION
========================================================= */

export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#000000]
      "
    >
      {/* =====================================================
          LOCKED WINE LANE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          bottom-0
          left-1/2
          top-0
          z-[1]

          hidden

          w-[460px]
          -translate-x-1/2

          border-x
          border-[#35101d]

          xl:block
        "
      />

      <div
        className="
          relative
          z-20

          mx-auto
          max-w-[1600px]

          px-6
          py-24

          sm:px-10
          sm:py-32

          xl:py-40
        "
      >
        {/* =================================================
            INTRO
        ================================================== */}

        <div
          className="
            mb-28

            xl:grid
            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
            xl:items-end
            xl:gap-10
          "
        >
          {/* LEFT */}

          <div className="max-w-[540px]">
            <p
              className="
                mb-6
                text-[10px]
                uppercase
                tracking-[0.42em]
                text-[#c45a78]
              "
            >
              Dijital Medya Hizmetleri
            </p>

            <h2
              id="services-title"
              className="
                font-serif
                text-[clamp(3.5rem,6vw,6.8rem)]
                leading-[0.84]
                tracking-[-0.06em]
                text-[#f4efe9]
              "
            >
              Daha fazla
              <br />

              içerik değil.
              <br />

              <em className="text-white/72">
                Daha iyi fikir.
              </em>
            </h2>

            <p
              className="
                mt-8
                max-w-[450px]
                text-sm
                leading-7
                text-white/55
              "
            >
              Kuşadası merkezli Fion Medya;
              Aydın ve İzmir başta olmak
              üzere markalara sosyal medya,
              tasarım ve dijital reklam
              çözümleri sunar.
            </p>
          </div>

          {/* EMPTY WINE LANE */}

          <div
            aria-hidden="true"
            className="hidden xl:block"
          />

          {/* RIGHT TYPOGRAPHY */}

          <div
            className="
              mt-16

              xl:mt-0
              xl:flex
              xl:justify-end
            "
          >
            <div className="w-full max-w-[430px]">
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.34em]
                  text-[#c45a78]
                "
              >
                Yaklaşım
              </p>

              <div className="mt-6">
                <p
                  className="
                    text-[clamp(1.25rem,1.6vw,1.7rem)]
                    leading-[1.08]
                    tracking-[-0.035em]
                    text-white/55
                  "
                >
                  Sosyal medya,
                  <span
                    className="
                      font-serif
                      italic
                      text-[#f4efe9]
                    "
                  >
                    {" "}
                    tasarım{" "}
                  </span>
                  ve reklamı
                </p>

                <p
                  className="
                    mt-2

                    font-serif
                    italic

                    text-[clamp(3rem,4.3vw,5rem)]

                    leading-[0.84]
                    tracking-[-0.065em]

                    text-[#f4efe9]
                  "
                >
                  aynı hedef
                </p>

                <p
                  className="
                    mt-3
                    max-w-[390px]

                    text-[clamp(1.5rem,2vw,2.2rem)]

                    leading-[1]
                    tracking-[-0.045em]

                    text-white/72
                  "
                >
                  etrafında buluşturuyoruz.
                </p>

                <div
                  className="
                    my-7
                    h-px
                    w-14
                    bg-[#c45a78]/60
                  "
                />

                <p
                  className="
                    max-w-[340px]
                    text-[clamp(1rem,1.2vw,1.2rem)]
                    leading-7
                    text-white/45
                  "
                >
                  Takipçiden önce
                  <span
                    className="
                      font-serif
                      text-[1.25em]
                      text-white/85
                    "
                  >
                    {" "}
                    müşteriyi{" "}
                  </span>
                  düşünüyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            SERVICES
        ================================================== */}

        <div className="space-y-24 xl:space-y-36">
          {services.map((service) => {
            const copyOnLeft =
              service.align === "left";

            return (
              <article
                key={service.number}
                aria-labelledby={`service-${service.number}`}
                className="
                  border-t
                  border-white/10
                  pt-12
                "
              >
                {/* MOBILE / TABLET */}

                <div className="grid gap-12 xl:hidden">
                  <div>
                    <ServiceCopy
                      service={service}
                    />
                  </div>

                  <ServiceMockup
                    type={service.mockup}
                  />
                </div>

                {/* DESKTOP */}

                <div
                  className="
                    hidden
                    min-h-[680px]

                    xl:grid
                    xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
                    xl:items-center
                    xl:gap-10
                  "
                >
                  {/* LEFT */}

                  <div
                    className={`
                      flex

                      ${
                        copyOnLeft
                          ? "justify-start"
                          : "justify-end"
                      }
                    `}
                  >
                    {copyOnLeft ? (
                      <ServiceCopy
                        service={service}
                      />
                    ) : (
                      <ServiceMockup
                        type={service.mockup}
                      />
                    )}
                  </div>

                  {/* STRICTLY EMPTY */}

                  <div
                    aria-hidden="true"
                    className="h-full"
                  />

                  {/* RIGHT */}

                  <div
                    className={`
                      flex

                      ${
                        copyOnLeft
                          ? "justify-start"
                          : "justify-end"
                      }
                    `}
                  >
                    {copyOnLeft ? (
                      <ServiceMockup
                        type={service.mockup}
                      />
                    ) : (
                      <ServiceCopy
                        service={service}
                      />
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =================================================
            SEO SUPPORT / HUMAN-READABLE SUMMARY
        ================================================== */}

        <div
          className="
            mt-28
            border-t
            border-white/10
            pt-10

            xl:grid
            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
            xl:gap-10
          "
        >
          <div>
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.32em]
                text-white/28
              "
            >
              Tek ekip / tek dil
            </p>

            <p
              className="
                mt-5
                max-w-[430px]
                font-serif
                text-[clamp(2rem,2.8vw,3.4rem)]
                leading-[0.95]
                tracking-[-0.045em]
                text-[#f4efe9]
              "
            >
              İçerik,
              <br />
              tasarım ve reklam
              <em className="text-white/55">
                {" "}
                birbirinden ayrı değil.
              </em>
            </p>
          </div>

          <div
            aria-hidden="true"
            className="hidden xl:block"
          />

          <div
            className="
              mt-10

              xl:mt-0
              xl:flex
              xl:items-end
              xl:justify-end
            "
          >
            <p
              className="
                max-w-[380px]
                text-sm
                leading-7
                text-white/48
              "
            >
              Fion Medya&apos;da sosyal medya
              yönetimi, grafik tasarım ve
              reklam yönetimi aynı marka
              stratejisinin parçaları olarak
              birlikte çalışır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}