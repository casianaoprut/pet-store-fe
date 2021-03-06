import {Component, EventEmitter, OnInit, Output, Predicate} from '@angular/core';
import {Pet} from "../../shared/model/pet.model";
import {FilterService} from "./filter.service";

@Component({
  selector: 'app-pet-filter',
  templateUrl: './pet-filter.component.html',
  styleUrls: ['./pet-filter.component.css']
})
export class PetFilterComponent implements OnInit {
  visibleSidebar1 = false;
  filteredName = '';
  ageBox: boolean[] = [false, false, false, false];
  breedBox: boolean[] = [false, false, false, false];
  genderBox: boolean[] = [false, false];
  constructor(
    private filterService: FilterService
  ) { }
  @Output() filtersChanged = new EventEmitter<Predicate<Pet>[]>();

  ngOnInit(): void {
  }
  getBreed(): void {
  }
  onCheckBoxPress(): void{
    const filters: Predicate<Pet>[] = [];
    filters.push(this.filterService.getFilterForAge(this.ageBox));
    filters.push(this.filterService.getFilterForBreed(this.breedBox));
    filters.push(this.filterService.getFilterForGender(this.genderBox));
    filters.push(this.filterService.getFilterForName(this.filteredName));
    this.filtersChanged.emit(filters);
  }
}
