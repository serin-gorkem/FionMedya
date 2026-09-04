import WineLane from "@/app/components/ui/WineLane";
import SectionContainer from "@/app/components/ui/SectionContainer";

import {
  createBlogService,
} from "@/features/blog/blog.server";

import BlogIntro from "./BlogIntro";
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
        {/* =============================================
            SINGLE INTRO
        ============================================== */}

        <BlogIntro />

        {/* =============================================
            POSTS
        ============================================== */}

        <div
          className="
            relative
            z-20

            grid
            gap-10

            md:grid-cols-2

            xl:grid-cols-[minmax(0,1fr)_460px_minmax(0,1fr)]
            xl:gap-10
          "
        >
          {/* LEFT POST */}

          <div className="min-w-0">
            {posts[0] && (
              <HomeBlogCard
                post={posts[0]}
              />
            )}
          </div>

          {/* WINE LANE */}

          <div
            aria-hidden="true"
            className="hidden xl:block"
          />

          {/* RIGHT POST */}

          <div className="min-w-0">
            {posts[1] && (
              <HomeBlogCard
                post={posts[1]}
              />
            )}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}