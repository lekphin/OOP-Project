import{Pilot} from '../human/Pilot'
export class Flight {
    pilot:Pilot[]=[];
    constructor(
       
        public flightName: string,
        public flightID: number,
        public price: string,
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
    // getFlights(pilot:Pilot,date:Date){

    // }
}