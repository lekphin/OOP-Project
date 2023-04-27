"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Airport_1 = require("./Airport");
var Booking_1 = require("./Flight/Booking/Booking");
var Passengers_1 = require("./Flight/Passengers");
var airport = new Airport_1.Airport("Angkor-Air", "Phnom Penh");
// add customer into booking
var phin = new Passengers_1.Passenger("phin", "lek", "pp", 09412320);
var booking1 = new Booking_1.Booking(phin, 1);
booking1.addPassenger(phin);
airport.addBooking(booking1);
console.log(airport);
