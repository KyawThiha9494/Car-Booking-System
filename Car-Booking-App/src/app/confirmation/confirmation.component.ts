import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../models/booking';
import { Car } from '../models/car';
import { ShareBookingDataService } from '../services/share-booking-data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {

  booking: Booking | null = null;
  car: Car | null = null;
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private shareBookingService: ShareBookingDataService
  ) { }

  ngOnInit(): void {
    /*this.car = new Car(
      1,
      'Toyota Camry',
      100,
      '../assets/image/2024_Honda_Civic.jpg',
      'ABC1234',
      'Automatic, 4 Doors'
    );

    this.booking = new Booking(
      1,
      'B123456',
      'John Doe',
      this.car.id,
      300,
      new Date('2023-07-19'),
      new Date('2023-07-21'),
      this.car
    );*/
    this.shareBookingService.booking.subscribe(booking => {
      this.booking = booking;
    });

  }

  Finish(){
    this.router.navigate(['']);
  }
}
