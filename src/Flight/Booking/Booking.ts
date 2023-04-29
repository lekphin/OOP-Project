import { Passenger } from "../../passenger/Passengers";
import { Meal } from './Meal';
enum Tickets{
    ONEWAYSTICKET,
    RETURNTICKET
}
export class Booking{
    public meals:Meal[] = [];
    constructor(
        public passenger: Passenger[],
        public bookingNumber: number,
        public ticket: Tickets
    ){
        this.bookingNumber = bookingNumber;
    };

    addPassenger(passenger: Passenger){
        this.passenger.push(passenger);
    };

    getPassenger(){
        return this.passenger
    }

    addMeal(meal:Meal){
        this.meals.push(meal)
    }
    getMeal(){
        let listAllMeal = [];
        for(let listMeal of this.meals){
            listAllMeal.push(listMeal["name"]);
        };
        return listAllMeal;
    }

    getTicket(){
        return this.ticket
    }
};
