import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'vigilante', loadChildren: () => import('./vigilant/vigilant.module').then(m => m.VigilantModule) }, 
  { path: 'auditor', loadChildren: () => import('./auditor/auditor.module').then(m => m.AuditorModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
