"use client";

import {
  useState,
  useTransition,
} from "react";

import {
  deleteBlogPostAction,
} from "@/features/blog/blog.actions";

type DeleteBlogButtonProps = {
  postId: string;
  postTitle: string;
};

export default function DeleteBlogButton({
  postId,
  postTitle,
}: DeleteBlogButtonProps) {
  const [
    confirmOpen,
    setConfirmOpen,
  ] = useState(false);

  const [
    error,
    setError,
  ] = useState<
    string | null
  >(null);

  const [
    pending,
    startTransition,
  ] = useTransition();

  const handleDelete =
    () => {
      setError(null);

      startTransition(
        async () => {
          const result =
            await deleteBlogPostAction(
              postId,
            );

          if (
            !result.success
          ) {
            setError(
              result.message,
            );

            return;
          }

          setConfirmOpen(
            false,
          );
        },
      );
    };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setError(null);

          setConfirmOpen(
            true,
          );
        }}
        className="
          rounded-full

          border
          border-transparent

          px-4
          py-3

          text-[8px]
          uppercase
          tracking-[0.18em]

          text-white/25

          transition-all
          duration-300

          hover:border-[#74223a]
          hover:bg-[#591323]/15
          hover:text-[#d6738e]
        "
      >
        Sil
      </button>

      {/* =================================================
          CONFIRM MODAL
      ================================================== */}

      {confirmOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]

            flex
            items-center
            justify-center

            bg-black/80

            px-6

            backdrop-blur-sm
          "
          onMouseDown={(
            event,
          ) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setConfirmOpen(
                false,
              );
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-blog-title"
            className="
              w-full
              max-w-[460px]

              rounded-[26px]

              border
              border-[#52172a]

              bg-[#090909]

              p-7

              shadow-[0_40px_120px_rgba(0,0,0,0.7)]

              sm:p-8
            "
          >
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-[#c45a78]
              "
            >
              Yazıyı Sil
            </p>

            <h2
              id="delete-blog-title"
              className="
                mt-5

                font-serif
                text-[clamp(2.2rem,5vw,3.5rem)]

                leading-[0.92]
                tracking-[-0.05em]

                text-[#f4efe9]
              "
            >
              Emin
              <br />

              <em className="text-white/45">
                misin?
              </em>
            </h2>

            <p
              className="
                mt-6

                text-sm
                leading-6
                text-white/42
              "
            >
              <span className="text-white/70">
                “{postTitle}”
              </span>{" "}
              kalıcı olarak silinecek.
              Bu işlem geri alınamaz.
            </p>

            {error && (
              <p
                className="
                  mt-5

                  rounded-[12px]

                  border
                  border-[#74223a]

                  bg-[#591323]/20

                  px-4
                  py-3

                  text-xs
                  leading-5
                  text-[#df829b]
                "
              >
                {error}
              </p>
            )}

            <div
              className="
                mt-8

                flex
                items-center
                justify-end
                gap-3
              "
            >
              <button
                type="button"
                disabled={
                  pending
                }
                onClick={() =>
                  setConfirmOpen(
                    false,
                  )
                }
                className="
                  rounded-full

                  border
                  border-white/10

                  px-5
                  py-3.5

                  text-[8px]
                  uppercase
                  tracking-[0.2em]

                  text-white/42

                  transition-colors

                  hover:text-white

                  disabled:opacity-40
                "
              >
                Vazgeç
              </button>

              <button
                type="button"
                disabled={
                  pending
                }
                onClick={
                  handleDelete
                }
                className="
                  rounded-full

                  bg-[#591323]

                  px-5
                  py-3.5

                  text-[8px]
                  uppercase
                  tracking-[0.2em]

                  text-[#f4efe9]

                  transition-colors

                  hover:bg-[#711a35]

                  disabled:cursor-wait
                  disabled:opacity-50
                "
              >
                {pending
                  ? "Siliniyor..."
                  : "Evet, Sil"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}