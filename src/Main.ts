import { Airport } from "./Airport";
import { Flight } from "./Flight/Flight";
import { Booking } from "./Flight/Booking/Booking";
import { Passenger } from "./Flight/Passengers";

let airport = new Airport("Angkor-Air", "Phnom Penh");


// add customer into booking
let phin = new Passenger("phin", "lek", "pp", "0183242");

let booking1 = new Booking(phin, 1);
booking1.addPassenger(phin)

airport.addBooking(booking1);

console.log(airport);
console.log(booking1);
