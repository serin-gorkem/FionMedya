import Link from "next/link";

import WineLane from "@/app/components/ui/WineLane";
import SectionContainer from "@/app/components/ui/SectionContainer";
import SectionEyebrow from "@/app/components/ui/SectionEyebrow";

import {
  createBlogService,
} from "@/features/blog/blog.server";

import HomeBlogCard from "./HomeBlogCard";

export default async function BlogSection() {
  const service =
    await createBlogService();

  const posts =
    await service.getPublished(2);

  if (posts.length === 0) {
    return null;
  }

  return (
    <section
      id="blog"
      aria-labelledby="home-blog-title"
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-black
      "
    >
      <WineLane />

      <SectionContainer>
        {/* INTRO */}

        <div
          className="
            relative
            z-20

            xl:grid
            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
            xl:gap-10
          "
        >
          <div>
            <SectionEyebrow>
              Fion Journal
            </SectionEyebrow>

            <h2
              id="home-blog-title"
              className="
                mt-6
                max-w-xl

                font-serif
                text-[clamp(3.8rem,6vw,6.8rem)]
                leading-[0.84]
                tracking-[-0.06em]

                text-ivory
              "
            >
              Fikirler.
              <br />

              <span className="text-white/60">
                Notlar.
              </span>
              <br />

              <em className="text-wine-light">
                Bakışlar.
              </em>
            </h2>
          </div>

          <div
            aria-hidden="true"
            className="hidden xl:block"
          />

          <div
            aria-hidden="true"
            className="hidden xl:block"
          />
        </div>

        {/* POSTS */}

        <div
          className="
            relative
            z-20

            mt-16

            grid
            gap-10

            md:grid-cols-2

            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
            xl:gap-10
          "
        >
          <div>
            {posts[0] && (
              <HomeBlogCard
                post={posts[0]}
              />
            )}
          </div>

          <div
            aria-hidden="true"
            className="hidden xl:block"
          />

          <div>
            {posts[1] && (
              <HomeBlogCard
                post={posts[1]}
              />
            )}
          </div>
        </div>

        {/* CTA */}

        <div
          className="
            relative
            z-20

            mt-14

            border-t
            border-white/10

            pt-7

            xl:grid
            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
            xl:gap-10
          "
        >
          <div />

          <div
            aria-hidden="true"
            className="hidden xl:block"
          />

          <div className="xl:flex xl:justify-end">
            <Link
              href="/blog"
              className="
                group

                flex
                w-full
                max-w-sm

                items-center
                justify-between

                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]

                text-ivory
              "
            >
              Tüm yazıları gör

              <span
                className="
                  text-wine-light

                  transition-transform
                  duration-300

                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}