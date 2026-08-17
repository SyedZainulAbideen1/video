import React from "react";

import { useCurrentFrame } from "remotion";

import { ColorOverlayProps } from "./ColorOverlay.types";
import { ColorOverlayStyles } from "./ColorOverlay.styles";

export const ColorOverlay: React.FC<ColorOverlayProps> = ({
  color = "#3B82F6",
  opacity = 0.15,
  blendMode = "overlay",
  animated = false,
}) => {
  const frame = useCurrentFrame();

  const pulse = animated
    ? 0.92 + Math.sin(frame * 0.03) * 0.08
    : 1;

  const hueShift = animated
    ? Math.sin(frame * 0.01) * 6
    : 0;

  return (
    <div style={ColorOverlayStyles.container}>
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