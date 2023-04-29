export enum Gender{
    Male,
    Female
}
export abstract class Employee{
    constructor(
        public firstName: string,
        public lastName: string,
        public salary:number,
        gender:Gender
    ){}
}