import {Directive, EventEmitter, Output} from '@angular/core';
import {GoogleMapsAPIWrapper} from "../../../node_modules/angular2-google-maps/core/services/google-maps-api-wrapper";
import {GoogleMap} from "../../../node_modules/angular2-google-maps/core/services/google-maps-types";
import {AfterViewInit} from "../../../node_modules/@angular/core/src/metadata/lifecycle_hooks";

@Directive({
  selector: 'google-map-extension',
  outputs: ['map']
})
export class GoogleMapExtensionDirective implements AfterViewInit {

  @Output() map: EventEmitter<GoogleMap> = new EventEmitter<GoogleMap>();

  constructor(private googleMaps: GoogleMapsAPIWrapper) {
  }

  ngAfterViewInit(): void {
    this.googleMaps.getNativeMap().then((map: GoogleMap) => {
      this.map.emit(map);
    });
  }

}
