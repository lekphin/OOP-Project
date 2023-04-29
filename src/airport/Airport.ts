import { Employee } from "../Employee/Employee";
import { Booking } from "../flight/booking/Booking";
import { Flight } from "../flight/Flight";
export class Airport{
    flight: Flight[] = [];
    booking: Booking[] = [];
    employees:Employee[] = [];
    constructor(
        public airportName: string,
        public airportCity: string,
    ){
        this.airportCity = airportCity;
        this.airportName = airportName;
    } 
    addBooking(booking: Booking){
        this.booking.push(booking);
    };

    addFlight(flight: Flight){
        this.flight.push(flight);
    };
    addEmployee(employee:Employee){
        this.employees.push(employee)
    }
}