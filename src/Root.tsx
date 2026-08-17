import "./index.css";
import { Composition } from "remotion";

import { LocationCardComposition } from "./compositions/LocationCardComposition";
import { ChapterTitleComposition } from "./compositions/ChapterTitleComposition";
import { LowerThirdComposition } from "./compositions/LowerThirdComposition";
import { QuoteCardComposition } from "./compositions/QuoteCardComposition";
import { StatisticsCardComposition } from "./compositions/StatisticsCardComposition";
import { TimelineCardComposition } from "./compositions/TimelineCardComposition";
import { FactCardComposition } from "./compositions/FactCardComposition";
import { MapCalloutCardComposition } from "./compositions/MapCalloutCardComposition";
import { PersonProfileCardComposition } from "./compositions/PersonProfileCardComposition";
import { EventCardComposition } from "./compositions/EventCardComposition";
import { ComparisonCardComposition } from "./compositions/ComparisonCardComposition";
import { MemorialCardComposition } from "./compositions/MemorialCardComposition";
import { CreditsCardComposition } from "./compositions/CreditsCardComposition";
import { LensFlareComposition } from "./compositions/LensFlareComposition";
import { AtmosphericFogComposition } from "./compositions/AtmosphericFogComposition";
import { DustParticlesComposition } from "./compositions/DustParticlesComposition";
import { FilmGrainComposition } from "./compositions/FilmGrainComposition";
import { ChromaticAberrationComposition } from "./compositions/ChromaticAberrationComposition";
import { LightRaysComposition } from "./compositions/LightRaysComposition";
import { VignetteComposition } from "./compositions/VignetteComposition";
import { BloomComposition } from "./compositions/BloomComposition";
import { ColorOverlayComposition } from "./compositions/ColorOverlayComposition";
import { CinematicEffectsProviderComposition } from "./compositions/CinematicEffectsProviderComposition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LocationCard"
        component={LocationCardComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="LowerThird"
        component={LowerThirdComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="ChapterTitle"
        component={ChapterTitleComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />

      <Composition
        id="QuoteCard"
        component={QuoteCardComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="StatisticsCard"
        component={StatisticsCardComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TimelineCard"
        component={TimelineCardComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FactCard"
        component={FactCardComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="MapCalloutCard"
        component={MapCalloutCardComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="PersonProfileCard"
        component={PersonProfileCardComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="EventCard"
        component={EventCardComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ComparisonCard"
        component={ComparisonCardComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="MemorialCard"
        component={MemorialCardComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="CreditsCard"
        component={CreditsCardComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="LensFlare"
        component={LensFlareComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="AtmosphericFog"
        component={AtmosphericFogComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DustParticles"
        component={DustParticlesComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FilmGrain"
        component={FilmGrainComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ChromaticAberration"
        component={ChromaticAberrationComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="LightRays"
        component={LightRaysComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Vignette"
        component={VignetteComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="Bloom"
        component={BloomComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="ColorOverlay"
        component={ColorOverlayComposition}
        durationInFrames={180}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="CinematicEffectsProvider"
        component={CinematicEffectsProviderComposition}
        durationInFrames={240}
        fps={30}
        width={1920}
        height={1080}
      />
    </>

  );
};