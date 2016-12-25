import * as leaflet from 'leaflet';
import {Component, AfterViewInit} from '@angular/core';
import {CallsService} from "../calls.service";
import {ServiceCallQueryResult} from "models";
import {CallHeatPipe} from "../call-heat.pipe";
import {ServiceCall} from "models";
import {MarkerManager, SebmGoogleMapMarker} from "angular2-google-maps/core";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  private leafletMap: L.Map;
  private leafletMapId: string = "HeatMap";
  private defaultLatitude: number = 43;
  private defaultLongitude: number = -71;
  private defaultZoom: number = 15;
  private geolocation: Geolocation = navigator.geolocation;
  private calls: Array<any> = [];

  constructor(private callsService: CallsService, private callHeatPipe: CallHeatPipe) { }

  ngAfterViewInit() {
    this.geolocation.getCurrentPosition((position: Position) => {
      this.defaultLatitude = position.coords.latitude;
      this.defaultLongitude = position.coords.longitude;
    });
    //this.initLeaflet();
    this.initGoogleMaps();
  }

  initGoogleMaps(): void {
    this.callsService.getCalls().subscribe((value: ServiceCallQueryResult) => {
      this.calls = value.result.records;
    });
  }

  /**
   *
   */
  initLeaflet(): void {
    this.leafletMap = leaflet.map(this.leafletMapId).setView([this.defaultLatitude, this.defaultLongitude], this.defaultZoom);
    this.geolocation.getCurrentPosition((position: Position) => {
      this.leafletMap.setView([position.coords.latitude, position.coords.longitude], 15);
    });
    leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Leaflet and Mapbox',
      maxZoom: 18,
      accessToken: 'pk.eyJ1Ijoia2VnYnVuYSIsImEiOiJjaXg0ZWdiYTkwMTV3Mm5xeW85eWFkb2NtIn0.s30hAbAaeAiKPN5n-EpX1A'
    }).addTo(this.leafletMap);

    this.callsService.getCalls().subscribe((value: ServiceCallQueryResult) => {
      const heatpoints: Array<L.LatLng> = this.callHeatPipe.transform(value);

    });
  }

}
