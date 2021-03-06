import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationsAllComponent } from './locations-all/locations-all.component';
import { HomeComponent } from './home/home.component';
import { AppearancesComponent } from './appearances/appearances.component';
import { AppearancesAllComponent } from './appearances-all/appearances-all.component';
import { VideosComponent } from './videos/videos.component';
import { VideoListComponent } from './videos/video-list/video-list.component';
import { ArtComponent } from "./art/art.component";
import { AboutComponent } from './home/about/about.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'locations', component: LocationsComponent },
  { path: 'allLocations', component: LocationsAllComponent },
  { path: 'appearances', component: AppearancesComponent },
  { path: 'appearancegallary', component: AppearancesAllComponent},
  { path: 'videos', component: VideosComponent },
  { path: 'allvideos', component: VideoListComponent },
  { path: 'art', component: ArtComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
