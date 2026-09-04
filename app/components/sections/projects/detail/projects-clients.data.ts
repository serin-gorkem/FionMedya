export type ClientWorkLayout = "posts" | "duo" | "mixed";

export type ClientWorkSize = "standard" | "large";

export type ClientWork = {
  number: string;

  name: string;
  logo: string;

  summary: string;

  /*
   * Modal/detail açılan projelerde kullanılır.
   * GitGit ve Kule gibi external projelerde boş bırakabiliriz.
   */
  detail?: string;

  services: readonly string[];

  images: readonly string[];

  side: "left" | "right";

  layout: ClientWorkLayout;
  size?: ClientWorkSize;

  logoScale?: number;

  /*
   * true:
   *   Card click → proje modalı
   *
   * false:
   *   Modal yok.
   *   websiteUrl üzerinden ilgili siteye gider.
   */
  hasDetail: boolean;

  websiteUrl?: string;
};

export const clientWorks: ClientWork[] = [
  /* =====================================================
     01 — BYRON
  ====================================================== */

  {
    number: "01",

    name: "Byron",
    logo: "/projects/clients/byron.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "Byron için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [
      "/projects/clients/byron/01.jpg",
      "/projects/clients/byron/02.jpg",
      "/projects/clients/byron/03.jpg",
    ],

    side: "left",

    layout: "posts",
    size: "large",

    logoScale: 0.82,

    hasDetail: true,
  },

  /* =====================================================
     02 — İSTANBUL KOKOREÇ
  ====================================================== */

  {
    number: "02",

    name: "İstanbul Kokoreç",
    logo: "/projects/clients/istanbul-kokorec.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "İstanbul Kokoreç için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [],

    side: "right",

    layout: "posts",
    size: "large",

    logoScale: 0.72,

    hasDetail: true,
  },

  /* =====================================================
     03 — ÇAPAR TESİSAT
  ====================================================== */

  {
    number: "03",

    name: "Çapar Tesisat",
    logo: "/projects/clients/capar.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "Çapar Tesisat için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [],

    side: "left",

    layout: "duo",

    logoScale: 1.08,

    hasDetail: true,
  },

  /* =====================================================
     04 — KURYE PLUS
  ====================================================== */

  {
    number: "04",

    name: "Kurye Plus",
    logo: "/projects/clients/kurye-plus.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "Kurye Plus için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [],

    side: "right",

    layout: "posts",

    logoScale: 1,

    hasDetail: true,
  },

  /* =====================================================
     05 — FUYAPI
  ====================================================== */

  {
    number: "05",

    name: "FUYAPI",
    logo: "/projects/clients/fuyapi.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "FUYAPI için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [],

    side: "left",

    layout: "mixed",

    logoScale: 0.9,

    hasDetail: true,
  },

  /* =====================================================
     06 — MAIA
  ====================================================== */

  {
    number: "06",

    name: "Maia",
    logo: "/projects/clients/maia.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "Maia için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [],

    side: "right",

    layout: "mixed",

    logoScale: 0.88,

    hasDetail: true,
  },

  /* =====================================================
     07 — GITGIT
     QR MENU / EXTERNAL
  ====================================================== */

  {
    number: "07",

    name: "Git Git",
    logo: "/projects/clients/gitgit.png",

    summary: "QR menü deneyimi.",

    services: ["QR Menü"],

    images: [],

    side: "left",

    layout: "posts",

    logoScale: 0.62,

    hasDetail: false,

    /*
     * Gerçek URL geldiğinde doldur.
     *
     * Örnek:
     * websiteUrl:
     *   "https://...",
     */
    websiteUrl: "",
  },

  /* =====================================================
     08 — MT PRO
  ====================================================== */

  {
    number: "08",

    name: "MT Pro",
    logo: "/projects/clients/mt-pro.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "MT Pro için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [],

    side: "right",

    layout: "duo",

    logoScale: 0.78,

    hasDetail: true,
  },

  /* =====================================================
     09 — MOTO EXPRESS
  ====================================================== */

  {
    number: "09",

    name: "Moto Express",
    logo: "/projects/clients/moto-express.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "Moto Express için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [],

    side: "left",

    layout: "mixed",
    size: "large",

    logoScale: 0.68,

    hasDetail: true,
  },

  /* =====================================================
     10 — KULE
     QR MENU / EXTERNAL
  ====================================================== */

  {
    number: "10",

    name: "Kule",
    logo: "/projects/clients/kule.png",

    summary: "QR menü deneyimi.",

    services: ["QR Menü"],

    images: [],

    side: "right",

    layout: "duo",

    logoScale: 0.92,

    hasDetail: false,

    /*
     * Gerçek URL geldiğinde doldur.
     */
    websiteUrl: "",
  },

  /* =====================================================
     11 — PERLA
  ====================================================== */

  {
    number: "11",

    name: "Perla",
    logo: "/projects/clients/perla.png",

    summary: "Sosyal medya yönetimi.",

    detail:
      "Perla için gerçekleştirdiğimiz sosyal medya çalışmalarının proje detayları buraya gelecek.",

    services: ["Sosyal Medya Yönetimi"],

    images: [],

    side: "left",

    layout: "mixed",

    logoScale: 0.88,

    hasDetail: true,
  },
];
