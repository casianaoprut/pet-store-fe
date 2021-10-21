import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Pet} from "../../shared/model/pet.model";
import {Subscription} from "rxjs";
import {PetService} from "../../pet-list/pet.service";
import {FormService} from "../form.service";
import {SaleForm} from "../../shared/model/sale-form.model";

@Component({
  selector: 'app-sale-form-item',
  templateUrl: './sale-form-item.component.html',
  styleUrls: ['./sale-form-item.component.css']
})
export class SaleFormItemComponent implements OnInit, OnDestroy {

  showDetails = false;
  pet: Pet | null = null;
  subscription = new Subscription();
  petFormsSubscription = new Subscription();
  @Input() saleForm!: SaleForm;
  @Input() adminView = true;

  constructor(
    private petService: PetService,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.subscription = this.petService.getPet(this.saleForm.petId).subscribe( pet => {
      this.pet = {
        ...pet,
        id: this.saleForm.petId
      };
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.petFormsSubscription.unsubscribe();
  }

  onHandleDetails(): void{
    this.showDetails = !this.showDetails;
  }

  onAccept(): void {
    if (this.pet && this.pet.id) {
      this.petFormsSubscription = this.formService.getAllSaleFormsForPet(this.pet.id).subscribe(saleForms => {
        saleForms.map(form => {
          this.formService.rejectSaleForm(form);
        });
        this.formService.acceptSaleForm(this.saleForm).then(() => {
          if (this.pet){
            this.petService.buyPet(this.pet);
          }
        });
      });
    }
  }

  onReject(): void{
    this.formService.rejectSaleForm(this.saleForm);
  }

}
