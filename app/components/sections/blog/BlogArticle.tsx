import Link from "next/link";

import type {
  BlogPost,
} from "@/features/blog/blog.types";

import {
  getReadingTime,
} from "@/features/blog/blog.reading-time";

import DetailContactCTA from "@/app/components/pages/DetailContactCTA";

type BlogArticleProps = {
  post: BlogPost;
  relatedPosts: BlogPost[];
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
      month: "long",
      year: "numeric",
    },
  ).format(new Date(value));
}

export default function BlogArticle({
  post,
  relatedPosts,
}: BlogArticleProps) {
  const readingTime =
    getReadingTime(
      post.contentHtml,
    );

  const publishedDate =
    formatDate(
      post.publishedAt,
    );

  return (
    <article
      className="
        relative
        z-10
        overflow-hidden
      "
    >
      {/* =================================================
          HERO
      ================================================== */}

      <header
        className="
          relative

          mx-auto
          max-w-[1500px]

          px-5
          pb-16
          pt-36

          sm:px-8
          sm:pb-20
          sm:pt-44

          lg:px-12
          lg:pb-24
          lg:pt-48
        "
      >
        {/* GHOST TYPE */}

        <span
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            right-[-0.08em]
            top-[0.28em]

            hidden

            select-none

            font-serif
            text-[clamp(9rem,19vw,21rem)]
            leading-none
            tracking-[-0.09em]

            text-white/[0.022]

            xl:block
          "
        >
          Journal
        </span>

        {/* TOP META */}

        <div
          className="
            relative
            z-10

            flex
            flex-wrap
            items-center
            justify-between
            gap-5

            border-b
            border-white/10

            pb-5
          "
        >
          <div
            className="
              flex
              flex-wrap
              items-center

              gap-x-5
              gap-y-3
            "
          >
            <span
              className="
                flex
                items-center
                gap-3

                text-[8px]
                uppercase
                tracking-[0.3em]

                text-[#d36b88]
              "
            >
              <span
                aria-hidden="true"
                className="
                  size-1.5
                  rotate-45
                  bg-[#d36b88]
                "
              />

              {post.category}
            </span>

            <span
              className="
                text-[7px]
                uppercase
                tracking-[0.24em]

                text-white/45
              "
            >
              {readingTime} dk okuma
            </span>
          </div>

          {publishedDate && (
            <time
              dateTime={
                post.publishedAt ??
                undefined
              }
              className="
                text-[7px]
                uppercase
                tracking-[0.24em]

                text-white/40
              "
            >
              {publishedDate}
            </time>
          )}
        </div>

        {/* =================================================
            TITLE / EXCERPT
        ================================================== */}

        <div
          className="
            relative
            z-10

            grid
            gap-12

            pt-12

            lg:grid-cols-[minmax(0,1fr)_380px]
            lg:items-end
            lg:gap-20
            lg:pt-16
          "
        >
          <div>
            <p
              className="
                text-[7px]
                uppercase
                tracking-[0.3em]

                text-white/40
              "
            >
              Fion / Journal
            </p>

            <h1
              className="
                mt-7
                max-w-[1100px]

                font-serif
                text-[clamp(3.8rem,7.8vw,9rem)]
                leading-[0.8]
                tracking-[-0.068em]

                text-[#f4efe9]
              "
            >
              {post.title}
            </h1>
          </div>

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
                font-serif
                text-[clamp(1.35rem,1.8vw,1.8rem)]
                leading-[1.3]
                tracking-[-0.025em]

                text-white/70
              "
            >
              {post.excerpt}
            </p>

            {post.tags.length > 0 && (
              <div
                className="
                  mt-7

                  flex
                  flex-wrap

                  gap-x-4
                  gap-y-2
                "
              >
                {post.tags.map(
                  (tag) => (
                    <span
                      key={tag}
                      className="
                        text-[6px]
                        uppercase
                        tracking-[0.19em]

                        text-[#d36b88]/85
                      "
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* =================================================
          COVER
      ================================================== */}

      {post.coverImageUrl && (
        <figure
          className="
            relative

            mx-auto
            max-w-[1500px]

            px-5

            sm:px-8
            lg:px-12
          "
        >
          <div
            className="
              relative
              overflow-hidden

              border-y
              border-white/10

              bg-black/20
            "
          >
            <div
              className="
                relative

                aspect-[4/3]

                sm:aspect-[16/10]
                lg:aspect-[16/8]
              "
            >
              <img
                src={
                  post.coverImageUrl
                }
                alt={`${post.title} kapak görseli`}
                className="
                  h-full
                  w-full

                  object-cover
                "
              />

              <div
                aria-hidden="true"
                className="
                  pointer-events-none

                  absolute
                  inset-0

                  bg-gradient-to-t

                  from-black/35
                  via-transparent
                  to-black/10
                "
              />

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0

                  flex
                  items-end
                  justify-between
                  gap-6

                  p-5

                  sm:p-7
                "
              >
                <span
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.27em]

                    text-white/60
                  "
                >
                  01 / Cover
                </span>

                <span
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.23em]

                    text-white/45
                  "
                >
                  Fion Journal
                </span>
              </div>
            </div>
          </div>
        </figure>
      )}

      {/* =================================================
          ARTICLE BODY
      ================================================== */}

      <section
        className="
          mx-auto
          max-w-[1180px]

          px-5
          py-20

          sm:px-8
          sm:py-24

          lg:px-10
          lg:py-32
        "
      >
        {/* ARTICLE INDEX */}

        <div
          className="
            mb-16

            flex
            items-center
            justify-between
            gap-8

            border-b
            border-white/10

            pb-5
          "
        >
          <span
            className="
              text-[8px]
              uppercase
              tracking-[0.3em]

              text-[#d36b88]
            "
          >
            01 / Article
          </span>

          <span
            className="
              text-[7px]
              uppercase
              tracking-[0.24em]

              text-white/35
            "
          >
            {readingTime} dakika
          </span>
        </div>

        <div
          className="
            grid
            gap-12

            lg:grid-cols-[160px_minmax(0,760px)]
            lg:justify-center
            lg:gap-16
          "
        >
          {/* =================================================
              STICKY RAIL
          ================================================== */}

          <aside
            className="
              hidden
              lg:block
            "
          >
            <div
              className="
                sticky
                top-32
              "
            >
              <p
                className="
                  text-[7px]
                  uppercase
                  tracking-[0.28em]

                  text-white/40
                "
              >
                Fion Journal
              </p>

              <span
                className="
                  mt-5
                  block

                  h-px
                  w-10

                  bg-[#7c2a43]
                "
              />

              <div
                className="
                  mt-6
                  space-y-2
                "
              >
                <p
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.2em]

                    text-white/30
                  "
                >
                  Kategori
                </p>

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.17em]

                    text-white/55
                  "
                >
                  {post.category}
                </p>
              </div>

              <div
                className="
                  mt-8
                  space-y-2
                "
              >
                <p
                  className="
                    text-[7px]
                    uppercase
                    tracking-[0.2em]

                    text-white/30
                  "
                >
                  Okuma
                </p>

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.17em]

                    text-white/55
                  "
                >
                  {readingTime} dk
                </p>
              </div>

              {publishedDate && (
                <div
                  className="
                    mt-8
                    space-y-2
                  "
                >
                  <p
                    className="
                      text-[7px]
                      uppercase
                      tracking-[0.2em]

                      text-white/30
                    "
                  >
                    Yayın
                  </p>

                  <p
                    className="
                      max-w-[120px]

                      text-[9px]
                      leading-5
                      tracking-[0.06em]

                      text-white/55
                    "
                  >
                    {publishedDate}
                  </p>
                </div>
              )}
            </div>
          </aside>

          {/* =================================================
              TIPTAP CONTENT
          ================================================== */}

          <div
            className="
              min-w-0

              text-[16px]
              leading-[1.9]

              text-white/78

              sm:text-[17px]

              [&_p]:mb-8

              [&_p:first-child]:text-[1.12em]
              [&_p:first-child]:leading-[1.85]
              [&_p:first-child]:text-white/88

              [&_h2]:mb-7
              [&_h2]:mt-20
              [&_h2]:font-serif
              [&_h2]:text-[clamp(2.8rem,5vw,4.8rem)]
              [&_h2]:leading-[0.92]
              [&_h2]:tracking-[-0.05em]
              [&_h2]:text-[#f4efe9]

              [&_h3]:mb-6
              [&_h3]:mt-14
              [&_h3]:font-serif
              [&_h3]:text-[clamp(2rem,3.3vw,3.1rem)]
              [&_h3]:leading-[0.98]
              [&_h3]:tracking-[-0.04em]
              [&_h3]:text-[#f4efe9]

              [&_h4]:mb-5
              [&_h4]:mt-12
              [&_h4]:text-[12px]
              [&_h4]:font-medium
              [&_h4]:uppercase
              [&_h4]:tracking-[0.2em]
              [&_h4]:text-[#d36b88]

              [&_strong]:font-medium
              [&_strong]:text-[#f4efe9]

              [&_em]:text-white/90

              [&_blockquote]:relative
              [&_blockquote]:my-16
              [&_blockquote]:border-l
              [&_blockquote]:border-[#d36b88]
              [&_blockquote]:py-2
              [&_blockquote]:pl-7
              [&_blockquote]:font-serif
              [&_blockquote]:text-[clamp(1.9rem,3vw,3rem)]
              [&_blockquote]:italic
              [&_blockquote]:leading-[1.18]
              [&_blockquote]:tracking-[-0.035em]
              [&_blockquote]:text-white/82

              [&_blockquote_p]:mb-0

              [&_ul]:my-9
              [&_ul]:space-y-3
              [&_ul]:pl-5
              [&_ul]:list-disc

              [&_ol]:my-9
              [&_ol]:space-y-3
              [&_ol]:pl-5
              [&_ol]:list-decimal

              [&_li]:pl-2

              [&_li::marker]:text-[#d36b88]

              [&_a]:text-[#e487a1]
              [&_a]:underline
              [&_a]:decoration-[#7c2a43]
              [&_a]:underline-offset-[5px]
              [&_a]:transition-colors

              [&_a:hover]:text-[#f4efe9]

              [&_hr]:my-16
              [&_hr]:border-white/10

              [&_img]:my-14
              [&_img]:block
              [&_img]:w-full
              [&_img]:border-y
              [&_img]:border-white/10

              [&_code]:bg-white/[0.07]
              [&_code]:px-1.5
              [&_code]:py-1
              [&_code]:text-[0.88em]
              [&_code]:text-[#e5a0b4]

              [&_pre]:my-12
              [&_pre]:overflow-x-auto
              [&_pre]:border
              [&_pre]:border-white/10
              [&_pre]:bg-black/25
              [&_pre]:p-5

              [&_pre_code]:bg-transparent
              [&_pre_code]:p-0
            "
            dangerouslySetInnerHTML={{
              __html:
                post.contentHtml,
            }}
          />
        </div>
      </section>

      {/* =================================================
          RELATED
      ================================================== */}

      {relatedPosts.length > 0 && (
        <section
          className="
            relative

            border-t
            border-white/10
          "
        >
          <div
            className="
              mx-auto
              max-w-[1500px]

              px-5
              py-20

              sm:px-8
              sm:py-24

              lg:px-12
              lg:py-28
            "
          >
            <div
              className="
                flex
                items-end
                justify-between
                gap-8
              "
            >
              <div>
                <p
                  className="
                    text-[8px]
                    uppercase
                    tracking-[0.3em]

                    text-[#d36b88]
                  "
                >
                  02 / Devam Et
                </p>

                <h2
                  className="
                    mt-5

                    font-serif
                    text-[clamp(3rem,5vw,5.8rem)]
                    leading-[0.86]
                    tracking-[-0.055em]

                    text-[#f4efe9]
                  "
                >
                  Biraz daha
                  <br />

                  <em className="text-white/50">
                    oku.
                  </em>
                </h2>
              </div>

              <Link
                href="/blog"
                className="
                  group

                  hidden

                  items-center
                  gap-3

                  text-[8px]
                  uppercase
                  tracking-[0.23em]

                  text-white/45

                  transition-colors

                  hover:text-[#f4efe9]

                  sm:flex
                "
              >
                Tüm yazılar

                <span
                  className="
                    text-[#d36b88]

                    transition-transform
                    duration-500

                    group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </Link>
            </div>

            <div
              className="
                mt-14

                grid

                border-t
                border-white/10

                md:grid-cols-2
              "
            >
              {relatedPosts
                .slice(0, 2)
                .map(
                  (
                    related,
                    index,
                  ) => {
                    const relatedReadingTime =
                      getReadingTime(
                        related.contentHtml,
                      );

                    return (
                      <Link
                        key={
                          related.id
                        }
                        href={`/blog/${related.slug}`}
                        className={`
                          group
                          relative

                          overflow-hidden

                          py-9

                          ${
                            index ===
                            0
                              ? "md:border-r md:border-white/10 md:pr-10"
                              : "border-t border-white/10 md:border-t-0 md:pl-10"
                          }
                        `}
                      >
                        <span
                          aria-hidden="true"
                          className="
                            pointer-events-none

                            absolute
                            inset-0

                            origin-bottom
                            scale-y-0

                            bg-[#7c2a43]/12

                            transition-transform
                            duration-700
                            ease-[cubic-bezier(0.22,1,0.36,1)]

                            group-hover:scale-y-100
                          "
                        />

                        <div
                          className="
                            relative
                            z-10
                          "
                        >
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              gap-5
                            "
                          >
                            <span
                              className="
                                font-serif
                                text-3xl
                                tracking-[-0.05em]

                                text-white/20
                              "
                            >
                              {String(
                                index +
                                  1,
                              ).padStart(
                                2,
                                "0",
                              )}
                            </span>

                            <span
                              className="
                                text-[7px]
                                uppercase
                                tracking-[0.22em]

                                text-white/40
                              "
                            >
                              {
                                relatedReadingTime
                              }{" "}
                              dk
                            </span>
                          </div>

                          <p
                            className="
                              mt-10

                              text-[7px]
                              uppercase
                              tracking-[0.27em]

                              text-[#d36b88]
                            "
                          >
                            {
                              related.category
                            }
                          </p>

                          <h3
                            className="
                              mt-4
                              max-w-xl

                              font-serif
                              text-[clamp(2.3rem,3.6vw,4.2rem)]
                              leading-[0.9]
                              tracking-[-0.05em]

                              text-[#f4efe9]
                            "
                          >
                            {
                              related.title
                            }
                          </h3>

                          <div
                            className="
                              mt-10

                              flex
                              items-center
                              justify-between

                              border-t
                              border-white/10

                              pt-5
                            "
                          >
                            <span
                              className="
                                text-[7px]
                                uppercase
                                tracking-[0.22em]

                                text-white/40

                                transition-colors

                                group-hover:text-white/70
                              "
                            >
                              Yazıyı oku
                            </span>

                            <span
                              className="
                                text-[#d36b88]

                                transition-transform
                                duration-500

                                group-hover:translate-x-1
                                group-hover:-translate-y-0.5
                              "
                            >
                              ↗
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  },
                )}
            </div>

            <Link
              href="/blog"
              className="
                mt-8

                inline-flex
                items-center
                gap-3

                text-[8px]
                uppercase
                tracking-[0.23em]

                text-white/45

                sm:hidden
              "
            >
              Tüm yazılar

              <span className="text-[#d36b88]">
                →
              </span>
            </Link>
          </div>
        </section>
      )}

      {/* =================================================
          CTA
      ================================================== */}

      <DetailContactCTA />
    </article>
  );
}