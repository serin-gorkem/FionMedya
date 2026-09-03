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

        text-[var(--text-primary)]
      "
    >
      <header
        className="
          sticky
          top-0
          z-50

          border-b
          border-white/15

          bg-black/90

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
          {/* LEFT */}

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

                text-[22px]
                tracking-[-0.04em]

                text-[var(--text-primary)]

                transition-colors
                duration-200

                hover:text-white
              "
            >
              Fion
            </Link>

            <span
              className="
                hidden

                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]

                text-[#d86a88]

                sm:block
              "
            >
              Content Studio
            </span>
          </div>

          {/* RIGHT */}

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

                text-[11px]
                text-[var(--text-muted)]

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

                text-[10px]
                font-medium
                uppercase
                tracking-[0.14em]

                text-[var(--text-secondary)]

                transition-colors
                duration-200

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
                  rounded-[10px]

                  border
                  border-white/15

                  bg-[#111111]

                  px-4
                  py-2.5

                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.14em]

                  text-[var(--text-secondary)]

                  transition-all
                  duration-200

                  hover:border-[#d86a88]/60
                  hover:bg-[#171717]
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