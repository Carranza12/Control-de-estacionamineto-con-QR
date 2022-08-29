import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovimentComponent } from './moviment.component';

const routes: Routes = [{ path: '', component: MovimentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimentRoutingModule { }
