class Car {
  km: number;
  carType: CarType;

  constructor(initalKm) {
    this.km = initalKm;
    this.carType = 'lada';
  }

  ride(km) {
    this.km += km;
  }
}

type CarType = 'volvo' | 'tesla' | 'lada';
let tragacs: Partial<Car> = {km: 4};
