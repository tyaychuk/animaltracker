import { Component, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { Http } from '@angular/http';

import { IAnimal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
    styleUrls: ['./animals.component.css'],
    providers: [AnimalService]
})

export class AnimalsComponent implements OnInit {
        animals: IAnimal[];
          selectedAnimal: IAnimal;

          onSelect(animal: IAnimal): void {
              this.selectedAnimal = animal;
          }


          constructor(private animalService: AnimalService) {

          }

          ngOnInit() {

              this.getAnimals();
          }

          getAnimals(): void {
              this.animalService.getAnimals()
                  .subscribe(animals => this.animals = animals);
          }
}