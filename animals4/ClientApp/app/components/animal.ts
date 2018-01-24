/*
Type of animal   dog-cat-horse-other
Name  - photo 
Sex
Breed       dog-cat-horse-other   (breed selector if possible) as discussed
Age      (date of birth if known)
Vaccination   yes or no   last date of vaccination
License
Temperament    sociable-nervous-aggressive
Blank section for comment
*/

//export class Animal {
export interface IAnimal {
    id: number;
    ownerId: number;
    licenseNumber: number;
    name: string;
    animalType: string;
    breed: string;
    isMale: boolean;
    age: number;
    dateOfBirth: Date; //= new Date() ;
    isVaccinated: boolean;
    dateLastVaccinated: Date; // = new Date() ;
    temperament: string;
    comments: string;
    photo: string; // ImageBitmap;
  }
