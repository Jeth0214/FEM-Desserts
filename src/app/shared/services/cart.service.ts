import { computed, Injectable, signal } from '@angular/core';
import { ICart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Cart Items siganl
  cartItems = signal<ICart[]>([]);

  totalPrice = computed(() => this.cartItems().reduce(
    (total, item) => total + item.subtotal, 0
  ))

  // add item to the cart
  // if item is already in cart , add quantity to item
  
}