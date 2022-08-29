import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovimentRoutingModule } from './moviment-routing.module';
import { MovimentComponent } from './moviment.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [
    MovimentComponent
  ],
  imports: [
    CommonModule,
    MovimentRoutingModule,
    SharedModule
  ]
})
export class MovimentModule { }
