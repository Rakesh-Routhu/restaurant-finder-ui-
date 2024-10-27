import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.less']
})
export class RestaurantListComponent {
  @Input() restaurants: any[] = []; // Initialize as an empty array

  constructor() {}
}
