/**
 * ============================================================
 * TerraVault Chromatic Aberration Animation
 * ============================================================
 *
 * Central animation configuration.
 * Future animation logic will read values from here.
 * ============================================================
 */

export const ChromaticAberrationAnimations = {
  channels: {
    intensity: 2,

    opacity: 0.15,
  },

  separation: {
    enabled: true,

    speed: 0.04,

    distance: 2,
  },

  pulse: {
    enabled: true,

    speed: 0.025,

    intensity: 0.05,
  },

  edgeDistortion: {
    enabled: false,
  },

  cameraShake: {
    enabled: false,
  },

  global: {
    loop: true,
  },
};