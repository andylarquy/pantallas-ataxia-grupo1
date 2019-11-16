import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CUT02Component } from './CUT02/CUT02.component';

export const routes: Routes = [
  { path: '', redirectTo: '/cut02', pathMatch: 'full' },
  { path: 'cut02', component: CUT02Component }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  CUT02Component
]
