"use client";

import { useActionState } from "react";

import { useFormStatus } from "react-dom";

import {
  loginAdminAction,
  type AdminLoginState,
} from "@/features/auth/admin.actions";

import { adminPrimaryActionClassName } from "@/app/components/admin/admin.styles";
const initialState: AdminLoginState = {
  error: null,
};

/* =========================================================
   SUBMIT
========================================================= */

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={adminPrimaryActionClassName}
    >
      <span>{pending ? "Giriş yapılıyor..." : "Giriş Yap"}</span>

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

/* =========================================================
   FORM
========================================================= */

export default function LoginForm() {
  const [state, formAction] = useActionState(loginAdminAction, initialState);

  return (
    <form action={formAction} className="mt-10">
      {/* EMAIL */}

      <div>
        <label
          htmlFor="email"
          className="
            text-[8px]
            uppercase
            tracking-[0.28em]
            text-white/38
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
            border-white/15

            bg-transparent

            px-0
            py-4

            text-base
            text-[#f4efe9]

            outline-none

            placeholder:text-white/18

            transition-colors
            duration-300

            focus:border-[#c45a78]
          "
        />
      </div>

      {/* PASSWORD */}

      <div className="mt-7">
        <label
          htmlFor="password"
          className="
            text-[8px]
            uppercase
            tracking-[0.28em]
            text-white/38
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
            border-white/15

            bg-transparent

            px-0
            py-4

            text-base
            text-[#f4efe9]

            outline-none

            placeholder:text-white/18

            transition-colors
            duration-300

            focus:border-[#c45a78]
          "
        />
      </div>

      {/* ERROR */}

      <div
        aria-live="polite"
        className="
          min-h-[54px]
          pt-5
        "
      >
        {state.error && (
          <p
            className="
              rounded-[12px]

              border
              border-[#7b263e]

              bg-[#591323]/25

              px-4
              py-3

              text-xs
              leading-5
              text-[#e58ca3]
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
