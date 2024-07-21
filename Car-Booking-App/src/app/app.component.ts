import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'car-booking-app';

  login() {
    console.log('Login button clicked');
  }

  logout() {
    console.log('Logout button clicked');
  }
}
