import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  user = {
    username: '',
    password: '',
    email: '',
    phone: '',
    address: ''
  };
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  signup(): void {
    this.userService.signup(
      this.user.username,
      this.user.password,
      this.user.email,
      this.user.phone,
      this.user.address
    ).subscribe(
      (response) => {
        this.successMessage = 'User registered successfully!';
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Error registering user.';
        this.successMessage = '';
      }
    );
  }

  login(): void {
    this.userService.login(this.user.email, this.user.password).subscribe(
      (response) => {
        if (response.success) {
          this.successMessage = 'Login successful!';
          this.errorMessage = '';
        } else {
          this.errorMessage = 'Invalid credentials.';
          this.successMessage = '';
        }
      },
      (error) => {
        this.errorMessage = 'Error logging in.';
        this.successMessage = '';
      }
    );
  }

  updateUser(): void {
    this.userService.updateUser(this.user.username, this.user.email, this.user.password).subscribe(
      (response) => {
        this.successMessage = 'User updated successfully!';
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Error updating user.';
        this.successMessage = '';
      }
    );
  }

  deleteUser(): void {
    this.userService.deleteUser(this.user.email).subscribe(
      (response) => {
        this.successMessage = 'User deleted successfully!';
        this.errorMessage = '';
      },
      (error) => {
        this.errorMessage = 'Error deleting user.';
        this.successMessage = '';
      }
    );
  }
}
