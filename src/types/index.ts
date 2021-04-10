export type AsteroidType = {
  id: number;
  name: string;
  date: string;
  distanceInKm: number;
  distanceToMoons: number;
  size: number;
  isDangerous: boolean;
};

export enum DistanceType {
  KILOMETERS = "KILOMETERS",
  TO_MOON = "TO_MOON",
}
