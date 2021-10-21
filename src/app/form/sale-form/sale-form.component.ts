import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

import {Subscription} from "rxjs";

import {FormService} from "../form.service";
import {AuthService} from "../../auth/auth.service";

import {Pet} from "../../shared/model/pet.model";
import {User} from "../../shared/model/user.model";
import {SaleForm} from "../../shared/model/sale-form.model";
import {Status} from "../../shared/model/status";

@Component({
  selector: 'app-sale-form',
  templateUrl: './sale-form.component.html',
  styleUrls: ['./sale-form.component.css']
})
export class SaleFormComponent implements OnInit, OnDestroy {

  user: User | null = null;
  subscription = new Subscription();
  selectedPet: Pet | null = null;

  constructor(
    private router: Router,
    private formService: FormService,
    private authService: AuthService
  ) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.selectedPet = JSON.parse(localStorage.getItem('selectedPet') as string);
    if (this.selectedPet === null){
      this.router.navigate(['/pet-list']);
    }
    this.subscription = this.authService.user$.subscribe(user => {
      if (user !== undefined){
        this.user = user;
      }
    });
  }

  onClose(): void{
    localStorage.removeItem('selectedPet');
    this.router.navigate(['/pet-list']);
  }

  onSubmit(form: NgForm): void {
    if (form.valid && this.selectedPet?.id !== undefined && this.user?.uid !== undefined){
      const saleForm: SaleForm = {
        petId: this.selectedPet?.id,
        firstname: form.value.firstname,
        lastname: form.value.lastname,
        adoptionDescription: form.value.description,
        address: form.value.address,
        userUid: this.user.uid,
        status: Status.Pending,
        userReview: true
      };
      this.formService.submitSaleForm(saleForm);
      form.reset();
      this.router.navigate(['/list/my-forms']);
    }
  }
}
