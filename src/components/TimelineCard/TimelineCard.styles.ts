import React from "react";

import { TVTheme } from "../../theme/theme";

export const TimelineCardStyles: {
  container: React.CSSProperties;

  year: React.CSSProperties;

  line: React.CSSProperties;

  title: React.CSSProperties;

  description: React.CSSProperties;
} = {
  container: {
    width: "100%",

    height: "100%",

    display: "flex",

    flexDirection: "column",

    justifyContent: "center",

    alignItems: "center",

    textAlign: "center",

    padding: "80px 120px",

    boxSizing: "border-box",
  },

  year: {
    color: "#A9CBF2",

    fontFamily: TVTheme.font.family,

    fontSize: 34,

    fontWeight: 800,

    letterSpacing: 12,

    textTransform: "uppercase",

    marginBottom: 26,

    textShadow:
      "0 2px 12px rgba(0,0,0,.30)",
  },

  line: {
    width: 180,

    height: 3,

    borderRadius: 999,

    background:
      "linear-gradient(90deg, transparent 0%, #FFFFFF 50%, transparent 100%)",

    marginBottom: 38,

    boxShadow:
      "0 0 18px rgba(255,255,255,.18)",
  },

  title: {
    color: "#FFFFFF",

    fontFamily: TVTheme.font.family,

    fontSize: 64,

    fontWeight: 800,

    lineHeight: 1.2,

    letterSpacing: 1,

    maxWidth: 1100,

    textShadow:
      "0 5px 22px rgba(0,0,0,.35)",
  },

  description: {
    color: "#C7D2E3",

    fontFamily: TVTheme.font.family,

    fontSize: 28,

    fontWeight: 400,

    lineHeight: 1.7,

    letterSpacing: 0.8,

    marginTop: 30,

    maxWidth: 900,
  },
};