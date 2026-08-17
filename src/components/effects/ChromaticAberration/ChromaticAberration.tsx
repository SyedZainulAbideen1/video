import React from "react";

import { useCurrentFrame } from "remotion";

import { ChromaticAberrationProps } from "./ChromaticAberration.types";
import { ChromaticAberrationStyles } from "./ChromaticAberration.styles";

export const ChromaticAberration: React.FC<
  ChromaticAberrationProps
> = ({
  intensity = 2,
  opacity = 0.15,
  animated = true,
}) => {
  const frame = useCurrentFrame();

  const offset = animated
    ? Math.sin(frame * 0.04) * intensity
    : intensity;

  const pulse = animated
    ? 0.95 + Math.sin(frame * 0.025) * 0.05
    : 1;

  return (
    <div style={ChromaticAberrationStyles.container}>
      {/* Red Channel */}
      <div
        style={{
          ...ChromaticAberrationStyles.redChannel,

          transform: `translateX(${-offset}px)`,

          background: "rgba(255,0,0,1)",

          opacity: opacity * pulse,
        }}
      />

      {/* Green Channel */}
      <div
        style={{
          ...ChromaticAberrationStyles.greenChannel,

          background: "rgba(0,255,0,0.5)",

          opacity: opacity * 0.4 * pulse,
        }}
      />

      {/* Blue Channel */}
      <div
        style={{
          ...ChromaticAberrationStyles.blueChannel,

          transform: `translateX(${offset}px)`,

          background: "rgba(0,120,255,1)",

          opacity: opacity * pulse,
        }}
      />
    </div>
  );
};