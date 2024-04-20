import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import {
  TuiButtonModule,
  TuiSvgModule,
  TuiModeModule,
  TuiHintModule,
} from '@taiga-ui/core';
import { TuiTabsModule } from '@taiga-ui/kit';
import { CurrencyCreditsPipe } from '../../common/pipes/currency-credits.pipe';
import { computedAsync } from 'ngxtension/computed-async';
import { injectParams } from 'ngxtension/inject-params';
import { StarshipsService } from '../../services/starships.service';

@Component({
  selector: 'app-starship-detail',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyCreditsPipe,
    TuiButtonModule,
    TuiTabsModule,
    TuiSvgModule,
    TuiModeModule,
    TuiHintModule,
  ],
  templateUrl: './starship-detail.component.html',
  styleUrl: './starship-detail.component.scss',
})
export class StarshipDetailComponent {
  idParam = injectParams('id');
  starshipService = inject(StarshipsService);

  starship = computedAsync(() => {
    return this.starshipService.getStarshipById(this.idParam() ?? '');
  });

  contentToDisplay = signal<string>('consumables');
  content = computed<string>(() => {
    const cont = Object.entries(this.starship()!)
      .filter(([key]) => key === this.contentToDisplay())
      .flat();

    return cont[1] ?? 'No data provided';
  });

  onClick(prop: string) {
    this.contentToDisplay.set(prop);
  }
}
