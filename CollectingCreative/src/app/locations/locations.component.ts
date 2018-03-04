import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Photos } from '../mock-images';
// import { NgForOf } from '@angular/common';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-locations',
  encapsulation: ViewEncapsulation.Native,
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  animations: []
})
export class LocationsComponent implements OnInit {
  photos = Photos;
  baseurl = 'http://localhost:8000/';
  constructor(private http: Http) {

  }

  ngOnInit() {
  }

}
