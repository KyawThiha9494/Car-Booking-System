import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { Car } from "../models/car";

@Injectable({
    providedIn: 'root'
})

export class CarService {
    private apiUrl = environment.apiUrl;
  
    constructor(private http: HttpClient) {}
  
    getCars(): Observable<Car[]> {
        const url = `${this.apiUrl}Cars`;
        console.log("Get Cars - url" + url);
        return this.http.get<Car[]>(url);
    }
  }  