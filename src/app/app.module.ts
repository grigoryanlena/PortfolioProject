import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HeaderComponent} from "./main/header/header.component";
import {FooterComponent} from "./main/footer/footer.component";

import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { WorkDetailComponent } from './work-detail/work-detail.component';
=======
import {HttpClientModule} from "@angular/common/http";
>>>>>>> c8d09a265c291305ce04bbdee841e6a138f618bf

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WorkDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
