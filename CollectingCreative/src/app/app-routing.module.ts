import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationsAllComponent } from './locations-all/locations-all.component';
import { HomeComponent } from './home/home.component';
import { AppearancesComponent } from './appearances/appearances.component';
import { VideosComponent } from './videos/videos.component';
import { VideolistComponent } from './Videos/videolist/videolist.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'locations', component: LocationsComponent},
  {path: 'allLocations', component: LocationsAllComponent},
  {path: 'appearances', component: AppearancesComponent},
  // {path: 'allappearances', component:},
  {path: 'videos', component: VideosComponent},
  {path: 'allvideos', component: VideolistComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
