type BlogArticleContentProps = {
  html: string;
};

export default function BlogArticleContent({
  html,
}: BlogArticleContentProps) {
  return (
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

        [&_strong]:font-medium
        [&_strong]:text-[#f4efe9]

        [&_em]:text-white/90

        [&_mark]:bg-[#d36b88]/20
        [&_mark]:px-0.5
        [&_mark]:text-[#f4efe9]

        [&_a]:text-[#e487a1]
        [&_a]:underline
        [&_a]:decoration-[#7c2a43]
        [&_a]:underline-offset-[5px]

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

        [&_blockquote[data-fion-callout=true]]:relative
        [&_blockquote[data-fion-callout=true]]:my-14

        [&_blockquote[data-fion-callout=true]]:overflow-hidden

        [&_blockquote[data-fion-callout=true]]:border
        [&_blockquote[data-fion-callout=true]]:border-[#d36b88]/25

        [&_blockquote[data-fion-callout=true]]:bg-[#591323]/20

        [&_blockquote[data-fion-callout=true]]:px-6
        [&_blockquote[data-fion-callout=true]]:py-7

        sm:[&_blockquote[data-fion-callout=true]]:px-8
        sm:[&_blockquote[data-fion-callout=true]]:py-8

        [&_blockquote[data-fion-callout=true]]:font-sans
        [&_blockquote[data-fion-callout=true]]:not-italic

        [&_blockquote[data-fion-callout=true]]:text-[15px]
        [&_blockquote[data-fion-callout=true]]:leading-7
        [&_blockquote[data-fion-callout=true]]:tracking-normal

        [&_blockquote[data-fion-callout=true]]:text-white/78

        [&_blockquote[data-fion-callout=true]_p]:mb-0

        [&_ul]:my-9
        [&_ul]:list-disc
        [&_ul]:space-y-3
        [&_ul]:pl-5

        [&_ol]:my-9
        [&_ol]:list-decimal
        [&_ol]:space-y-3
        [&_ol]:pl-5

        [&_li]:pl-2

        [&_li::marker]:text-[#d36b88]

        [&_hr]:my-16
        [&_hr]:border-white/10

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

        [&_figure[data-blog-image=true]]:my-14

        [&_figure[data-blog-image=true]]:relative
        [&_figure[data-blog-image=true]]:left-1/2

        [&_figure[data-blog-image=true]]:w-[min(100vw-40px,960px)]
        [&_figure[data-blog-image=true]]:-translate-x-1/2

        [&_figure[data-blog-image=true]]:overflow-hidden

        [&_figure[data-blog-image=true]]:border-y
        [&_figure[data-blog-image=true]]:border-white/10

        [&_figure[data-blog-image=true]]:bg-black/15

        [&_figure[data-blog-image=true]_img]:block
        [&_figure[data-blog-image=true]_img]:h-auto
        [&_figure[data-blog-image=true]_img]:w-full

        [&_figure[data-blog-image=true]_figcaption]:border-t
        [&_figure[data-blog-image=true]_figcaption]:border-white/[0.08]

        [&_figure[data-blog-image=true]_figcaption]:px-4
        [&_figure[data-blog-image=true]_figcaption]:py-3

        sm:[&_figure[data-blog-image=true]_figcaption]:px-5

        [&_figure[data-blog-image=true]_figcaption]:text-[10px]
        [&_figure[data-blog-image=true]_figcaption]:leading-5
        [&_figure[data-blog-image=true]_figcaption]:tracking-[0.04em]

        [&_figure[data-blog-image=true]_figcaption]:text-white/40
      "
      dangerouslySetInnerHTML={{
        __html:
          html,
      }}
    />
  );
}