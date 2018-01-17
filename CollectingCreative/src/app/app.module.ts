import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationsAllComponent } from './locations-all/locations-all.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import { PhotoComponent } from './photo/photo.component';
import { PhotoEditComponent } from './photo-edit/photo-edit.component';
import { VideosComponent } from './videos/videos.component';
import { VideolistComponent } from './Videos/videolist/videolist.component';
import { VideoItemComponent } from './Videos/video-item/video-item.component';
import { VideoEditComponent } from './Videos/video-edit/video-edit.component';
import { HeaderComponent } from './header/header.component';
import { AppearancesComponent } from './appearances/appearances.component';
import { Browser } from 'selenium-webdriver';
// ng g module app-routing --flat --module=app


@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    LocationsAllComponent,
    HomeComponent,
    PhotoComponent,
    PhotoEditComponent,
    VideosComponent,
    VideolistComponent,
    VideoItemComponent,
    VideoEditComponent,
    HeaderComponent,
    AppearancesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BrowserAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
