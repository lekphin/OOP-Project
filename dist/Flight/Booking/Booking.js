"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
var Tickets;
(function (Tickets) {
    Tickets[Tickets["ONEWAYSTICKET"] = 0] = "ONEWAYSTICKET";
    Tickets[Tickets["RETURNTICKET"] = 1] = "RETURNTICKET";
})(Tickets || (Tickets = {}));
var Booking = /** @class */ (function () {
    function Booking(passenger, bookingNumber, ticket) {
        this.passenger = passenger;
        this.bookingNumber = bookingNumber;
        this.ticket = ticket;
        this.meals = [];
        this.bookingNumber = bookingNumber;
    }
    ;
    Booking.prototype.addPassenger = function (passenger) {
        this.passenger.push(passenger);
    };
    ;
    Booking.prototype.getPassenger = function () {
        return this.passenger;
    };
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
    Booking.prototype.getTicket = function () {
        return this.ticket;
    };
    return Booking;
}());
exports.Booking = Booking;
;
