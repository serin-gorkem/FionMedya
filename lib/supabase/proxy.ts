import {
  createServerClient,
} from "@supabase/ssr";

import {
  NextResponse,
  type NextRequest,
} from "next/server";

export async function updateSession(
  request: NextRequest,
) {
  let response =
    NextResponse.next({
      request,
    });

  const supabase =
    createServerClient(
      process.env
        .NEXT_PUBLIC_SUPABASE_URL!,
      process.env
        .NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },

          setAll(
            cookiesToSet,
            headers,
          ) {
            /*
             * Request cookies'i de
             * güncelliyoruz ki aynı request
             * içerisindeki Server Components
             * yeni token'ı görsün.
             */
            cookiesToSet.forEach(
              ({
                name,
                value,
              }) => {
                request.cookies.set(
                  name,
                  value,
                );
              },
            );

            response =
              NextResponse.next({
                request,
              });

            /*
             * Browser'a yeni auth
             * cookie'lerini gönder.
             */
            cookiesToSet.forEach(
              ({
                name,
                value,
                options,
              }) => {
                response.cookies.set(
                  name,
                  value,
                  options,
                );
              },
            );

            /*
             * @supabase/ssr yeni
             * versiyonlarda cache-control
             * header'ları da gönderebilir.
             */
            if (headers) {
              Object.entries(
                headers,
              ).forEach(
                ([
                  key,
                  value,
                ]) => {
                  response.headers.set(
                    key,
                    value,
                  );
                },
              );
            }
          },
        },
      },
    );

  /*
   * createServerClient ile getClaims
   * arasında başka kod çalıştırma.
   *
   * Session refresh burada tetikleniyor.
   */
  await supabase.auth.getClaims();

  return response;
}