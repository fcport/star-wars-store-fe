import { Pilots, Films } from './relations.model';

export interface Vehicle {
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
