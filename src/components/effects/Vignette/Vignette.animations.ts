/**
 * ============================================================
 * TerraVault Vignette Animation
 * ============================================================
 *
 * Central animation configuration.
 * Future animation logic will read values from here.
 * ============================================================
 */

export const VignetteAnimations = {
  vignette: {
    opacity: 0.55,

    intensity: 1,
  },

  breathing: {
    enabled: true,

    speed: 0.02,

    intensity: 0.04,
  },

  scale: {
    enabled: true,

    min: 1,

    max: 1.02,
  },

  transition: {
    enabled: true,
  },

  global: {
    loop: true,
  },
};