import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import { Motion } from "./timings";

interface ExitOptions {
  startFrame: number;
}

export const useExit = ({ startFrame }: ExitOptions) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const progress = spring({
    frame: frame - startFrame,
    fps,
    config: Motion.spring,
    durationInFrames: Motion.exitDuration,
  });

  return {
    progress,

    opacity: interpolate(
      progress,
      [0, 1],
      [1, Motion.exitOpacity]
    ),

    translateX: interpolate(
      progress,
      [0, 1],
      [0, Motion.exitOffsetX]
    ),

    scale: interpolate(
      progress,
      [0, 1],
      [1, Motion.exitScale]
    ),
  };
};