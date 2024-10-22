import { Component, EventEmitter, Input, Output} from '@angular/core';
import { IDessert } from '../shared/models/dessert.model';
import { CommonModule } from '@angular/common';

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
  @Output() removeDesserts = new EventEmitter();

  quantity: number = 0;

  onAddToCart(dessert: IDessert) {
    this.quantity++;
    this.addedDesserts.emit(dessert);
  }

  onRemoveFromCart(dessert: IDessert) {
    this.quantity--;
    this.removeDesserts.emit(dessert);
   }
  
}
