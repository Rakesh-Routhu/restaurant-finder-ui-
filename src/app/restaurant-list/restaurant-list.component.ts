import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.less']
})
export class RestaurantListComponent {
  @Input() restaurants: any[] = []; // Initialize as an empty array

  
  constructor(private router: Router) {}

  // Method to navigate to the restaurant details page
  fetchRestaurantDetails(id: string): void {
    this.router.navigate(['/restaurant', id]); // Navigate to /restaurant/:id
  }


  
}
