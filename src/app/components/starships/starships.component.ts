import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { TuiPaginationModule } from '@taiga-ui/kit';
import { computedAsync } from 'ngxtension/computed-async';
import { StarshipsService } from '../../services/starships.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [CommonModule, TuiPaginationModule, ProductCardComponent],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss',
})
export class StarshipsComponent {
  starshipsService = inject(StarshipsService);

  elementsPerPage = 10;
  total = computed(() =>
    Math.ceil(this.starshipsService.totalStarships ?? 36 / this.elementsPerPage)
  );

  page = signal(0);

  starships = computedAsync(
    () => {
      const skip = this.page() * this.elementsPerPage;
      const limit = this.elementsPerPage;
      console.log(skip, limit);
      return this.starshipsService
        .getStarships(skip, limit)
        .pipe(startWith([]));
    },
    { requireSync: true }
  );

  goToPage(page: number) {
    this.page.set(page);

    // throw new Error('Method not implemented.');
  }
}
