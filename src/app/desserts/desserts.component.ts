import { Component } from '@angular/core';
import { DessertsListComponent } from '../desserts-list/desserts-list.component';
import { DessertsCheckoutComponent } from '../desserts-checkout/desserts-checkout.component';

@Component({
  selector: 'app-desserts',
  standalone: true,
  imports: [DessertsListComponent, DessertsCheckoutComponent],
  templateUrl: './desserts.component.html',
  styleUrl: './desserts.component.scss'
})
export class DessertsComponent {

}
