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

  @Output() locationSubmit: EventEmitter<string> = new EventEmitter<string>();
  constructor(private mapService: MapsService) {}  
  onSubmit() {
    // this.locationSubmit.emit(this.location); // Emit the location when the form is submitted
    // this.locationSubmit.emit(this.radius.toString());
    this.searchCompleted = true; // Mark search as completed
    console.log("rakesh evebt emitted")
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
}
