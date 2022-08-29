import { Space } from "./space";

export interface Visit {
    id?:string;
    driver_name:string;//
    trailer_model:string;//
    serie_number:string;//
    initDate:number;
    endDate:number;
    Moviments:Moviments[]
    status:boolean;
    type_trailer:string;//
    plan:string;//
    amount_sale:number;
    unique_key:string;
    expiration:boolean;
    space:Space;
}

export interface Moviments{
    date:number;
    type:string;
    actual_status:boolean;
}