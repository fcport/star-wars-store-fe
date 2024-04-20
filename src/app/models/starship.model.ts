import { Films, Pilots } from './relations.model';

export interface Starship {
  cargoCapacity: number;
  consumables: string;
  costInCredits: number;
  createdAt: string;
  crew: number;
  films: Films;
  hyperdriveRating: number;
  length: number;
  manufacturer: string;
  maxAtmospheringSpeed: any;
  MGLT: number;
  model: string;
  name: string;
  objectId: string;
  passengers: number;
  pilots: Pilots;
  starshipClass: string;
  updatedAt: string;
}
