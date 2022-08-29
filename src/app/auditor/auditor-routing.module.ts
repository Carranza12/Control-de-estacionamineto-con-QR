import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditorComponent } from './auditor.component';

const routes: Routes = [{ path: '', component: AuditorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditorRoutingModule { }
