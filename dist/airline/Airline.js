"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Airline = void 0;
var Airline = /** @class */ (function () {
    function Airline(name, code, model) {
        this.name = name;
        this.code = code;
        this.model = model;
        this.passenger = [];
        this.flight = [];
    }
    Airline.prototype.countPassenger = function () {
        var passengerCout = 0;
        for (var _i = 0, _a = this.passenger; _i < _a.length; _i++) {
            var passenger = _a[_i];
            if (passenger.booking.getTicket() == 1) {
                passengerCout += 1;
            }
        }
        return passengerCout;
    };
    // getPitlot
    Airline.prototype.getflight = function (date) {
        var flighForPilot = [];
        for (var _i = 0, _a = this.flight; _i < _a.length; _i++) {
            var pilotflight = _a[_i];
            if (pilotflight["departure"] == date) {
                flighForPilot.push(this.flight);
            }
        }
        return flighForPilot;
    };
    return Airline;
}());
exports.Airline = Airline;
