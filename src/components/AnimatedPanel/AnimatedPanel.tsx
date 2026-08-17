import React, { ReactNode } from "react";
import { AbsoluteFill, interpolate } from "remotion";
import { useMotion } from "../../motion/useMotion";
import { useExit } from "../../motion/useExit";
import { Motion } from "../../motion/timings";
import { Sequence } from "../../motion/sequence";

interface AnimatedPanelProps {
  children: ReactNode;

  width?: number;
  height?: number;
}

export const AnimatedPanel: React.FC<AnimatedPanelProps> = ({
  children,
  width,
  height,
}) => {
  const enter = useMotion({
    offsetX: Motion.panelOffsetX,
    offsetY: Motion.panelOffsetY,
    startScale: Motion.panelStartScale,
    endScale: Motion.panelEndScale,
  });

  const exit = useExit({
    startFrame: Sequence.exit,
  });

  const opacity = enter.opacity * exit.opacity;

  const translateX = enter.translateX + exit.translateX;
  const translateY = enter.translateY;

  const scale = interpolate(exit.progress, [0, 1], [enter.scale, exit.scale]);

  // Soft cinematic overshoot
  const finalScale = interpolate(
    enter.progress,
    [0, 0.85, 1],
    [Motion.panelStartScale, 1.015, scale],
  );

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width,
          height,

          opacity,

          transform: `
            translate3d(
              ${translateX}px,
              ${translateY}px,
              0
            )
            scale(${finalScale})
          `,

          willChange: "transform, opacity",

          transformOrigin: "center center",

          backfaceVisibility: "hidden",
        }}
      >
        {children}
      </div>
    </AbsoluteFill>
  );
};
