import * as leaflet from 'leaflet';
import { Pipe, PipeTransform } from '@angular/core';
import { ServiceCallQueryResult, ServiceCall} from "models";

@Pipe({
  name: 'callHeat'
})
export class CallHeatPipe implements PipeTransform {

  private intensity: number = 0.01;
  transform(value: ServiceCallQueryResult, args?: any): Array<L.LatLng> {
    return value.result.records.map((call: ServiceCall) =>
      leaflet.latLng(Number.parseFloat(call.LATITUDE),
        Number.parseFloat(call.LONGITUDE),
        this.intensity));
  }

}
