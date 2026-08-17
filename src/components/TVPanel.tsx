import React from "react";

import { TVTheme } from "../theme/theme";

import { Glow } from "./Glow/Glow";
import { LightSweep } from "./LightSweep/LightSweep";
import { Noise } from "./Noise/Noise";

type TVPanelProps = {
  children: React.ReactNode;

  width?: number;

  height?: number;
};

export const TVPanel: React.FC<TVPanelProps> = ({
  children,
  width = 900,
  height = 220,
}) => {
  return (
    <div
      style={{
        position: "relative",

        width,
        height,

        overflow: "hidden",

        borderRadius: TVTheme.radius.md,

        border: "1px solid rgba(255,255,255,0.14)",

        background: `
          linear-gradient(
            180deg,
            rgba(20,24,30,.62) 0%,
            rgba(10,12,18,.56) 55%,
            rgba(6,8,12,.62) 100%
          )
        `,

        backdropFilter: "blur(24px)",

        WebkitBackdropFilter: "blur(24px)",

        boxShadow: `
          0 30px 80px rgba(0,0,0,.50),
          0 8px 24px rgba(0,0,0,.30),
          inset 0 1px 0 rgba(255,255,255,.08),
          inset 0 -1px 0 rgba(255,255,255,.03)
        `,

        padding: TVTheme.spacing.lg,

        display: "flex",

        alignItems: "center",

        color: TVTheme.colors.primary,

        fontFamily: TVTheme.font.family,

        isolation: "isolate",
      }}
    >
      {/* Ambient Glow */}
      <Glow opacity={0.16} />

      {/* Moving Reflection */}
      <LightSweep
        opacity={0.08}
        duration={320}
      />

      {/* Surface Texture */}
      <Noise opacity={0.06} />

      {/* Top Glass Highlight */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,.22), transparent)",
          opacity: 0.9,
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      {/* Bottom Edge Shadow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: "rgba(0,0,0,.35)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      {/* Left Edge Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          width: 1,
          background:
            "linear-gradient(180deg, transparent, rgba(255,255,255,.12), transparent)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      {/* Right Edge Fade */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          width: 1,
          background: "rgba(255,255,255,.05)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",

          width: "100%",

          height: "100%",

          zIndex: 10,
        }}
      >
        {children}
      </div>
    </div>
  );
};