import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './ng-material.module';
import { CUT02Component } from './CUT02/CUT02.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { CUA18Component } from './CUA18/CUA18.component';
import { CUA19Component } from './CUA19/CUA19.component';
import { CUA20Component } from './CUA20/CUA20.component';

@NgModule({
   declarations: [
      AppComponent,
      CUT02Component,
      routingComponents,
      CUA18Component,
      CUA19Component,
      CUA20Component
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
