import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.less']
})
export class SearchFormComponent {
  location: string = '';

  @Output() locationSubmit: EventEmitter<string> = new EventEmitter<string>();

  onSubmit() {
    this.locationSubmit.emit(this.location); // Emit the location when the form is submitted
  }
}
