import React from "react";

import { useCurrentFrame } from "remotion";

import { BloomProps } from "./Bloom.types";
import { BloomStyles } from "./Bloom.styles";

export const Bloom: React.FC<BloomProps> = ({
  opacity = 0.38,
  blur = 120,
  intensity = 1,
  color = "#FFF5D6",
  animated = true,
}) => {
  const frame = useCurrentFrame();

  const pulse = animated
    ? 1 + Math.sin(frame * 0.025) * 0.06
    : 1;

  const flicker = animated
    ? 0.98 + Math.sin(frame * 0.18) * 0.02
    : 1;

  return (
    <div style={BloomStyles.container}>
      <div
        style={{
          ...BloomStyles.glow,

          opacity: opacity * pulse * flicker,

          filter: `blur(${blur}px)`,

          transform: `scale(${1.25 * pulse})`,

          background: `radial-gradient(
            circle at center,
            ${color}77 0%,
            ${color}44 24%,
            ${color}22 48%,
            transparent 74%
          )`,
        }}
      />
    </div>
  );
};