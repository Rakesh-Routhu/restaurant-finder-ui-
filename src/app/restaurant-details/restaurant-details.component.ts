import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // For getting route params
import { MapsService } from '../maps.service';    // Service to fetch restaurant details

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  styleUrls: ['./restaurant-details.component.less']
})
export class RestaurantDetailsComponent implements OnInit {  // Ensure this class is exported
  restaurantId: number | undefined;
  restaurantDetails: any;  // Holds restaurant details
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private mapsService: MapsService) {}

  ngOnInit(): void {
    // Get the restaurant ID from the route params
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      this.restaurantId = +idParam;  // Convert to number if 'id' is present
      this.fetchRestaurantDetails(this.restaurantId);
    } else {
      this.errorMessage = 'Restaurant ID not found in the URL.';
      console.error('Restaurant ID is missing from the URL.');
    }
  }

  // Fetch restaurant details based on ID
  fetchRestaurantDetails(id: number): void {
    this.mapsService.getRestaurantDetails(id).subscribe(
      (data) => {
        this.restaurantDetails = data;  // Populate restaurant details
      },
      (error) => {
        console.error('Error fetching restaurant details:', error);
        this.errorMessage = 'Error fetching restaurant details.';
      }
    );
  }
}
