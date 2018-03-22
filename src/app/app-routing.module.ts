import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InfoComponent } from './contact-us/info/info.component';
import { DirectionsComponent} from './directions/directions.component';

const appRoutes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'info', component: InfoComponent},
  { path: 'directions', component: DirectionsComponent},
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
