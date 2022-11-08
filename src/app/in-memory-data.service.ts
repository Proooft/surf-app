import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import { SPOTS } from './spot/mock-spot-list';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

createDb(){
const spots = SPOTS
 return { spots};
}

}
