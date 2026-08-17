import React from "react";

import { useCurrentFrame } from "remotion";

import { ColorOverlayProps } from "./ColorOverlay.types";
import { ColorOverlayStyles } from "./ColorOverlay.styles";
import { ColorOverlayAnimations } from "./ColorOverlay.animations";

export const ColorOverlay: React.FC<ColorOverlayProps> = ({
  color = ColorOverlayAnimations.overlay.color,
  opacity = ColorOverlayAnimations.overlay.opacity,
  blendMode = "overlay",
  animated = false,
}) => {
  const frame = useCurrentFrame();

  const pulse =
    animated && ColorOverlayAnimations.pulse.enabled
      ? 1 -
        ColorOverlayAnimations.pulse.intensity +
        Math.sin(
          frame *
            ColorOverlayAnimations.pulse.speed
        ) *
          ColorOverlayAnimations.pulse.intensity
      : 1;

  const hueShift =
    animated &&
    ColorOverlayAnimations.colorShift.enabled
      ? Math.sin(
          frame *
            ColorOverlayAnimations.colorShift.speed
        ) *
        ColorOverlayAnimations.colorShift.hueRange
      : 0;

  return (
    <div
      style={ColorOverlayStyles.container}
    >
      <div
        style={{
          ...ColorOverlayStyles.overlay,

          background: color,

          opacity: opacity * pulse,

          mixBlendMode: blendMode,

          filter: `hue-rotate(${hueShift}deg)`,
        }}
      />
    </div>
  );
};