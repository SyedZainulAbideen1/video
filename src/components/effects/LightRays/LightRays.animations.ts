/**
 * ============================================================
 * TerraVault Light Rays Animation
 * ============================================================
 *
 * Central animation configuration.
 * Future animation logic will read values from here.
 * ============================================================
 */

export const LightRaysAnimations = {
  rays: {
    count: 3,

    intensity: 1,

    opacity: 0.30,
  },

  drift: {
    enabled: true,

    speed: 0.015,

    distance: 45,
  },

  breathing: {
    enabled: true,

    speed: 0.03,

    intensity: 0.12,
  },

  pulse: {
    enabled: true,

    speed: 0.02,

    intensity: 0.04,
  },

  angle: {
    default: -25,
  },

  color: {
    temperature: "#FFF5D6",
  },

  global: {
    loop: true,
  },
};