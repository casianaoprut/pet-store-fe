import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetListComponent } from './pet-list.component';
import { PetItemComponent } from './pet-item/pet-item.component';
import { PetFilterComponent } from './pet-filter/pet-filter.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';

@NgModule({
  declarations: [
    PetListComponent,
    PetItemComponent,
    PetFilterComponent,
    PetDetailsComponent,
    PetEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PetModule { }
