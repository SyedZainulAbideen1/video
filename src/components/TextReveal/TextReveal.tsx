import React from "react";

import { useMotion } from "../../motion/useMotion";

import { TextRevealProps } from "./TextReveal.types";
import { TextRevealStyles } from "./TextReveal.styles";

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  delay = 0,
  style,
  offsetY = 12,
}) => {
  const motion = useMotion({
    delay,
    offsetY,
    startScale: 0.985,
    endScale: 1,
  });

  return (
    <div
      style={{
        ...TextRevealStyles.container,
        ...style,

        opacity: motion.opacity,

        transform: `
          translateY(${motion.translateY}px)
          scale(${motion.scale})
        `,

        willChange: "transform, opacity",

        transformOrigin: "center center",

        backfaceVisibility: "hidden",
      }}
    >
      {text}
    </div>
  );
};