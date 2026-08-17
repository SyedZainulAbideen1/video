import React from "react";

import {
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { DustParticlesProps } from "./DustParticles.types";
import { DustParticlesStyles } from "./DustParticles.styles";

export const DustParticles: React.FC<DustParticlesProps> = ({
  count = 40,
  opacity = 0.22,
  size = 5,
  speed = 1,
  color = "#FFFFFF",
}) => {
  const frame = useCurrentFrame();

  const { width, height } = useVideoConfig();

  const particles = React.useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      x: (i * 97) % width,
      y: (i * 61) % height,
      offset: (i * 13) % 120,

      scale: 0.5 + ((i * 17) % 100) / 100,

      drift: 15 + ((i * 19) % 40),

      twinkle: 0.7 + ((i * 7) % 30) / 100,
    }));
  }, [count, width, height]);

  return (
    <div style={DustParticlesStyles.container}>
      {particles.map((particle, index) => {
        const progress =
          ((frame * speed + particle.offset) % 300) / 300;

        const y = interpolate(
          progress,
          [0, 1],
          [particle.y + 120, particle.y - 140]
        );

        const x =
          particle.x +
          Math.sin(
            (frame + particle.offset) * 0.02
          ) *
            particle.drift;

        const twinkle =
          particle.twinkle +
          Math.sin(
            (frame + particle.offset) * 0.04
          ) *
            0.12;

        return (
          <div
            key={index}
            style={{
              ...DustParticlesStyles.particle,

              left: x,

              top: y,

              width: size * particle.scale,

              height: size * particle.scale,

              background: color,

              opacity: opacity * twinkle,
            }}
          />
        );
      })}
    </div>
  );
};