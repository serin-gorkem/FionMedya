import type {
  SupabaseClient,
} from "@supabase/supabase-js";

import {
  redirect,
} from "next/navigation";

import {
  createClient,
} from "@/lib/supabase/server";

/* =========================================================
   TYPES
========================================================= */

export type AdminUser = {
  id: string;
  email: string | null;
};

/* =========================================================
   IS ADMIN
========================================================= */

export async function isAdminUser(
  supabase: SupabaseClient,
  userId: string,
) {
  const {
    data,
    error,
  } = await supabase.rpc(
    "is_admin",
    {
      check_user_id:
        userId,
    },
  );

  if (error) {
    throw new Error(
      `Admin yetkisi kontrol edilemedi: ${error.message}`,
    );
  }

  return data === true;
}

/* =========================================================
   GET CURRENT ADMIN
========================================================= */

export async function getAdminUser():
  Promise<AdminUser | null> {
  const supabase =
    await createClient();

  /*
   * Cookie'deki session objesine
   * güvenmiyoruz.
   *
   * JWT doğrulanıyor.
   */
  const {
    data,
    error,
  } =
    await supabase.auth.getClaims();

  const claims =
    data?.claims;

  if (
    error ||
    !claims?.sub
  ) {
    return null;
  }

  const admin =
    await isAdminUser(
      supabase,
      claims.sub,
    );

  if (!admin) {
    return null;
  }

  return {
    id: claims.sub,

    email:
      typeof claims.email ===
      "string"
        ? claims.email
        : null,
  };
}

/* =========================================================
   REQUIRE ADMIN
========================================================= */

export async function requireAdmin() {
  const admin =
    await getAdminUser();

  if (!admin) {
    redirect(
      "/admin/login",
    );
  }

  return admin;
}