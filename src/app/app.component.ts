import { Component } from '@angular/core';
import { MapsService } from './maps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  restaurants: any[] = [];
  location: string = ''; // Default location is empty
  radius: number = 1000; // Example radius
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
    this.location = newLocation; // Update the location from the form
    this.fetchRestaurants(); // Fetch restaurants for the new location
  }
}
