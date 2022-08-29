import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VigilantComponent } from './vigilant.component';

const routes: Routes = [{ path: '', component: VigilantComponent }, { path: 'visita', loadChildren: () => import('./pages/visit/visit.module').then(m => m.VisitModule) }, { path: 'movimiento', loadChildren: () => import('./pages/moviment/moviment.module').then(m => m.MovimentModule) }, { path: 'pago', loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VigilantRoutingModule { }
