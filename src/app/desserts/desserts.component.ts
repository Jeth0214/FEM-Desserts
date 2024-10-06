import { Component, inject } from '@angular/core';
import { DessertsListComponent } from '../desserts-list/desserts-list.component';
import { DessertsCheckoutComponent } from '../desserts-checkout/desserts-checkout.component';
import { IDessert } from '../shared/models/dessert.model';
import { DessertsService } from '../shared/services/desserts.service';

@Component({
  selector: 'app-desserts',
  standalone: true,
  imports: [DessertsListComponent, DessertsCheckoutComponent],
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.scss'
})
export class DessertsComponent {
  desserts: IDessert[] = [];
  _dessertsService: DessertsService = inject(DessertsService);

  constructor() {
    this._dessertsService.getDesserts().subscribe(desserts => this.desserts = desserts);
    console.log(this.desserts);
  }
}
