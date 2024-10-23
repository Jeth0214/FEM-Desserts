import { Component, effect, inject } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { ICartItem } from '../shared/models/cart.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dessert-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dessert-cart.component.html',
  styleUrl: './dessert-cart.component.scss'
})
export class DessertCartComponent {

  _cartService = inject(CartService);
  cartItems = this._cartService.cartItems;
  pageTitle = effect(() => `Your Cart ${this.cartItems.length}`);

  constructor() {console.log(this.cartItems())}
}
