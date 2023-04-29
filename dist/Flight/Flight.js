"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Flight = void 0;
var Flight = /** @class */ (function () {
    function Flight(flightName, flightID, price, departure, destination, date, startTime, endTime) {
        this.flightName = flightName;
        this.flightID = flightID;
        this.price = price;
        this.departure = departure;
        this.destination = destination;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.pilot = [];
        this.flightName = flightName,
            this.flightID = flightID,
            this.price = price,
            this.departure = departure,
            this.date = date,
            this.startTime = startTime,
            this.endTime = endTime;
    }
    ;
    Flight.prototype.addPilot = function (pilot) {
        this.pilot.push(pilot);
    };
    return Flight;
}());
exports.Flight = Flight;
