"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
var Booking = /** @class */ (function () {
    function Booking(customer, bookingNumber) {
        this.customer = [];
        this.meals = [];
        this.bookingNumber = bookingNumber;
    }
    ;
    Booking.prototype.addPassenger = function (passenger) {
        this.customer.push(passenger);
    };
    ;
    Booking.prototype.addMeal = function (meal) {
        this.meals.push(meal);
    };
    Booking.prototype.getMeal = function () {
        var listAllMeal = [];
        for (var _i = 0, _a = this.meals; _i < _a.length; _i++) {
            var listMeal = _a[_i];
            listAllMeal.push(listMeal["name"]);
        }
        ;
        return listAllMeal;
    };
    return Booking;
}());
exports.Booking = Booking;
