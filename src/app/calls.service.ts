import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {ServiceCallQueryResult} from "models";

@Injectable()
export class CallsService {

  constructor(private http: Http) { }

  getCalls(): Observable<ServiceCallQueryResult> {
    return this.http.get('https://kenegbuna.com/jcpd/api/calls')
      .map((res: Response) => {
        return res.json() as ServiceCallQueryResult;
      });
  }
}
