import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HeaderComponent} from "./main/header/header.component";
import {FooterComponent} from "./main/footer/footer.component";

import { AppRoutingModule } from './app-routing.module';

import { WorkDetailComponent } from './work-detail/work-detail.component';

import {HttpClientModule} from "@angular/common/http";
import { BlogComponent } from './blog/blog.component';
import { FeaturedWorkComponent } from './featured-work/featured-work.component';
import { WorkComponent } from './work/work.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WorkDetailComponent,
    BlogComponent,
    FeaturedWorkComponent,
    WorkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
