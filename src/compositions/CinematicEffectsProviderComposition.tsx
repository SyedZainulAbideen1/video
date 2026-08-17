import React from "react";

import { AbsoluteFill } from "remotion";

import { CinematicEffectsProvider } from "../components/effects/CinematicEffectsProvider/CinematicEffectsProvider";

export const CinematicEffectsProviderComposition: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(180deg, #0B1020 0%, #111827 55%, #1F2937 100%)",
      }}
    >
      <CinematicEffectsProvider
    preset="documentary"

      >
        <div
          style={{
            width: "100%",

            height: "100%",

            display: "flex",

            flexDirection: "column",

            justifyContent: "center",

            alignItems: "center",

            textAlign: "center",

            color: "#FFFFFF",

            fontFamily: "Arial, sans-serif",
          }}
        >
          <div
            style={{
              fontSize: 36,

              letterSpacing: 8,

              opacity: 0.85,

              marginBottom: 16,
            }}
          >
            TERRAVAULT
          </div>

          <div
            style={{
              fontSize: 128,

              fontWeight: 800,

              lineHeight: 1,

              marginBottom: 20,
            }}
          >
            DOCUMENTARY
          </div>

          <div
            style={{
              width: 280,

              height: 2,

              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)",

              marginBottom: 20,
            }}
          />

          <div
            style={{
              fontSize: 28,

              letterSpacing: 4,

              opacity: 0.8,
            }}
          >
            CINEMATIC EFFECTS ENGINE
          </div>

          <div
            style={{
              marginTop: 50,

              fontSize: 24,

              opacity: 0.7,

              letterSpacing: 3,
            }}
          >
            PRESET : DOCUMENTARY
          </div>
        </div>
      </CinematicEffectsProvider>
    </AbsoluteFill>
  );
};