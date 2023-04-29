"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Airport_1 = require("./airport/Airport");
var Flight_1 = require("./flight/Flight");
var Booking_1 = require("./flight/Booking/Booking");
var Passengers_1 = require("./passenger/Passengers");
var Airline_1 = require("./airline/Airline");
var Meal_1 = require("./flight/Booking/Meal");
var Pilot_1 = require("./human/Pilot");
var airport = new Airport_1.Airport("Angkor-Air", "Phnom Penh");
// user story 1 : As an airport controller, I need to get the full details of a passenger’s trip from their Booking Reference Number
var phin1 = new Passengers_1.Passenger("phin", "lek", "pp", "0183242");
var phin2 = new Passengers_1.Passenger("seyla", "loeub", "pp", "0183242");
var fligh1 = new Flight_1.Flight("Angkor-Air", 1, "200$", "Phnom Penh", "London", "14,04,2023", "2:00 PM", "3:00 AM");
var fligh2 = new Flight_1.Flight("Angkor-Air", 2, "300$", "Phnom Penh", "Paris", "17,05,2023", "2:00 PM", "3:00 AM");
// uer story 2 : As an airline manager, I want to know for a given flight, how many passengers have return tickets.
var airline1 = new Airline_1.Airline("Phnom Penh-Aire", 234325, "RX-300");
// user story 3:
var pilot1 = new Pilot_1.Pilot("Seyla", "Loeub", 11000, "Pilot", "14,04,2023", 1);
var pilot2 = new Pilot_1.Pilot("Mon", "De", 11000, "Pilot", "15,04,2000", 2);
// user story 4: As an airline chef, I need to know, for a given flight, how many of each meal type I need to prepear.
var meal1 = new Meal_1.Meal("Pizza", "20$");
var meal2 = new Meal_1.Meal("Humberger", "10$");
var booking1 = new Booking_1.Booking([phin1, phin2], 1, 1);
var booking2 = new Booking_1.Booking([phin1, phin2], 1, 0);
booking1.addMeal(meal1);
booking1.addMeal(meal2);
booking2.addMeal(meal1);
booking2.addMeal(meal2);
booking1.addPassenger(phin1);
fligh1.addPilot(pilot1);
fligh2.addPilot(pilot2);
airport.addBooking(booking1);
airport.addBooking(booking2);
airport.addFlight(fligh1);
airport.addFlight(fligh2);
airport.addAirline(airline1);
airline1.countPassenger();
// console.log(airport);
// console.log(airline1.countPassenger());
// console.log(booking1.getMeal());
console.log(airline1.getPilotByDate("14,04,2023"));
