import { Component, signal } from '@angular/core';
import {
  DynamicProudctsComponent,
  data,
} from '../../../shared/dynamic-proudcts/dynamic-proudcts.component';

@Component({
  selector: 'app-new-arrivals',
  imports: [DynamicProudctsComponent],
  templateUrl: './new-arrivals.component.html',
  styleUrl: './new-arrivals.component.scss',
})
export class NewArrivalsComponent {
  header = signal('New Arrivals');
  newArrivals = signal<data[]>([
    {
      id: 1,
      name: 'T-SHIRT WITH TAPE DETAILS',
      rate: 4.5,
      price: 120,
      img: 'imgs/new-arrivals/Frame1.svg',
      // discount: 0
    },
    {
      id: 2,
      name: 'COURAGE GRAPHIC T-SHIRT',
      rate: 4,
      price: 240,
      mainPrice: 260,
      img: 'imgs/new-arrivals/Frame2.svg',
      discount: 0,
      discountPricePrecntge: -20,
    },
    {
      id: 3,
      name: 'LOOSE FIT BERMUDA SHORTS',
      rate: 3,
      price: 180,
      img: 'imgs/new-arrivals/Frame3.svg',
      discount: 0,
    },
    {
      id: 4,
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 130,
      mainPrice: 160,
      img: 'imgs/new-arrivals/Frame4.svg',
      discountPricePrecntge: -30,
    },
  ]);
}
