import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Spot } from '../spot';
import { SpotService } from '../spot.service';

@Component({
  selector: 'app-edit-spot',
  template: `
    <div *ngIf="spot">
    <h2 class="center white-text" > Editer {{ spot.nom}} </h2>
    <p class="center">
      <img [src]="spot.picture"/>
    </p>
    <app-spot-form *ngIf="spot" [spot]="spot"></app-spot-form>
    </div>
    <div class="center" *ngIf="!spot"><app-loader></app-loader></div>
     `
    ,
  styles: [
  ]
})
export class EditSpotComponent implements OnInit {

  spot : Spot | undefined;
  constructor(private route : ActivatedRoute, private spotService: SpotService ) { }

  ngOnInit() {
    const spotId: string|null = this.route.snapshot.paramMap.get('id');
    if(spotId){
      this.spotService.getSpotbyId(+spotId).subscribe(spot=> this.spot = spot);
    }
    else{
      this.spot = undefined;
    }
  }

}
