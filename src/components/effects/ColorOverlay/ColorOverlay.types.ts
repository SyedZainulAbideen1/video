export interface ColorOverlayProps {
  color?: string;

  opacity?: number;

  blendMode?: React.CSSProperties["mixBlendMode"];

  animated?: boolean;
}