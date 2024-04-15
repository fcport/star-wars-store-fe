import { Result } from './../models/response.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Vehicle } from '../models/vehicles.model';
import { FAKE_APP_ID, FAKE_MASTER_KEY } from '../components/constants/keys';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  httpClient = inject(HttpClient);
  constructor() {}

  vehiclesHome = toSignal(this.getVehicles());
  totalVehicles: number | null = null;

  getVehicles(skip: number = 0, limit: number = 10) {
    return this.httpClient
      .get<Result<Vehicle>>(
        `https://parseapi.back4app.com/classes/Vehicle?skip=${skip}&limit=${limit}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Parse-Application-Id': FAKE_APP_ID,
            'X-Parse-Master-Key': FAKE_MASTER_KEY,
          },
        }
      )
      .pipe(
        tap((res) => {
          if (!this.totalVehicles) this.totalVehicles = res.count;
        }),
        map((r) => {
          return r.results;
        })
      );
  }

  getVehicleById(id: string, skip: number = 0, limit: number = 1) {
    const where = encodeURIComponent(
      JSON.stringify({
        objectId: id,
      })
    );

    return this.httpClient.get<Result<Vehicle>>(
      `https://parseapi.back4app.com/classes/Vehicle?skip=${skip}&limit=${limit}where=${where}`
    );
  }
}
