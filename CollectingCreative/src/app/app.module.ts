import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from './app.component';
import { LocationsComponent } from './locations/locations.component';
import { LocationsAllComponent } from './locations-all/locations-all.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
// ng g module app-routing --flat --module=app

@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    LocationsAllComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
