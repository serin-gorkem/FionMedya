/**
 * İlk frame:
 *
 * Kadeh website baskısının üzerinde,
 * dik ve hareketsiz.
 */
export const HERO_GLASS_IDLE_TRANSFORM = {
  position: [
    0.35,
    0.18,
    -0.9,
  ] as const,

  rotation: [
    0.02,
    -3.45,
    0,
  ] as const,

  scale: 7.5,
} as const;

/**
 * Scroll sonrası:
 *
 * Bardak sağa doğru yana devrilmiş
 * final state.
 *
 * wineOrigin.ts bu transform üzerinden
 * dış wine origin'i hesaplıyor.
 */
export const HERO_GLASS_TRANSFORM = {
  position: [
    0.55,
    0.27,
    -0.86,
  ] as const,

  rotation: [
    0.15,
    -3.5,
    Math.PI / 2.25,
  ] as const,

  scale: 7.5,
} as const;

/**
 * Big Boss.
 *
 * Water simulation aşamasında
 * yeniden yapılacak.
 */
export const INNER_WINE_TRANSFORM = {
  poolPosition: [
    0,
    0.108,
    0.005,
  ] as const,

  poolScale: [
    0.034,
    0.02,
    0.042,
  ] as const,

  connectorStart: [
    -0.004,
    0.116,
    0.006,
  ] as const,

  connectorControl: [
    -0.018,
    0.158,
    0.004,
  ] as const,
};

export const WINE_ORIGIN_LOCAL = [
  -0.03,
  0.2,
  0,
] as const;