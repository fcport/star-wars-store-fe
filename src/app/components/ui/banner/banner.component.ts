import { Component } from '@angular/core';
import { TuiHintModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiIconModule } from '@taiga-ui/experimental';
import { CurrencyCreditsPipe } from '../../../common/pipes/currency-credits.pipe';

@Component({
  selector: 'app-banner',
  standalone: true,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
  imports: [CurrencyCreditsPipe, TuiHintModule, TuiIconModule, TuiSvgModule],
})
export class BannerComponent {}
