import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap, withLatestFrom } from 'rxjs';
import { Spot } from '../spot';
import { SpotService } from '../spot.service';

@Component({
  selector: 'app-search-spot',
  templateUrl: './search-spot.component.html',
  styleUrls: ["search.component.css"]
})


export class SearchSpotComponent implements OnInit {
  //flux de données dans le temps ex: {......"a"..."ab".."abc"...}
  searchTerms = new Subject<string>();
  //afficher les pokemons coresspondant a chaque recherche ex: {..pokemonList(a).......pokemonList(b)...}
  spots$: Observable<Spot[]>;

  constructor(private router: Router, private spotService: SpotService) { }

  ngOnInit(): void {
    this.spots$ = this.searchTerms.pipe(
      debounceTime(300), distinctUntilChanged(),
      switchMap((term)=> this.spotService.searchSpotlist(term))
    );
  }

  search(term:string){
      this.searchTerms.next(term);
  }

  gotoDetail(spot:Spot){
    const link = ['/spot', spot.id];
    this.router.navigate(link);
  }
}
