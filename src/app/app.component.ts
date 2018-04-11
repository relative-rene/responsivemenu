import { Component, OnInit, ViewEncapsulation, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public navIsFixed: boolean;
  public googleLinkPath: string;

  constructor() { }


  ngOnInit() {
    this.googleLinkPath = "https://www.google.com/maps/dir//Neptune's,+630+Central+Ave,+Alameda,+CA+94501/@37.7713103,-122.2803176,17z/data=!4m15!1m6!3m5!1s0x808f81259556cefd:0xcf256f444dae8579!2sNeptune's!8m2!3d37.7713061!4d-122.2781289!4m7!1m0!1m5!1m1!1s0x808f81259556cefd:0xcf256f444dae8579!2m2!1d-122.2781289!2d37.7713061";
    this.navIsFixed = false;
  }

  googleLink() {
    window.open(this.googleLinkPath, '_blank');
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const number = $event.target.documentElement.scrollTop;
    if (number > 90) {
      this.navIsFixed = true;
    }
    else {
      this.navIsFixed = false;
    }
  }

  scrollDown(e) {
    console.log('e ', e);
    e.scrollIntoView({behavior:'smooth', block:'start'});

  }
}


