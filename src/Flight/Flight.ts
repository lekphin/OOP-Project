import { Attendant } from "../human/Attendant";
import { Pilot } from "../human/Pilot";

export class Flight {
    pilot:Pilot[]=[];
    attendant:Attendant[]=[];
    constructor(
        public flightName: string,
        public flightID: number,
        public price: number,
        public departure: string,
        public date:string,
        public startTime:string,
        public endTime:string,
    ){
        this.flightName = flightName,
        this.flightID = flightID,
        this.price = price,
        this.departure = departure,
        this.date = date,
        this.startTime = startTime,
        this.endTime = endTime
    };
    addPilot(pilot:Pilot){
        this.pilot.push(pilot)
    };
    addAttendant(attendant:Attendant){
        this.attendant.push(attendant)
    };
    getSalaryOfPilot(){
        let pilotSlary = 0;
        for(let pilots of this.pilot){
             pilotSlary+= pilots["salary"]
        }
        return pilotSlary
    };
    getSalaryOfAttendant(){
        let attendantSlary = 0;
        for(let attendants of this.attendant){
            attendantSlary+= attendants["salary"]
        }
        return attendantSlary
    };
    getSalaryOfAllemployees(){
        let salaryOfEmployees = 0;
        salaryOfEmployees = this.getSalaryOfPilot() + this.getSalaryOfAttendant()
        return salaryOfEmployees
    };
}