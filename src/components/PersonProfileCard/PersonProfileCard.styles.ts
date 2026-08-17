import React from "react";

import { TVTheme } from "../../theme/theme";

export const PersonProfileCardStyles: {
  container: React.CSSProperties;

  name: React.CSSProperties;

  divider: React.CSSProperties;

  role: React.CSSProperties;

  age: React.CSSProperties;

  location: React.CSSProperties;
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

  name: {
    color: "#FFFFFF",

    fontFamily: TVTheme.font.family,

    fontSize: 68,

    fontWeight: 800,

    letterSpacing: 2,

    textTransform: "uppercase",

    lineHeight: 1.15,

    maxWidth: 1100,

    textShadow:
      "0 5px 20px rgba(0,0,0,.35)",

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

    marginBottom: 34,
  },

  role: {
    color: "#A9CBF2",

    fontFamily: TVTheme.font.family,

    fontSize: 34,

    fontWeight: 700,

    letterSpacing: 3,

    textTransform: "uppercase",

    marginBottom: 28,
  },

  age: {
    color: "#FFFFFF",

    fontFamily: TVTheme.font.family,

    fontSize: 28,

    fontWeight: 500,

    letterSpacing: 0.5,

    marginBottom: 16,
  },

  location: {
    color: "#C7D2E3",

    fontFamily: TVTheme.font.family,

    fontSize: 24,

    fontWeight: 400,

    letterSpacing: 2,

    opacity: 0.9,
  },
};