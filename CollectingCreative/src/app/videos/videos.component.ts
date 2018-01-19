import { Component, OnInit } from '@angular/core';
import { VIDEOS } from "./mockvideos";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  vids = VIDEOS;
  constructor() { }

  ngOnInit() {
  }

}
