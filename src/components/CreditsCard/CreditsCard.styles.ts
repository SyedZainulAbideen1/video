import React from "react";

import { TVTheme } from "../../theme/theme";

export const CreditsCardStyles: {
  container: React.CSSProperties;

  heading: React.CSSProperties;

  divider: React.CSSProperties;

  list: React.CSSProperties;

  item: React.CSSProperties;
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

  heading: {
    color: "#A9CBF2",

    fontFamily: TVTheme.font.family,

    fontSize: 30,

    fontWeight: 700,

    letterSpacing: 12,

    textTransform: "uppercase",

    textShadow:
      "0 2px 10px rgba(0,0,0,.30)",

    marginBottom: 30,
  },

  divider: {
    width: 220,

    height: 3,

    borderRadius: 999,

    background:
      "linear-gradient(90deg, transparent 0%, #FFFFFF 50%, transparent 100%)",

    boxShadow:
      "0 0 18px rgba(255,255,255,.18)",

    marginBottom: 40,
  },

  list: {
    display: "flex",

    flexDirection: "column",

    alignItems: "center",

    gap: 24,

    width: "100%",
  },

  item: {
    color: "#FFFFFF",

    fontFamily: TVTheme.font.family,

    fontSize: 36,

    fontWeight: 600,

    letterSpacing: 0.8,

    lineHeight: 1.5,

    textShadow:
      "0 4px 18px rgba(0,0,0,.35)",
  },
};