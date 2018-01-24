import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { IAnimal }         from '../animal';
import { AnimalService }  from '../animal.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: [ './animal-detail.component.css' ]
})
export class AnimalDetailComponent implements OnInit {
    @Input() animal: IAnimal;

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAnimal();
  }

    getAnimal(): void {
        const id = +this.route.snapshot.paramMap.get('id')!;
        this.animalService.getAnimal(id)
            .subscribe(animal => this.animal = animal);
    }
  

  goBack(): void {
    this.location.back();
  }

  save(): void {
  //  this.animalService.updateAnimal(this.animal)
   //   .subscribe(() => this.goBack());
  }
  
}