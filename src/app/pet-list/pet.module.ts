import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { PetListComponent } from './pet-list.component';
import { PetItemComponent } from './pet-item/pet-item.component';
import { PetFilterComponent } from './pet-filter/pet-filter.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';

import {PrimengModule} from "../primeng.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PetListComponent,
    PetItemComponent,
    PetFilterComponent,
    PetDetailsComponent,
    PetEditComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: PetListComponent},
    ]),
  ]
})
export class PetModule { }
