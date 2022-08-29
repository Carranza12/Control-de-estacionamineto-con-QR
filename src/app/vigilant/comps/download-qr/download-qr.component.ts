import { Component, Input, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';

@Component({
  selector: 'app-download-qr',
  templateUrl: './download-qr.component.html',
  styleUrls: ['./download-qr.component.scss']
})
export class DownloadQRComponent implements OnInit {
  @Input() data:any;
  constructor(public _router:Router) { }
  public code:string=''
  ngOnInit(): void {
    
    this.printQRCliente()
    this.printQRGuardia()
  }

  public async printQRCliente() {
 
    setTimeout(async () => {
      let element:any = document.getElementById('qr-cliente');
      let canvas = await html2canvas(element);
      let contentDataURL = canvas.toDataURL('image/jpeg');
      let pdf = new jsPDF('p', 'mm', 'a4');
      var width = pdf.internal.pageSize.getWidth();
      var height = (canvas.height * width) / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
      pdf.save('qrCliente.pdf');
  
    }, 1000);
  }

  public async printQRGuardia() {
 
    setTimeout(async () => {
      let element: any= document.getElementById('qr-guardia');
      let canvas = await html2canvas(element);
      let contentDataURL = canvas.toDataURL('image/jpeg');
      let pdf = new jsPDF('p', 'mm', 'a4');
      var width = pdf.internal.pageSize.getWidth();
      var height = (canvas.height * width) / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height);
      pdf.save('qrGuardia.pdf');
  
    }, 1000);
  }

}
