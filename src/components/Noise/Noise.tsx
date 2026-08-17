import React from "react";

import { NoiseStyles } from "./Noise.styles";
import { NoiseProps } from "./Noise.types";

export const Noise: React.FC<NoiseProps> = ({
  opacity = 0.18,
}) => {
  return (
    <div
      style={{
        ...NoiseStyles.noise,

        opacity,
      }}
    />
  );
};