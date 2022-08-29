import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VigilantRoutingModule } from './vigilant-routing.module';
import { VigilantComponent } from './vigilant.component';
import { SharedModule } from '../shared.module';



@NgModule({
  declarations: [
    VigilantComponent,
  ],
  imports: [
    CommonModule,
    VigilantRoutingModule,
    SharedModule
  ]
})
export class VigilantModule { }
