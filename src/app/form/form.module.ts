import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {PrimengModule} from "../primeng.module";

import {AuthGuard} from "../shared/guards/auth.guard";
import {AdminGuard} from "../shared/guards/admin.guard";

import { SaleFormComponent } from './sale-form/sale-form.component';
import { SaleFormsManagerComponent } from './sale-forms-manager/sale-forms-manager.component';
import { UserFormListComponent } from './user-form-list/user-form-list.component';
import { AcceptedFormListComponent } from './accepted-form-list/accepted-form-list.component';
import { SaleFormItemComponent } from './sale-form-item/sale-form-item.component';
import {PetModule} from "../pet-list/pet.module";

@NgModule({
  declarations: [
    SaleFormComponent,
    SaleFormsManagerComponent,
    UserFormListComponent,
    AcceptedFormListComponent,
    SaleFormItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SaleFormComponent, canActivate: [AuthGuard]},
      {path: 'manager', component: SaleFormsManagerComponent, canActivate: [AdminGuard]},
      {path: 'my-forms', component: UserFormListComponent, canActivate: [AuthGuard]},
      {path: 'accepted-forms', component: AcceptedFormListComponent, canActivate: [AdminGuard]}
    ]),
    FormsModule,
    PrimengModule,
    PetModule
  ]
})
export class FormModule { }
