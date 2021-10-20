import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailSignInComponent } from './email-sign-in/email-sign-in.component';
import { EmailLogInComponent } from './email-log-in/email-log-in.component';
import {ButtonModule} from "primeng/button";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {AuthComponent} from "./auth.component";
import {FileUploadModule} from "primeng/fileupload";



@NgModule({
  declarations: [
    AuthComponent,
    EmailSignInComponent,
    EmailLogInComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    FormsModule,
    FileUploadModule
  ],
  exports: [
    AuthComponent,
    EmailSignInComponent,
    EmailLogInComponent,
  ]
})
export class AuthModule { }
