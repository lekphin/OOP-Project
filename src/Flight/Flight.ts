export class Flight{
    constructor(
        private flightName: string,
        private flightID: number,
        private price: number,
        private departure: string,
        private destination: string,
        private date: string,
        private startTime: string,
        private endTime: string
    ){}
}