'use strict';

function createCar(initialKm) {
  return {
    km: initialKm,
    ride: function (km) {
      this.km += km;
    }
  };
}

let volvo = createCar(4000);

volvo.ride(100);
console.log(volvo);

/*
let ride = volvo.ride;
console.log(ride);
ride(200);
console.log(volvo);
console.log(km);
*/

function Car(initialKm) {
  this.km = initialKm;
  this.ride = function(km) { this.km += km; }
}

let tesla = new Car(0);
console.log(tesla);

function Car2(initialKm) {
  this.km = initialKm;
}

Car2.prototype.ride = function(km) { this.km += km; }

let lada = new Car2(1_000_000);
lada.ride(500);
console.log(lada);

class Car3 {
  km = 0;
  constructor(initialKm) {
    this.km = initialKm;
  }

  ride(km) {
    this.km += km;
  }
}

console.log(Car3);
// Car(30);
//
const add = (a, b) => a + b;
// console.log(new add(2, 3));
//

class Ember {
  hello = () => console.log('csa');
}

// function Ember() {
//   this.hello = () => console.log('csa');
// }

class Volvo extends Car2 {
  isSafe = true;

  static kecske = 5;

  constructor() {
    super(500);
  }

  ride(km) {
    super.ride(km);
    console.log('WOOHOO I HAVE A VOLVO');
  }
}

let v = new Volvo();
v.ride(100);
console.log(v);

console.log(Volvo.kecske);
