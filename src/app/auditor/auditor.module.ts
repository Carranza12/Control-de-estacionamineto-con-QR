import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditorRoutingModule } from './auditor-routing.module';
import { AuditorComponent } from './auditor.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    AuditorComponent
  ],
  imports: [
    CommonModule,
    AuditorRoutingModule,
    SharedModule
  ]
})
export class AuditorModule { }
