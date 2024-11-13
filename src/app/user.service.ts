// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// This is a mock implementation for user-related actions
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080'; // Example URL for your backend API

  constructor(private http: HttpClient) {}

  signup(username: string, password: string, email: string, phone?: string, address?: string): Observable<any> {
    const userData = { username, password, email, phone, address };
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  updateUser(username: string, email: string, password?: string): Observable<any> {
    const updatedData = { username, password };
    return this.http.put(`${this.apiUrl}/update/${email}`, updatedData);
  }

  deleteUser(email: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${email}`);
  }
}
