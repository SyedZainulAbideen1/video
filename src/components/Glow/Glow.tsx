import React from "react";

import { GlowStyles } from "./Glow.styles";
import { GlowProps } from "./Glow.types";

export const Glow: React.FC<GlowProps> = ({
  opacity = 1,
}) => {
  return (
    <div
      style={{
        ...GlowStyles.glow,

        opacity,
      }}
    />
  );
};