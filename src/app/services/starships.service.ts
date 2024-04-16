import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { FAKE_APP_ID, FAKE_MASTER_KEY } from '../components/constants/keys';
import { Result } from '../models/response.model';
import { Starship } from '../models/starship.model';

@Injectable({
  providedIn: 'root',
})
export class StarshipsService {
  httpClient = inject(HttpClient);
  constructor() {}

  starshipHome = toSignal(this.getStarships());
  totalStarships: number | null = null;

  getStarships(skip: number = 0, limit: number = 10) {
    return this.httpClient
      .get<Result<Starship>>(
        `https://parseapi.back4app.com/classes/Starship?skip=${skip}&limit=${limit}`,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Parse-Application-Id': FAKE_APP_ID,
            'X-Parse-Master-Key': FAKE_MASTER_KEY,
          },
        }
      )
      .pipe(
        tap((result) => {
          if (!!this.totalStarships) this.totalStarships = result.count;
        }),
        map((r) => r.results)
      );
  }

  getStarshipById(id: string) {
    return this.httpClient.get<Starship>(
      `https://parseapi.back4app.com/classes/Starship/${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Parse-Application-Id': FAKE_APP_ID,
          'X-Parse-Master-Key': FAKE_MASTER_KEY,
        },
      }
    );
  }
}
