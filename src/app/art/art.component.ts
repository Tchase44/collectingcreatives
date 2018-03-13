import { Component, OnInit } from '@angular/core';
import { Photos } from '../mock-images';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ArtComponent implements OnInit {
  photos = Photos;
  constructor() { }

  ngOnInit() {
  }

}
