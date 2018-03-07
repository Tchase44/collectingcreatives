import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationsAllComponent } from './locations-all/locations-all.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import { PhotoComponent } from './photo/photo.component';
import { PhotoEditComponent } from './photo-edit/photo-edit.component';
import { VideosComponent } from './videos/videos.component';
import { VideoListComponent } from './videos/video-list/video-list.component';
import { VideoEditComponent } from './videos/video-edit/video-edit.component';
import { HeaderComponent } from './header/header.component';
import { AppearancesComponent } from './appearances/appearances.component';
import { Browser } from 'selenium-webdriver';
import { AppearancesAllComponent } from './appearances-all/appearances-all.component';
import { AboutComponent } from './home/about/about.component';
import { ArtComponent } from './art/art.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    LocationsAllComponent,
    HomeComponent,
    PhotoComponent,
    PhotoEditComponent,
    VideosComponent,
    VideoListComponent,
    VideoEditComponent,
    HeaderComponent,
    AppearancesComponent,
    AppearancesAllComponent,
    AboutComponent,
    ArtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
