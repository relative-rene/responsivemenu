import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './modmenu/menu.component';
import { InfoComponent } from './cmpinfo/info.component';
import { ContactUsComponent } from './cmpcontact-us/contact-us.component';

const appRoutes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'info', component: InfoComponent},
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
