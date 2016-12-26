import 'hammerjs';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material'
import {RouterModule, Routes} from '@angular/router';
import {AgmCoreModule, GoogleMapsAPIWrapper} from 'angular2-google-maps/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';

import {CallsService} from './calls.service';
import { MapComponent } from './map/map.component';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CallHeatPipe } from './call-heat.pipe';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'map/:lat/:long', component: MapComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MapComponent,
    HomeComponent,
    SideNavComponent,
    PageNotFoundComponent,
    CallHeatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsQVGUxpsyXXow4g1Lf4pKdl-UPDcp7QM'
    })
  ],
  providers: [CallsService, CallHeatPipe, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule {}
