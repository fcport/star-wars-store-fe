import { Films, Pilots } from './relations.model';

export interface Starship {
  objectId: string;
  name: string;
  cargoCapacity: number;
  passengers: number;
  maxAtmospheringSpeed: number;
  crew: number;
  length: number;
  model: string;
  manufacturer: string;
  vehicleClass: string;
  createdAt: string;
  updatedAt: string;
  pilots: Pilots;
  films: Films;
  costInCredits?: number;
}
