/**
 * ============================================================
 * TerraVault Atmospheric Fog Animation
 * ============================================================
 *
 * Central animation configuration.
 * Future animation logic will read values from here.
 * ============================================================
 */

export const AtmosphericFogAnimations = {
  layer1: {
    speed: 1.0,
    opacity: 0.24,
    blur: 120,
    amplitudeX: 450,
    amplitudeY: 40,
  },

  layer2: {
    speed: 0.75,
    opacity: 0.18,
    blur: 150,
    amplitudeX: 520,
    amplitudeY: 55,
  },

  layer3: {
    speed: 1.2,
    opacity: 0.16,
    blur: 105,
    amplitudeX: 350,
    amplitudeY: 28,
  },

  breathing: {
    enabled: true,
    speed: 0.015,
    intensity: 0.08,
  },

  global: {
    loop: true,
    density: 1,
  },
};