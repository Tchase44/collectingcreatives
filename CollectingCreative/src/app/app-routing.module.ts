import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationsAllComponent } from './locations-all/locations-all.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =[
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'locations', component: LocationsComponent},
  {path: 'allLocations', component: LocationsAllComponent},
  {path: 'home', component: HomeComponent}
 // {path: '', component:''},
  //{path: '', component:''},
  //{path: '', component:''}
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
