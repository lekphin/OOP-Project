import { Booking } from "../Flight/Booking/Booking";
export class Airport{
    public booking: Booking[] = []
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
}