import { Component, OnInit } from '@angular/core';
import { Photos } from '../mock-images';
@Component({
  selector: 'app-appearances',
  templateUrl: './appearances.component.html',
  styleUrls: ['./appearances.component.css']
})
export class AppearancesComponent implements OnInit {
  photos = Photos;

  constructor() { }

  ngOnInit() {
  }

}
