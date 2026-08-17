import React from "react";

import { useCurrentFrame } from "remotion";

import { FilmGrainProps } from "./FilmGrain.types";
import { FilmGrainStyles } from "./FilmGrain.styles";

export const FilmGrain: React.FC<FilmGrainProps> = ({
  opacity = 0.10,
  intensity = 1,
  animated = true,
}) => {
  const frame = useCurrentFrame();

  const offsetX = animated
    ? (frame * 2.8) % 20
    : 0;

  const offsetY = animated
    ? (frame * 1.7) % 20
    : 0;

  const flicker = animated
    ? 0.95 + Math.sin(frame * 0.55) * 0.05
    : 1;

  return (
    <div style={FilmGrainStyles.container}>
      <div
        style={{
          ...FilmGrainStyles.grain,

          opacity: opacity * flicker,

          backgroundSize: `
            ${5 * intensity}px ${5 * intensity}px,
            ${8 * intensity}px ${8 * intensity}px,
            ${11 * intensity}px ${11 * intensity}px
          `,

          backgroundPosition: `
            ${offsetX}px ${offsetY}px,
            ${offsetX + 3}px ${offsetY + 3}px,
            ${offsetX + 6}px ${offsetY + 6}px
          `,
        }}
      />
    </div>
  );
};