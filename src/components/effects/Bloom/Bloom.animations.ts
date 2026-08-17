/**
 * ============================================================
 * TerraVault Bloom Animation
 * ============================================================
 *
 * Central animation configuration.
 * Future animation logic will read values from here.
 * ============================================================
 */

export const BloomAnimations = {
  glow: {
    opacity: 0.38,

    blur: 120,

    intensity: 1,

    scale: 1.25,
  },

  pulse: {
    enabled: true,

    speed: 0.025,

    intensity: 0.06,
  },

  flicker: {
    enabled: true,

    speed: 0.18,

    intensity: 0.02,
  },

  color: {
    temperature: "#FFF5D6",
  },

  global: {
    loop: true,
  },
};