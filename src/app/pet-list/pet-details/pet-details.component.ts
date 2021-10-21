import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PetService} from "../pet.service";
import {Router} from "@angular/router";
import {Pet} from "../../shared/model/pet.model";

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  @Input()
  pet!: Pet;

  @Input()
  adminView = false;

  birthDate = '';

  @Output() closeDetails = new EventEmitter<void>();

  constructor(
    private router: Router,
    private petService: PetService
  ) { }

  ngOnInit(): void {
    this.birthDate =
      '' +
      this.pet.birthDate.toDate().getDate() + '/' +
      (this.pet.birthDate.toDate().getMonth() + 1) + '/' +
      this.pet.birthDate.toDate().getFullYear();
  }

  onClose(): void {
    this.closeDetails.emit();
  }

  onBuyMe(): void{
    localStorage.setItem('selectedPet', JSON.stringify(this.pet));
    this.router.navigate(['sale-form']);
  }

  getAgeInYears(): number{
    return this.petService.getAgeInYears(this.pet);
  }

  getAgeInMonths(): number{
    return this.petService.getAgeInMonths(this.pet);
  }

}
