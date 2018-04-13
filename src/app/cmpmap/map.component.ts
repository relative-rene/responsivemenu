import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent {
  lat = 37.7713145;
  lng = -122.2779036;
  zoom = 14;

  constructor() { }

}
