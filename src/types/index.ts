export type AsteroidType = {
  id: number;
  name: string;
  size: number;
  isDangerous: boolean;
  date?: string;
  distanceInKm?: number;
  distanceToMoons?: number;
};

export enum DistanceType {
  KILOMETERS = "KILOMETERS",
  TO_MOON = "TO_MOON",
}

export type CloseApproach = {
  speed: number;
  fullDate: string;
  distanceInKm: number;
  orbitingBody: string;
};
