import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitRoutingModule } from './visit-routing.module';
import { VisitComponent } from './visit.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [
    VisitComponent
  ],
  imports: [
    CommonModule,
    VisitRoutingModule,
    SharedModule
  ]
})
export class VisitModule { }
