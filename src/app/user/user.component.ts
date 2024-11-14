import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
})
export class UserComponent {
  constructor(private userService: UserService, private http: HttpClient, private router: Router) {}

  // Separate objects for Signup and Login forms
  signupUser = {
    username: '',
    password: '',
    email: '',
    phone: '',
    address: '',
  };

  loginUser = {
    email: '',
    username: '',
    password: '',
  };

  isLoggedIn: boolean = false;
  showForm: string = 'signup'; // Default form is signup
  signupSuccessMessage: string = '';
  signupErrorMessage: string = '';
  loginSuccessMessage: string = '';
  loginErrorMessage: string = '';

  /**
   * Signup method
   */
  signup() {
    if (!this.signupUser.username || !this.signupUser.password || !this.signupUser.email) {
      this.signupErrorMessage = 'Please fill out all required fields.';
      this.signupSuccessMessage = '';
      return;
    }

    this.userService
      .signup(
        this.signupUser.username,
        this.signupUser.password,
        this.signupUser.email,
        this.signupUser.phone,
        this.signupUser.address
      )
      .subscribe({
        next: (response) => {
          console.log('Signup successful:', response);
          this.signupSuccessMessage = 'Signup successful!';
          this.signupErrorMessage = '';
          this.resetSignupForm();
        },
        error: (error) => {
          console.error('Signup failed:', error);
          this.signupErrorMessage = 'Signup failed. Please try again.';
          this.signupSuccessMessage = '';
        },
      });
  }

  /**
   * Login method
   */
  login() {
    if (!this.loginUser.email || !this.loginUser.password) {
      this.loginErrorMessage = 'Please enter your email and password.';
      this.loginSuccessMessage = '';
      return;
    }

    this.userService.login(this.loginUser.email, this.loginUser.password).subscribe({
      next: (response) => {
        console.log('Login successful:', response);
        this.loginSuccessMessage = 'Login successful!';
        this.loginErrorMessage = '';
        this.isLoggedIn = true;
        this.resetLoginForm();
        this.router.navigate(['search']);
      },
      error: (error) => {
        console.error('Login failed:', error);
        this.loginErrorMessage = 'Login failed. Please check your credentials.';
        this.loginSuccessMessage = '';
      },
    });
  }

  /**
   * Forgot password method
   */
  forgotPassword() {
    console.log('Forgot password clicked');
    this.loginErrorMessage = 'Password reset functionality is under development.';
  }

  /**
   * Reset the signup form fields
   */
  resetSignupForm() {
    this.signupUser = {
      username: '',
      password: '',
      email: '',
      phone: '',
      address: '',
    };
  }

  /**
   * Reset the login form fields
   */
  resetLoginForm() {
    this.loginUser = {
      email: '',
      username: '',
      password: '',
    };
  }
}
