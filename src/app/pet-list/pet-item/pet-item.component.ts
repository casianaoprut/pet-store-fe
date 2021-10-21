import {Component, Input, OnInit} from '@angular/core';
import {Pet} from "../../shared/model/pet.model";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {PetService} from "../pet.service";
import {FormService} from "../../form/form.service";

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.css']
})
export class PetItemComponent implements OnInit {

@Input() editMode = false;
  showDetails = false;
  showEditPetMode = false;
@Input()
  pet!: Pet;
  subscription = new Subscription();

  constructor(
    private router: Router,
    private petService: PetService,
    private formService: FormService
) { }

  ngOnInit(): void{
  }

  onHandleDetails(): void{
    this.showDetails = !this.showDetails;
  }

  onBuyMe(): void{
    localStorage.setItem('selectedPet', JSON.stringify(this.pet));
    this.router.navigate(['sale-form']);
  }

  onDelete(): void{
    this.petService.deletePet(this.pet);
    if (this.pet.id) {
    this.subscription = this.formService.getAllSaleFormsForPet(this.pet.id).subscribe(saleForms => {
      saleForms.map(form => {
        this.formService.rejectSaleForm(form);
      });
    });
  }
}

  onHandleEditPetMode(): void{
    this.showEditPetMode = !this.showEditPetMode;
  }

  onGetAgeInYears(): number{
    return this.petService.getAgeInYears(this.pet);
  }

  onGetAgeInMonths(): number{
    return this.petService.getAgeInMonths(this.pet);
  }

}
