import * as leaflet from 'leaflet';
import {Component, AfterViewInit, EventEmitter} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CallsService} from "../calls.service";
import {CallHeatPipe} from "../call-heat.pipe";
import {GoogleMapsAPIWrapper, LatLngBounds, LatLng} from "angular2-google-maps/core";
import {ServiceCallQueryResult} from "models";
import {Params} from "@angular/router/src/shared";
import iconMap from './call-type-icon-map';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  private leafletMap: L.Map;
  private leafletMapId: string = "HeatMap";
  private iconMap = iconMap;

  private defaultLatitude: number = 43;
  private defaultLongitude: number = -71;
  private minLatitude: number = 40.7;
  private maxLatitude: number = 40.76;
  private minLongitude: number = -74.1;
  private maxLongitude: number = -74.03;
  private defaultZoom: number = 14;

  private geoLocation: Geolocation = navigator.geolocation;
  private calls: Array<any> = [];

  constructor(private callsService: CallsService,
              private callHeatPipe: CallHeatPipe,
              private route: ActivatedRoute) {
  }

  ngAfterViewInit() {
    this.setDefaultPosition();

    //this.initLeaflet();
  }

  initGoogleMaps(map: google.maps.Map): void {
    this.callsService.getCalls().subscribe((value: ServiceCallQueryResult) => {
      this.calls = value.result.records;
      console.log(map.getBounds().toJSON());
      const heatmap = new google.maps.visualization.HeatmapLayer({
        data: this.callHeatPipe.transform(value),
        dissipating: false,
        map: map
      });

    });
  }

  /**
   *
   */
  initLeaflet(): void {
    this.leafletMap = leaflet.map(this.leafletMapId).setView([this.defaultLatitude, this.defaultLongitude], this.defaultZoom);
    this.geoLocation.getCurrentPosition((position: Position) => {
      this.leafletMap.setView([position.coords.latitude, position.coords.longitude], 15);
    });
    leaflet.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Leaflet and Mapbox',
      maxZoom: 18,
      accessToken: 'pk.eyJ1Ijoia2VnYnVuYSIsImEiOiJjaXg0ZWdiYTkwMTV3Mm5xeW85eWFkb2NtIn0.s30hAbAaeAiKPN5n-EpX1A'
    }).addTo(this.leafletMap);

    this.callsService.getCalls().subscribe((value: ServiceCallQueryResult) => {
    });
  }

  setDefaultPosition(): void {
    //starting to think about routing params
    this.route.params.subscribe((params: Params) => {
      if (params['lat']) {

      }
    });

    this.geoLocation.getCurrentPosition((position: Position) => {
      const lat: number = position.coords.latitude;
      const long: number = position.coords.longitude;
      if (this.minLatitude <= lat && lat <= this.maxLatitude) {
        this.defaultLatitude = position.coords.latitude;
      }

      if (this.minLongitude <= long && long <= this.maxLongitude) {
        this.defaultLongitude = position.coords.longitude;
      }
    });
  }

}
