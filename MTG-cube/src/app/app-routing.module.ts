import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadsComponent } from './breads/breads.component';
import { CurveFittingComponent } from './curve-fitting/curve-fitting.component';
import { CommonKeywordsComponent } from './common-keywords/common-keywords.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: 'breads', component: BreadsComponent},
  { path: 'curve-fitting', component: CurveFittingComponent},
  { path: 'common-keywords', component: CommonKeywordsComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }