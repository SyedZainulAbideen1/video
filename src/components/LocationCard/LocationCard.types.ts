export interface LocationCardProps {
  country: string;
  state: string;
  location: string;
  latitude: string;
  longitude: string;
}

export interface LocationCardAnimation {
  duration?: number;
  delay?: number;
}

export interface LocationCardTheme {
  showBorder?: boolean;
  showShadow?: boolean;
  showCoordinates?: boolean;
}