import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './ng-material.module';
import { CUT02Component } from './CUT02/CUT02.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      CUT02Component,
      routingComponents,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AngularMaterialModule,
      AppRoutingModule,
      FormsModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
