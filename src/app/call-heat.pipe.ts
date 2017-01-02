import { Pipe, PipeTransform } from '@angular/core';
import { ServiceCallQueryResult, ServiceCall} from "models";

@Pipe({
  name: 'callHeat'
})
export class CallHeatPipe implements PipeTransform {

  transform(value: ServiceCallQueryResult, args?: any): google.maps.LatLng[] {
    return value.result.records.map((call: ServiceCall) =>
      new google.maps.LatLng(Number.parseFloat(call.LATITUDE),
        Number.parseFloat(call.LONGITUDE)));
  }

}
