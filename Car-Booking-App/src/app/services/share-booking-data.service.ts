import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Booking } from "../models/booking";

@Injectable({
    providedIn: 'root'
  })
  export class ShareBookingDataService {
  
    private bookingInfo = new BehaviorSubject<Booking | null>(null);
  
    booking = this.bookingInfo.asObservable();
  
    updateBooking(booking: Booking) {
      this.bookingInfo.next(booking);
    }
  }