import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './menu.component';
import { BrunchComponent} from './brunch/brunch.component';
import { EntreesComponent } from './entrees/entrees.component';
import { SidesComponent } from './sides/sides.component';
import { SmallDishesComponent } from './small-dishes/small-dishes.component';


const menuRoutes: Routes = [
  { path: '', component: MenuComponent, children: [
  { path: 'brunch', component: BrunchComponent },
  { path: 'entrees', component: EntreesComponent },
  { path: 'sides', component: SidesComponent },
  { path: 'small-dishes', component: SmallDishesComponent },
    ] },
];

@NgModule({
  imports: [
    RouterModule.forRoot(menuRoutes)
  ],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
