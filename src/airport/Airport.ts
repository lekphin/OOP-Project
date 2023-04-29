import { Booking } from "../flight/Booking/Booking";
import { Flight } from "../flight/Flight";
import { Airline } from "../airline/Airline";
export class Airport{
    public flight: Flight[] = [];
    public booking: Booking[] = [];
    public airline: Airline[] = [];
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
    addAirline(airline: Airline){
        this.airline.push(airline);
    }


}