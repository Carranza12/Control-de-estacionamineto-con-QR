import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisitService } from 'src/app/services/visit.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent  {
  
  public visitSelected:any;
  title = 'qr-reader';
 
  public cameras:MediaDeviceInfo[]=[];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled=false;
  public results:string[]=[];
  public showScanner:boolean=true;
  constructor(private _visits:VisitService, public _router:Router) {
  }

  camerasFoundHandler(cameras: MediaDeviceInfo[]){
    this.cameras=cameras;
    this.selectCamera(this.cameras[0].label);
  }

  async scanSuccessHandler(event:string){
     this.visitSelected= (await this._visits.getVisits()).find(item=>item.unique_key==event && item.status===true)  

    this.results.unshift(event);
    if(!this.visitSelected){
       alert('NO ENCONTRADO y/o NO SE ENCUENTRA ADENTRO, INTENTA DE NUEVO')
       return;
    }
    if(this.visitSelected){
      this.showScanner=false;
      return;
    }
   
  }

  selectCamera(cameraLabel: string){    
    this.cameras.forEach(camera=>{
      if(camera.label.includes(cameraLabel)){
        this.myDevice=camera;
        console.log(camera.label);
        this.scannerEnabled=true;
      }
    })    
  }

  public pay(){
    this._router.navigateByUrl('/vigilante')
  }

}
