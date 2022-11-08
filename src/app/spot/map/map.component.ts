import { Component, OnInit, ViewChild } from '@angular/core';
import {  Observable } from 'rxjs';
import { STYLE } from './mapstyle';
import { SpotService } from 'src/app/spot/spot.service';
import { Spot } from 'src/app/spot/spot';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Router } from '@angular/router';

@Component({
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: ['mapstyle.css']
})



export class MapComponent implements OnInit {

  
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;

  
   BZH_BOUNDS:any = {
    north: 48.886151406141614,
    south: 47.279510313064804,
    west: -5.149729564659006,
    east: -1.0110654840977968,
  }
  apiLoaded: Observable<boolean>;
  markers: any[] = [];
  spotlist: Spot[];
  infoContent: any = {};
  options: google.maps.MapOptions = {
    center: { lat: 48.128163936511875, lng: -2.478005217076927 },
    zoom: 9,
    panControl: false,
    disableDefaultUI: true,
    mapTypeControl: false,
    styles: STYLE
  };



  constructor(private spotService: SpotService, private router: Router) {}



  openInfo(marker: MapMarker, content:object) {
    this.infoContent = content;
    this.infoWindow.open(marker)  }

  ngOnInit() {
    this.spotService.getSpotList().subscribe(spotlist =>{this.spotlist = spotlist;
    this.addMarker()});
  }

  addMarker(){
    this.spotlist.forEach((spot) => {
 
     console.log(spot);
       this.markers.push({
         position: {
           lat: spot.lat,
           lng:  spot.lng
         },
         title: spot.nom,
        markerInfo: {
          nom: spot.nom,
          id: spot.id,
          picture: spot.picture,
          rate: spot.rate
        }
          
      
       })
 
     });
 
   }
   goTospot(idspot: number){
    this.router.navigate(['/spot', idspot])
  }

   

}