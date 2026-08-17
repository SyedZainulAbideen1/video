import { Motion } from "./timings";

/**
 * ============================================================
 * TerraVault Motion Sequence Engine
 * Cinematic Timing v2.0
 * ============================================================
 */

export const Sequence = {
  // Panel
  panel: 0,

  // Text Reveal
  country: 10,

  state: 22,

  divider: 36,

  location: 50,

  coordinates: 66,



  // Hold
  hold: Motion.holdDuration,

  // Exit
  exit: Motion.holdDuration + Motion.exitDuration,
};