import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title= 'MAP';
  lat = 37.7713145;
  lng = -122.2779036;
  zoom = 14;

  constructor() { }

  ngOnInit() {
  }

}
