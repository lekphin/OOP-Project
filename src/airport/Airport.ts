import { Booking } from "../Flight/Booking/Booking";
import { Flight } from "../Flight/Flight";
export class Airport{
    public flight: Flight[] = [];
    public booking: Booking[] = [];
    constructor(
        public airportName: string,
        public airportCity: string,
    ){
        this.airportCity = airportCity;
        this.airportName = airportName;
    } 


    addBooking(booking: Booking){
        this.booking.push(booking);
    }

    addFlight(flight: Flight){
        this.flight.push(flight);
    }
}