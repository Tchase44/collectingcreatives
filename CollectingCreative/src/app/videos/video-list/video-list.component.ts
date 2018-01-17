import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-videolist',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  // @Input() something: someclass
  // example^^^^
  constructor() { }

  ngOnInit() {
  }

}
