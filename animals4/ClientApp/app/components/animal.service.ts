import { Component, Inject, Injectable } from '@angular/core';
import { IAnimal } from './animal';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

// import { IPosts } from "./posts";
/*
@Component({
    selector: 'animals',
    templateUrl: './animals.component.html'
})
    export class AnimalServiceXX {
    public animals: Animal[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/AnimalData/Animals').subscribe(result => {
            this.animals = result.json() as Animal[];
        }, error => console.error(error));
    }
}




@Injectable()
export class ApiService {

    private _postsURL = "https://jsonplaceholder.typicode.com/posts";

    constructor(private http: Http) {
    }

    getPosts(): Observable<IPosts[]> {
        return this.http
            .get(this._postsURL)
            .map((response: Response) => {
                return <IPosts[]>response.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
*/


@Injectable()
export class AnimalService {
    private animalsUrl = 'api/animal/animals';  // URL to web api
    // public animals: Animal[];

    constructor(private http: Http) { }


    getAnimals(): Observable<IAnimal[]> {
        return this.http
            .get(this.animalsUrl)
            .map((response: Response) => {
                return <IAnimal[]>response.json();
            })
            .catch(this.handleError);

    }

    getAnimal(id: number): Observable<IAnimal> {
        const url = `${this.animalsUrl}/${id}`;
        return this.http
            .get(url)
            .map((response: Response, id: number) => {
                this.log(`fetched animal id=${id}`);
                return <IAnimal>response.json();
            })
            .catch(this.handleError);


        //     return this.http.get<IAnimal>(url).pipe(
        //    tap(_ => this.log(`fetched animal id=${id}`)),
        //   catchError(this.handleError<IAnimal>(`getAnimal id=${id}`))

    }

    /** GET animals from the server  
    getAnimalsOLD(): Observable<Animal[]> {
        return this.http.get<Animal[]>(this.animalsUrl)
            .pipe(
            tap(animals => this.log(`fetched animals`)),

            catchError(this.handleError('getAnimals', []))
            );
    }

    /** PUT: update the animal on the server 
    updateAnimal(animal: Animal): Observable<any> {
        return this.http.put(this.animalsUrl, animal, httpOptions).pipe(
            tap(_ => this.log(`updated animal id=${animal.id}`)),
            catchError(this.handleError<any>('updateAnimal'))
        );
    }
    /** POST: add a new animal to the server  
    addAnimal(animal: Animal): Observable<Animal> {
        return this.http.post<Animal>(this.animalsUrl, animal, httpOptions).pipe(
            tap((animal: Animal) => this.log(`added animal w/ id=${animal.id}`)),
            catchError(this.handleError<Animal>('addAnimal'))
        );
    }
    /* GET animals whose name contains search term  
    searchAnimals(term: string): Observable<Animal[]> {
        if (!term.trim()) {
            // if not search term, return empty animal array.
            return of([]);
        }
        return this.http.get<Animal[]>(`api/animals/?name=${term}`).pipe(
            tap(_ => this.log(`found animals matching "${term}"`)),
            catchError(this.handleError<Animal[]>('searchAnimals', []))
        );
    }

    /** GET animal by id. Will 404 if id not found 
    getAnimal(id: number): Observable<Animal> {
        const url = `${this.animalsUrl}/${id}`;
        return this.http.get<Animal>(url).pipe(
            tap(_ => this.log(`fetched animal id=${id}`)),
            catchError(this.handleError<Animal>(`getAnimal id=${id}`))
        );
    }

    /** DELETE: delete the animal from the server 
    deleteAnimal(animal: Animal | number): Observable<Animal> {
        const id = typeof animal === 'number' ? animal : animal.id;
        const url = `${this.animalsUrl}/${id}`;

        return this.http.delete<Animal>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted animal id=${id}`)),
            catchError(this.handleError<Animal>('deleteAnimal'))
        );
    }
    */
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    /** Log a AnimalService message with the MessageService */
    private log(message: string) {
        // this.messageService.add('AnimalService: ' + message);
    }
}
    /**
   * Handle Http operation that failed.
   * Let the app continue.
    
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    constructor(private http: Http) { }
      //  private http: HttpClient,
      //  private messageService: MessageService) { }
      

//}
*/
