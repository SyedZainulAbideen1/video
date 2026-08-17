import React from "react";

import { useCurrentFrame } from "remotion";

import { LightRaysProps } from "./LightRays.types";
import { LightRaysStyles } from "./LightRays.styles";

export const LightRays: React.FC<LightRaysProps> = ({
  opacity = 0.3,
  intensity = 1,
  angle = -25,
  animated = true,
  color = "#FFF5D6",
}) => {
  const frame = useCurrentFrame();

  const drift = animated
    ? Math.sin(frame * 0.015) * 45
    : 0;

  const breathe = animated
    ? 0.88 + Math.sin(frame * 0.03) * 0.12
    : 1;

  const pulse = animated
    ? 1 + Math.sin(frame * 0.02) * 0.04
    : 1;

  const rays = [
    {
      style: LightRaysStyles.ray1,
      x: drift,
      opacityMultiplier: 1,
    },
    {
      style: LightRaysStyles.ray2,
      x: drift * 0.65,
      opacityMultiplier: 0.8,
    },
    {
      style: LightRaysStyles.ray3,
      x: drift * 0.35,
      opacityMultiplier: 0.6,
    },
  ];

  return (
    <div style={LightRaysStyles.container}>
      {rays.map((ray, index) => (
        <div
          key={index}
          style={{
            ...ray.style,

            transform: `
              translateX(${ray.x}px)
              rotate(${angle}deg)
              scale(${pulse})
            `,

            opacity:
              opacity *
              intensity *
              breathe *
              ray.opacityMultiplier,

            background: `linear-gradient(
              to bottom,
              ${color},
              rgba(255,255,255,0)
            )`,
          }}
        />
      ))}
    </div>
  );
};