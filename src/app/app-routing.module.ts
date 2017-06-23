import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { MenuComponent } from './home/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { InfoComponent } from './contact-us/info/info.component';

const appRoutes: Routes = [
  { path: 'home', redirectTo: 'footer', pathMatch: 'full' },
  { path: 'menu', component: MenuComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
