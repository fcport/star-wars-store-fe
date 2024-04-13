import { Pilots, Films } from './relations.model';

export interface Vehicle {
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
