import React from "react";

import { AtmosphericFog } from "../AtmosphericFog/AtmosphericFog";
import { Bloom } from "../Bloom/Bloom";
import { ChromaticAberration } from "../ChromaticAberration/ChromaticAberration";
import { ColorOverlay } from "../ColorOverlay/ColorOverlay";
import { DustParticles } from "../DustParticles/DustParticles";
import { FilmGrain } from "../FilmGrain/FilmGrain";
import { LensFlare } from "../LensFlare/LensFlare";
import { LightRays } from "../LightRays/LightRays";
import { Vignette } from "../Vignette/Vignette";

import { CinematicEffectsProviderProps } from "./CinematicEffectsProvider.types";
import { CinematicEffectsProviderStyles } from "./CinematicEffectsProvider.styles";
import { CinematicPresets } from "./CinematicEffectsProvider.presets";
import { CinematicEffectsAnimations } from "./CinematicEffectsProvider.animations";

export const CinematicEffectsProvider: React.FC<
  CinematicEffectsProviderProps
> = ({
  children,

  preset = "documentary",

  enabled = true,

  intensity,

  enableFog,
  enableDust,
  enableFilmGrain,
  enableBloom,
  enableLensFlare,
  enableLightRays,
  enableVignette,
  enableChromaticAberration,
  enableColorOverlay,
}) => {
  const config = CinematicPresets[preset];

  const global =
    CinematicEffectsAnimations.global;

  const masterEnabled =
    enabled && global.enabled;

  const masterIntensity = Math.max(
    0,
    Math.min(
      intensity ?? config.intensity,
      2
    )
  );

  const masterOpacity =
    global.opacity * masterIntensity;

  const fog =
    masterEnabled &&
    (enableFog ?? config.fog);

  const dust =
    masterEnabled &&
    (enableDust ?? config.dust);

  const filmGrain =
    masterEnabled &&
    (enableFilmGrain ?? config.filmGrain);

  const bloom =
    masterEnabled &&
    (enableBloom ?? config.bloom);

  const lensFlare =
    masterEnabled &&
    (enableLensFlare ?? config.lensFlare);

  const lightRays =
    masterEnabled &&
    (enableLightRays ?? config.lightRays);

  const vignette =
    masterEnabled &&
    (enableVignette ?? config.vignette);

  const chromaticAberration =
    masterEnabled &&
    (enableChromaticAberration ??
      config.chromaticAberration);

  const colorOverlay =
    masterEnabled &&
    (enableColorOverlay ??
      config.colorOverlay);

  const overlayOpacity =
    masterIntensity * 0.15;

  return (
    <div
      style={
        CinematicEffectsProviderStyles.container
      }
    >
      {/* Main Content */}
      <div
        style={
          CinematicEffectsProviderStyles.content
        }
      >
        {children}
      </div>

      {/* Atmosphere */}
      <div
        style={{
          ...CinematicEffectsProviderStyles.atmosphereLayer,

          opacity: masterOpacity,
        }}
      >
        {fog && <AtmosphericFog />}

        {dust && <DustParticles />}
      </div>

      {/* Lighting */}
      <div
        style={{
          ...CinematicEffectsProviderStyles.lightingLayer,

          opacity: masterOpacity,
        }}
      >
        {lightRays && <LightRays />}

        {lensFlare && <LensFlare />}

        {bloom && <Bloom />}
      </div>

      {/* Post Processing */}
      <div
        style={{
          ...CinematicEffectsProviderStyles.postProcessingLayer,

          opacity: masterOpacity,
        }}
      >
        {filmGrain && <FilmGrain />}

        {chromaticAberration && (
          <ChromaticAberration />
        )}
      </div>

      {/* Final Overlay */}
      <div
        style={{
          ...CinematicEffectsProviderStyles.overlayLayer,

          opacity: masterEnabled
            ? 1
            : 0,
        }}
      >
        {colorOverlay && (
          <ColorOverlay
            color={
              config.overlayColor ??
              "#3B82F6"
            }
            opacity={overlayOpacity}
          />
        )}

        {vignette && <Vignette />}
      </div>
    </div>
  );
};