import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class ShareCarDataService {

  private reservedCar = new BehaviorSubject<Car | null>(null);

  currentCar = this.reservedCar.asObservable();

  changeCar(car: Car) {
    this.reservedCar.next(car);
  }
}
