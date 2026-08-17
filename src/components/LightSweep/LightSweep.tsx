import React from "react";

import {
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from "remotion";

import { LightSweepStyles } from "./LightSweep.styles";
import { LightSweepProps } from "./LightSweep.types";

export const LightSweep: React.FC<LightSweepProps> = ({
  opacity = 1,
  duration = 180,
}) => {
  const frame = useCurrentFrame();

  const { width } = useVideoConfig();

  // Wait until the panel has almost finished entering
  const startDelay = 24;

  const progress = interpolate(
    frame,
    [startDelay, startDelay + duration],
    [0, 1],
    {
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const x = interpolate(
    progress,
    [0, 1],
    [-220, width + 220]
  );

  return (
    <div
      style={{
        ...LightSweepStyles.sweep,

        opacity,

        left: x,
      }}
    />
  );
};