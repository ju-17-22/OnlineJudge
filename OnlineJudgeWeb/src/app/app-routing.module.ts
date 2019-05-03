import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineideComponent} from './onlineide/onlineide.component';
import {HomepageComponent} from './homepage/homepage.component';

const routes: Routes = [
  {path: 'ide',component: OnlineideComponent},
  {path: '', component:  HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
