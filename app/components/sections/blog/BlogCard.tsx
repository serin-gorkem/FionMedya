import Link from "next/link";

import type {
  BlogPost,
} from "@/features/blog/blog.types";

import {
  getReadingTime,
} from "@/features/blog/blog.reading-time";

type BlogCardProps = {
  post: BlogPost;
  index: number;
};

function formatDate(
  value: string | null,
) {
  if (!value) {
    return null;
  }

  return new Intl.DateTimeFormat(
    "tr-TR",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
  ).format(
    new Date(value),
  );
}

export default function BlogCard({
  post,
  index,
}: BlogCardProps) {
  const readingTime =
    getReadingTime(
      post.contentHtml,
    );

  const date =
    formatDate(
      post.publishedAt,
    );

  return (
    <article
      className="
        group

        border-t
        border-white/10

        py-10

        sm:py-14
      "
    >
      <Link
        href={`/blog/${post.slug}`}
        className="
          grid
          gap-8

          lg:grid-cols-[72px_minmax(0,1fr)_360px]
          lg:items-center
          lg:gap-10
        "
      >
        {/* NUMBER */}

        <div>
          <span
            className="
              font-serif
              text-3xl
              tracking-[-0.05em]
              text-white/20
            "
          >
            {(index + 1)
              .toString()
              .padStart(
                2,
                "0",
              )}
          </span>
        </div>

        {/* COPY */}

        <div className="min-w-0">
          <div
            className="
              flex
              flex-wrap
              items-center

              gap-x-4
              gap-y-2
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.26em]
                text-wine-light
              "
            >
              {post.category}
            </span>

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.22em]
                text-white/30
              "
            >
              {readingTime} dk
            </span>

            {date && (
              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.22em]
                  text-white/30
                "
              >
                {date}
              </span>
            )}
          </div>

          <h2
            className="
              mt-5
              max-w-3xl

              font-serif
              text-[clamp(2.5rem,4vw,4.8rem)]
              leading-[0.88]
              tracking-[-0.055em]

              text-ivory

              transition-colors
              duration-300

              group-hover:text-white
            "
          >
            {post.title}
          </h2>

          <p
            className="
              mt-5
              max-w-xl

              text-sm
              leading-7
              text-white/45
            "
          >
            {post.excerpt}
          </p>

          <span
            className="
              mt-7
              inline-flex
              items-center
              gap-3

              text-[9px]
              uppercase
              tracking-[0.22em]

              text-white/40

              transition-colors
              duration-300

              group-hover:text-wine-light
            "
          >
            Yazıyı oku

            <span
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            >
              →
            </span>
          </span>
        </div>

        {/* IMAGE */}

        <div
          className="
            relative
            aspect-[4/3]
            overflow-hidden

            rounded-2xl

            border
            border-white/10

            bg-[#0d0d0d]
          "
        >
          {post.coverImageUrl ? (
            <img
              src={post.coverImageUrl}
              alt=""
              className="
                h-full
                w-full
                object-cover

                opacity-75

                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]

                group-hover:scale-[1.035]
                group-hover:opacity-100
              "
            />
          ) : (
            <div
              className="
                flex
                h-full
                items-center
                justify-center

                bg-[#11080c]
              "
            >
              <span
                className="
                  font-serif
                  text-5xl
                  italic
                  text-[#591323]
                "
              >
                Fion.
              </span>
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}