import {Component, OnInit} from '@angular/core';
@Component({
selector: 'app-directions',
templateUrl: 'directions.component.html'
})

export class DirectionsComponent implements OnInit {
  public googleLink = '';
  constructor(){}
  ngOnInit() {
    this.googleLink = 'https://www.google.com/maps/dir//Neptune" +" s,+630+Central+Ave,+Alameda,+CA+94501/@37.7713103,-122.2803176,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x808f81259556cefd:0xcf256f444dae8579!2m2!1d-122.2781289!2d37.7713061';
    console.log('lilnk ', this.googleLink);
  }
}
