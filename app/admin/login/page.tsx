import {
  redirect,
} from "next/navigation";

import LoginForm from "./LoginForm";

import {
  getAdminUser,
} from "@/features/auth/admin-auth";
import Link from "next/link";

export const dynamic =
  "force-dynamic";

export default async function AdminLoginPage() {
  const admin =
    await getAdminUser();

  if (admin) {
    redirect(
      "/admin/blog",
    );
  }

  return (
    <main
      className="
        relative

        flex
        min-h-screen
        items-center
        justify-center

        overflow-hidden

        bg-black

        px-6
        py-16

        text-[var(--text-primary)]
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

          h-[500px]
          w-[500px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#591323]/30

          blur-[140px]
        "
      />

      {/* CARD */}

      <section
        className="
          relative
          z-10

          w-full
          max-w-[470px]

          rounded-[28px]

          border
          border-[#672039]

          bg-[#0d0d0d]

          p-7

          shadow-[0_30px_100px_rgba(0,0,0,0.65)]

          sm:p-9
        "
      >
        {/* META */}

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-white/15

            pb-5
          "
        >
          <span
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-[#d86a88]
            "
          >
            Fion Blog Yönetim Paneli
          </span>

          <span
            aria-hidden="true"
            className="
              h-[7px]
              w-[7px]

              rounded-full

              bg-[#d86a88]
            "
          />
        </div>

        {/* TITLE */}

        <div className="mt-9">
          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-[var(--text-muted)]
            "
          >
            Yönetim Paneli
          </p>

          <h1
            className="
              mt-4

              font-serif

              text-[clamp(3rem,6vw,4.8rem)]

              leading-[0.84]
              tracking-[-0.06em]

              text-[var(--text-primary)]
            "
          >
            Tekrar
            <br />

            <em className="text-[var(--text-secondary)]">
              hoş geldin.
            </em>
          </h1>

          <p
            className="
              mt-6

              max-w-[350px]

              text-[14px]
              leading-7

              text-[var(--text-body)]
            "
          >
            Blog yazılarını eklemek,
            düzenlemek ve yayınlamak
            için giriş yap.
          </p>
        </div>

        <LoginForm />

        {/* FOOTER */}

        <div
          className="
            mt-8

            border-t
            border-white/15

            pt-5
          "
        >
          <Link
            href="/"
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]

              text-[var(--text-muted)]

              transition-colors
              duration-200

              hover:text-[var(--text-primary)]
            "
          >
            ← Siteye dön
          </Link>
        </div>
      </section>
    </main>
  );
}