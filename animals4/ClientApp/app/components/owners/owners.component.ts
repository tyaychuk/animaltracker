import { Component, OnInit, Input } from '@angular/core';
import { Inject } from '@angular/core';
import { Http } from '@angular/http';
import { IOwner } from '../owner';
import { OwnerService } from '../owner.service';
 
@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
    styleUrls: ['./owners.component.css'],
    providers: [OwnerService]
})


export class OwnersComponent implements OnInit {
  owners: IOwner[];

    selectedOwner: IOwner;

    onSelect(owner: IOwner): void {
        this.selectedOwner = owner;
    }

   
    constructor(private ownerService: OwnerService) {
 
    }

    ngOnInit() {
       
    this.getOwners();
  }

  getOwners(): void {
    this.ownerService.getOwners()
    .subscribe(owners => this.owners = owners);
  }

  //delete(owner: Owner): void {
  //  this.owners = this.owners.filter(h => h !== owner);
  //  this.ownerService.deleteOwner(owner).subscribe();
  //}
  //add(firstName: string, lastName: string): void {
  //  firstName = firstName.trim();
  //  if (!firstName) { return; }
  //  lastName = lastName.trim();
  //  if (!lastName) { return; }
  //  this.ownerService.addOwner({ firstName, lastName } as Owner)
  //    .subscribe(owner => {
  //      this.owners.push(owner);
  //    });
  //}

}

