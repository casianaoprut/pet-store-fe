import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormService} from "../form.service";
import {Subscription} from "rxjs";
import {SaleForm} from "../../shared/model/sale-form.model";

@Component({
  selector: 'app-sale-forms-manager',
  templateUrl: './sale-forms-manager.component.html',
  styleUrls: ['./sale-forms-manager.component.css']
})
export class SaleFormsManagerComponent implements OnInit, OnDestroy {

  saleFormsSubscription = new Subscription();
  saleForms: SaleForm[] = [];
  constructor(
    private formService: FormService
  ) { }

  ngOnInit(): void {
    this.saleFormsSubscription = this.formService.saleForms.subscribe(saleForms => {
      this.saleForms = saleForms;
    });
  }

  ngOnDestroy(): void {
    this.saleFormsSubscription.unsubscribe();
  }
}
