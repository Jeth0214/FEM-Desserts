import { Component, computed, effect, inject } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { ICartItem } from '../shared/models/cart.model';
import { CommonModule } from '@angular/common';
import { IDessert } from '../shared/models/dessert.model';

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
  totalPrice = this._cartService.totalPrice;
  cartCount = computed(() => this.cartItems().reduce((acc, item) => acc + item.quantity, 0));

  removeItem(item: IDessert): void {
    this._cartService.removeFromCart(item);
  }

}
