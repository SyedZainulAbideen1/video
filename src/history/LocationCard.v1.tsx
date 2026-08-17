// import React from "react";
// import {
//   AbsoluteFill,
//   interpolate,
//   spring,
//   useCurrentFrame,
//   useVideoConfig,
// } from "remotion";

// import { TVPanel } from "../TVPanel";
// import { LocationCardProps } from "./LocationCard.types";
// import { LocationCardStyles } from "./LocationCard.styles";

// import { Motion } from "../../motion/timings";
// import { Sequence } from "../../motion/sequence";

// export const LocationCard: React.FC<LocationCardProps> = ({
//   country,
//   state,
//   location,
//   latitude,
//   longitude,
// }) => {
//   const frame = useCurrentFrame();
//   const { fps } = useVideoConfig();

//   // ==========================================================
//   // PANEL
//   // ==========================================================

//   const panelSpring = spring({
//     frame,
//     fps,
//     config: Motion.spring,
//   });

//   const panelX = interpolate(
//     panelSpring,
//     [0, 1],
//     [Motion.panelOffsetX, 0]
//   );

//   const panelScale = interpolate(
//     panelSpring,
//     [0, 1],
//     [Motion.panelStartScale, Motion.panelEndScale]
//   );

//   const panelOpacity = interpolate(
//     panelSpring,
//     [0, 1],
//     [0, 1]
//   );

//   // ==========================================================
//   // COUNTRY
//   // ==========================================================

//   const countrySpring = spring({
//     frame: frame - Sequence.country,
//     fps,
//     config: Motion.spring,
//   });

//   // ==========================================================
//   // STATE
//   // ==========================================================

//   const stateSpring = spring({
//     frame: frame - Sequence.state,
//     fps,
//     config: Motion.spring,
//   });

//   // ==========================================================
//   // DIVIDER
//   // ==========================================================

//   const dividerSpring = spring({
//     frame: frame - Sequence.divider,
//     fps,
//     config: Motion.spring,
//   });

//   // ==========================================================
//   // LOCATION
//   // ==========================================================

//   const locationSpring = spring({
//     frame: frame - Sequence.location,
//     fps,
//     config: Motion.spring,
//   });

//   // ==========================================================
//   // COORDINATES
//   // ==========================================================

//   const coordinateSpring = spring({
//     frame: frame - Sequence.coordinates,
//     fps,
//     config: Motion.spring,
//   });

//   return (
//     <AbsoluteFill
//       style={{
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           transform: `translateX(${panelX}px) scale(${panelScale})`,
//           opacity: panelOpacity,
//         }}
//       >
//         <TVPanel
//           width={LocationCardStyles.panel.width}
//           height={LocationCardStyles.panel.height}
//         >
//           <div
//             style={{
//               width: "100%",
//               height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               padding: 50,
//               boxSizing: "border-box",
//             }}
//           >
//             {/* COUNTRY */}

//             <div
//               style={{
//                 ...LocationCardStyles.country,
//                 opacity: countrySpring,
//                 transform: `translateY(${interpolate(
//                   countrySpring,
//                   [0, 1],
//                   [Motion.textOffsetY, 0]
//                 )}px)`,
//               }}
//             >
//               {country}
//             </div>

//             {/* STATE */}

//             <div
//               style={{
//                 ...LocationCardStyles.state,
//                 opacity: stateSpring,
//                 transform: `translateY(${interpolate(
//                   stateSpring,
//                   [0, 1],
//                   [Motion.textOffsetY, 0]
//                 )}px)`,
//               }}
//             >
//               {state}
//             </div>

//             {/* DIVIDER */}

//             <div
//               style={{
//                 ...LocationCardStyles.divider,
//                 transformOrigin: "left center",
//                 transform: `scaleX(${interpolate(
//                   dividerSpring,
//                   [0, 1],
//                   [Motion.dividerScale, Motion.dividerFinalScale]
//                 )})`,
//               }}
//             />

//             {/* LOCATION */}

//             <div
//               style={{
//                 ...LocationCardStyles.location,
//                 opacity: locationSpring,
//                 transform: `translateY(${interpolate(
//                   locationSpring,
//                   [0, 1],
//                   [Motion.locationOffsetY, 0]
//                 )}px)`,
//               }}
//             >
//               {location}
//             </div>

//             {/* COORDINATES */}

//             <div
//               style={{
//                 ...LocationCardStyles.coordinates,
//                 opacity: coordinateSpring,
//                 transform: `translateY(${interpolate(
//                   coordinateSpring,
//                   [0, 1],
//                   [Motion.coordinateOffsetY, 0]
//                 )}px)`,
//               }}
//             >
//               {latitude} • {longitude}
//             </div>
//           </div>
//         </TVPanel>
//       </div>
//     </AbsoluteFill>
//   );
// };