import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import { DownloadQRComponent } from './vigilant/comps/download-qr/download-qr.component';
import { QRCodeModule } from 'angular2-qrcode';
import { VerifyQRComponent } from './vigilant/comps/verify-qr/verify-qr.component';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { EditMovimentComponent } from './vigilant/comps/edit-moviment/edit-moviment.component';
import { NewPaymentComponent } from './vigilant/comps/new-payment/new-payment.component';
import {MatBadgeModule} from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    DownloadQRComponent,
    VerifyQRComponent,
    EditMovimentComponent,
    NewPaymentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatStepperModule,
    QRCodeModule,
    NgQrScannerModule,
    ZXingScannerModule,
    MatBadgeModule,
    MatIconModule
    
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatStepperModule,
    DownloadQRComponent,
    VerifyQRComponent,
    NgQrScannerModule,
    ZXingScannerModule,
    EditMovimentComponent,
    NewPaymentComponent,
    MatBadgeModule,
    MatIconModule
  ]
})
export class SharedModule { }
