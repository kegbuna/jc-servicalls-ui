import { Injectable } from '@angular/core';
import {Http, Response, RequestOptionsArgs} from "@angular/http";
import {Observable} from "rxjs";
import {CallCode, ServiceCall, ServiceCallRequest} from "models";

@Injectable()
export class CallsService {

  constructor(private http: Http) { }

  /**
   * Retrives calls according to the provided parameters
   * @param {ServiceCallRequest} params
   * @returns {Observable<ServiceCall[]>}
   */
  getCalls(params?: ServiceCallRequest): Observable<ServiceCall[]> {
    const options: RequestOptionsArgs = {
      params: params
    };
    return this.http.get('https://kenegbuna.com/jcpd/api/calls', options)
      .map((res: Response) => {
        return res.json() as ServiceCall[];
      });
  }

  /**
   * Retrieves the entire set of call codes
   * @returns {Observable<CallCode[]>}
   */
  getCallCodes(): Observable<CallCode[]> {
    return this.http.get('https://kenegbuna.com/jcpd/api/calls/codes')
      .map((res: Response) => {
      return res.json() as CallCode[];
      })
  }
}
