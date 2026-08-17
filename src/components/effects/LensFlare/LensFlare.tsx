import React from "react";

import {
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { LensFlareProps } from "./LensFlare.types";
import { LensFlareStyles } from "./LensFlare.styles";

export const LensFlare: React.FC<LensFlareProps> = ({
  opacity = 0.18,
  size = 220,
  duration,
  angle = 18,
}) => {
  const frame = useCurrentFrame();

  const {
    width,
    height,
    durationInFrames,
  } = useVideoConfig();

  const totalFrames =
    duration ?? durationInFrames;

  const progress = interpolate(
    frame,
    [0, totalFrames],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const x = interpolate(
    progress,
    [0, 1],
    [-size, width + size]
  );

  const y = height * 0.35;

  const fade = interpolate(
    progress,
    [0, 0.15, 0.85, 1],
    [0, opacity, opacity, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <div
      style={LensFlareStyles.container}
    >
      {/* Glow */}
      <div
        style={{
          ...LensFlareStyles.glow,

          width: size,
          height: size,

          left: x,
          top: y - size / 2,

          opacity: fade,
        }}
      />

      {/* Light Streak */}
      <div
        style={{
          ...LensFlareStyles.streak,

          left: x - 150,
          top: y,

          opacity: fade,

          transform: `rotate(${angle}deg)`,
        }}
      />
    </div>
  );
};