import { Passenger } from "../../Passenger/Passengers";

export class Booking{
    public bookingNumber: number;
    private customer: Passenger[] = [];
    constructor(
        customer: Passenger,
        bookingNumber: number
    ){
        this.bookingNumber = bookingNumber;
    }

    addPassenger(passenger: Passenger){
        this.customer.push(passenger);
    }
}