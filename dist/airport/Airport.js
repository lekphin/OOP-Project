"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airport = void 0;
var Airport = /** @class */ (function () {
    function Airport(airportName, airportCity) {
        this.airportName = airportName;
        this.airportCity = airportCity;
        this.flight = [];
        this.booking = [];
        this.airline = [];
        this.airportCity = airportCity;
        this.airportName = airportName;
    }
    Airport.prototype.addBooking = function (booking) {
        this.booking.push(booking);
    };
    ;
    Airport.prototype.addFlight = function (flight) {
        this.flight.push(flight);
    };
    ;
    Airport.prototype.addAirline = function (airline) {
        this.airline.push(airline);
    };
    return Airport;
}());
exports.Airport = Airport;
