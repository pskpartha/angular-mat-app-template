import {
  BrowserModule,
  HammerGestureConfig,
  HammerModule,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './map/map.component';
import { MaterialModule } from './material.module';
import { MainnavComponent } from './mainnav/mainnav.component';
import { ObjectListComponent } from './object-list/object-list.component';
import { AoiListComponent } from './aoi-list/aoi-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './_shared/chart/chart.component';
import { FormsModule } from '@angular/forms';

// custom configuration Hammerjs
@Injectable()
export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    // I will only use the swap gesture so
    // I will deactivate the others to avoid overlaps
    pinch: { enable: false },
    rotate: { enable: false },
  };
}
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MainnavComponent,
    ObjectListComponent,
    AoiListComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    HammerModule,
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig }],
  bootstrap: [AppComponent],
})
export class AppModule {}
