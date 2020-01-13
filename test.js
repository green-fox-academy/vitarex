var Car = /** @class */ (function () {
    function Car(initalKm) {
        this.km = initalKm;
        this.carType = 'lada';
    }
    Car.prototype.ride = function (km) {
        this.km += km;
    };
    return Car;
}());
var tragacs = { km: 4 };
