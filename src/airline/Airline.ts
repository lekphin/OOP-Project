
import { Flight } from "../flight/Flight";
import { Passenger } from "../passenger/Passengers";
export class Airline{
    public passenger: Passenger[] = [];
    public flight: Flight [] = [];
    constructor(
        public name:string,
        public code:number,
        public model:string
    ){}

    countPassenger(){
        let passengerCout = 0
        for(let passenger of this.passenger){
            if(passenger.booking.getTicket() == 1){
                passengerCout += 1
            }
        }
        return passengerCout;
    }


    // getPitlot

    getflight(date: string){
        let flighForPilot = [];
        for(let pilotflight of this.flight){
            if(pilotflight["departure"] == date){
                flighForPilot.push(this.flight);
            }
        }
        return flighForPilot;
    }
}