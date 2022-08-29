import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitComponent } from './visit.component';

const routes: Routes = [{ path: '', component: VisitComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitRoutingModule { }
