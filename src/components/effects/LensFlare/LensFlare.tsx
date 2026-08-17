import React from "react";
import { useCurrentFrame } from "remotion";

import { LensFlareProps } from "./LensFlare.types";
import { LensFlareStyles } from "./LensFlare.styles";

export const LensFlare: React.FC<LensFlareProps> = ({
  opacity = 0.22,
  size = 1,
  duration = 300,
  angle = 0,
}) => {
  const frame = useCurrentFrame();

  const progress = (frame % duration) / duration;

  const sweep = progress * 1800 - 300;

  const pulse =
    1 + Math.sin(frame * 0.025) * 0.08;

  return (
    <div style={LensFlareStyles.container}>
      <div
        style={{
          ...LensFlareStyles.glow,

          left: sweep,

          top: 120,

          opacity: opacity * pulse,

          transform: `
            translate(-50%, -50%)
            scale(${size * pulse})
            rotate(${angle}deg)
          `,
        }}
      />

      <div
        style={{
          ...LensFlareStyles.streak,

          left: sweep - 180,

          top: 120,

          opacity: opacity * 2,

          transform: `rotate(${angle}deg) scale(${size})`,
        }}
      />
    </div>
  );
};