import { computed, Injectable, signal } from '@angular/core';
import { ICartItem } from '../models/cart.model';
import { IDessert } from '../models/dessert.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Cart Items signal
  cartItems = signal<ICartItem[]>([]);

  totalPrice = computed(() => this.cartItems().reduce(
    (total, item) => total + item.subtotal, 0
  ))

  // add item to the cart
  addToCart(dessert: IDessert):void {
      let newItem: ICartItem = {
      dessert: dessert,
      quantity: 1,
      subtotal: dessert.price
    }
    this.cartItems.update(items => [...items, newItem]);
   
  }

  // remove item from cart
  removeFromCart(cartItem: IDessert ): void {
    this.cartItems.update( items => items.filter( item => item.dessert.name !== cartItem.name))
  }

  // update item's  quantity
  updateCartItem(dessert: IDessert, quantity: number): void {
    if (!quantity) {
      this.removeFromCart(dessert)
    } else {
      let updatedItem: ICartItem = {
        dessert: dessert,
        quantity: quantity,
        subtotal: +quantity * dessert.price
      }
      this.cartItems.update(items => items.map(
        item => item.dessert.name === dessert.name ? updatedItem : item))
    }
  }
  
  // reset cart items

  resetCartItems(): void { 
    this.cartItems.update( items => []);
  }
  

}