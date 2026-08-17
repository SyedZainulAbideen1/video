/**
 * ============================================================
 * TerraVault Film Grain Animation
 * ============================================================
 *
 * Central animation configuration.
 * Future animation logic will read values from here.
 * ============================================================
 */

export const FilmGrainAnimations = {
  grain: {
    opacity: 0.10,

    intensity: 1,

    animated: true,
  },

  movement: {
    speedX: 2.8,

    speedY: 1.7,

    loopLength: 20,
  },

  flicker: {
    enabled: true,

    speed: 0.55,

    intensity: 0.05,
  },

  texture: {
    layer1: 5,

    layer2: 8,

    layer3: 11,
  },

  global: {
    loop: true,
  },
};