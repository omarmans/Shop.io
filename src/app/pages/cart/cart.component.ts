import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  // counter
  quaninty = signal(0);
  increment() {
    this.quaninty.set(this.quaninty() + 1);
  }
  decrement() {
    this.quaninty.set(this.quaninty() - 1);
  }

  myCart = signal<any[]>([
    {
      name: 'Gradient Graphic T-shirt',
      size: 'Large',
      color: 'White',
      price: 145,
      img: 'imgs/also-like/image 8.png',
    },
    {
      name: 'Black Striped T-shirt',
      size: 'Medium',
      color: 'Black',
      price: 210,
      img: 'imgs/also-like/image 10.png',
    },
    {
      name: 'Polo with Contrast Trims',
      size: 'Small',
      color: 'Blue',
      price: 320,
      img: 'imgs/also-like/image 7.png',
    },
  ]);
}
