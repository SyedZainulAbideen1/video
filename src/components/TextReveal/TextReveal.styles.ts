import React from "react";

export const TextRevealStyles: {
  container: React.CSSProperties;
} = {
  container: {
    width: "100%",

    willChange: "transform, opacity",

    backfaceVisibility: "hidden",

    transformOrigin: "left center",
  },
};