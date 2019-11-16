import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CUT02Component } from './CUT02/CUT02.component';
import { CUA18Component } from './CUA18/CUA18.component';
import { CUA19Component } from './CUA19/CUA19.component';

export const routes: Routes = [
  { path: '', redirectTo: '/cut02', pathMatch: 'full' },
  { path: 'cut02', component: CUT02Component },
  { path: 'cua18', component: CUA18Component },
  { path: 'cua19', component: CUA19Component }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  CUT02Component,
  CUA18Component,
  CUA19Component
]
