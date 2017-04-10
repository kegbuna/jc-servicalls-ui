declare module "models" {


  export interface ServiceCall {
    event_number: string,
    district: string,
    time_received: string,
    shift: number,
    time_dispatched: string,
    time_arrived: string,
    callcode: string,
    call_code_description: string,
    call_type: string,
    priority: number,
    unit_id: string,
    is_primary: boolean,
    address: string,
    city: string,
    latitude: number,
    longitude: number,
    geo_error: string,
    geo_count: number,
    created: string,
    updated: string,
    callcode_type: string,
    callcode_pd_code: number
  }

  export interface ServiceCallRequest {
    callcode?: string[],
    district?: string[],
    limit?: number,
    time_received_start?: string,
    time_received_end?: string,
    time_dispatched_start?: string,
    time_dispatched_end?: string,
    latitude_start?: number,
    latitude_end?: number,
    longitude_start?: number,
    longitude_end?: number,
    shift?: number[]
  }

  export interface CallCode {
    type: string,
    pd_code: number,
    description: string
  }

}
