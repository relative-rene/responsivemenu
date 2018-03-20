import { Component, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { CarouselComponent } from './carousel/carousel.component';
import { SlideComponent } from './carousel/slide/slide.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public navIsFixed = false;
  // The time to show the next photo
  public NextPhotoInterval = 7000;
  // Looping or not
  public noLoopSlides = true;
  // Photos
  public slides: Array<any> = [];
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
  private removeLastSlide() {
    this.slides.pop();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number = this.document.body.scrollTop;
    if (number > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }

  constructor( @Inject(DOCUMENT) private document: any) {
    this.addNewSlide();
  }

}
