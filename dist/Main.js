"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Airport_1 = require("./airport/Airport");
var Flight_1 = require("./Flight/Flight");
var Booking_1 = require("./Flight/Booking/Booking");
var Passengers_1 = require("./Passenger/Passengers");
var airport = new Airport_1.Airport("Angkor-Air", "Phnom Penh");
// add customer into booking
var phin = new Passengers_1.Passenger("phin", "lek", "pp", "0183242");
var fligh1 = new Flight_1.Flight("Angkor-Air", 1, 200, "Phnom Penh", "Paris", "17,05,2023", "2:00 PM", "3:00AM");
var booking1 = new Booking_1.Booking(phin, 1);
booking1.addPassenger(phin);
airport.addBooking(booking1);
airport.addFlight(fligh1);
console.log(airport);
console.log(booking1);
