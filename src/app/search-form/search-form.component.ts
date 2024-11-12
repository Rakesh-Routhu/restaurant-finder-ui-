import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.less']
})
export class SearchFormComponent {
  location: string = '';
  radius: string = '';
  searchCompleted: boolean = false;

  @Output() locationSubmit: EventEmitter<string> = new EventEmitter<string>();

  onSubmit() {
    this.locationSubmit.emit(this.location); // Emit the location when the form is submitted
    this.locationSubmit.emit(this.radius);
    this.searchCompleted = true; // Mark search as completed
  }

  clearSearch() {
    this.locationSubmit.emit(''); // Emit an empty string to clear the search
    this.location = ''; // Clear the input
    this.radius = '';
    this.searchCompleted = false; // Reset search completed status
  }
}
