import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Photos } from '../mock-images';
import { Cloudinary } from '@cloudinary/angular-5.x';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  animations: []
})
export class LocationsComponent implements OnInit {
  photos = Photos;

  // constructor() { }
  constructor(private cloudinary: Cloudinary) {
    console.log(cloudinary.cloudinaryInstance.image('sample'));
  }

  ngOnInit() {
  }

}
