import React from "react";

import {
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { AtmosphericFogProps } from "./AtmosphericFog.types";
import { AtmosphericFogStyles } from "./AtmosphericFog.styles";
import { AtmosphericFogAnimations } from "./AtmosphericFog.animations";

export const AtmosphericFog: React.FC<AtmosphericFogProps> = ({
  opacity = 0.25,
  speed = 1,
  blur = 120,
}) => {
  const frame = useCurrentFrame();

  const { width, height, durationInFrames } =
    useVideoConfig();

  const {
    layer1,
    layer2,
    layer3,
    breathing,
    global,
  } = AtmosphericFogAnimations;

  const loopFrame = global.loop
    ? frame % durationInFrames
    : frame;

  const density = global.density;

  const progress1 =
    (loopFrame * speed * layer1.speed) /
    durationInFrames;

  const progress2 =
    (loopFrame * speed * layer2.speed) /
    durationInFrames;

  const progress3 =
    (loopFrame * speed * layer3.speed) /
    durationInFrames;

  const x1 = interpolate(
    progress1,
    [0, 1],
    [-layer1.amplitudeX, width]
  );

  const x2 = interpolate(
    progress2,
    [0, 1],
    [width * 0.15, width + layer2.amplitudeX]
  );

  const x3 = interpolate(
    progress3,
    [0, 1],
    [-layer3.amplitudeX * 0.75, width * 0.9]
  );

  const y1 =
    Math.sin(frame * 0.01) *
    layer1.amplitudeY;

  const y2 =
    Math.cos(frame * 0.008) *
    layer2.amplitudeY;

  const y3 =
    Math.sin(frame * 0.014) *
    layer3.amplitudeY;

  const breathe = breathing.enabled
    ? 1 -
      breathing.intensity +
      Math.sin(
        frame * breathing.speed
      ) *
        breathing.intensity
    : 1;

  return (
    <div
      style={
        AtmosphericFogStyles.container
      }
    >
      <div
        style={{
          ...AtmosphericFogStyles.layer1,

          left: x1,

          top:
            height * 0.18 +
            y1,

          opacity:
            opacity *
            layer1.opacity *
            density *
            breathe,

          filter: `blur(${Math.max(
            0,
            blur + layer1.blur - 120
          )}px)`,
        }}
      />

      <div
        style={{
          ...AtmosphericFogStyles.layer2,

          left: x2,

          top:
            height * 0.42 +
            y2,

          opacity:
            opacity *
            layer2.opacity *
            density *
            breathe,

          filter: `blur(${Math.max(
            0,
            blur + layer2.blur - 120
          )}px)`,
        }}
      />

      <div
        style={{
          ...AtmosphericFogStyles.layer3,

          left: x3,

          top:
            height * 0.68 +
            y3,

          opacity:
            opacity *
            layer3.opacity *
            density *
            breathe,

          filter: `blur(${Math.max(
            0,
            blur + layer3.blur - 120
          )}px)`,
        }}
      />
    </div>
  );
};