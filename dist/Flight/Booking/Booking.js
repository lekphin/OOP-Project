"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
var Booking = /** @class */ (function () {
    function Booking(customer, bookingNumber) {
        this.customer = [];
        this.bookingNumber = bookingNumber;
    }
    Booking.prototype.addPassenger = function (passenger) {
        this.customer.push(passenger);
    };
    return Booking;
}());
exports.Booking = Booking;
