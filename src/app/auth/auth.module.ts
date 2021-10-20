import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailSignInComponent } from './email-sign-in/email-sign-in.component';
import { EmailLogInComponent } from './email-log-in/email-log-in.component';
import { GoogleAuthenticationComponent } from './google-authentication/google-authentication.component';
import {ButtonModule} from "primeng/button";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    EmailSignInComponent,
    EmailLogInComponent,
    GoogleAuthenticationComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    FormsModule
  ]
})
export class AuthModule { }