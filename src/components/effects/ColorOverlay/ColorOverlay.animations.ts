/**
 * ============================================================
 * TerraVault Color Overlay Animation
 * ============================================================
 *
 * Central animation configuration.
 * Future animation logic will read values from here.
 * ============================================================
 */

export const ColorOverlayAnimations = {
  overlay: {
    color: "#3B82F6",

    opacity: 0.15,

    blendMode: "overlay",
  },

  pulse: {
    enabled: true,

    speed: 0.03,

    intensity: 0.08,
  },

  colorShift: {
    enabled: true,

    speed: 0.01,

    hueRange: 6,
  },

  transition: {
    enabled: true,

    fadeIn: true,

    fadeOut: true,
  },

  global: {
    loop: true,
  },
};