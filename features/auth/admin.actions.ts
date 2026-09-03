"use server";

import {
  revalidatePath,
} from "next/cache";

import {
  redirect,
} from "next/navigation";

import {
  z,
} from "zod";

import {
  createClient,
} from "@/lib/supabase/server";

import {
  isAdminUser,
} from "./admin-auth";

/* =========================================================
   TYPES
========================================================= */

export type AdminLoginState = {
  error: string | null;
};

/* =========================================================
   VALIDATION
========================================================= */

const loginSchema =
  z.object({
    email: z
      .string()
      .trim()
      .email(
        "Geçerli bir e-posta adresi gir.",
      ),

    password: z
      .string()
      .min(
        6,
        "Şifre en az 6 karakter olmalı.",
      ),
  });

/* =========================================================
   LOGIN
========================================================= */

export async function loginAdminAction(
  _previousState: AdminLoginState,
  formData: FormData,
): Promise<AdminLoginState> {
  const validation =
    loginSchema.safeParse({
      email:
        formData.get(
          "email",
        ),

      password:
        formData.get(
          "password",
        ),
    });

  if (
    !validation.success
  ) {
    return {
      error:
        validation.error.issues[0]
          ?.message ??
        "Giriş bilgilerini kontrol et.",
    };
  }

  const supabase =
    await createClient();

  const {
    data,
    error,
  } =
    await supabase.auth.signInWithPassword(
      {
        email:
          validation.data
            .email,

        password:
          validation.data
            .password,
      },
    );

  if (
    error ||
    !data.user
  ) {
    return {
      error:
        "E-posta veya şifre hatalı.",
    };
  }

  /*
   * Login başarılı olsa bile
   * CMS yetkisi ayrıca kontrol edilir.
   */
  try {
    const admin =
      await isAdminUser(
        supabase,
        data.user.id,
      );

    if (!admin) {
      await supabase.auth.signOut();

      return {
        error:
          "Bu hesap yönetim paneline yetkili değil.",
      };
    }
  } catch {
    await supabase.auth.signOut();

    return {
      error:
        "Yönetici yetkisi doğrulanamadı.",
    };
  }

  revalidatePath(
    "/",
    "layout",
  );

  redirect(
    "/admin/blog",
  );
}

/* =========================================================
   LOGOUT
========================================================= */

export async function logoutAdminAction() {
  const supabase =
    await createClient();

  await supabase.auth.signOut();

  revalidatePath(
    "/",
    "layout",
  );

  redirect(
    "/admin/login",
  );
}