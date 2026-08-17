import React from "react";

import { TVTheme } from "../../theme/theme";

export const FactCardStyles: {
  container: React.CSSProperties;

  title: React.CSSProperties;

  divider: React.CSSProperties;

  fact: React.CSSProperties;

  source: React.CSSProperties;
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

  title: {
    color: "#A9CBF2",

    fontFamily: TVTheme.font.family,

    fontSize: 28,

    fontWeight: 800,

    letterSpacing: 12,

    textTransform: "uppercase",

    textShadow:
      "0 2px 10px rgba(0,0,0,.30)",

    marginBottom: 26,
  },

  divider: {
    width: 200,

    height: 3,

    borderRadius: 999,

    background:
      "linear-gradient(90deg, transparent 0%, #FFFFFF 50%, transparent 100%)",

    boxShadow:
      "0 0 18px rgba(255,255,255,.18)",

    marginBottom: 38,
  },

  fact: {
    color: "#FFFFFF",

    fontFamily: TVTheme.font.family,

    fontSize: 52,

    fontWeight: 700,

    lineHeight: 1.45,

    letterSpacing: 0.5,

    maxWidth: 1100,

    textShadow:
      "0 5px 20px rgba(0,0,0,.35)",
  },

  source: {
    color: "#C7D2E3",

    fontFamily: TVTheme.font.family,

    fontSize: 22,

    fontWeight: 500,

    letterSpacing: 3,

    textTransform: "uppercase",

    opacity: 0.9,

    marginTop: 36,
  },
};