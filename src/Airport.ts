export class Airport{
    constructor(
        public airportName: string,
        public airportCity: string
    ){
        this.airportCity = airportCity;
        this.airportName = airportName;
    }   
}