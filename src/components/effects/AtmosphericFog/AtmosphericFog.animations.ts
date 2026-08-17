/**
 * ============================================================
 * TerraVault Atmospheric Fog Animation
 * Cinematic Atmosphere Controller v2.1
 * ============================================================
 *
 * Centralized animation configuration for AtmosphericFog.
 *
 * • Multi-Layer Drift
 * • Independent Layer Speed
 * • Horizontal / Vertical Movement
 * • Density Control
 * • Breathing
 * • Infinite Loop
 * ============================================================
 */

export const AtmosphericFogAnimations = {
  // ------------------------------------------------------------
  // FOG LAYERS
  // ------------------------------------------------------------

  layer1: {
    speed: 0.35,

    amplitudeX: 180,

    amplitudeY: 24,

    opacity: 0.55,

    blur: 140,
  },

  layer2: {
    speed: 0.22,

    amplitudeX: 240,

    amplitudeY: 32,

    opacity: 0.38,

    blur: 180,
  },

  layer3: {
    speed: 0.14,

    amplitudeX: 320,

    amplitudeY: 42,

    opacity: 0.25,

    blur: 220,
  },

  // ------------------------------------------------------------
  // BREATHING
  // ------------------------------------------------------------

  breathing: {
    enabled: true,

    speed: 0.018,

    intensity: 0.08,
  },

  // ------------------------------------------------------------
  // GLOBAL
  // ------------------------------------------------------------

  global: {
    density: 1,

    loop: true,
  },
} as const;