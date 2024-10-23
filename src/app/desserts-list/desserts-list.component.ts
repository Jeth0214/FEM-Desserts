import { Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { IDessert } from '../shared/models/dessert.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../shared/services/cart.service';

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

  // Dependency Injection
  _cartService = inject(CartService);

  quantity: number = 0;

  onAddToCart(dessert: IDessert) {
    this.quantity++;
    this._cartService.addToCart(dessert)
  }

  onUpdateQuantity(dessert: IDessert, action: string) {
    action === 'add' ? this.quantity++ : this.quantity--;
    this._cartService.updateCartItem(dessert, this.quantity)
   }
  
}
