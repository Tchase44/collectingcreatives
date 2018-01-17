import { Component, OnInit } from '@angular/core';
import { Photos } from '../mock-images';
// import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  photos = Photos;
  constructor() { }

  ngOnInit() {
  }

}
