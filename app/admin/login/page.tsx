import { redirect } from "next/navigation";

import LoginForm from "./LoginForm";

import { getAdminUser } from "@/features/auth/admin-auth";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage() {
  /*
   * Zaten giriş yapmış admin
   * login ekranını görmesin.
   */
  const admin = await getAdminUser();

  if (admin) {
    redirect("/admin/blog");
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

        text-[#f4efe9]
      "
    >
      {/* wine ambient */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none

          absolute
          left-1/2
          top-1/2

          h-[420px]
          w-[420px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-[#591323]/25

          blur-[130px]
        "
      />

      {/* card */}

      <section
        className="
          relative
          z-10

          w-full
          max-w-[460px]

          rounded-[28px]

          border
          border-[#451423]

          bg-[#080808]

          p-7

          shadow-[0_30px_100px_rgba(0,0,0,0.6)]

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
            border-white/10

            pb-5
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.34em]
              text-[#c45a78]
            "
          >
            Fion CMS
          </span>

          <span
            className="
              h-[6px]
              w-[6px]

              rounded-full

              bg-[#c45a78]
            "
          />
        </div>

        {/* TITLE */}

        <div className="mt-9">
          <p
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/28
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

              text-[#f4efe9]
            "
          >
            Tekrar
            <br />
            <em className="text-white/55">hoş geldin.</em>
          </h1>

          <p
            className="
              mt-6

              max-w-[330px]

              text-sm
              leading-6
              text-white/42
            "
          >
            Blog yazılarını eklemek, düzenlemek ve yayınlamak için giriş yap.
          </p>
        </div>

        <LoginForm />

        {/* FOOTER */}

        <div
          className="
            mt-8

            border-t
            border-white/10

            pt-5
          "
        >
          <Link
            href="/"
            className="
              text-[8px]
              uppercase
              tracking-[0.25em]
              text-white/28

              transition-colors

              hover:text-white/65
            "
          >
            ← Siteye dön
          </Link>
        </div>
      </section>
    </main>
  );
}
