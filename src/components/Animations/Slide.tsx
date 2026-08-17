import React from "react";

import { useMotion } from "../../motion/useMotion";

interface SlideProps {
  children: React.ReactNode;

  delay?: number;

  offsetX?: number;

  offsetY?: number;
}

export const Slide: React.FC<SlideProps> = ({
  children,
  delay = 0,
  offsetX = 0,
  offsetY = 20,
}) => {
  const motion = useMotion({
    delay,
    offsetX,
    offsetY,
  });

  return (
    <div
      style={{
        opacity: motion.opacity,

        transform: `
          translateX(${motion.translateX}px)
          translateY(${motion.translateY}px)
        `,
      }}
    >
      {children}
    </div>
  );
};