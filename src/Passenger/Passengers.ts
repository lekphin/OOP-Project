import { Booking } from "../flight/Booking/Booking";

export class Passenger{
    public booking : Booking
    constructor(
        private firstNae: string,
        private lastName: string,
        private address: string,
        private phoneNumber: string,
    ){}
}