import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})


export class UserComponent {
  constructor(private userService: UserService, private http: HttpClient, private router: Router) {}

  user = {
    username: '',
    password: '',
    email: '',
    phone: '',
    address: ''
  };
  
  isLoggedIn: boolean = false
  showForm: string = 'signup';  // Default form is signup
  successMessage: string = '';
  errorMessage: string = '';

  signup() {
    // Handle signup logic
    this.userService.signup(this.user.username, this.user.password, this.user.email, this.user.phone, this.user.address).subscribe();
    console.log('Signup:', this.user);
    this.successMessage = 'Signup successful!';
    this.errorMessage = '';
  }

  login() {
    // Handle login logic
    this.userService.login(this.user.email, this.user.password).subscribe({
      next: (response) => {
        // On success: handle response, show success message, and navigate
        console.log('Login successful:', response);
        this.successMessage = 'Login successful!';
        this.errorMessage = '';
        this.router.navigate(['search']);  // Redirect to dashboard or desired page
      },
      error: (error) => {
        // On error: handle error response
        console.error('Login failed:', error);
        this.errorMessage = 'Login failed. Please check your credentials.';
        this.successMessage = '';
      }
    });
    console.log('Login:', this.user);
  }

  updateUser() {
    // Handle user update logic
    this.userService.updateUser(this.user.username, this.user.email, this.user.password).subscribe();
    console.log('Update User:', this.user);
  }

  deleteUser() {
    // Handle delete user logic
    this.userService.deleteUser(this.user.email).subscribe();
    console.log('Delete User:', this.user);
  }
}


