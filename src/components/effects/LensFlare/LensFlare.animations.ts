/**
 * ============================================================
 * TerraVault Lens Flare Animation
 * ============================================================
 *
 * Central animation configuration.
 * Future animation logic will read values from here.
 * ============================================================
 */

export const LensFlareAnimations = {
  glow: {
    opacity: 0.22,

    scale: 1,

    blur: 40,
  },

  sweep: {
    enabled: true,

    speed: 6,

    startX: -300,

    endX: 1500,
  },

  pulse: {
    enabled: true,

    speed: 0.025,

    intensity: 0.08,
  },

  rotation: {
    enabled: true,

    speed: 0.01,

    maxAngle: 2,
  },

  global: {
    loop: true,
  },
};