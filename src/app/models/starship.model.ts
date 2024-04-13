import { Films, Pilots } from './relations.model';

export interface Starship {
  cargoCapacity: number;
  costInCredits?: number;
  createdAt: string;
  crew: number;
  films: Films;
  length: number;
  manufacturer: string;
  maxAtmospheringSpeed: number;
  model: string;
  name: string;
  objectId: string;
  passengers: number;
  pilots: Pilots;
  updatedAt: string;
  vehicleClass: string;
}
