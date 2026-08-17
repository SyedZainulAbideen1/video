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

export const CinematicEffectsProvider: React.FC<
  CinematicEffectsProviderProps
> = ({
  children,

  preset = "documentary",

  enabled = true,

  intensity = 1,

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

  const fog = enabled && (enableFog ?? config.fog);

  const dust = enabled && (enableDust ?? config.dust);

  const filmGrain =
    enabled && (enableFilmGrain ?? config.filmGrain);

  const bloom =
    enabled && (enableBloom ?? config.bloom);

  const lensFlare =
    enabled && (enableLensFlare ?? config.lensFlare);

  const lightRays =
    enabled && (enableLightRays ?? config.lightRays);

  const vignette =
    enabled && (enableVignette ?? config.vignette);

  const chromaticAberration =
    enabled &&
    (enableChromaticAberration ??
      config.chromaticAberration);

  const colorOverlay =
    enabled &&
    (enableColorOverlay ?? config.colorOverlay);

  const overlayOpacity =
    Math.max(0, Math.min(intensity, 2)) * 0.15;

  return (
    <div
      style={CinematicEffectsProviderStyles.container}
    >
      {/* Main Content */}
      <div
        style={CinematicEffectsProviderStyles.content}
      >
        {children}
      </div>

      {/* Atmosphere */}
      <div
        style={
          CinematicEffectsProviderStyles.atmosphereLayer
        }
      >
        {fog && <AtmosphericFog />}

        {dust && <DustParticles />}
      </div>

      {/* Lighting */}
      <div
        style={
          CinematicEffectsProviderStyles.lightingLayer
        }
      >
        {lightRays && <LightRays />}

        {lensFlare && <LensFlare />}

        {bloom && <Bloom />}
      </div>

      {/* Post Processing */}
      <div
        style={
          CinematicEffectsProviderStyles.postProcessingLayer
        }
      >
        {filmGrain && <FilmGrain />}

        {chromaticAberration && (
          <ChromaticAberration />
        )}
      </div>

      {/* Final Overlay */}
      <div
        style={
          CinematicEffectsProviderStyles.overlayLayer
        }
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