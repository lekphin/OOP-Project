import { Passenger } from "../../Passenger/Passengers";
import {Meal} from './Meal'
export class Booking{
    public bookingNumber: number;
    private customer: Passenger[] = [];
    public meals:Meal[] = []
    constructor(
        customer: Passenger,
        bookingNumber: number
        
    ){
        this.bookingNumber = bookingNumber;
    };

    addPassenger(passenger: Passenger){
        this.customer.push(passenger);
    };
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
}