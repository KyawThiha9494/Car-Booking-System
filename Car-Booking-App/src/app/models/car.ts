export class Car {
    constructor(
        public id?: number,
        public model: string = '',
        public pricePerDay: number = 0,
        public imageUrl?: string,
        public vehicleNo: string = '',
        public specifications: string = ''
      ) {}
  
  }