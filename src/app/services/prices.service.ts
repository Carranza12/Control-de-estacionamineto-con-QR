import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  constructor() { }

  calculateTotalPayment(hours:number,plan:string){
    if(plan==='12 horas') return hours*70;// 1 hora = $70.00
    if(plan==='24 horas') return hours*50 // 1 hora = $50.00
    return 0
  }
}
