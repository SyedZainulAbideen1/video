import React from "react";

import { TVTheme } from "../../theme/theme";

export const MapCalloutCardStyles: {
  container: React.CSSProperties;

  country: React.CSSProperties;

  divider: React.CSSProperties;

  location: React.CSSProperties;

  coordinates: React.CSSProperties;
} = {
  container: {
    width: "100%",

    height: "100%",

    display: "flex",

    flexDirection: "column",

    justifyContent: "center",

    alignItems: "center",

    textAlign: "center",

    padding: "50px",

    boxSizing: "border-box",
  },

  country: {
    color: "#8FAFD7",

    fontFamily: TVTheme.font.family,

    fontSize: 24,

    fontWeight: 600,

    letterSpacing: 8,

    textTransform: "uppercase",

    marginBottom: 18,
  },

  divider: {
    width: 140,

    height: 2,

    borderRadius: 999,

    background:
      "linear-gradient(90deg,#FFFFFF 0%,#9FC7FF 50%,#FFFFFF 100%)",

    marginBottom: 24,
  },

  location: {
    color: "#FFFFFF",

    fontFamily: TVTheme.font.family,

    fontSize: 60,

    fontWeight: 700,

    lineHeight: 1.2,

    letterSpacing: 1,

    maxWidth: 760,
  },

  coordinates: {
    color: "#B8C4D6",

    fontFamily: TVTheme.font.family,

    fontSize: 22,

    fontWeight: 400,

    letterSpacing: 2,

    marginTop: 24,
  },
};