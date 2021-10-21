import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {PetService} from "../../pet-list/pet.service";
import {FormService} from "../form.service";
import {Pet} from "../../shared/model/pet.model";
import {SaleForm} from "../../shared/model/sale-form.model";
import {Status} from "../../shared/model/status";

@Component({
  selector: 'app-user-form-list',
  templateUrl: './user-form-list.component.html',
  styleUrls: ['./user-form-list.component.css']
})
export class UserFormListComponent implements OnInit, OnDestroy {

  subscription = new Subscription();
  boughtPet: Pet = {} as Pet;
  @Input() saleForm!: SaleForm;
  formLoaded = false;

  constructor(
    private petService: PetService,
    private formService: FormService
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.petService.getPet(this.saleForm.petId).subscribe( pet => {
      this.formLoaded = true;
      this.boughtPet = pet;
    });
  }

  userIsDone(): boolean{
    return this.saleForm.status == Status.Accepted || this.saleForm.status == Status.Rejected;
  }

  onClear(): void{
    if (this.userIsDone()){
      this.formService.clearUserSaleForm(this.saleForm);
    }
  }

  checkStatus(status: string):boolean {
    if(status === 'pending')
      return this.saleForm.status == Status.Pending;
    if(status === 'accepted')
      return this.saleForm.status == Status.Accepted;
    if(status === 'rejected')
      return this.saleForm.status == Status.Rejected;
    return false;
  }


  getAgeInYears(): number{
    if (this.boughtPet.birthDate !== undefined) {
      return this.petService.getAgeInYears(this.boughtPet);
    }
    return -1;
  }

  getAgeInMonths(): number{
    if (this.boughtPet.birthDate !== undefined) {
      return this.petService.getAgeInMonths(this.boughtPet);
    }
    return -1;
  }
}
