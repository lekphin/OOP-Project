import { Airport } from "./airport/Airport";
import { Flight } from "./Flight/Flight";
import { Booking } from "./Flight/Booking/Booking";
import { Passenger } from "./Passenger/Passengers";

let airport = new Airport("Angkor-Air", "Phnom Penh");


// add customer into booking
let phin = new Passenger("phin", "lek", "pp", "0183242");
let fligh1 = new Flight("Angkor-Air", 1, 200,"Phnom Penh", "Paris", "17,05,2023", "2:00 PM", "3:00AM");

let booking1 = new Booking(phin, 1);
booking1.addPassenger(phin);
airport.addBooking(booking1);
airport.addFlight(fligh1);

console.log(airport);
console.log(booking1);

