import { Component, Input } from '@angular/core';
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
  @Input() desserts: IDessert[] = []; 
}
