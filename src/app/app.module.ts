import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { DetalesComponent } from './animes/detales/detales.component';
import { ListComponent } from './animes/list/list.component';
import { HomeComponent } from './animes/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetalesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
