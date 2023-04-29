import { Employee } from "../Employee/Employee";
import { Booking } from "../flight/booking/Booking";
import { Flight } from "../flight/Flight";
import { Airline } from "../airline/Airline";
export class Airport{
    public flight: Flight[] = [];
    public booking: Booking[] = [];
    public airline: Airline[] = [];
    employees: any;
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
    addAirline(airline: Airline){
        this.airline.push(airline);
    }
}