import React from "react";

import { useCurrentFrame } from "remotion";

import { LightRaysProps } from "./LightRays.types";
import { LightRaysStyles } from "./LightRays.styles";
import { LightRaysAnimations } from "./LightRays.animations";

export const LightRays: React.FC<LightRaysProps> = ({
  opacity = 0.3,
  intensity = 1,
  angle = LightRaysAnimations.angle.default,
  animated = true,
  color = LightRaysAnimations.color.temperature,
}) => {
  const frame = useCurrentFrame();

  const {
    rays,
    drift: driftConfig,
    breathing,
    pulse,
  } = LightRaysAnimations;

  const drift =
    animated && driftConfig.enabled
      ? Math.sin(
          frame * driftConfig.speed
        ) * driftConfig.distance
      : 0;

  const breathe =
    animated && breathing.enabled
      ? 1 -
        breathing.intensity +
        Math.sin(
          frame * breathing.speed
        ) * breathing.intensity
      : 1;

  const pulseValue =
    animated && pulse.enabled
      ? 1 +
        Math.sin(
          frame * pulse.speed
        ) * pulse.intensity
      : 1;

  const rayData = [
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
    <div
      style={LightRaysStyles.container}
    >
      {rayData
        .slice(0, rays.count)
        .map((ray, index) => (
          <div
            key={index}
            style={{
              ...ray.style,

              transform: `
                translateX(${ray.x}px)
                rotate(${angle}deg)
                scale(${pulseValue})
              `,

              opacity:
                opacity *
                intensity *
                rays.intensity *
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