import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {WorkDetailComponent} from "./work-detail/work-detail.component";
import {BlogComponent} from "./blog/blog.component";
import {WorkComponent} from "./work/work.component";


const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent},
  {path:"workDetail", component:WorkDetailComponent},
  {path:"blog", component:BlogComponent},
  {path:"work", component:WorkComponent},
  {path:"work/workDetails/:id", component:WorkDetailComponent},
  {path:"home/workDetails/:id", component:WorkDetailComponent},
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
