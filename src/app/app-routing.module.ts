import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';  


const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'restaurant/:id', component: RestaurantDetailsComponent },  // New route for restaurant details
  { path: 'search', component: SearchFormComponent },  // Route for SearchFormComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
