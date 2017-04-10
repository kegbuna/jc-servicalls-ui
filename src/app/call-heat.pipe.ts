import { Pipe, PipeTransform } from '@angular/core';
import {ServiceCall} from "models";

@Pipe({
  name: 'callHeat'
})
export class CallHeatPipe implements PipeTransform {

  transform(value: ServiceCall[], args?: any): google.maps.LatLng[] {
    console.log(`Starting CallHeat Pipe: ${performance.now()}`);
    const values: google.maps.LatLng[] = value.map((call: ServiceCall) =>
      new google.maps.LatLng(call.latitude, call.longitude));
    console.log(`Ending CallHeat Pipe: ${performance.now()}`);
    return values;
  }

}
