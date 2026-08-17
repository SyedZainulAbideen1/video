/**
 * ============================================================
 * TerraVault Cinematic Effects Provider
 * Global Animation Controller
 * ============================================================
 *
 * Central animation configuration.
 * All cinematic effects will use these values.
 * ============================================================
 */

export interface GlobalEffectAnimation {
  opacity: number;

  intensity: number;

  progress: number;
}

export const CinematicEffectsAnimations = {
  global: {
    enabled: true,

    opacity: 1,

    intensity: 1,

    progress: 0,

    loop: true,
  },

  transition: {
    enabled: true,

    fadeInDuration: 20,

    fadeOutDuration: 20,

    crossFadeDuration: 15,
  },

  camera: {
    shakeEnabled: false,

    shakeIntensity: 0,
  },

  performance: {
    adaptiveQuality: true,

    targetFPS: 60,
  },

  timing: {
    masterSpeed: 1,
  },
};