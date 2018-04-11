import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from './menu/menu.module';

import { AppComponent } from './app.component';

import { InfoComponent } from './info/info.component';
import { MapComponent } from './map/map.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MessageService } from './_services/message.service';
import { DrinksService } from './_services/drinks.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MenuModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWZSPWwSlUyymW8yy3zrrcemAUC6e2NrY'
    })
  ],
  declarations: [
    AppComponent,
    InfoComponent,
    ContactUsComponent,
    MapComponent
  ],
  providers: [MessageService, DrinksService],
  bootstrap: [AppComponent]
})

export class AppModule { }
