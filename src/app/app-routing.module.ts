import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './animes/list/list.component';

const routes: Routes = [
  {path:'', redirectTo: 'home',  pathMatch: 'full'},
  {path:'home', component: ListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
