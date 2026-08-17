import { TVTheme } from "../../theme/theme";

export const LocationCardStyles = {
  panel: {
    width: 900,
    height: 420,
  },

  country: {
    color: "rgba(255,255,255,0.72)",

    fontSize: 20,

    fontWeight: 600,

    letterSpacing: 7,

    textTransform: "uppercase" as const,
  },

  state: {
    color: "#FFFFFF",

    fontSize: 40,

    fontWeight: 700,

    marginTop: 14,

    letterSpacing: 1.2,

    lineHeight: 1.1,

    textTransform: "uppercase" as const,
  },

  location: {
    color: "#FFFFFF",

    fontSize: 64,

    fontWeight: 700,

    marginTop: 16,

    letterSpacing: -0.5,

    lineHeight: 1.05,

    textShadow: "0 2px 12px rgba(0,0,0,0.30)",
  },

  coordinates: {
    color: "rgba(220,220,220,0.72)",

    fontSize: 22,

    fontWeight: 500,

    marginTop: 30,

    letterSpacing: 2.5,

    lineHeight: 1.3,
  },

  divider: {
    width: 140,

    height: 2,

    backgroundColor: TVTheme.colors.primary,

    marginTop: 28,

    marginBottom: 16,

    opacity: 0.9,
  },
};