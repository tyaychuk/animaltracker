import { Component, Inject, Injectable } from '@angular/core';
import { IOwner } from './owner';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";

// import { IPosts } from "./posts";
/*
@Component({
    selector: 'owners',
    templateUrl: './owners.component.html'
})
    export class OwnerServiceXX {
    public owners: Owner[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/AnimalData/Owners').subscribe(result => {
            this.owners = result.json() as Owner[];
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
export class OwnerService {
    private ownersUrl = 'api/animal/owners';  // URL to web api
    // public owners: Owner[];

    constructor(private http: Http) { }

    
    getOwners(): Observable<IOwner[]> {
        return this.http
            .get(this.ownersUrl)
            .map((response: Response) => {
                return <IOwner[]>response.json();
            })
            .catch(this.handleError);

    }

    getOwner(id: number): Observable<IOwner> {
        const url = `${this.ownersUrl}/${id}`;
        return this.http
            .get(url)
            .map((response: Response, id: number) => {
               this.log(`fetched owner id=${id}`);
                return <IOwner>response.json();
            })
            .catch(this.handleError);
        

       //     return this.http.get<IOwner>(url).pipe(
        //    tap(_ => this.log(`fetched owner id=${id}`)),
         //   catchError(this.handleError<IOwner>(`getOwner id=${id}`))
        
    }

    /** GET owners from the server  
    getOwnersOLD(): Observable<Owner[]> {
        return this.http.get<Owner[]>(this.ownersUrl)
            .pipe(
            tap(owners => this.log(`fetched owners`)),

            catchError(this.handleError('getOwners', []))
            );
    }

    /** PUT: update the owner on the server 
    updateOwner(owner: Owner): Observable<any> {
        return this.http.put(this.ownersUrl, owner, httpOptions).pipe(
            tap(_ => this.log(`updated owner id=${owner.id}`)),
            catchError(this.handleError<any>('updateOwner'))
        );
    }
    /** POST: add a new owner to the server  
    addOwner(owner: Owner): Observable<Owner> {
        return this.http.post<Owner>(this.ownersUrl, owner, httpOptions).pipe(
            tap((owner: Owner) => this.log(`added owner w/ id=${owner.id}`)),
            catchError(this.handleError<Owner>('addOwner'))
        );
    }
    /* GET owners whose name contains search term  
    searchOwners(term: string): Observable<Owner[]> {
        if (!term.trim()) {
            // if not search term, return empty owner array.
            return of([]);
        }
        return this.http.get<Owner[]>(`api/owners/?name=${term}`).pipe(
            tap(_ => this.log(`found owners matching "${term}"`)),
            catchError(this.handleError<Owner[]>('searchOwners', []))
        );
    }

    /** GET owner by id. Will 404 if id not found 
    getOwner(id: number): Observable<Owner> {
        const url = `${this.ownersUrl}/${id}`;
        return this.http.get<Owner>(url).pipe(
            tap(_ => this.log(`fetched owner id=${id}`)),
            catchError(this.handleError<Owner>(`getOwner id=${id}`))
        );
    }

    /** DELETE: delete the owner from the server 
    deleteOwner(owner: Owner | number): Observable<Owner> {
        const id = typeof owner === 'number' ? owner : owner.id;
        const url = `${this.ownersUrl}/${id}`;

        return this.http.delete<Owner>(url, httpOptions).pipe(
            tap(_ => this.log(`deleted owner id=${id}`)),
            catchError(this.handleError<Owner>('deleteOwner'))
        );
    }
    */
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    /** Log a OwnerService message with the MessageService */
    private log(message: string) {
        // this.messageService.add('OwnerService: ' + message);
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
