import React from "react";

export const CinematicEffectsProviderStyles: {
  container: React.CSSProperties;

  content: React.CSSProperties;

  atmosphereLayer: React.CSSProperties;

  lightingLayer: React.CSSProperties;

  postProcessingLayer: React.CSSProperties;

  overlayLayer: React.CSSProperties;
} = {
  container: {
    position: "relative",

    width: "100%",

    height: "100%",

    overflow: "hidden",

    isolation: "isolate",

    backgroundColor: "#000",

    willChange: "transform",
  },

  content: {
    position: "relative",

    width: "100%",

    height: "100%",

    zIndex: 1,

    willChange: "transform, opacity",
  },

  atmosphereLayer: {
    position: "absolute",

    inset: 0,

    pointerEvents: "none",

    zIndex: 10,

    willChange: "opacity, transform",
  },

  lightingLayer: {
    position: "absolute",

    inset: 0,

    pointerEvents: "none",

    zIndex: 20,

    willChange: "opacity, transform",
  },

  postProcessingLayer: {
    position: "absolute",

    inset: 0,

    pointerEvents: "none",

    zIndex: 30,

    willChange: "opacity, filter",
  },

  overlayLayer: {
    position: "absolute",

    inset: 0,

    pointerEvents: "none",

    zIndex: 40,

    willChange: "opacity",
  },
};