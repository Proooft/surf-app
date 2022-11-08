import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSpotComponent } from './list-spot/list-spot.component';
import { DetailSpotComponent } from './detail-spot/detail-spot.component';
import { BorderCardDirective } from './border-card.directive';
import { RouterModule, Routes } from '@angular/router';
import { SpotService } from './spot.service';
import {FormsModule} from '@angular/forms';
import { SpotFormComponent } from './spot-form/spot-form.component';
import { EditSpotComponent } from './edit-spot/edit-spot.component';
import { AjouterSpotComponent } from './ajouter-spot/ajouter-spot.component';
import { SearchSpotComponent } from './search-spot/search-spot.component';
import { LoaderComponent } from './loader/loader.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';

// import { AuthGuard } from '../auth.guard';


const spotroutes: Routes = [
  {path: 'spot/add', component:AjouterSpotComponent},
  {path: 'edit/spot/:id', component:EditSpotComponent},
  {path: 'spots', component: ListSpotComponent},
  {path: 'spot/:id', component: DetailSpotComponent},
  {path: 'spots-map', component: MapComponent}
 

];
// const spotroutes: Routes = [
//   {path: 'spot/add', component:AjouterSpotComponent, canActivate:[AuthGuard]},
//   {path: 'edit/spot/:id', component:EditSpotComponent, canActivate:[AuthGuard]},
//   {path: 'spots', component: ListSpotComponent, canActivate:[AuthGuard]},
//   {path: 'spot/:id', component: DetailSpotComponent, canActivate:[AuthGuard]}
 

// ];

@NgModule({
  declarations: [
    ListSpotComponent,
    MapComponent,
    DetailSpotComponent,
    BorderCardDirective,
    SpotFormComponent,
    EditSpotComponent,
    AjouterSpotComponent,
    SearchSpotComponent,
    LoaderComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    GoogleMapsModule,
    RouterModule.forChild(spotroutes)
  ], providers:[
    SpotService
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SpotModule { }
