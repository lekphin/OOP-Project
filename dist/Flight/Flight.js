"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flight = void 0;
var Flight = /** @class */ (function () {
    function Flight(flightName, flightID, price, departure, date, startTime, endTime) {
        this.flightName = flightName;
        this.flightID = flightID;
        this.price = price;
        this.departure = departure;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    return Flight;
}());
exports.Flight = Flight;
