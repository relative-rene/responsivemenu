import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MenuRoutingModule } from './home/menu/menu-routing.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';
import { CarouselComponent } from './home/menu/carousel/carousel.component';
import { SmallDishesComponent } from './home/menu/small-dishes/small-dishes.component';
import { BrunchComponent } from './home/menu/brunch/brunch.component';
import { EntreesComponent } from './home/menu/entrees/entrees.component';
import { SidesComponent } from './home/menu/sides/sides.component';
import { SlideComponent } from './home/menu/carousel/slide/slide.component';
import { InfoComponent } from './contact-us/info/info.component';
import { MapComponent } from './map/map.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { MessageService } from './contact-us/message.service';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    CarouselComponent,
    SmallDishesComponent,
    BrunchComponent,
    EntreesComponent,
    SidesComponent,
    SlideComponent,
    InfoComponent,
    MapComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MenuRoutingModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWZSPWwSlUyymW8yy3zrrcemAUC6e2NrY'
    })
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
