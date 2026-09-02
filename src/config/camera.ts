export const CAMERA_CONFIG = {
  hero: {
    position: [3.8, 3.4, 6.2] as const,
    target: [-1.5, 0, 0.5] as const,
    fov: 40,
  },

  topDown: {
    position: [0, 13, 1] as const,
    target: [0, 0, -2] as const,
    fov: 23,
  },

  journey: {
    height: 13,

    /**
     * Kameranın route üzerindeki noktanın
     * ne kadar gerisinde durduğu.
     */
    zOffset: 2.8,

    /**
     * Route'un x hareketini kameraya
     * birebir vermiyoruz.
     */
    xInfluence: 0.45,

    /**
     * Kameranın baktığı nokta route'un
     * biraz ilerisinde.
     */
    lookAhead: 1.5,

    /**
     * Journey, curve'in tam origin'inden
     * başlamasın. Kadeh kısmını zaten
     * Hero'da gördük.
     */
    curveStart: 0.08,
  },

  damping: {
    position: 5.5,
    target: 7,
    fov: 5,
  },
} as const;