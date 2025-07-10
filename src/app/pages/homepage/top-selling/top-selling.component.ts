import { Component, signal } from '@angular/core';
import {
  DynamicProudctsComponent,
  data,
} from '../../../shared/dynamic-proudcts/dynamic-proudcts.component';

@Component({
  selector: 'app-top-selling',
  imports: [DynamicProudctsComponent],
  templateUrl: './top-selling.component.html',
  styleUrl: './top-selling.component.scss',
})
export class TopSellingComponent {
  header = signal('Top SELLING');
  topSelling = signal<data[]>([
    {
      id: 1,
      name: 'VERTICAL STRIPED SHIRT',
      rate: 5.0,
      price: 212,
      img: 'imgs/top-selling/Frame1.svg',
      mainPrice: 232,
      discountPricePrecntge: -20,
    },
    {
      id: 2,
      name: 'COURAGE GRAPHIC T-SHIRT',
      rate: 4,
      price: 240,
      img: 'imgs/top-selling/Frame2.svg',
    },
    {
      id: 3,
      name: 'LOOSE FIT BERMUDA SHORTS',
      rate: 3,
      price: 80,
      img: 'imgs/top-selling/Frame3.svg',
    },
    {
      id: 4,
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,
      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      id: 5,
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,
      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      id: 6,
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,
      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      id: 7,
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,
      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      id: 8,
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,
      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      id: 9,
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,
      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      id: 10,
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,
      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      id: 11,
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,
      img: 'imgs/top-selling/Frame4.svg',
    },
    {
      id: 12,
      name: 'FADED SKINNY JEANS',
      rate: 4.5,
      price: 210,
      img: 'imgs/top-selling/Frame4.svg',
    },
  ]);
}
