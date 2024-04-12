import { Pilots, Films } from './relations.model';

export interface Vehicle {
  objectId: string;
  consumables: string;
  name: string;
  cargoCapacity: number;
  passengers: number;
  maxAtmospheringSpeed: any;
  crew: number;
  length: number;
  model: string;
  costInCredits: number;
  manufacturer: string;
  MGLT: number;
  starshipClass: string;
  hyperdriveRating: number;
  createdAt: string;
  updatedAt: string;
  pilots: Pilots;
  films: Films;
}
