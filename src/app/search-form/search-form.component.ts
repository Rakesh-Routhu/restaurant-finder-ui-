import { Component, EventEmitter, Output } from '@angular/core';
import { MapsService } from '../maps.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.less']
})
export class SearchFormComponent {
  location: string = '';
  radius: number = 1000;
  searchCompleted: boolean = false;
  restaurants: any[] = [];
  isGeolocationAvailable: boolean = false; // New property to track geolocation support

  @Output() locationSubmit: EventEmitter<string> = new EventEmitter<string>();

  constructor(private mapService: MapsService) {
    // Check if geolocation is available
    this.isGeolocationAvailable = 'geolocation' in navigator;
  }

  onSubmit() {
    this.searchCompleted = true; // Mark search as completed
    console.log("Submitting location and radius...");

    // Fetch the nearby restaurants using the service
    this.mapService.findNearbyRestaurants(this.location, this.radius).subscribe({
      next: (response) => {
        this.restaurants = response.restaurants || [];
      },
      error: (error) => {
        console.error('Error fetching restaurants:', error);
      }
    });
  }

  clearSearch() {
    this.locationSubmit.emit(''); // Emit an empty string to clear the search
    this.location = ''; // Clear the input
    this.radius = 1000; // Reset the radius
    this.searchCompleted = false; // Reset search completed status
  }

  // New method to get current location
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          // You can use a reverse geocoding service to convert lat, lng to city name
          // For now, we'll just set the location field to the coordinates
          this.location = `${lat},${lng}`;

          // Optionally, you can trigger the search immediately after fetching the location
          this.onSubmit();
        },
        (error) => {
          console.error('Error fetching geolocation', error);
          alert('Unable to fetch your location. Please try again.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }
}
