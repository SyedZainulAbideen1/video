import { ReactNode } from "react";

export type CinematicPreset =
  | "none"
  | "documentary"
  | "historical"
  | "nature"
  | "space"
  | "crime"
  | "war"
  | "luxury"
  | "vintage"
  | "scifi";

export interface CinematicEffectsProviderProps {
  children: ReactNode;

  /**
   * Preset configuration
   */
  preset?: CinematicPreset;

  /**
   * Global enable / disable
   */
  enabled?: boolean;

  /**
   * Individual Effects
   */
  enableFog?: boolean;

  enableDust?: boolean;

  enableFilmGrain?: boolean;

  enableBloom?: boolean;

  enableLensFlare?: boolean;

  enableLightRays?: boolean;

  enableVignette?: boolean;

  enableChromaticAberration?: boolean;

  enableColorOverlay?: boolean;

  /**
   * Performance
   */
  quality?: "low" | "medium" | "high" | "ultra";

  /**
   * Global intensity
   */
  intensity?: number;
}