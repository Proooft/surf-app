import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Spot} from '../spot';
import { SpotService } from '../spot.service';
import { GoogleMap} from '@angular/google-maps';
import { STYLE } from 'src/app/spot/map/mapstyle';
import { VirtualTimeScheduler } from 'rxjs';



@Component({
  selector: 'app-spot-form',
  templateUrl: './spot-form.component.html',
  styleUrls: ['./spot-form.component.css']
})
export class SpotFormComponent implements OnInit {

  @Input() spot: Spot;
  types: string[];
  departements: string[]
  isAddform: boolean;
  localisation: any = {};
  markers: any[] = [];
  positionSelected:boolean = false;
  BZH_BOUNDS:any = {
    north: 48.886151406141614,
    south: 47.279510313064804,
    west: -5.149729564659006,
    east: -1.0110654840977968,
  }
 

  options: google.maps.MapOptions = {
    center: { lat: 48.128163936511875, lng: -2.478005217076927 },
    zoom: 8,
    restriction: {latLngBounds: this.BZH_BOUNDS },
    panControl: false,
    disableDefaultUI: true,
    mapTypeControl: false,
    styles: STYLE
  };
  
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
mymodel: any;


  constructor(private spotService: SpotService, private router: Router) {
   
  }

  ngOnInit() {
    this.types = this.spotService.getSpotTypeList();
    this.departements = this.spotService.getDepList();
    this.isAddform = this.router.url.includes('add');
   
  }


  hasType(type: string): boolean {
    return this.spot.type.includes(type);

  }

  addMarker(event: google.maps.MapMouseEvent){
    this.positionSelected = true;
    this.localisation.lat = event.latLng?.lat()
    this.localisation.lng = event.latLng?.lng()
    this.markers.length = 0;
    this.markers.push({position: this.localisation,
    title: "mon spot",
   })
   
  }
  valueChanged(event:any){
    this.spot.rate = event;
   
  }

 

  onSubmit() {
    this.spot.lat = this.localisation.lat;
    this.spot.lng = this.localisation.lng;
    if(this.isAddform){
      this.spotService.addSpot(this.spot)
      .subscribe((spot:Spot)=> this.router.navigate(['/spot', spot.id]));

    }else{
    this.spotService.updateSpot(this.spot)
      .subscribe(()=> 
          this.router.navigate(['/spot', this.spot.id]));
    }

  }
}
