import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {
  lat = 37.7713145;
  lng = -122.2779036;
  zoom = 14;

  constructor() { }

  ngOnInit() {
  }

}
