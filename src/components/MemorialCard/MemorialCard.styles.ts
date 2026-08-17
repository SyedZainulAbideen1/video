import React from "react";

import { TVTheme } from "../../theme/theme";

export const MemorialCardStyles: {
  container: React.CSSProperties;

  heading: React.CSSProperties;

  divider: React.CSSProperties;

  name: React.CSSProperties;

  years: React.CSSProperties;

  subtitle: React.CSSProperties;
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

    fontSize: 28,

    fontWeight: 700,

    letterSpacing: 12,

    textTransform: "uppercase",

    textShadow:
      "0 2px 10px rgba(0,0,0,.30)",

    marginBottom: 28,
  },

  divider: {
    width: 200,

    height: 3,

    borderRadius: 999,

    background:
      "linear-gradient(90deg, transparent 0%, #FFFFFF 50%, transparent 100%)",

    boxShadow:
      "0 0 18px rgba(255,255,255,.18)",

    marginBottom: 36,
  },

  name: {
    color: "#FFFFFF",

    fontFamily: TVTheme.font.family,

    fontSize: 72,

    fontWeight: 800,

    letterSpacing: 2,

    lineHeight: 1.15,

    maxWidth: 1100,

    textShadow:
      "0 5px 20px rgba(0,0,0,.35)",

    marginBottom: 24,
  },

  years: {
    color: "#D9E6F5",

    fontFamily: TVTheme.font.family,

    fontSize: 32,

    fontWeight: 600,

    letterSpacing: 4,

    marginBottom: 32,
  },

  subtitle: {
    color: "#C7D2E3",

    fontFamily: TVTheme.font.family,

    fontSize: 24,

    fontWeight: 400,

    fontStyle: "italic",

    letterSpacing: 2,

    lineHeight: 1.5,

    maxWidth: 900,

    opacity: 0.9,
  },
};