import React from "react";
import { useCurrentFrame } from "remotion";

import { VignetteProps } from "./Vignette.types";
import { VignetteStyles } from "./Vignette.styles";

export const Vignette: React.FC<VignetteProps> = ({
  opacity = 0.55,
  intensity = 1,
  animated = true,
}) => {
  const frame = useCurrentFrame();

  const breathe = animated
    ? 0.96 + Math.sin(frame * 0.02) * 0.04
    : 1;

  return (
    <div style={VignetteStyles.container}>
      <div
        style={{
          ...VignetteStyles.vignette,

          opacity: opacity * intensity * breathe,

          transform: `scale(${1.01 + (breathe - 1) * 0.3})`,
        }}
      />
    </div>
  );
};