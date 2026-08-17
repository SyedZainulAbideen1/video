import React from "react";

import { useCurrentFrame } from "remotion";

import { FilmGrainProps } from "./FilmGrain.types";
import { FilmGrainStyles } from "./FilmGrain.styles";
import { FilmGrainAnimations } from "./FilmGrain.animations";

export const FilmGrain: React.FC<FilmGrainProps> = ({
  opacity = 0.08,
  intensity = 1,
  animated = true,
}) => {
  const frame = useCurrentFrame();

  const { movement, flicker } =
    FilmGrainAnimations;

  const time = animated ? frame : 0;

  const offsetX = animated
    ? (time * movement.speed) %
      movement.tileSize
    : 0;

  const offsetY = animated
    ? (time * movement.speed * 0.7) %
      movement.tileSize
    : 0;

  const grainOpacity = animated
    ? opacity *
      (1 +
        Math.sin(
          time * flicker.speed
        ) *
          flicker.amount)
    : opacity;

  return (
    <div
      style={FilmGrainStyles.container}
    >
      <div
        style={{
          ...FilmGrainStyles.grain,

          opacity: grainOpacity,

          backgroundSize: `
            ${6 * intensity}px ${6 * intensity}px,
            ${8 * intensity}px ${8 * intensity}px
          `,

          backgroundPosition: `
            ${offsetX}px ${offsetY}px,
            ${offsetX + 3}px ${offsetY + 3}px
          `,

          willChange:
            "background-position, opacity",
        }}
      />
    </div>
  );
};