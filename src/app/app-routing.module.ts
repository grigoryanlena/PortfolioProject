import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {WorkDetailComponent} from "./work-detail/work-detail.component";
import {BlogComponent} from "./blog/blog.component";


const routes: Routes = [
  {
    path:"", component:HomeComponent
  },
  {
    path:"home", component:HomeComponent
  },

  {
    path:"workDetail", component:WorkDetailComponent
  },
  {
    path:"blog", component:BlogComponent
  }


];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
