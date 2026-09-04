"use client";

import {
  useActionState,
  useState,
} from "react";

import {
  useFormStatus,
} from "react-dom";

import {
  loginAdminAction,
  type AdminLoginState,
} from "@/features/auth/admin.actions";

import {
  adminPrimaryActionClassName,
} from "@/app/components/admin/admin.styles";

const initialState: AdminLoginState = {
  error: null,
};

/* =========================================================
   SUBMIT
========================================================= */

function SubmitButton() {
  const { pending } =
    useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`
        group
        relative

        mt-2
        w-full

        overflow-hidden

        disabled:pointer-events-none
        disabled:opacity-50

        ${adminPrimaryActionClassName}
      `}
    >
      <span className="relative z-10">
        {pending
          ? "Giriş yapılıyor..."
          : "Giriş Yap"}
      </span>

      <span
        aria-hidden="true"
        className="
          relative
          z-10

          transition-transform
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          group-hover:translate-x-1
        "
      >
        →
      </span>
    </button>
  );
}

/* =========================================================
   PASSWORD ICON
========================================================= */

function EyeIcon({
  open,
}: {
  open: boolean;
}) {
  if (open) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="size-4"
      >
        <path
          d="M3 3L21 21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="M10.6 10.6a2 2 0 0 0 2.8 2.8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <path
          d="M9.9 4.3A10.6 10.6 0 0 1 12 4c5.5 0 9 5 9 5s-1.3 1.9-3.5 3.4M6.6 6.6C4.3 8 3 10 3 10s3.5 5 9 5a10 10 0 0 0 3-.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-4"
    >
      <path
        d="M3 12s3.5-5 9-5 9 5 9 5-3.5 5-9 5-9-5-9-5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      <circle
        cx="12"
        cy="12"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/* =========================================================
   FORM
========================================================= */

export default function LoginForm() {
  const [
    state,
    formAction,
  ] = useActionState(
    loginAdminAction,
    initialState,
  );

  const [
    showPassword,
    setShowPassword,
  ] = useState(false);

  return (
    <form
      action={formAction}
      className="
        mt-8
        w-full

        space-y-5

        sm:mt-10
        sm:space-y-6
      "
    >
      {/* =================================================
          EMAIL
      ================================================== */}

      <div>
        <label
          htmlFor="email"
          className="
            mb-2.5
            block

            text-[8px]
            font-medium
            uppercase
            tracking-[0.22em]

            text-white/45
          "
        >
          E-posta
        </label>

        <div
          className="
            group/field
            relative

            overflow-hidden

            border
            border-white/10

            bg-white/[0.025]

            transition-all
            duration-300

            hover:border-white/20

            focus-within:border-[#d86a88]/70
            focus-within:bg-white/[0.04]
          "
        >
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            required
            placeholder="info@fionmedya.com"
            className="
              w-full

              bg-transparent

              px-4
              py-4

              text-[15px]
              text-[#f4efe9]

              outline-none

              placeholder:text-white/20

              sm:px-5
              sm:py-[18px]
            "
          />

          {/* bottom focus line */}

          <span
            aria-hidden="true"
            className="
              absolute
              bottom-0
              left-0

              h-px
              w-0

              bg-[#d86a88]

              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]

              group-focus-within/field:w-full
            "
          />
        </div>
      </div>

      {/* =================================================
          PASSWORD
      ================================================== */}

      <div>
        <div
          className="
            mb-2.5

            flex
            items-center
            justify-between
            gap-4
          "
        >
          <label
            htmlFor="password"
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.22em]

              text-white/45
            "
          >
            Şifre
          </label>

          <span
            className="
              hidden

              text-[7px]
              uppercase
              tracking-[0.18em]

              text-white/20

              sm:block
            "
          >
            Admin Access
          </span>
        </div>

        <div
          className="
            group/field
            relative

            overflow-hidden

            border
            border-white/10

            bg-white/[0.025]

            transition-all
            duration-300

            hover:border-white/20

            focus-within:border-[#d86a88]/70
            focus-within:bg-white/[0.04]
          "
        >
          <input
            id="password"
            name="password"
            type={
              showPassword
                ? "text"
                : "password"
            }
            autoComplete="current-password"
            required
            placeholder="••••••••"
            className="
              w-full

              bg-transparent

              px-4
              py-4
              pr-14

              text-[15px]
              text-[#f4efe9]

              outline-none

              placeholder:text-white/20

              sm:px-5
              sm:py-[18px]
              sm:pr-16
            "
          />

          {/* SHOW / HIDE */}

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                (current) =>
                  !current,
              )
            }
            aria-pressed={
              showPassword
            }
            aria-label={
              showPassword
                ? "Şifreyi gizle"
                : "Şifreyi göster"
            }
            title={
              showPassword
                ? "Şifreyi gizle"
                : "Şifreyi göster"
            }
            className="
              absolute
              right-2
              top-1/2

              flex
              size-10

              -translate-y-1/2

              items-center
              justify-center

              border-l
              border-white/10

              text-white/35

              transition-all
              duration-300

              hover:text-[#d86a88]

              focus-visible:outline-none
              focus-visible:text-[#d86a88]

              sm:right-3
            "
          >
            <EyeIcon
              open={showPassword}
            />
          </button>

          {/* bottom focus line */}

          <span
            aria-hidden="true"
            className="
              absolute
              bottom-0
              left-0

              h-px
              w-0

              bg-[#d86a88]

              transition-all
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]

              group-focus-within/field:w-full
            "
          />
        </div>
      </div>

      {/* =================================================
          ERROR
      ================================================== */}

      <div
        aria-live="polite"
        aria-atomic="true"
        className="
          min-h-3
        "
      >
        {state.error && (
          <div
            className="
              relative

              overflow-hidden

              border
              border-[#8a304c]/70

              bg-[#591323]/20

              px-4
              py-3.5

              sm:px-5
            "
          >
            <span
              aria-hidden="true"
              className="
                absolute
                bottom-0
                left-0

                h-px
                w-12

                bg-[#d86a88]
              "
            />

            <div
              className="
                flex
                items-start
                gap-3
              "
            >
              <span
                aria-hidden="true"
                className="
                  mt-[7px]
                  size-1.5
                  shrink-0

                  rotate-45

                  bg-[#d86a88]
                "
              />

              <p
                className="
                  text-[12px]
                  leading-5

                  text-[#ef9eb4]
                "
              >
                {state.error}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* =================================================
          SUBMIT
      ================================================== */}

      <SubmitButton />

      {/* =================================================
          FOOTNOTE
      ================================================== */}

      <div
        className="
          flex
          items-center
          justify-between
          gap-4

          pt-2
        "
      >
        <span
          className="
            text-[6px]
            uppercase
            tracking-[0.2em]

            text-white/18
          "
        >
          Fion Content Studio
        </span>

        <span
          className="
            text-[6px]
            uppercase
            tracking-[0.2em]

            text-white/18
          "
        >
          Secure Access
        </span>
      </div>
    </form>
  );
}