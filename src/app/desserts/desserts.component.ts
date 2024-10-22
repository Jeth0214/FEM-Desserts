import { Component, inject } from '@angular/core';
import { DessertsListComponent } from '../desserts-list/desserts-list.component';
import { IDessert } from '../shared/models/dessert.model';
import { DessertsService } from '../shared/services/desserts.service';
import { DessertCartComponent } from '../dessert-cart/dessert-cart.component';

@Component({
  selector: 'app-desserts',
  standalone: true,
  imports: [DessertsListComponent, DessertCartComponent],
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.scss'
})
export class DessertsComponent {
  desserts: IDessert[] = [];
  _dessertsService: DessertsService = inject(DessertsService);

  constructor() {
    this._dessertsService.getDesserts().subscribe(desserts => this.desserts = desserts);
  }
}
