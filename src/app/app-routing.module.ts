import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';

const routes: Routes = [
  {path:"", redirectTo:"/first_page", pathMatch:"full"},
  {path:"first_page", component:FirstPageComponent},
  {path:"second_page", component:SecondPageComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
