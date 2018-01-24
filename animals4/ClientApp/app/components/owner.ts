/*
First name   last name
Address  City/village  municipality
Phone  cell home work
email
*/
export interface IOwner {
//export class Owner {
    id: number;
    firstName: string;
    lastName: string;
    addressLine1: string;
    city: string;
    municipality: string;
    phoneCell: string;
    phoneHome: string;
    phoneWork: string;
    email: string;
    alertOnScan: boolean;

  }