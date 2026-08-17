import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { Motion } from "./timings";

interface MotionOptions {
  delay?: number;
  offsetY?: number;
  offsetX?: number;
  startScale?: number;
  endScale?: number;
}

export const useMotion = ({
  delay = 0,
  offsetY = 0,
  offsetX = 0,
  startScale = 1,
  endScale = 1,
}: MotionOptions = {}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - delay,
    fps,
    config: Motion.spring,
  });

  return {
    progress,

    opacity: interpolate(progress, [0, 1], [0, 1]),

    translateX: interpolate(
      progress,
      [0, 1],
      [offsetX, 0]
    ),

    translateY: interpolate(
      progress,
      [0, 1],
      [offsetY, 0]
    ),

    scale: interpolate(
      progress,
      [0, 1],
      [startScale, endScale]
    ),
  };
};