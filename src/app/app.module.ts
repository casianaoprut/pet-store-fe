import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

import { AppRoutingModule } from './app-routing.module';
import {PetModule} from "./pet-list/pet.module";
import {PrimengModule} from "./primeng.module";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';

import {environment} from "../environments/environment";

import { DropdownDirective } from './shared/dropdown.directive';

import {AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    PetModule,
    PrimengModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCqrIMrOL182Wcr_d8iACvuFeIT2pK4_U0'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
