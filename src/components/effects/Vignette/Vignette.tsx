import React from "react";

import { useCurrentFrame } from "remotion";

import { VignetteProps } from "./Vignette.types";
import { VignetteStyles } from "./Vignette.styles";
import { VignetteAnimations } from "./Vignette.animations";

export const Vignette: React.FC<VignetteProps> = ({
  opacity = VignetteAnimations.vignette.opacity,
  intensity = VignetteAnimations.vignette.intensity,
  animated = true,
}) => {
  const frame = useCurrentFrame();

  const {
    breathing,
    scale,
  } = VignetteAnimations;

  const breathe =
    animated && breathing.enabled
      ? 1 -
        breathing.intensity +
        Math.sin(
          frame * breathing.speed
        ) * breathing.intensity
      : 1;

  const scaleValue =
    animated && scale.enabled
      ? scale.min +
        ((breathe -
          (1 - breathing.intensity)) /
          (2 * breathing.intensity || 1)) *
          (scale.max - scale.min)
      : scale.min;

  return (
    <div
      style={VignetteStyles.container}
    >
      <div
        style={{
          ...VignetteStyles.vignette,

          opacity:
            opacity *
            intensity *
            breathe,

          transform: `scale(${scaleValue})`,
        }}
      />
    </div>
  );
};