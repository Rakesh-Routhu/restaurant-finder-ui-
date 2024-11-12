import { Component } from '@angular/core';
import { MapsService } from './maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  router: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  restaurants: any[] = [];
  location: string = ''; // Default location is empty
  radius: number = 5000; // Example radius
  searchMade: boolean = false; // Tracks if a search has been performed

  constructor(private mapsService: MapsService) {}

  fetchRestaurants() {
    if (this.location) {
      this.mapsService.findNearbyRestaurants(this.location, this.radius).subscribe(
        (data) => {
          this.restaurants = data.restaurants || []; // Adjust based on your backend response structure
          this.searchMade = true; // Mark that a search has been made
          console.log(this.restaurants); // Debugging: check the fetched data
        },
        (error) => {
          console.error('Error fetching restaurants:', error);
        }
      );
    } else {
      console.log('Location is not set yet.');
    }
  }

  updateLocation(newLocation: string) {
    if (newLocation === '') this.restaurants = []
    this.location = newLocation; // Update the location from the form
    this.fetchRestaurants(); // Fetch restaurants for the new location
  }

  // Navigate to the restaurant details page
  viewRestaurantDetails(restaurantId: number) {
    this.router.navigate(['/restaurant', restaurantId]);
  }
}
