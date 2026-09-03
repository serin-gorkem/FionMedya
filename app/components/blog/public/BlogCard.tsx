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
          lg:grid-cols-[90px_minmax(0,1fr)_minmax(260px,0.5fr)]
          lg:items-start
          lg:gap-10
        "
      >
        {/* NUMBER */}

        <div>
          <span
            className="
              font-serif
              text-[2rem]
              tracking-[-0.05em]
              text-white/18
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

        <div>
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
                text-[#c45a78]
              "
            >
              {post.category}
            </span>

            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.22em]
                text-white/25
              "
            >
              {readingTime} dk okuma
            </span>

            {date && (
              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.22em]
                  text-white/25
                "
              >
                {date}
              </span>
            )}
          </div>

          <h2
            className="
              mt-5
              max-w-[800px]

              font-serif

              text-[clamp(2.4rem,4.3vw,5rem)]

              leading-[0.9]
              tracking-[-0.055em]

              text-[#f4efe9]

              transition-colors
              duration-300

              group-hover:text-white
            "
          >
            {post.title}
          </h2>

          <div
            className="
              mt-7
              inline-flex
              items-center
              gap-3

              text-[8px]
              uppercase
              tracking-[0.24em]

              text-white/38

              transition-colors
              duration-300

              group-hover:text-[#c45a78]
            "
          >
            Okumaya devam et

            <span
              className="
                transition-transform
                duration-500
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </div>
        </div>

        {/* EXCERPT */}

        <div
          className="
            lg:border-l
            lg:border-white/10
            lg:pl-8
          "
        >
          <p
            className="
              max-w-[390px]
              text-sm
              leading-7
              text-white/42
            "
          >
            {post.excerpt}
          </p>

          {post.tags.length >
            0 && (
            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-2
              "
            >
              {post.tags
                .slice(0, 3)
                .map((tag) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-white/[0.07]
                      px-3
                      py-2
                      text-[7px]
                      uppercase
                      tracking-[0.16em]
                      text-white/28
                    "
                  >
                    {tag}
                  </span>
                ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}