import {Component, OnDestroy, OnInit} from '@angular/core';
import {PetService} from "../pet-list/pet.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Pet} from "../shared/model/pet.model";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {
  pets: Pet[] = [];
  petSubscription = new Subscription();
  responsiveOptions: any;
  showDetails = false;
  selectedPet: Pet | null = null;
  lat = 45.527235;
  lng = 22.457003;

  constructor(
    private petService: PetService,
    private router: Router
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
    this.petSubscription = this.petService.newestPets.subscribe(resultPets => {
      this.pets = resultPets.filter(pet => !pet.bought).slice(0, 9) as Pet[];
    });
  }

  ngOnInit(): void {
  }

  getAge(pet: Pet): number{
    return this.petService.getAgeInYears(pet);
  }

  ngOnDestroy(): void {
    this.petSubscription.unsubscribe();
  }

  onShowDetails(pet: Pet): void {
    this.selectedPet = pet;
    this.showDetails = true;
  }

  onHideDetails(): void {
    this.selectedPet = null;
    this.showDetails = false;
  }

  onAdoptMe(pet: Pet): void{
    localStorage.setItem('selectedPet', JSON.stringify(pet));
    this.router.navigate(['forms/adoption']);
  }

}
