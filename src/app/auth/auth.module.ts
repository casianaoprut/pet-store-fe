import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailSignInComponent } from './email-sign-in/email-sign-in.component';
import { EmailLogInComponent } from './email-log-in/email-log-in.component';
import { GoogleAuthenticationComponent } from './google-authentication/google-authentication.component';



@NgModule({
  declarations: [
    EmailSignInComponent,
    EmailLogInComponent,
    GoogleAuthenticationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
