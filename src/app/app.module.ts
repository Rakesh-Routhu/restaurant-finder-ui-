import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component'; // Import the AppRoutingModule


@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
    UserComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule, // Include HttpClientModule here
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
