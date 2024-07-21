import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { Router } from '@angular/router';
import { ShareCarDataService } from '../services/share-car-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Booking } from '../models/booking';
import { BookingService } from '../services/booking-service';
import { ShareBookingDataService } from '../services/share-booking-data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  car: Car | null = null;
  bookingForm: FormGroup;
  rentalRate: number = 0;
  
  constructor(private router: Router,
    private shareCarDataService : ShareCarDataService,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private shareBookingService: ShareBookingDataService
  ) 
  {
    console.log("Inside of Booking Constructor!");
    const today = new Date().toISOString().split('T')[0]; 
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowFormatted = tomorrow.toISOString().split('T')[0];
    this.bookingForm = this.fb.group({
      startDate: [today, Validators.required],
      endDate: [tomorrowFormatted, Validators.required]
    }, { validators: this.dateRangeValidator });
  }

  ngOnInit(): void {
    this.shareCarDataService.currentCar.subscribe(car => {
      this.car = car;
    });
    console.log("this is the passing data of Car : ", this.car);

    this.bookingForm.valueChanges.subscribe(() => {
      this.calculateRentalRate();
    });
    this.rentalRate = this.car?.pricePerDay || 0;
  }

  calculateRentalRate() {
    const startDate = new Date(this.bookingForm.get('startDate')?.value);
    const endDate = new Date(this.bookingForm.get('endDate')?.value);

    if (startDate && endDate && startDate <= endDate && this.car) {
      const timeDiff = endDate.getTime() - startDate.getTime();
      const dayDiff = timeDiff / (1000 * 3600 * 24); 
      this.rentalRate = dayDiff * this.car.pricePerDay;
    } else {
      this.rentalRate = 0;
    }
  }

  dateRangeValidator(form: FormGroup) {
    const startDate = form.get('startDate')?.value;
    const endDate = form.get('endDate')?.value;

    return startDate && endDate && startDate < endDate ? null : { dateRangeInvalid: true };
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const booking = new Booking(
        0, 
        '', 
        'Thiha', 
        this.car?.id || 0, 
        this.rentalRate, 
        new Date(this.bookingForm.get('startDate')?.value), 
        new Date(this.bookingForm.get('endDate')?.value), 
        this.car ?? undefined
      );
      console.log("Inside OnSubmit!");

      this.bookingService.createBooking(booking).subscribe({
        next: (createdBooking: Booking) => {
          console.log('Booking created successfully:', createdBooking);
          alert('Booking Successfully Submitted!');
          this.shareBookingService.updateBooking(createdBooking);
          this.router.navigate(['/confirmation']);
        },
        error: (error: any) => {
          console.error('Error creating booking:', error);
          alert('Error Submitting Booking. Redirecting to the Home Page!');
          this.router.navigate(['']);
        }
      });

      
    }
  }
}
