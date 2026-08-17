import React from "react";

import { useCurrentFrame } from "remotion";

import { BloomProps } from "./Bloom.types";
import { BloomStyles } from "./Bloom.styles";
import { BloomAnimations } from "./Bloom.animations";

export const Bloom: React.FC<BloomProps> = ({
  opacity = 0.35,
  intensity = 1,
  animated = true,
}) => {
  const frame = useCurrentFrame();

  const pulse = animated
    ? 1 +
      Math.sin(
        frame * BloomAnimations.pulse.speed
      ) *
        BloomAnimations.pulse.amount
    : 1;

  const breathing = animated
    ? 1 +
      Math.sin(
        frame * BloomAnimations.breathing.speed
      ) *
        BloomAnimations.breathing.amount
    : 1;

  const flicker = animated
    ? 1 +
      Math.sin(
        frame * BloomAnimations.flicker.speed
      ) *
        BloomAnimations.flicker.amount
    : 1;

  const finalOpacity =
    opacity *
    intensity *
    pulse *
    breathing *
    flicker;

  const finalScale =
    BloomAnimations.scale.base +
    Math.sin(
      frame * BloomAnimations.scale.speed
    ) *
      BloomAnimations.scale.amount;

  return (
    <div style={BloomStyles.container}>
      <div
        style={{
          ...BloomStyles.glow,

          opacity: finalOpacity,

          transform: `scale(${finalScale})`,

          willChange: "transform, opacity",
        }}
      />
    </div>
  );
};