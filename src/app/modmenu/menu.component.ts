import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
// import { CarouselComponent } from './carousel/carousel.component';
// import { SlideComponent } from './carousel/slide/slide.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit{
  public NextPhotoInterval = 5000;
  public noLoopSlides = true;
  public slides: Array<any> = [];

  constructor(){}

  /**
   * Lifecycle hook sets the slides to be displayed
   */
  ngOnInit() {
    this.addNewSlide();
  }
  /**
   * Private function controls collection of slides to be displayed
   */
  private addNewSlide() {
    this.slides.push(
      { image: './assets/spammasubi.jpg', text: 'Spammasubi' },
      { image: './assets/friedrolls.jpg', text: 'Fried Rolls' },
      { image: './assets/prowaffle.jpg', text: 'Waffle Art' },
      { image: './assets/gLatte.jpg', text: 'Green Latte' },
      { image: './assets/gritsEggs.jpg', text: 'Bay shrimp and grits' },
      { image: './assets/waffleChix.jpg', text: 'Chicken and Waffles' },
      { image: './assets/latteArt.jpg', text: 'Latte' }
    );
  }

}
