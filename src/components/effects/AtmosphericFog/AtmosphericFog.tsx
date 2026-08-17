import React from "react";

import {
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { AtmosphericFogProps } from "./AtmosphericFog.types";
import { AtmosphericFogStyles } from "./AtmosphericFog.styles";

export const AtmosphericFog: React.FC<AtmosphericFogProps> = ({
  opacity = 0.25,
  speed = 1,
  blur = 120,
}) => {
  const frame = useCurrentFrame();

  const { width, height, durationInFrames } =
    useVideoConfig();

  const progress =
    (frame * speed) / durationInFrames;

  const x1 = interpolate(
    progress,
    [0, 1],
    [-450, width]
  );

  const x2 = interpolate(
    progress,
    [0, 1],
    [width * 0.15, width + 450]
  );

  const x3 = interpolate(
    progress,
    [0, 1],
    [-300, width * 0.9]
  );

  const y1 = Math.sin(frame * 0.010) * 40;

  const y2 = Math.cos(frame * 0.008) * 55;

  const y3 = Math.sin(frame * 0.014) * 28;

  const breathe =
    0.92 + Math.sin(frame * 0.015) * 0.08;

  return (
    <div style={AtmosphericFogStyles.container}>
      <div
        style={{
          ...AtmosphericFogStyles.layer1,
          left: x1,
          top: height * 0.18 + y1,
          opacity: opacity * breathe,
          filter: `blur(${blur}px)`,
        }}
      />

      <div
        style={{
          ...AtmosphericFogStyles.layer2,
          left: x2,
          top: height * 0.42 + y2,
          opacity: opacity * 0.8 * breathe,
          filter: `blur(${blur + 30}px)`,
        }}
      />

      <div
        style={{
          ...AtmosphericFogStyles.layer3,
          left: x3,
          top: height * 0.68 + y3,
          opacity: opacity * 0.65 * breathe,
          filter: `blur(${blur - 15}px)`,
        }}
      />
    </div>
  );
};