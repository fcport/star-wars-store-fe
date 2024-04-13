import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { FAKE_APP_ID, FAKE_MASTER_KEY } from '../components/constants/keys';
import { Result } from '../models/response.model';
import { Vehicle } from '../models/vehicles.model';
import { Starship } from '../models/starship.model';

@Injectable({
  providedIn: 'root',
})
export class StarshipsService {
  httpClient = inject(HttpClient);
  constructor() {}

  starshipHome = toSignal(this.getStarships());

  getStarships(skip: number = 0, limit: number = 10) {
    return this.httpClient
      .get<Result<Starship>>(
        `https://parseapi.back4app.com/classes/Starship?count=${skip}&limit=${limit}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Parse-Application-Id': FAKE_APP_ID,
            'X-Parse-Master-Key': FAKE_MASTER_KEY,
          },
        }
      )
      .pipe(map((r) => r.results));
  }

  getStarshipById(id: string, skip: number = 0, limit: number = 10) {
    const where = encodeURIComponent(
      JSON.stringify({
        objectId: id,
      })
    );

    return this.httpClient.get<Result<Starship>>(
      `https://parseapi.back4app.com/classes/Starship?count=${skip}&limit=${limit}where=${where}`
    );
  }
}
