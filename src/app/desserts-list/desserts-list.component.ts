import { Component, EventEmitter, inject, effect,Input, Output, computed} from '@angular/core';
import { IDessert } from '../shared/models/dessert.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../shared/services/cart.service';
import { ICartItem } from '../shared/models/cart.model';

@Component({
  selector: 'app-desserts-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desserts-list.component.html',
  styleUrl: './desserts-list.component.scss'
})
export class DessertsListComponent {
  @Input() dessert: IDessert | undefined;
  @Output() addedDesserts = new EventEmitter();
  quantity: number = 0;

  // Dependency Injection
  _cartService = inject(CartService);
  cartItems = this._cartService.cartItems;

  checkIfDessertIsOnCartItem = effect(() => {
    const hasItem = this.cartItems().some(item => item.dessert.name === this.dessert?.name);
    if (!hasItem) {
      this.quantity = 0;
    }
  })


  onAddToCart(dessert: IDessert) {
    this.quantity++;
    this._cartService.addToCart(dessert)
  }

  onUpdateQuantity(dessert: IDessert, action: string) {
    action === 'add' ? this.quantity++ : this.quantity--;
    this._cartService.updateCartItem(dessert, this.quantity);
   }
  
}
