"use client";

import {
  useActionState,
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

const initialState:
  AdminLoginState = {
    error: null,
  };

function SubmitButton() {
  const {
    pending,
  } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`
        mt-3
        w-full
        ${adminPrimaryActionClassName}
      `}
    >
      <span>
        {pending
          ? "Giriş yapılıyor..."
          : "Giriş Yap"}
      </span>

      <span
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      >
        →
      </span>
    </button>
  );
}

export default function LoginForm() {
  const [
    state,
    formAction,
  ] = useActionState(
    loginAdminAction,
    initialState,
  );

  return (
    <form
      action={formAction}
      className="mt-10"
    >
      {/* EMAIL */}

      <div>
        <label
          htmlFor="email"
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[var(--text-body)]
          "
        >
          E-posta
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="hello@fionmedya.com"
          className="
            mt-3
            w-full

            border-b
            border-white/20

            bg-transparent

            px-0
            py-4

            text-[15px]
            text-[var(--text-primary)]

            outline-none

            placeholder:text-[var(--text-muted)]

            transition-colors
            duration-300

            hover:border-white/30

            focus:border-[#d86a88]
          "
        />
      </div>

      {/* PASSWORD */}

      <div className="mt-7">
        <label
          htmlFor="password"
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-[var(--text-body)]
          "
        >
          Şifre
        </label>

        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          placeholder="••••••••"
          className="
            mt-3
            w-full

            border-b
            border-white/20

            bg-transparent

            px-0
            py-4

            text-[15px]
            text-[var(--text-primary)]

            outline-none

            placeholder:text-[var(--text-muted)]

            transition-colors
            duration-300

            hover:border-white/30

            focus:border-[#d86a88]
          "
        />
      </div>

      {/* ERROR */}

      <div
        aria-live="polite"
        className="
          min-h-[58px]
          pt-5
        "
      >
        {state.error && (
          <p
            className="
              rounded-[12px]

              border
              border-[#8a304c]

              bg-[#591323]/30

              px-4
              py-3

              text-[13px]
              leading-5
              text-[#ef9eb4]
            "
          >
            {state.error}
          </p>
        )}
      </div>

      <SubmitButton />
    </form>
  );
}