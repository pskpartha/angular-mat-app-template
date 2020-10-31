import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import { MaterialModule } from './material.module';
import { MainnavComponent } from './mainnav/mainnav.component';
import { ObjectListComponent } from './object-list/object-list.component';

@NgModule({
  declarations: [AppComponent, MapComponent, MainnavComponent, ObjectListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
