declare module "models" {


  export interface ServiceCall {
    "Call Type": string;
    CITY: string;
    CallCodeDescription: string;
    _full_text: string;
    District: string;
    CALLCODE: string;
    TimeArrived: Date;
    SHIFT: string;
    "UNIT ID": string;
    Address: string;
    "Is Primary": string;
    LONGITUDE: string;
    Priority: string;
    "Time Received": Date;
    "GEO COUNT": string;
    "Time Dispatched": Date;
    LATITUDE: string;
    "GEO ERROR": string;
    _id: number;
    "Event Number": string;
  }

  export interface Field {
    type: string;
    id: string;
  }

  export interface Result {
    records: ServiceCall[];
    fields: Field[];
    sql: string;
  }

  export interface ServiceCallQueryResult {
    help: string;
    success: boolean;
    result: Result;
  }
}
