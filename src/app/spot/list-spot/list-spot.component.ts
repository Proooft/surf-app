import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Spot } from '../spot';
import { SpotService } from '../spot.service';

@Component({
  selector: 'app-list-spot',
  templateUrl: 'list-spot.component.html',
  styleUrls: ['list-style.css']

})

export class ListSpotComponent implements OnInit{

  spotlist : Spot[];

  constructor(private router: Router,
              private spotService: SpotService){}
  
  
  ngOnInit(){
   this.spotService.getSpotList().subscribe(spotlist => this.spotlist = spotlist)
  }
  goTospot(spot:Spot){
    this.router.navigate(['/spot', spot.id])
  }

}
