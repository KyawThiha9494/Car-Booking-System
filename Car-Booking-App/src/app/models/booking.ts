import { Car } from "./car";

export class Booking {
    constructor(
      public id?: number,
      public bookingNo?: string,
      public customerName?: string,
      public carId?: number,
      public rentalRate?: number,
      public startDate?: Date,
      public endDate?: Date,
      public car: Car = new Car
    ) {}
  }