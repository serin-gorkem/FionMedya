import Link from "next/link";

import type {
  ReactNode,
} from "react";

import {
  requireAdmin,
} from "@/features/auth/admin-auth";

import {
  logoutAdminAction,
} from "@/features/auth/admin.actions";

export const dynamic =
  "force-dynamic";

type AdminLayoutProps = {
  children: ReactNode;
};

export default async function AdminLayout({
  children,
}: AdminLayoutProps) {
  const admin =
    await requireAdmin();

  return (
    <div
      className="
        min-h-screen
        bg-[#050505]
        text-[#f4efe9]
      "
    >
      {/* =================================================
          ADMIN HEADER
      ================================================== */}

      <header
        className="
          sticky
          top-0
          z-50

          border-b
          border-white/10

          bg-black/85

          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto

            flex
            h-[76px]
            max-w-[1500px]

            items-center
            justify-between

            px-6

            sm:px-10
          "
        >
          {/* BRAND */}

          <div
            className="
              flex
              items-center
              gap-8
            "
          >
            <Link
              href="/admin/blog"
              className="
                font-serif
                text-xl
                tracking-[-0.04em]
                text-[#f4efe9]
              "
            >
              Fion
            </Link>

            <span
              className="
                hidden

                text-[8px]
                uppercase
                tracking-[0.28em]
                text-[#c45a78]

                sm:block
              "
            >
              Content Studio
            </span>
          </div>

          {/* USER */}

          <div
            className="
              flex
              items-center
              gap-5
            "
          >
            <span
              className="
                hidden
                text-[9px]
                text-white/35
                md:block
              "
            >
              {admin.email ??
                "Admin"}
            </span>

            <Link
              href="/"
              target="_blank"
              className="
                hidden

                text-[8px]
                uppercase
                tracking-[0.2em]
                text-white/35

                transition-colors

                hover:text-white

                sm:block
              "
            >
              Site ↗
            </Link>

            <form
              action={
                logoutAdminAction
              }
            >
              <button
                type="submit"
                className="
                  rounded-full

                  border
                  border-white/12

                  px-4
                  py-2.5

                  text-[8px]
                  uppercase
                  tracking-[0.2em]

                  text-white/45

                  transition-all

                  hover:border-[#c45a78]/45
                  hover:text-white
                "
              >
                Çıkış
              </button>
            </form>
          </div>
        </div>
      </header>

      {children}
    </div>
  );
}