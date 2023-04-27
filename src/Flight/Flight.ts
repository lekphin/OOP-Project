export class Flight{
    constructor(
        private flightName: string,
        private flightID: number,
        private price: number,
        private departure: string,
        private date: string,
        private startTime: number,
        private endTime: number
    ){}
}