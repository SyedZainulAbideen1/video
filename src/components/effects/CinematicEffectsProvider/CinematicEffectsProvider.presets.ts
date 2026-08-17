import { CinematicPreset } from "./CinematicEffectsProvider.types";

export interface CinematicPresetConfig {
  fog: boolean;

  dust: boolean;

  filmGrain: boolean;

  bloom: boolean;

  lensFlare: boolean;

  lightRays: boolean;

  vignette: boolean;

  chromaticAberration: boolean;

  colorOverlay: boolean;

  overlayColor?: string;

  /**
   * Global intensity multiplier
   */
  intensity: number;

  /**
   * Rendering quality
   */
  quality: "low" | "medium" | "high" | "ultra";
}

export const CinematicPresets: Record<
  CinematicPreset,
  CinematicPresetConfig
> = {
  none: {
    fog: false,
    dust: false,
    filmGrain: false,
    bloom: false,
    lensFlare: false,
    lightRays: false,
    vignette: false,
    chromaticAberration: false,
    colorOverlay: false,
    intensity: 0,
    quality: "low",
  },

  documentary: {
    fog: true,
    dust: true,
    filmGrain: true,
    bloom: true,
    lensFlare: true,
    lightRays: true,
    vignette: true,
    chromaticAberration: true,
    colorOverlay: false,
    intensity: 1,
    quality: "high",
  },

  historical: {
    fog: true,
    dust: true,
    filmGrain: true,
    bloom: false,
    lensFlare: false,
    lightRays: true,
    vignette: true,
    chromaticAberration: false,
    colorOverlay: true,
    overlayColor: "#8B6B3F",
    intensity: 0.9,
    quality: "high",
  },

  nature: {
    fog: true,
    dust: true,
    filmGrain: false,
    bloom: true,
    lensFlare: true,
    lightRays: true,
    vignette: true,
    chromaticAberration: false,
    colorOverlay: false,
    intensity: 1,
    quality: "high",
  },

  space: {
    fog: false,
    dust: false,
    filmGrain: false,
    bloom: true,
    lensFlare: true,
    lightRays: false,
    vignette: true,
    chromaticAberration: true,
    colorOverlay: true,
    overlayColor: "#3B82F6",
    intensity: 1.2,
    quality: "ultra",
  },

  crime: {
    fog: true,
    dust: false,
    filmGrain: true,
    bloom: false,
    lensFlare: false,
    lightRays: false,
    vignette: true,
    chromaticAberration: true,
    colorOverlay: true,
    overlayColor: "#1E3A8A",
    intensity: 0.9,
    quality: "high",
  },

  war: {
    fog: true,
    dust: true,
    filmGrain: true,
    bloom: false,
    lensFlare: false,
    lightRays: true,
    vignette: true,
    chromaticAberration: true,
    colorOverlay: true,
    overlayColor: "#5B4636",
    intensity: 1.1,
    quality: "high",
  },

  luxury: {
    fog: false,
    dust: false,
    filmGrain: false,
    bloom: true,
    lensFlare: true,
    lightRays: true,
    vignette: false,
    chromaticAberration: false,
    colorOverlay: true,
    overlayColor: "#FACC15",
    intensity: 1,
    quality: "ultra",
  },

  vintage: {
    fog: true,
    dust: true,
    filmGrain: true,
    bloom: false,
    lensFlare: false,
    lightRays: false,
    vignette: true,
    chromaticAberration: false,
    colorOverlay: true,
    overlayColor: "#A16207",
    intensity: 0.85,
    quality: "medium",
  },

  scifi: {
    fog: false,
    dust: false,
    filmGrain: false,
    bloom: true,
    lensFlare: true,
    lightRays: true,
    vignette: true,
    chromaticAberration: true,
    colorOverlay: true,
    overlayColor: "#06B6D4",
    intensity: 1.2,
    quality: "ultra",
  },
};