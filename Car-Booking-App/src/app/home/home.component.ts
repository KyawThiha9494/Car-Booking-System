import { Component, OnInit } from '@angular/core';
import { Car } from '../models/car';
import { Router } from '@angular/router';
import { ShareCarDataService } from '../services/share-car-data.service';
import { CarService } from '../services/car-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  cars: Car[] = [];
  errorMessage: string = '';

  constructor(
    private carService: CarService,
    private router: Router,
    private shareCarDataService: ShareCarDataService
  ) {}

  reservedCar: Car | null = null;

    /*cars: Car[] = [
      new Car(1, 'Toyota Corolla', 30, '../assets/image/2024_Toyota_Corolla.jpg'),
      new Car(2, 'Honda Civic', 35, '../assets/image/2024_Honda_Civic.jpg'),
      new Car(3, 'Ford Focus', 28, '../assets/image/2024_Ford_Focus.jpg'),
      new Car(4, 'Chevrolet Malibu', 40, '../assets/image/2024_Chevrolet Malibu.jpg'),
      new Car(5, 'Nissan Altima', 33, '../assets/image/2024_Nissan Altima.jpg'),
      new Car(6, 'Hyundai Elantra', 29, '../assets/image/2024_Hyundai Elantra.jpg')
    ];*/

    ngOnInit(): void {
      this.loadCars();
    }

    loadCars(): void {
      this.carService.getCars().subscribe({
        next: (cars: Car[]) => {
          this.cars = cars;
          console.log("Return value : ",this.cars);
        },
        error: (error: any) => {
          console.error('Error fetching cars:', error);
          this.errorMessage = 'Error fetching cars. Please try again later.';
        }
      });
    }

  reserve(car: Car): void {
    //console.log("Before update the share car service", car);
    this.shareCarDataService.changeCar(car);
    //console.log("Updated share Car service.");
    this.router.navigate(['/booking']);
  }
}
