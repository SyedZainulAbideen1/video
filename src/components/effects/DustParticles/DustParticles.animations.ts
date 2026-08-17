/**
 * ============================================================
 * TerraVault Dust Particles Animation
 * ============================================================
 *
 * Central animation configuration.
 * Future animation logic will read values from here.
 * ============================================================
 */

export const DustParticlesAnimations = {
  particles: {
    count: 40,

    speed: 1,

    baseOpacity: 0.22,

    baseSize: 5,
  },

  movement: {
    upwardDistance: 260,

    horizontalDrift: 35,

    swaySpeed: 0.02,
  },

  twinkle: {
    enabled: true,

    speed: 0.04,

    intensity: 0.12,
  },

  depth: {
    minScale: 0.5,

    maxScale: 1.5,
  },

  global: {
    loop: true,
  },
};