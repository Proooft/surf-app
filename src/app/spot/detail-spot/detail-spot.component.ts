import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Spot } from '../spot';
import { SpotService } from '../spot.service';

@Component({
  selector: 'app-detail-spot',
  templateUrl: './detail-spot.component.html',
  styles: [
  ]
})
export class DetailSpotComponent implements OnInit {
  spotList : Spot[];
  spot : Spot | undefined;

  constructor( private route : ActivatedRoute, private router : Router, private spotService : SpotService) { }

  ngOnInit(): void {
   
    const spotId: string|null = this.route.snapshot.paramMap.get('id');
    if(spotId){
    this.spotService.getSpotbyId(+spotId).subscribe(spot => this.spot = spot)}
  }
  goToSpotList(){
    this.router.navigate(['/spots']);
  }

  goToEditSpot(spot: Spot){
    this.router.navigate(['/edit/spot', spot.id])
  }
  deleteSpot(spot: Spot){
    this.spotService.deleteSpotbyId(+spot.id).subscribe(()=> 
    this.router.navigate(['/spots']));
  }

}
