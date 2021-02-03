import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

import { EditaComponent } from './animes/edita/edita.component';
import { ListComponent } from './animes/list/list.component';
import { HomeComponent } from './animes/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditaComponent,
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
