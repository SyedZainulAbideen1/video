import React from "react";

import { useCurrentFrame, useVideoConfig } from "remotion";

import { DustParticlesProps } from "./DustParticles.types";
import { DustParticlesStyles } from "./DustParticles.styles";
import { DustParticlesAnimations } from "./DustParticles.animations";

export const DustParticles: React.FC<DustParticlesProps> = ({
  opacity = 0.18,
  speed = 1,
  count = 24,
  animated = true,
}) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();

  const {
    drift,
    sway,
    flicker,
    depth,
  } = DustParticlesAnimations;

  const particles = Array.from(
    { length: count },
    (_, index) => {
      const seed = index * 37;

      const baseX =
        ((seed * 17) % 100) / 100;

      const baseY =
        ((seed * 29) % 100) / 100;

      const depthFactor =
        1 +
        (((seed * 13) % 100) / 100) *
          depth.range;

      const time = animated
        ? frame * speed
        : 0;

      const verticalDrift =
        Math.sin(
          time * drift.speed +
            index
        ) *
          drift.amplitude +
        time * drift.rise;

      const horizontalSway =
        Math.sin(
          time * sway.speed +
            index * 0.7
        ) *
        sway.amplitude;

      const flickerValue = animated
        ? 1 +
          Math.sin(
            time * flicker.speed +
              index * 1.37
          ) *
            flicker.amount
        : 1;

      const x =
        baseX * width +
        horizontalSway;

      const y =
        baseY * height -
        verticalDrift;

      const size =
        2 * depthFactor;

      return {
        x,
        y,
        size,
        opacity:
          opacity *
          flickerValue *
          depthFactor,
      };
    }
  );

  return (
    <div
      style={DustParticlesStyles.container}
    >
      {particles.map((particle, index) => (
        <div
          key={index}
          style={{
            ...DustParticlesStyles.particle,

            left: particle.x,

            top: particle.y,

            width: particle.size,

            height: particle.size,

            opacity: particle.opacity,

            willChange:
              "transform, opacity",
          }}
        />
      ))}
    </div>
  );
};