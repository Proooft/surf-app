import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Spot } from './spot';

@Injectable()

export class SpotService {
     
        constructor(private http: HttpClient) {

        }

        getSpotList(): Observable<Spot[]> {

                return this.http.get<Spot[]>('api/spots').pipe(
                        tap((spotlist) => this.log(spotlist)),
                        catchError((error) => this.HandleError(error,[]))
                );
        }

        getSpotbyId(spotId: number): Observable <Spot | undefined> {
                return this.http.get<Spot>(`api/spots/${spotId}`).pipe(
                        tap((spot) => this.log(spot)),
                        catchError((error) =>this.HandleError(error,undefined))
                );

        }
        updateSpot(spot : Spot):Observable<null>{
                const httpOptions = {
                        headers: new HttpHeaders({'Content-Type': 'application/json'})
                };
                return this.http.put('api/spots/', spot, httpOptions).pipe(
                        tap((response) => this.log(response)),
                        catchError((error) =>this.HandleError(error,null))
                );

        }
        searchSpotlist(term: string): Observable<Spot[]>{
                console.log(term);
                if(term.length <=1){
                        return of([]);
                }
                return this.http.get<Spot[]>(`api/spots/?nom=${term}`).pipe(
                        tap((response) => this.log(response)),
                        catchError((error) =>this.HandleError(error,[]))
                )


        }
        addSpot(spot : Spot):Observable<Spot>{
                const httpOptions = {
                        headers: new HttpHeaders({'Content-Type': 'application/json'})
                };
                return this.http.post<Spot>('api/spots/', spot, httpOptions).pipe(
                        tap((response) => this.log(response)),
                        catchError((error) =>this.HandleError(error,null))
                );

        }
        deleteSpotbyId(spotId : number):Observable<null>{
                return this.http.delete(`api/spots/${spotId}`).pipe(
                        tap((response) => this.log(response)),
                        catchError((error) =>this.HandleError(error,null))
                );

        }

        private log(response: any ){
                console.log(response);
        }

        private HandleError(error: Error, errorValue: any){
                console.error(error);
                return of(errorValue)
        }
        getSpotTypeList(): string[] {
                return ['Beach Break',
                        'Reef Break',
                        'Point Break'
                ]
        }
        getDepList(): string[] {
                return ['Ille-et-Vilaine',
                        'Morbihan',
                        'Finistère',
                        'Côtes d\'Armor'
                ]
        }

       
}

