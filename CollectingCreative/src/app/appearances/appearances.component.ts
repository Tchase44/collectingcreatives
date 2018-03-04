import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Photos } from '../mock-images';
@Component({
  selector: 'app-appearances',
  encapsulation: ViewEncapsulation.Native,
  templateUrl: './appearances.component.html',
  styleUrls: ['./appearances.component.css']
})
export class AppearancesComponent implements OnInit {
  photos = Photos;

  constructor() { }

  ngOnInit() {
  }

}
