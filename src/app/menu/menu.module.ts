import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { BrunchComponent} from './brunch/brunch.component';
import { EntreesComponent } from './entrees/entrees.component';
import { SidesComponent } from './sides/sides.component';
import { SmallDishesComponent } from './small-dishes/small-dishes.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SlideComponent } from './carousel/slide/slide.component';
@NgModule({
  imports:[MenuRoutingModule, CommonModule],
  declarations:[
    SmallDishesComponent,
    SidesComponent,
    EntreesComponent,
    BrunchComponent,
    MenuComponent,
    CarouselComponent,
    SlideComponent,
  ],
  providers:[]
})
export class MenuModule { }
