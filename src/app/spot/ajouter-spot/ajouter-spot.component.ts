import { Component, OnInit } from '@angular/core';
import { Spot } from '../spot';

@Component({
  selector: 'app-ajouter-spot',
  templateUrl: './ajouter-spot.component.html',
  styles: [
  ]
})
export class AjouterSpotComponent implements OnInit {

  spot : Spot;

  ngOnInit(){
    this.spot = new Spot();
  }
  

}
