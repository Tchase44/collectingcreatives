import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Photos } from '../mock-images';
// import { Cloudinary } from '@cloudinary/angular-5.x';
import { Http, Response, RequestOptions, Headers } from '@angular/http';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css'],
  animations: []
})
export class LocationsComponent implements OnInit {
  photos = Photos;
  testy = null;
  url = 'http://localhost:8000/getmephotos';
  // constructor() { }
  constructor(private http: Http) {
    // this.testy = cloudinary.url('bender_wsjk9q');
    this.testy = this.http.get(this.url).subscribe(res => this.testy = res.json());
    // console.log(this.testy)
  }

  ngOnInit() {
  }

}
