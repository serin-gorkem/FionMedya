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

        hover:bg-[#121212]

        ${
          !isLast
            ? "border-b border-white/10"
            : ""
        }
      `}
    >
      {/* DESKTOP */}

      <div
        className="
          hidden

          min-h-[128px]

          grid-cols-[92px_minmax(0,1fr)_130px_150px_190px]
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
            text-[#66615e]
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
          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[#d86a88]
            "
          >
            {post.category}
          </span>

          <Link
            href={`/admin/blog/${post.id}/edit`}
            className="
              mt-2
              block
              truncate

              font-serif
              text-[clamp(1.5rem,2vw,2.1rem)]
              tracking-[-0.035em]

              text-[var(--text-primary)]

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
              leading-5
              text-[var(--text-muted)]
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

              rounded-[9px]

              border

              px-3
              py-2

              text-[9px]
              font-medium
              uppercase
              tracking-[0.14em]

              ${
                isPublished
                  ? `
                    border-[#8a304c]
                    bg-[#591323]/45
                    text-[#ef9eb4]
                  `
                  : `
                    border-white/15
                    bg-[#151515]
                    text-[var(--text-secondary)]
                  `
              }
            `}
          >
            <span
              className={`
                h-[6px]
                w-[6px]
                rounded-full

                ${
                  isPublished
                    ? "bg-[#d86a88]"
                    : "bg-[#85817f]"
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
            leading-5
            text-[var(--text-muted)]
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
                w-fit
                p-6
                items-center
                justify-center

                rounded-[10px]

                border
                border-white/15

                bg-[#111111]

                text-sm
                text-[var(--text-secondary)]

                transition-all
                duration-300

                hover:border-[#d86a88]/60
                hover:bg-[#171717]
                hover:text-white
              "
            >
              ↗
            </Link>
          )}

          <Link
            href={`/admin/blog/${post.id}/edit`}
            className="
              rounded-[10px]

              border
              border-white/15

              bg-[#111111]

              px-4
              py-3

              text-[10px]
              font-medium
              uppercase
              tracking-[0.14em]

              text-[var(--text-secondary)]

              transition-all
              duration-300

              hover:border-[#d86a88]/60
              hover:bg-[#171717]
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

      {/* MOBILE / TABLET */}

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
          <div className="min-w-0">
            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#d86a88]
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
                text-[clamp(1.9rem,7vw,2.9rem)]

                leading-[0.95]
                tracking-[-0.045em]

                text-[var(--text-primary)]
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
              text-[#66615e]
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

              rounded-[9px]

              border

              px-3
              py-2

              text-[9px]
              font-medium
              uppercase
              tracking-[0.14em]

              ${
                isPublished
                  ? `
                    border-[#8a304c]
                    bg-[#591323]/45
                    text-[#ef9eb4]
                  `
                  : `
                    border-white/15
                    bg-[#151515]
                    text-[var(--text-secondary)]
                  `
              }
            `}
          >
            <span
              className={`
                h-[6px]
                w-[6px]
                rounded-full

                ${
                  isPublished
                    ? "bg-[#d86a88]"
                    : "bg-[#85817f]"
                }
              `}
            />

            {isPublished
              ? "Yayında"
              : "Taslak"}
          </span>

          <span
            className="
              text-[10px]
              text-[var(--text-muted)]
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
            leading-5
            text-[var(--text-muted)]
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
            border-white/10

            pt-5
          "
        >
          <Link
            href={`/admin/blog/${post.id}/edit`}
            className="
              rounded-[10px]

              border
              border-white/15

              bg-[#111111]

              px-4
              py-3

              text-[10px]
              font-medium
              uppercase
              tracking-[0.14em]

              text-[var(--text-secondary)]
            "
          >
            Düzenle
          </Link>

          {isPublished && (
            <Link
              href={`/blog/${post.slug}`}
              target="_blank"
              className="
                rounded-[10px]

                border
                border-white/15

                bg-[#111111]

                px-4
                py-3

                text-[10px]
                font-medium
                uppercase
                tracking-[0.14em]

                text-[var(--text-secondary)]
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