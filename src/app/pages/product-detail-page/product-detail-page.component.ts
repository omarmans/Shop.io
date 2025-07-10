import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { data } from '../../shared/dynamic-proudcts/dynamic-proudcts.component';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-product-detail-page',
  imports: [
    RouterOutlet,
    NgFor,
    NgSwitchCase,
    NgSwitch,
    NgIf,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent implements OnInit {
  product?: data;
  // counter
  quaninty = signal(0);
  increment() {
    this.quaninty.set(this.quaninty() + 1);
  }
  decrement() {
    this.quaninty.set(this.quaninty() - 1);
  }
  imgs = signal([
    'imgs/product/frame1.png',
    'imgs/product/frame2.png',
    'imgs/product/52ce3b469d8d7ff6e33f95a574450e07218fc909.png',
  ]);
  //#########COLORS#################
  colors = signal(['#4F4631', '#314F4A', '#31344F']);
  selectedColor = signal<string | null>(null);
  selectColor = (color: string) => {
    this.selectedColor.set(color);
  };
  isSelected = (color: string) => {
    return computed(() => this.selectedColor() === color);
  };
  //#########COLORS#################

  sizes = signal(['Small', 'Medium', 'Large', 'X-large']);
  private route = inject(ActivatedRoute);
  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    // this.product = products.find(p => p.id === id);
  }
  getStars(rate: number): ('full' | 'half' | 'empty')[] {
    const full = Math.floor(rate);
    const half = rate % 1 >= 0.25 && rate % 1 < 0.75;
    const empty = 5 - full - (half ? 1 : 0);

    return [
      ...Array(full).fill('full'),
      ...(half ? ['half'] : []),
      ...Array(empty).fill('empty'),
    ];
  }
}
