import { Employee } from "./employee/Employee";
export class Pilot extends Employee{
    constructor(
        firstName: string,
        lastName: string,
        private salary: number,
        private position: string,
        private bornDate: string,
        private employeeNumber: number,
    ){
        super(firstName, lastName)
    }
}