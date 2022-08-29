import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {QrScannerComponent} from 'angular2-qrscanner';
import { VisitService } from 'src/app/services/visit.service';
@Component({
  selector: 'app-verify-qr',
  templateUrl: './verify-qr.component.html',
  styleUrls: ['./verify-qr.component.scss']
})
export class VerifyQRComponent {
 public visitSelected:any;
  title = 'qr-reader';
 
  public cameras:MediaDeviceInfo[]=[];
  public myDevice!: MediaDeviceInfo;
  public scannerEnabled=false;
  public results:string[]=[];
  public showScanner:boolean=true;
  constructor(private _visits:VisitService) {
  }

  camerasFoundHandler(cameras: MediaDeviceInfo[]){
    this.cameras=cameras;
    this.selectCamera(this.cameras[0].label);
  }

  async scanSuccessHandler(event:string){
     this.visitSelected= (await this._visits.getVisits()).find(item=>item.unique_key==event)    
    this.results.unshift(event);
    if(!this.visitSelected) {
      alert('NO ENCONTRADO, INTENTA DE NUEVO')
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
}
