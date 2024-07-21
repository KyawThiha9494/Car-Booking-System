import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Booking } from "../models/booking";
import { Injectable } from "@angular/core";
import { environment } from "../environment";

@Injectable({
    providedIn: 'root'
})

export class BookingService {
    private apiUrl = environment.apiUrl;
  
    constructor(private http: HttpClient) {}
  
    createBooking(booking: Booking): Observable<Booking> {
      const url = `${this.apiUrl}Bookings`; 
      console.log("URL--------",url);
      return this.http.post<Booking>(url, booking); 
    }
  
    getBooking(id: number): Observable<Booking> {
      return this.http.get<Booking>(`${this.apiUrl}/${id}`);
    }
  }  