import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadsComponent } from './breads/breads.component';
import { CurveFittingComponent } from './curve-fitting/curve-fitting.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'breads', component: BreadsComponent},
  { path: 'curve-fitting', component: CurveFittingComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }