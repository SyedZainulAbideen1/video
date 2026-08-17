import React from "react";
import { interpolate } from "remotion";

import { DividerStyles } from "./Divider.styles";
import { DividerProps } from "./Divider.types";

import { useMotion } from "../../motion/useMotion";
import { Motion } from "../../motion/timings";
import { Sequence } from "../../motion/sequence";

export const Divider: React.FC<DividerProps> = ({
  width = 100,
  height = 2,
}) => {
  const motion = useMotion({
    delay: Sequence.divider,
  });

  return (
    <div
      style={{
        ...DividerStyles.divider,
        width,
        height,

        opacity: motion.opacity,

        transformOrigin: "left center",

        transform: `
          scaleX(${interpolate(
            motion.progress,
            [0, 1],
            [
              Motion.dividerScale,
              Motion.dividerFinalScale,
            ]
          )})
        `,
      }}
    />
  );
};