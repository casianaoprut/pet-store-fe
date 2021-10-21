import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormService} from "../form.service";
import {Subscription} from "rxjs";
import {SaleForm} from "../../shared/model/sale-form.model";

@Component({
  selector: 'app-accepted-form-list',
  templateUrl: './accepted-form-list.component.html',
  styleUrls: ['./accepted-form-list.component.css']
})
export class AcceptedFormListComponent implements OnInit, OnDestroy {

  acceptedSaleListSubscription = new Subscription();
  acceptedSaleList: SaleForm[] = [];
  constructor(
    private formService: FormService
) { }

  ngOnInit(): void {
    this.acceptedSaleListSubscription = this.formService.acceptedSaleList.subscribe(saleList => {
      this.acceptedSaleList = saleList;
    });
  }

  ngOnDestroy(): void {
    this.acceptedSaleListSubscription.unsubscribe();
  }
}
