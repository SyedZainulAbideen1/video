import React from "react";

import { useMotion } from "../../motion/useMotion";

interface ScaleProps {
  children: React.ReactNode;

  delay?: number;

  startScale?: number;

  endScale?: number;
}

export const Scale: React.FC<ScaleProps> = ({
  children,
  delay = 0,
  startScale = 0.9,
  endScale = 1,
}) => {
  const motion = useMotion({
    delay,
    startScale,
    endScale,
  });

  return (
    <div
      style={{
        opacity: motion.opacity,

        transform: `scale(${motion.scale})`,
      }}
    >
      {children}
    </div>
  );
};