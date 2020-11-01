import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: 'aoi', component: MapComponent },
  { path: '', redirectTo: 'aoi', pathMatch: 'full' },
  { path: 'list', redirectTo: 'aoi', pathMatch: 'full' },
  { path: 'list/:aoiid', component: MapComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
