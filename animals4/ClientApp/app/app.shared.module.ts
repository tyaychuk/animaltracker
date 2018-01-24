import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';

import { OwnersComponent } from './components/owners/owners.component';
import { OwnerDetailComponent } from './components/owner-detail/owner-detail.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';
@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        OwnersComponent,
        OwnerDetailComponent,
        AnimalsComponent,
        AnimalDetailComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'owners', component: OwnersComponent },
            { path: 'owner-detail', component: OwnerDetailComponent },
            { path: 'animals', component: AnimalsComponent },
            { path: 'animal-detail', component: AnimalDetailComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModuleShared {
}
