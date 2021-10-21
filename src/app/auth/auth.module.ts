import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

import {AuthComponent} from "./auth.component";
import { EmailSignInComponent } from './email-sign-in/email-sign-in.component';
import { EmailLogInComponent } from './email-log-in/email-log-in.component';
import { GoogleAuthenticationComponent } from './google-authentication/google-authentication.component';

import {PrimengModule} from "../primeng.module";

import {LoginGuard} from "../shared/guards/login.guard";



@NgModule({
  declarations: [
    AuthComponent,
    EmailSignInComponent,
    EmailLogInComponent,
    GoogleAuthenticationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    RouterModule.forChild([
      {path: '', component: AuthComponent, canActivate: [LoginGuard]},
    ])
  ],
  exports: [
    AuthComponent,
    EmailSignInComponent,
    EmailLogInComponent,
  ]
})
export class AuthModule { }
