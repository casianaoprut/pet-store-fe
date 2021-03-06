import {Component, OnDestroy, OnInit, Predicate} from '@angular/core';
import {Pet} from "../shared/model/pet.model";
import {PetService} from "./pet.service";
import {AuthService} from "../auth/auth.service";
import {Subscription} from "rxjs";
import {User} from "../shared/model/user.model";

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit, OnDestroy {

  user: User | null = null;
  editMode = false;
  filteredPetList: Pet[] = [];
  completePetList: Pet[] = [];
  petSubscription = new Subscription();
  userSubscription = new Subscription();
  showAddPet = false;
  petsLoaded = false;

  constructor(
    private petService: PetService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.petSubscription = this.petService.pets.subscribe( pets => {
      this.petsLoaded = true;
      this.completePetList = pets;
      this.filteredPetList = pets;
    });
    this.userSubscription = this.authService.user$.subscribe(user => {
        if (user){
          this.user = user;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.petSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  onHandleEditMode(): void{
    this.editMode = !this.editMode;
  }

  onHandleAddPet(): void{
    this.showAddPet = !this.showAddPet;
  }
  filterPets(filters: Predicate<Pet>[]): void{
    this.filteredPetList = this.completePetList.filter(pet => {
      return filters.every(f => f(pet));
    });
  }
}
