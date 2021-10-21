import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import {PrimengModule} from "../primeng.module";

import {AuthGuard} from "../shared/guards/auth.guard";

import { SaleFormComponent } from './sale-form/sale-form.component';

@NgModule({
  declarations: [
    SaleFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SaleFormComponent, canActivate: [AuthGuard]}
    ]),
    PrimengModule
  ]
})
export class FormModule { }
