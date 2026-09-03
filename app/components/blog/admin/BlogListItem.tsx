import Link from "next/link";

import type {
  BlogPost,
} from "@/features/blog/blog.types";

import DeleteBlogButton from "./DeleteBlogButton";

type BlogListItemProps = {
  post: BlogPost;
  index: number;
  isLast: boolean;
};

function formatDate(
  value: string,
) {
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

export default function BlogListItem({
  post,
  index,
  isLast,
}: BlogListItemProps) {
  const isPublished =
    post.status ===
    "published";

  return (
    <article
      className={`
        group
        relative

        transition-colors
        duration-300

        hover:bg-white/[0.018]

        ${
          !isLast
            ? "border-b border-white/[0.07]"
            : ""
        }
      `}
    >
      {/* =================================================
          DESKTOP
      ================================================== */}

      <div
        className="
          hidden

          min-h-[125px]

          grid-cols-[92px_minmax(0,1fr)_130px_150px_180px]
          items-center

          px-6
          py-5

          lg:grid
        "
      >
        {/* NUMBER */}

        <span
          className="
            font-serif
            text-2xl
            tracking-[-0.04em]
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

        {/* TITLE */}

        <div
          className="
            min-w-0
            pr-8
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.24em]
                text-[#c45a78]
              "
            >
              {post.category}
            </span>
          </div>

          <Link
            href={`/admin/blog/${post.id}/edit`}
            className="
              mt-2
              block
              truncate

              font-serif
              text-[clamp(1.4rem,2vw,2rem)]
              tracking-[-0.035em]

              text-[#f4efe9]

              transition-colors
              duration-300

              hover:text-white
            "
          >
            {post.title}
          </Link>

          <p
            className="
              mt-2
              truncate

              text-[10px]
              text-white/25
            "
          >
            /blog/{post.slug}
          </p>
        </div>

        {/* STATUS */}

        <div>
          <span
            className={`
              inline-flex
              items-center
              gap-2

              rounded-full

              border

              px-3
              py-2

              text-[8px]
              uppercase
              tracking-[0.18em]

              ${
                isPublished
                  ? `
                    border-[#6a2038]
                    bg-[#591323]/25
                    text-[#d6738e]
                  `
                  : `
                    border-white/10
                    bg-white/[0.03]
                    text-white/35
                  `
              }
            `}
          >
            <span
              className={`
                h-[5px]
                w-[5px]
                rounded-full

                ${
                  isPublished
                    ? "bg-[#c45a78]"
                    : "bg-white/25"
                }
              `}
            />

            {isPublished
              ? "Yayında"
              : "Taslak"}
          </span>
        </div>

        {/* DATE */}

        <span
          className="
            text-[10px]
            text-white/32
          "
        >
          {formatDate(
            post.updatedAt,
          )}
        </span>

        {/* ACTIONS */}

        <div
          className="
            flex
            items-center
            justify-end
            gap-2
          "
        >
          {isPublished && (
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              aria-label={`${post.title} yazısını görüntüle`}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                border
                border-white/10

                text-sm
                text-white/30

                transition-all
                duration-300

                hover:border-white/25
                hover:text-white
              "
            >
              ↗
            </Link>
          )}

          <Link
            href={`/admin/blog/${post.id}/edit`}
            className="
              rounded-full

              border
              border-white/10

              px-4
              py-3

              text-[8px]
              uppercase
              tracking-[0.18em]

              text-white/42

              transition-all
              duration-300

              hover:border-[#c45a78]/45
              hover:text-white
            "
          >
            Düzenle
          </Link>

          <DeleteBlogButton
            postId={post.id}
            postTitle={
              post.title
            }
          />
        </div>
      </div>

      {/* =================================================
          MOBILE / TABLET
      ================================================== */}

      <div
        className="
          p-6

          lg:hidden
        "
      >
        <div
          className="
            flex
            items-start
            justify-between
            gap-6
          "
        >
          <div>
            <p
              className="
                text-[8px]
                uppercase
                tracking-[0.26em]
                text-[#c45a78]
              "
            >
              {post.category}
            </p>

            <Link
              href={`/admin/blog/${post.id}/edit`}
              className="
                mt-3
                block

                font-serif
                text-[clamp(1.8rem,7vw,2.8rem)]
                leading-[0.95]
                tracking-[-0.045em]

                text-[#f4efe9]
              "
            >
              {post.title}
            </Link>
          </div>

          <span
            className="
              shrink-0

              font-serif
              text-xl
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

        <div
          className="
            mt-6

            flex
            flex-wrap
            items-center
            gap-3
          "
        >
          <span
            className={`
              inline-flex
              items-center
              gap-2

              rounded-full

              border

              px-3
              py-2

              text-[8px]
              uppercase
              tracking-[0.16em]

              ${
                isPublished
                  ? `
                    border-[#6a2038]
                    bg-[#591323]/25
                    text-[#d6738e]
                  `
                  : `
                    border-white/10
                    bg-white/[0.03]
                    text-white/35
                  `
              }
            `}
          >
            <span
              className={`
                h-[5px]
                w-[5px]
                rounded-full

                ${
                  isPublished
                    ? "bg-[#c45a78]"
                    : "bg-white/25"
                }
              `}
            />

            {isPublished
              ? "Yayında"
              : "Taslak"}
          </span>

          <span
            className="
              text-[9px]
              text-white/28
            "
          >
            {formatDate(
              post.updatedAt,
            )}
          </span>
        </div>

        <p
          className="
            mt-5
            truncate

            text-[10px]
            text-white/22
          "
        >
          /blog/{post.slug}
        </p>

        <div
          className="
            mt-6

            flex
            flex-wrap
            items-center
            gap-2

            border-t
            border-white/[0.07]

            pt-5
          "
        >
          <Link
            href={`/admin/blog/${post.id}/edit`}
            className="
              rounded-full

              border
              border-white/10

              px-4
              py-3

              text-[8px]
              uppercase
              tracking-[0.18em]

              text-white/45
            "
          >
            Düzenle
          </Link>

          {isPublished && (
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              className="
                rounded-full

                border
                border-white/10

                px-4
                py-3

                text-[8px]
                uppercase
                tracking-[0.18em]

                text-white/45
              "
            >
              Görüntüle ↗
            </Link>
          )}

          <DeleteBlogButton
            postId={post.id}
            postTitle={
              post.title
            }
          />
        </div>
      </div>
    </article>
  );
}