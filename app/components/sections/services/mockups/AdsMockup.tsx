export default function AdsMockup() {
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
    <div
      className="
        group/mockup
        relative

        mx-auto
        w-full
        min-w-0
        max-w-lg
      "
    >
      {/* AMBIENT */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-1/2

          h-[70%]
          w-[78%]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#591323]/20

          blur-3xl
        "
      />

      {/* DASHBOARD */}

      <div
        className="
          relative
          z-10

          w-full
          min-w-0

          overflow-hidden

          rounded-3xl

          border
          border-[#5f1c31]

          bg-[#0a0a0a]

          p-4

          shadow-[0_30px_100px_rgba(72,12,31,0.30)]

          transition-transform
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          sm:p-6

          lg:group-hover/mockup:-translate-y-2
        "
      >
        {/* =============================================
            HEADER
        ============================================== */}

        <div
          className="
            border-b
            border-white/10

            pb-5

            sm:flex
            sm:items-start
            sm:justify-between
            sm:gap-5
          "
        >
          <div className="min-w-0">
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.28em]
                text-[#c45a78]

                sm:text-[10px]
                sm:tracking-[0.32em]
              "
            >
              Campaign Manager
            </p>

            <h4
              className="
                mt-3

                font-serif
                text-[34px]
                leading-[0.86]
                tracking-[-0.05em]

                text-[#f4efe9]

                sm:text-[46px]
              "
            >
              Reklam
              <br />
              Yönetimi
            </h4>
          </div>

          <button
            type="button"
            className="
              mt-5

              inline-flex
              items-center
              justify-center

              bg-[#7a1636]

              px-4
              py-3

              text-[11px]
              font-medium
              text-white

              sm:mt-0
              sm:shrink-0
              sm:px-5
              sm:text-sm
            "
          >
            + Campaign
          </button>
        </div>

        {/* =============================================
            METRICS
        ============================================== */}

        <div
          className="
            mt-5

            grid
            grid-cols-3
            gap-2

            sm:gap-4
          "
        >
          <MetricCard
            label="Reach"
            value="XY.K"
            sub="+ZT%"
          />

          <MetricCard
            label="CTR"
            value="Z.T%"
            sub="+AB%"
            featured
          />

          <MetricCard
            label="Results"
            value="AB"
            sub="Active"
          />
        </div>

        {/* =============================================
            CHART
        ============================================== */}

        <div
          className="
            mt-5

            rounded-[22px]

            border
            border-white/10

            bg-[#0d0d0d]

            p-4

            sm:mt-6
            sm:rounded-3xl
            sm:p-6
          "
        >
          <div
            className="
              flex
              items-start
              justify-between
              gap-4
            "
          >
            <div>
              <p
                className="
                  text-[12px]
                  font-medium
                  text-white/70

                  sm:text-sm
                "
              >
                Campaign activity
              </p>

              <p
                className="
                  mt-1
                  text-[9px]
                  text-white/30

                  sm:text-[10px]
                "
              >
                Last 8 periods
              </p>
            </div>

            <span
              className="
                text-[8px]
                text-white/25

                sm:text-[9px]
              "
            >
              Reach
            </span>
          </div>

          <div
            className="
              mt-7

              flex
              h-32
              items-end
              gap-2

              sm:mt-9
              sm:h-44
              sm:gap-3
            "
          >
            {bars.map(
              (bar, index) => (
                <div
                  key={index}
                  className="
                    flex
                    h-full
                    flex-1
                    items-end
                  "
                >
                  <div
                    className={`
                      w-full
                      min-w-0
                      rounded-t-lg

                      ${
                        index ===
                        bars.length -
                          1
                          ? "bg-[#c45a78]"
                          : "bg-[#7f2040]"
                      }
                    `}
                    style={{
                      height: `${bar}%`,
                    }}
                  />
                </div>
              ),
            )}
          </div>
        </div>

        {/* =============================================
            CAMPAIGNS
        ============================================== */}

        <div
          className="
            mt-5

            overflow-hidden

            rounded-[22px]

            border
            border-white/10

            bg-[#0d0d0d]

            sm:mt-6
            sm:rounded-3xl
          "
        >
          {/* DESKTOP TABLE HEADER */}

          <div
            className="
              hidden

              grid-cols-[minmax(0,1fr)_90px_70px_70px]

              border-b
              border-white/10

              px-5
              py-3

              text-[7px]
              uppercase
              tracking-[0.2em]
              text-white/25

              sm:grid
            "
          >
            <span>
              Campaign
            </span>

            <span>
              Status
            </span>

            <span>
              Reach
            </span>

            <span>
              Result
            </span>
          </div>

          <div>
            {campaigns.map(
              (campaign) => (
                <div
                  key={
                    campaign.name
                  }
                  className="
                    border-b
                    border-white/[0.07]

                    px-4
                    py-4

                    last:border-b-0

                    sm:grid
                    sm:grid-cols-[minmax(0,1fr)_90px_70px_70px]
                    sm:items-center
                    sm:px-5
                  "
                >
                  {/* MOBILE TOP */}

                  <div
                    className="
                      flex
                      min-w-0
                      items-center
                      justify-between
                      gap-4

                      sm:block
                    "
                  >
                    <p
                      className="
                        truncate

                        text-[10px]
                        text-white/65
                      "
                    >
                      {
                        campaign.name
                      }
                    </p>

                    <CampaignStatus
                      status={
                        campaign.status
                      }
                      className="sm:hidden"
                    />
                  </div>

                  {/* DESKTOP STATUS */}

                  <CampaignStatus
                    status={
                      campaign.status
                    }
                    className="hidden sm:inline-flex"
                  />

                  {/* MOBILE STATS */}

                  <div
                    className="
                      mt-3
                      flex
                      gap-6

                      sm:contents
                    "
                  >
                    <div>
                      <span
                        className="
                          text-[6px]
                          uppercase
                          tracking-[0.18em]
                          text-white/20

                          sm:hidden
                        "
                      >
                        Reach
                      </span>

                      <p
                        className="
                          mt-1
                          text-[9px]
                          text-white/45

                          sm:mt-0
                        "
                      >
                        {
                          campaign.reach
                        }
                      </p>
                    </div>

                    <div>
                      <span
                        className="
                          text-[6px]
                          uppercase
                          tracking-[0.18em]
                          text-white/20

                          sm:hidden
                        "
                      >
                        Result
                      </span>

                      <p
                        className="
                          mt-1
                          text-[9px]
                          text-[#c45a78]

                          sm:mt-0
                        "
                      >
                        {
                          campaign.result
                        }
                      </p>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   METRIC
========================================================= */

type MetricCardProps = {
  label: string;
  value: string;
  sub: string;
  featured?: boolean;
};

function MetricCard({
  label,
  value,
  sub,
  featured = false,
}: MetricCardProps) {
  return (
    <div
      className={`
        min-w-0

        rounded-[20px]

        border

        px-3
        py-4

        sm:rounded-3xl
        sm:px-5
        sm:py-6

        ${
          featured
            ? `
              border-[#7b2340]
              bg-[#2b0b15]
            `
            : `
              border-white/10
              bg-[#0d0d0d]
            `
        }
      `}
    >
      <p
        className="
          truncate

          text-[6px]
          uppercase
          tracking-[0.2em]
          text-white/30

          sm:text-[8px]
        "
      >
        {label}
      </p>

      <p
        className="
          mt-5

          whitespace-nowrap

          font-serif
          text-[28px]
          leading-none
          tracking-[-0.06em]

          text-[#f4efe9]

          sm:mt-7
          sm:text-[42px]
        "
      >
        {value}
      </p>

      <p
        className="
          mt-5

          text-[8px]
          text-[#c45a78]

          sm:mt-7
          sm:text-[9px]
        "
      >
        {sub}
      </p>
    </div>
  );
}

/* =========================================================
   STATUS
========================================================= */

function CampaignStatus({
  status,
  className = "",
}: {
  status: string;
  className?: string;
}) {
  const active =
    status === "Active";

  return (
    <span
      className={`
        items-center
        gap-1.5

        text-[7px]
        uppercase
        tracking-[0.15em]

        ${
          active
            ? "text-[#c45a78]"
            : "text-white/25"
        }

        ${className}
      `}
    >
      <span
        className={`
          size-1.5
          rounded-full

          ${
            active
              ? "bg-[#c45a78]"
              : "bg-white/20"
          }
        `}
      />

      {status}
    </span>
  );
}