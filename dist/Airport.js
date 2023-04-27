"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airport = void 0;
var Airport = /** @class */ (function () {
    function Airport(airportName, airportCity) {
        this.airportName = airportName;
        this.airportCity = airportCity;
        this.booking = [];
        this.airportCity = airportCity;
        this.airportName = airportName;
    }
    Airport.prototype.addBooking = function (booking) {
        this.booking.push(booking);
    };
    return Airport;
}());
exports.Airport = Airport;
