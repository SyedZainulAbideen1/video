import React from "react";

import { useCurrentFrame } from "remotion";

import { ChromaticAberrationProps } from "./ChromaticAberration.types";
import { ChromaticAberrationStyles } from "./ChromaticAberration.styles";
import { ChromaticAberrationAnimations } from "./ChromaticAberration.animations";

export const ChromaticAberration: React.FC<
  ChromaticAberrationProps
> = ({
  intensity =
    ChromaticAberrationAnimations.channels.intensity,

  opacity =
    ChromaticAberrationAnimations.channels.opacity,

  animated = true,
}) => {
  const frame = useCurrentFrame();

  const {
    separation,
    pulse,
  } = ChromaticAberrationAnimations;

  const offset =
    animated && separation.enabled
      ? Math.sin(
          frame * separation.speed
        ) *
        separation.distance *
        intensity
      : intensity;

  const pulseValue =
    animated && pulse.enabled
      ? 1 +
        Math.sin(
          frame * pulse.speed
        ) *
        pulse.intensity
      : 1;

  return (
    <div
      style={
        ChromaticAberrationStyles.container
      }
    >
      {/* Red Channel */}
      <div
        style={{
          ...ChromaticAberrationStyles.redChannel,

          transform: `translateX(${-offset}px)`,

          background:
            "rgba(255,0,0,1)",

          opacity:
            opacity * pulseValue,
        }}
      />

      {/* Green Channel */}
      <div
        style={{
          ...ChromaticAberrationStyles.greenChannel,

          background:
            "rgba(0,255,0,0.5)",

          opacity:
            opacity *
            0.4 *
            pulseValue,
        }}
      />

      {/* Blue Channel */}
      <div
        style={{
          ...ChromaticAberrationStyles.blueChannel,

          transform: `translateX(${offset}px)`,

          background:
            "rgba(0,120,255,1)",

          opacity:
            opacity * pulseValue,
        }}
      />
    </div>
  );
};