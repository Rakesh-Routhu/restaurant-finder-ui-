import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsService {
  private apiUrl = 'http://localhost:8080/maps';  // Your API endpoint

  constructor(private http: HttpClient) {}
  

  findNearbyRestaurants(location: string, radius: number = 5000, keyword: string = 'restaurant'): Observable<any> {
    return this.http.post(`${this.apiUrl}/nearby_restaurants`, { location, radius, keyword });
  }

  getLatLong(location: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/get_lat_long`, { location });
  }
  // Fetch restaurant details by ID
  getRestaurantDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/restaurant_details/${id}`);  // Assume the API endpoint for restaurant details is '/restaurants/{id}'
  }
}