import React from "react";

import { useMotion } from "../../motion/useMotion";

interface FadeProps {
  children: React.ReactNode;

  delay?: number;
}

export const Fade: React.FC<FadeProps> = ({
  children,
  delay = 0,
}) => {
  const motion = useMotion({
    delay,
  });

  return (
    <div
      style={{
        opacity: motion.opacity,
      }}
    >
      {children}
    </div>
  );
};