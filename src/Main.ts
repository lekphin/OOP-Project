import { Airport } from "./airport/Airport";
import { Flight } from "./flight/Flight";
import { Booking} from "./flight/Booking/Booking";
import { Passenger } from "./passenger/Passengers";
import { Airline } from "./airline/Airline";
import { Meal } from "./flight/Booking/Meal";
import { Pilot } from "./human/Pilot";

let airport = new Airport("Angkor-Air", "Phnom Penh");


// user story 1 : As an airport controller, I need to get the full details of a passenger’s trip from their Booking Reference Number
let phin1 = new Passenger("phin", "lek", "pp", "0183242");
let phin2 = new Passenger("seyla", "loeub", "pp", "0183242");

let fligh1 = new Flight("Angkor-Air", 1 ,"200$","Phnom Penh", "London", "14,04,2023", "2:00 PM", "3:00 AM");
let fligh2 = new Flight("Angkor-Air", 2 ,"300$","Phnom Penh", "Paris", "17,05,2023", "2:00 PM", "3:00 AM");

// uer story 2 : As an airline manager, I want to know for a given flight, how many passengers have return tickets.
let airline1 = new Airline("Phnom Penh-Aire", 234325, "RX-300");

// user story 3:

let pilot1 = new Pilot("Seyla", "Loeub", 11000, "Pilot", "14,04,2023", 1);
let pilot2 = new Pilot("Mon", "De", 11000, "Pilot", "15,04,2000", 2);

// user story 4: As an airline chef, I need to know, for a given flight, how many of each meal type I need to prepear.
let meal1 = new Meal("Pizza","20$");
let meal2 = new Meal("Humberger","10$");

let booking1 = new Booking([phin1, phin2], 1, 1);
let booking2 = new Booking([phin1, phin2], 1, 0);
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




console.log(airport);
console.log(airline1.countPassenger());
console.log(booking1.getMeal());
console.log(airline1.getflight("14,04,2023"));


